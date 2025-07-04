// src/binaryHelper.js

export const textToBinary = (text) => {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
};