---
title: Types of SQL Injection (SQLi)
subtitle: dissection of In-band, Inferential, and Out-of-band attacks
description: A deep dive into SQL Injection categories, including detailed examples for MySQL, MSSQL, and Oracle, plus a handy payload cheat sheet.
published: true
datePublished: 1714205000000
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - sqli
  - web
  - security
  - pentesting
  - hacker
  - database
thumbnailPhoto: /default-thumb.jpg
bannerPhoto: /default
canonicalUrl:
---

## **Types of SQL Injection (SQLi)**

[SQL Injection (SQLi)](https://www.acunetix.com/websitesecurity/sql-injection/) is probably one of the most classic ways to get into a system. It's used to bypass authentication, or even better: access, modify, and delete everything inside a database. In some cases, we can even use SQLi to execute commands on the OS, which is where things get really juicy if we want to move laterally in a network.

Basically, we can split SQLi into three major categories: **In-band**, **Inferential**, and **Out-of-band**.

| Category | Description |
| --- | --- |
| **In-band (Classic)** | Results come back in the same channel we use for the attack. Easy mode. |
| **Inferential (Blind)** | No direct data leakage. We have to "infer" structure by watching behavior. Painful but works. |
| **Out-of-band** | Relies on the DB making external DNS or HTTP requests to our server. Rare but sick. |

---

## **1. In-band SQLi (Classic SQLi)**

In-band is the "OG" SQL injection. It's the most common and definitely the easiest to exploit because we use the same communication channel to launch the attack and get the goods. 

The two main types you'll see are **Error-based** and **Union-based**.

### **Error-based SQLi**
This technique is all about those sweet error messages. We rely on the DB server throwing a tantrum and spitting out info about its structure. Sometimes, error-based SQLi is enough to dump the whole DB by just reading the error strings. 
> Errors are great for devs, but they should **never** be enabled on a live site. Log them to a restricted file instead, otherwise you're just handing us the keys. ;-)

### **Union-based SQLi**
[Union-based SQLi](https://medium.com/@nyomanpradipta120/sql-injection-union-attack-9c10de1a5635) makes use of the `UNION` operator to join results from multiple `SELECT` statements into one HTTP response. 

> If you see query results on the page, always look for Union-based SQLi first.

```sql
SELECT a, b FROM table1 UNION SELECT c, d FROM table2
```

For this to work, we need to meet two requirements (dont forget these, or it will fail!):
- Both queries must return the **same number of columns**.
- The **data types** must be compatible.

So our first job is usually figuring out how many columns the original query has.

---

## **2. Blind SQLi (Inferential SQLi)**

[Inferential SQLi](https://www.acunetix.com/websitesecurity/blind-sql-injection/) (or Blind SQLi) is a bit more of a grind, but just as dangerous. Unlike In-band, no data is actually transferred back to us. We won't see results in the response, which is why its called "blind." Instead, we reconstruct the DB by sending payloads and watching how the app reacts.

### **Boolean-based (Content-based) Blind SQLi**
Here we send queries that force the app to return a different result depending on whether the query is **TRUE** or **FALSE**. 

If the payload returns true, the page content might stay the same. If its false, it might change slightly (or throw a 404). This is how we extract data character by character. Its slow as hell, but it gets the job done.

[Check this guide if you're a beginner to Boolean-based SQLi](https://www.hackingarticles.in/beginner-guide-sql-injection-boolean-based-part-2/)

```
http://localhost:81/sqli/Less-8/?id=1' AND 1=1 --+
-- Logic: SELECT * from table_name WHERE id=1' AND 1=1
```

### **Time-based Blind SQLi**
[Time-based SQLi](https://www.sqlinjection.net/time-based/) is even "blind-er." We force the database to wait (sleep) for a specific time. If the response is delayed, we know our query was true. 

#### DBMS Wait Functions
| **DBMS** | **Function** | **Notes** |
| --- | --- | --- |
| **MySQL** | `SLEEP(n)` | Available since v5. Simple enough. |
| **MySQL** | `BENCHMARK(c, e)` | Executes expression multiple times. Use to create a delay. |
| **SQL Server** | `WAITFOR DELAY 'h:m:s'` | Suspends execution. |
| **Oracle** | `DBMS_LOCK.SLEEP(n)` | Needs PL/SQL block. More of a pain. |

#### Let's Dissect the DBMS Specifics

**MySQL:**
Injecting time delays here is pretty straightforward since `SLEEP()` is just a function.
```sql
-- Check if a parameter is vulnerable (slow response = win)
SELECT * FROM products WHERE id=1-SLEEP(15)

-- Using Benchmark (last resort)
SELECT * FROM products WHERE id=1-BENCHMARK(100000000, rand())
```

**SQL Server:**
MSSQL is a bit different. Usually, you'll need to use stacked queries.
```sql
-- Simple sleep
SELECT * FROM products WHERE id=1; WAIT FOR DELAY '00:00:15'

-- Let's see if we are 'sa' (system admin). Juicier!
SELECT * FROM products WHERE id=1; IF SYSTEM_USER='sa' WAIT FOR DELAY '00:00:15'
```

**Oracle:**
Oracle is the "hard mode." It doesn't support stacked queries in dynamic SQL. Your best bet is an anonymous PL/SQL block or a "heavy query."
```sql
-- Executing sleep in a PL/SQL block
BEGIN DBMS_LOCK.SLEEP(15); END;
```

---

## **3. Out-of-band SQLi**

[Out-of-band SQLi](https://www.acunetix.com/blog/articles/blind-out-of-band-sql-injection-vulnerability-testing-added-acumonitor/) isn't that common because it needs specific features enabled on the server. We use this when we can't use the same channel to get results, and the response time is too unstable for Time-based attacks.

Basically, we tell the DB to send the data to a server we control via DNS or HTTP. 
- **Microsoft SQL Server**: `xp_dirtree` can make DNS requests.
- **Oracle**: `UTL_HTTP` can send HTTP requests from PL/SQL.

---

## **SQLi Cheat Sheet & Common Payloads**

Okay, here is the juicy part. A list of common payloads for your next pentest:

| Payload / Command | Description |
| --- | --- |
| `—` or `#` | Simple comment. Truncates the rest of the original query. Nice and simple. |
| `1’ AND ‘a’=’a` | basic truthy statement. Try it without quotes too: `1 AND 'a'='a'`. |
| `1’ AND ‘a’=’b` | basic falsy statement. Use to contrast the truthy response. |
| `‘ OR 1=1; —` | Use this in login forms to bypass auth. Classic. |
| `') OR 1=1;--` | Bypasses parentheses logic in the query. |
| `a’);—` | Good for checking SQL errors in input fields. |
| `SELECT * FROM user_tables` | Oracle: lists all tables you own. |
| `@@version` | Leaks the DBMS version. |
| `)` | Test for parentheses enclosure. |

---

## **Conclusion**

SQL Injection is a monster, and its not going away anytime soon. Whether it's a "loud" Errorbased attack or a "silent" Out-of-band request, the risk is always massive. 

As always: **use parameterized queries** and dont trust user input. Ever.


