"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let counter = 0;
function generateUniqueString(length) {
    const timestamp = Date.now().toString();
    const uniqueTimestamp = `${timestamp}-${counter++}`;
    if (uniqueTimestamp.length >= length) {
        return uniqueTimestamp.slice(0, length);
    }
    const randomChars = generateRandomChars(length - uniqueTimestamp.length);
    return uniqueTimestamp + randomChars;
}
exports.default = generateUniqueString;
function generateRandomChars(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomChars = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomChars += charset[randomIndex];
    }
    return randomChars;
}
// Example usage:
// const desiredLength = 20;
// const uniqueString = generateUniqueString(desiredLength);
// console.log(uniqueString);
//# sourceMappingURL=randomStringGenerator.js.map