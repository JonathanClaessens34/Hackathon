const crypto = require('crypto');
const INITIALIZATION_VECTOR = 'Boggart';
const algorithm = "aes-128-cbc";

class Crypt {
    static decrypt128(data, key) {
        const cipher = crypto.createDecipheriv(algorithm, key, addZeros(Buffer.from(INITIALIZATION_VECTOR)));
        return cipher.update(data, 'base64', 'utf8') + cipher.final('utf8');
    };
}

function addZeros(text) {
    for(let i=text.length; i<16; i++) {
        text += "0";
    }
    return text;
}

const key = "Remus Lupin";
const cipher = "YIVTWZRH1D0VBluLejo7JQ==";
const decipher = Crypt.decrypt128(cipher, addZeros(key));

console.log(decipher);