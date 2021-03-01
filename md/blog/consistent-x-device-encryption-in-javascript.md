---
title: Getting consistent Encryption in Node / PHP / Browser and openSSL
description: Cryptography is hard, and because it's already hard enough, here is a nice guide on the AES Cipher in different environments.
published: true
datePublished: 1603967203286
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - encryption
  - decryption
  - openssl
  - nodejs
  - php
thumbnailPhoto: /crypto_thumb.jpg
bannerPhoto: /crypto
canonicalUrl:
---

I recently was tasked to find a solution for encrypting data in different places and to being able to decrypt them all in a browser during runtime.

Surprisingly, it was much more challenging than expected since there was so little documentation around this online. What was available were a few code-only examples, so I was forced to do R & D and try all implementations and compare the in- & outputs.

Given the lack of a decent out-of-the-box solution, I worry that many developers are settling for easy to use, insecure solutions that limit your project’s security and flexibility. Security should be easy to use and accessible.

> Clone the repo here to get started with this setup: <a href="https://gist.github.com/Lawlez/88e04e3541cc0608c953a118b86bfc1a">https://gist.github.com/Lawlez/88e04e3541cc0608c953a118b86bfc1a</a>

Okay, so lets assume we use following input data to test each implementation:

- **`key`** = '5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9' ` //must be 256 bits`
- **`iv`** = '1d6ef201e0e7a9019ddf8414034325e2' ` //must be 128 bits`
- **`inputData`** = `{"TestData":"w17h Spé^cIäl chàær§¢tèrs", "OK":"://seems/fine?x=lol"}`

Let's quickly run through and test each implementation:

## Using Node JS Crypto module

Node Provides a nice `crypto` implementation. It's documentation is rather sparse, but this is what most resources suggest by using:

- `crypto.randomBytes()`
- `crypto.createCipheriv()`
- `crypto.createDecipheriv()`

```javascript
const crypto = require('crypto')

/**********************************************************************
*
*        DECRYPTION MODULE FOR USE INSIDE NODE.JS                     *
*
***********************************************************************/

const encryption = (data = 'TestString {} Héllöüä') => {

   const secretPhrase = crypto.randomBytes(16).toString('hex')
   const salt = crypto.randomBytes(128 / 8).toString('hex')
   //here we generate the key and give it back as a string, we use 100k iterations
   //as suggested in best practices
   //We can use the key multiple times to encrypt multiple things(-30GB), we just cant use
   //the same initialization vector twice
   //the key for aes-256 needs to be 256 bits which equals 32 bytes or 32 characters
   const configKey = crypto.pbkdf2Sync(secretPhrase, salt, 100000, 32, 'sha256').toString('hex').substr(0, 32)
   //create unique IV for each encryption, the key can be reused. IV needs to always be 16 bytes
   const IV = crypto.randomBytes(16)

   //create ciphers for each encryption using the shared key and the unuique IV
   const projectConfigCipher = crypto.createCipheriv('aes-256-cbc', configKey, IV.toString('hex').substr(0,16)

   //encripting the storage location using the prepared cipher
   const encrypted = Buffer.concat([configStorageCipher.update(
       'STORAGE', 'utf8'
   ), configStorageCipher.final()]).toString('hex')

   return encrypted

}
```

> this is **NOT** the final implementation; check below to see it.

### Testing the implementation

We notice that we need to trim the key to 32bytes and the IV to 16 bytes. This is likely because of the conversion from hex to string after the creation of the key.

- **`key`** = '5035ae3567f2e69320b083d59a7364cf' ` //is now 32 bytes string`
- **`iv`** = '1d6ef201e0e7a901' ` //is now 16 bytes string`

This will probably lead to an issue later on since other implementations actually want the longer strings. Maybe we can find a workaround by base64 encoding instead of stringifying the key and iv.

a quick test reveals, yes, we actually can:

```
const IV = crypto.randomBytes(16)

console.log(IV)
// <Buffer c1 1e 98 84 54 eb 85 f6 b3 d0 51 87 d2 62 80 a7>

console.log(IV.toString('base64'))
// wR6YhFTrhfaz0FGH0mKApw==

console.log(Buffer.from(IV.toString('base64'), 'base64'))
//<Buffer c1 1e 98 84 54 eb 85 f6 b3 d0 51 87 d2 62 80 a7>
```

now we could also just create a buffer again from the string to make it 16/32 bytes (ready for usage):

```
Buffer.from('5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9', 'hex')
//<Buffer 50 35 ae 35 67 f2 e6 93 20 b0 83 d5 9a 73 64 cf 8d 4b 14 e7 7d 7b 79 80 51 24 1c e5 46 b3 27 d9>

Buffer.from('1d6ef201e0e7a9019ddf8414034325e2','hex'))
//<Buffer 1d 6e f2 01 e0 e7 a9 01 9d df 84 14 03 43 25 e2>
```

This seems to be a nice solution when you **receive** the key and iv as an input; if we generate it ourselves, however, it better to just avoid the conversion to string after generation that many people use in examples:

```
// type Buffer, 16 bytes
const IV = crypto.randomBytes(16)

// type Buffer, 32 bytes
const configKey = crypto.pbkdf2Sync(secretPhrase, salt, 100000, 32, 'sha256')

```

This key and IV pair can be consumed directly by our ciphers, but we would need to convert it to a hex string first to save and forward them.

### So what is the output of this function?

The output we received is of type buffer, but when we convert it to a string using `toString('hex')` we can read the data:

- **`OUTPUT`** = '<Buffer f2 fb 62 b1 7e e9 da 0c 8c bd 56 f2 45 a9 87 60 b4 e2 a6 d0 c5 de f1 50 bc 6d 86 00 f8 5d b4 79>' ` //is 32 bytes`
- **`OUTPUT_Stringified`** = 'f2fb62b17ee9da0c8cbd56f245a98760b4e2a6d0c5def150bc6d8600f85db479' ` //is now 64 bytes string`
- **`OUTPUT_Base64`** = '8vtisX7p2gyMvVbyRamHYLTiptDF3vFQvG2GAPhdtHk=' ` //is now 44 bytes string`

so using the codes below, we can switch between these three outputs as we like

```javascript
//output Buffer
encrypted = Buffer.concat([encrypted, Cipher.final()]);

//output String
encrypted = Buffer.concat([encrypted, Cipher.final()]).toString("hex");

//output Base64
encrypted = Buffer.concat([encrypted, Cipher.final()]).toString("base64");

//revert conversion to base64
Buffer.from(encrypted.toString("base64"), "base64");
```

From what we have learned here, I guess the best option is to use the base64 output method since we can easily convert it to a buffer

## Using browserify-aes's node crypto-like implementation inside the Browser

Inside the browser, we cannot use Nodes.js built-in modules. Using `browserify-aes` we can use a node-like crypto implementation, which uses the same syntax as the node implementation. In my use case, I only need to decipher in the browser, this means I don’t have to worry about a truly random key generation or ciphering.

```js
import crypto from "browserify-aes";

/**********************************************************************
 *
 *        DECRYPTION MODULE FOR USE IN BROWSER DURING RUNTIME          *
 *
 ***********************************************************************/
const decrypt = (Base64Hash) => {
  //we use the base64 hash generated by openssl cli as an input
  const Base64Hash =
    "Z8QIo6YuR7DZqmHHV4WqqorUnUZ2n88gMFADMCt2FKUn/ZeYUj1DEBNS2NthignUNR0hw+OOFU7qACKPZbxx8k0Pe0McXNDrOnUtl3dIwdg=";
  const Key =
    "5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9";
  const IV = "1d6ef201e0e7a9019ddf8414034325e2";
  const hexToBin = (hex) => {
    //converts hex strings to binary arr
    for (var bytes = [], c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
  };
  //ein neuer cipher wird vorbereitet, mittels aes256, unserem 256 bit KEY und dem config IV
  const decipher = crypto.createDecipheriv(
    "aes256",
    hexToBin(Key),
    hexToBin(IV)
  );

  //der hash wird nun decrypted mittels dem zuvor erstellten cipher
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(Base64Hash, "base64")),
    decipher.final(),
  ]).toString("utf8");

  return JSON.parse(decrypted);
};
```

- **`OUTPUT`** = {TestData: "w17h Spé^cIäl chàær§¢tèrs", OK: "://seems/fine?x=lol"} ` //yes, thats our original input! :D`

## ENCRYPTION & DECRYPTION MODULE FOR PHP7+ USING OPENSSL

In PHP 7 we make use of the `openssl_encrypt` implementation to encrypt an utf8 string and finally encode it with `base64_encode`.
For decryption we also make use of the official openssl implementation `openssl_decrypt`, before decrypting we need to decode using `base64_decode`.

```php
/**********************************************************************
*
*        ENCRYPTION & DECRYPTION MODULE FOR PHP7+ USING OPENSSL       *
*
***********************************************************************/

class AESEncryption {

   //key length should be 256 bits for aes 256 this means we use a string with 32 bytes
   public static $key = "5f08e0ec585393a8e2ca8f0a1a0ae752";

    //iv length should be always be 128 bit / 16 bytes
   public static $iv = "05d387e7f773035a";

    // The AES uses a block size of sixteen octets (128 bits)
   public static $Method = 'AES-256-CBC';

   /**
     * use the AES to encrypt plaintext data and return a base 64 string
    *
    * $key
    */
   public static function encrypt($cleartext,$key = ''){

       $key = empty($key) ? self::$key : $key;

       $encrypted = openssl_encrypt($cleartext, self::$Method, $key, OPENSSL_RAW_DATA, self::$iv);

       return base64_encode($encrypted);

   }

   /**
     * use the AES to decrypt a base 64 string into plaintext
    *
    * $key
    */
   public static function decrypt($encrypted,$key = ''){

       $key = empty($key) ? self::$key : $key;

       $encrypted = base64_decode($encrypted);

       $decrypted = openssl_decrypt($encrypted, self::$Method, $key, OPENSSL_RAW_DATA, self::$iv);

       return trim($decrypted);
   }
}
```

> while desperately searching for a solution I looked into doing the encryption in PHP instead of openssl, since I scrapped this idea I cannot explain any further. I still keep this PHP 7 example here because its hard to find examples online that don’t use mcrypt.

## Using OpenSSL for use in CLI

Inside of a Command Line Interface, we use `openssl` do en- or decrypt data.

For node/browserify to be able to decrypt it we need to add the `-nosalt` option, which disables salting the data.

```bash
#########################################################################################
#                                                                                       #
#               ENCRYPTION FOR CLI IN / MACOS / LINUX / WINDOWS                         #
#                                                                                       #
#########################################################################################

#encrypt with key & IV but no salt
cat config.json | openssl aes-256-cbc -iv $(cat iv)  -K $(cat key) -A -nosalt -base64

#decrypt with key IV and base64
echo "encryptedString" | openssl aes-256-cbc -d -iv $(cat iv)  -K $(cat key) -base64 -A
```

### testing the implementation

I created a json file called `test.json` containing the inputData. so when we run the following command ...

```bash
cat test.json | openssl aes-256-cbc -iv "1d6ef201e0e7a9019ddf8414034325e2"  -K "5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9" -A -nosalt
```

We get no warnings and an output like this:

- **`OUTPUT`** = g??.G?٪a?W????ԝFv?? 0P0+v?'???R=CR??a? ?5!??N?"?e?q?M{C\??:u-?wH?? ` //weird looking binary data`

as you can see this is not very usefull so we apply the base64 encoding after encryption

```bash
cat test.json | openssl aes-256-cbc -iv "1d6ef201e0e7a9019ddf8414034325e2"  -K "5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9" -A -nosalt -base64
```

- **`OUTPUT_base64`** = Z8QIo6YuR7DZqmHHV4WqqorUnUZ2n88gMFADMCt2FKUn/ZeYUj1DEBNS2NthignUNR0hw+OOFU7qACKPZbxx8k0Pe0McXNDrOnUtl3dIwdg= ` //now this looks nice`

now we can also decrypt the just created data like so

```bash
echo $encryptedData | openssl aes-256-cbc -d -iv "1d6ef201e0e7a9019ddf8414034325e2" -K "5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9" -A -base64
```

This yields us this output

- **`OUTPUT`** = {"TestData":"w17h Spé^cIäl chàær§¢tèrs", "OK":"://seems/fine?x=lol"} ` //yes, thats our original input! :)`

# final solution

## Using NodeJS during initial build

While building our app this code is responsible for:

- creating a unique `key` on every build
- creating a unique `iv` for every object to be encrypted
- outputting an encrypted base64 encoded string of data

the output needs to be consumed by either:

- the application during runtime (browserify implementation)
- openssl in case of deployment

```javascript
const crypto = require("crypto");

/**********************************************************************
 *
 *        DECRYPTION MODULE FOR USE INSIDE NODE.JS                     *
 *
 ***********************************************************************/

const encryption = (
  data = { TestData: "w17h Spé^cIäl chàær§¢tèrs", OK: "://seems/fine?x=lol" }
) => {
  const secretPhrase = crypto.randomBytes(16).toString("hex");
  const salt = crypto.randomBytes(128 / 8).toString("hex");
  //here we generate the key and give it back as a string, we use 100k iterations
  //as suggested in best practices
  //We can use the key multiple times to encrypt multiple things(-30GB), we just cant use
  //the same initialization vector twice
  //the key for aes-256 needs to be 256 bits which equals 32 bytes or 32 characters it is currently of type Buffer
  const configKey = crypto.pbkdf2Sync(secretPhrase, salt, 100000, 32, "sha256");
  //create unique IV for each encryption, the key can be reused. IV needs to always be 16 bytes. it is currently of type buffer
  const IV = crypto.randomBytes(16);

  //create ciphers for each encryption using the shared key and the unuique IV
  const projectConfigCipher = crypto.createCipheriv(
    "aes-256-cbc",
    configKey,
    IV
  );
  //when using hex strings as IV/keys you can convert it into a buffer to make it work:
  //Buffer.from('1d6ef201e0e7a9019ddf8414034325e2','hex')

  //encrypting the storage location using the prepared cipher
  // our input is an object, so we first stringify it and set the input encoding to utf8, for our output we need base64 encoding
  let encrypted = projectConfigCipher.update(
    JSON.stringify(data),
    "utf8",
    "base64"
  );
  // finalize the encryption also with base64 output encoding
  encrypted += projectConfigCipher.final("base64");

  /***************************************************************
   * To be able to decrypt later, we need to save the IV and key somewhere.
   * it is recommended to store the iv together with the encrypted
   * data, but you should store the key separately. we save those values
   *  as hex-encoded strings - so the can later be converted into binary again
   ****************************************************************/
  const saveKey = key.toString("hex");
  const saveIV = IV.toString("hex");
  // the above strings can be directly interpreted by openssl
  // the above key can be converted to a buffer in node: Buffer.from(saveKey, 'hex')
  // the above key can be converted to binary using hexToBin() in the browser

  return encrypted;
};
```

- **`OUTPUT_DATA`** = Z8QIo6YuR7DZqmHHV4WqqorUnUZ2n88gMFADMCt2FKUSgCV12rE4RpgPdjXMJJB2vNJZ+00LvE9nkn77fW0pf8c/tzW5MxQpzqV3A+HvniM= ` //look what a nice base64 string`
- **`OUTPUT_KEY`** = '5035ae3567f2e69320b083d59a7364cf8d4b14e77d7b798051241ce546b327d9'
- **`OUTPUT_IV`** = '1d6ef201e0e7a9019ddf8414034325e2'

Our output data looks good, so lets test what openssl can do with it!

## Using Node.crypto's output as input in openssl

from node, we get the data shown above as files named _key_ and _iv_
In my use case we only need the `key` and `IV` to encrypt a new config. I still did include a decryption example as well here.

Things to keep in mind:

- output encoding must be base64
- `-nosalt` option needs to be enabled
- `-A` option needs to be enabled

```bash
#########################################################################################
#                                                                                       #
#               ENCRYPTION FOR CLI IN / MACOS / LINUX / WINDOWS                         #
#                                                                                       #
#########################################################################################

#encrypt with key & IV but no salt
#config.json contains the testdata defined above
cat config.json | openssl aes-256-cbc -iv $(cat iv)  -K $(cat key) -A -nosalt -base64

#decrypt with key IV and base64
# we use the output base64 string from node here
echo "Z8QIo6YuR7DZqmHHV4WqqorUnUZ2n88gMFADMCt2FKUSgCV12rE4RpgPdjXMJJB2vNJZ+00LvE9nkn77fW0pf8c/tzW5MxQpzqV3A+HvniM=" | openssl aes-256-cbc -d -iv $(cat iv)  -K $(cat key) -base64 -A
```

### Encryption output:

- **`OUTPUT_encrypt`** = Z8QIo6YuR7DZqmHHV4WqqorUnUZ2n88gMFADMCt2FKUn/ZeYUj1DEBNS2NthignUNR0hw+OOFU7qACKPZbxx8k0Pe0McXNDrOnUtl3dIwdg= `//looking good..`

### Decryption output:

- **`OUTPUT_decrypt`** = {"TestData":"w17h Spé^cIäl chàær§¢tèrs","OK":"://seems/fine?x=lol"} ` //nice, thats our original data!`

Since our Output looks good and even the decryption worked fine, lets test what our browserify implementation can do with this.

## Using browserify to decrypt node or openssl input

This code expects the following input:

- base64 encoded string to decrypt
- iv in the form of a hex-encoded string
- key in the form of a hex-encoded string

I get the keys from process.env in this example. You could also receive them via input or even a file.

This code needs to be able to produce consistent output when receiving input from either node or openssl.

We had to create a custom function `hexToBin()` to convert a hex string into a binary array to be consumed by our cipher.

```js
import crypto from "browserify-aes";

/**********************************************************************
 *
 *        DECRYPTION MODULE FOR USE IN BROWSER DURING RUNTIME          *
 *
 ***********************************************************************/
const decrypt = (Base64Hash) => {
  const Key = process.env.APP_KEY; //hex encoded string
  const IV = process.env.APP_IV; //hex encoded string

  const hexToBin = (hex) => {
    //converts hex strings to binary arr
    for (var bytes = [], c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
  };

  //ein neuer cipher wird vorbereitet, mittels aes256, unserem 256 bit KEY und dem config IV
  const decipher = crypto.createDecipheriv(
    "aes256",
    hexToBin(Key),
    hexToBin(IV)
  );

  //der hash wird nun decrypted mittels dem zuvor erstellten cipher
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(Base64Hash, "base64")),
    decipher.final(),
  ]).toString("utf8");

  return JSON.parse(decrypted);
};
```

- **`OUTPUT_openssl`** = {TestData: "w17h Spé^cIäl chàær§¢tèrs", OK: "://seems/fine?x=lol"} ` //yes, thats our original input! :D`
- **`OUTPUT_nodejs`** = {TestData: "w17h Spé^cIäl chàær§¢tèrs", OK: "://seems/fine?x=lol"} ` //and we even handled the node version! sick!`

That's it! We did it yay!

> Feel free to comment and discuss on my gist: <a href="https://gist.github.com/Lawlez/88e04e3541cc0608c953a118b86bfc1a">This project on gist</a>
