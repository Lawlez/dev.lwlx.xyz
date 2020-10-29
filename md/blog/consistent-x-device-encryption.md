---
title: Getting consistent Encryption in Node / PHP / Browser and openSSL
published: true
datePublished: 1603967203286
author: lwlx
authorTwitter: InfoSecx0
authorPhoto: /profile.jpg
tags:
  - encryption
  - decryption
  - openssl
  - nodejs
  - php
thumbnailPhoto: /crypto_thumb.jpg
bannerPhoto: /crypto.jpg
canonicalUrl: https://dev.lwlx.xyz/
---

I recently was tasked to find a solution for encrypting data in different places and to be able to decrypt them all in a browser during runtime.

Surprisingly, it was much harder than expected since there was so little documentation around this online. What was available were a few code only examples, so I was forced to do R&D and just try all implementations and compare the in- & outputs

Given the lack of a decent out-of-the-box solution, I worry that many developers are settling for easy to use, insecure, solutions which place limits on the security and flexibility of your project. Security should be easy to use and accessible.

> Clone the repo here to get started with this setup: <a href="https://gist.github.com/Lawlez/88e04e3541cc0608c953a118b86bfc1a">https://gist.github.com/Lawlez/88e04e3541cc0608c953a118b86bfc1a</a>

Let's quickly run through each implementation:

### Using Node JS Crypto module

Node Provides a nice `crypto`  implementation. It's documentation is rather sparse, but this is what i ended up with by using:
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

### Using browserify-aes's node crypto like implementation inside the Browser

Inside the browser, we cannot use Nodes.js built-in modules. Using `browserify-aes` we can use a node-like crypto implementation, which uses the same syntax as the node implementation. In my use case, I only need to decipher in the browser, this means I don’t have to worry about a true random key generation or ciphering.

```js
import crypto from 'browserify-aes'

/**********************************************************************
*
*        DECRYPTION MODULE FOR USE IN BROWSER DURING RUNTIME          *
*
***********************************************************************/
const decrypt = hash => {
    const hash = hash.data
    //get IV from input, make sure its no longer than 16 bytes
    const IV = hash.IV

    //ein neuer cipher wird vorbereitet, mittels aes256, unserem 256 bit KEY und dem config IV
    const decipher = crypto.createDecipheriv(
        'aes256',
        process.env.APP_CONFIG_KEY.substr(0, 32),
       IV,
    )

    //der hash wird nun decrypted mittels dem zuvor erstellten cipher
    const decrypted = Buffer.concat([decipher.update(
         Buffer.from(hash, 'hex'),
     ), decipher.final()]).toString()

   return JSON.parse(decrypted)
}
```

### ENCRYPTION & DECRYPTION MODULE FOR PHP7+ USING OPENSSL

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

### Using openssl for use in CLI

Inside of a Command Line Interface we use `openssl` do en- or decrypt data.

for node/browserify to be able to decrypt it we need to add the `-nosalt` option, which disables salting the data.

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

## final solution

...
