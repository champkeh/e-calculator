// import CryptoJS from "crypto-js"

export function mask(wordArray, maskKeyHex) {
  const payload = convertWordArrayToUint8Array(wordArray)
  const maskKey = parseMaskKey(maskKeyHex)

  for (let i = 0; i < payload.length; i++) {
    payload[i] = payload[i] ^ maskKey[i % maskKey.length]
  }

  return convertUint8ArrayToWordArray(payload)
}

// assumes wordArray is Big-Endian (because it comes from CryptoJS which is all BE)
// From: https://gist.github.com/creationix/07856504cf4d5cede5f9#file-encode-js
function convertWordArrayToUint8Array(wordArray) {
  const len = wordArray.words.length
  const u8_array = new Uint8Array(wordArray.sigBytes)
  let offset = 0
  for (let i = 0; i < len; i++) {
    const word = wordArray.words[i]
    u8_array[offset++] = word >> 24
    u8_array[offset++] = (word >> 16) & 0xff
    u8_array[offset++] = (word >> 8) & 0xff
    u8_array[offset++] = word & 0xff
  }
  return u8_array
}

// create a wordArray that is Big-Endian (because it's used with CryptoJS which is all BE)
// From: https://gist.github.com/creationix/07856504cf4d5cede5f9#file-encode-js
function convertUint8ArrayToWordArray(u8Array) {
  const words = []
  let i = 0
  let len = u8Array.length

  while (i < len) {
    words.push(
      (u8Array[i++] << 24) |
        (u8Array[i++] << 16) |
        (u8Array[i++] << 8) |
        u8Array[i++],
    )
  }

  return {
    sigBytes: len,
    words: words,
  }
}

/**
 *
 * @param maskKeyHex 16进制字符串
 */
function parseMaskKey(maskKeyHex) {
  if (maskKeyHex.length % 2 === 1) {
    maskKeyHex = "0" + maskKeyHex
  }

  const maskKey = []
  for (let i = 0; i < maskKeyHex.length; i += 2) {
    maskKey.push(parseInt(maskKeyHex.slice(i, i + 2), 16))
  }

  return maskKey
}

// const input = "d4d99530d79658"
// console.log(CryptoJS.enc.Hex.parse(input))
// console.log(convertWordArrayToUint8Array(CryptoJS.enc.Hex.parse(input)))
// console.log(
//   convertUint8ArrayToWordArray(
//     convertWordArrayToUint8Array(CryptoJS.enc.Hex.parse(input)),
//   ),
// )
// const res = mask(CryptoJS.enc.Hex.parse(input), "1e9158f9")
// const output = CryptoJS.enc.Hex.stringify(res)
// console.log(output)
