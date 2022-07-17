import CryptoJS from "crypto-js"

/**
 * 在指定作用域内执行表达式
 * @param context 作用域
 * @param expr 表达式
 * @return {*}
 */
export function scopeEval(context, expr) {
  const evaluator = Function.apply(null, [
    ...Object.keys(context),
    "expr",
    'return eval("expr = undefined;" + expr)',
  ])
  return evaluator.apply(null, [...Object.values(context), expr])
}

/**
 * MD5
 * @param input
 * @return {*}
 */
export function md5(input) {
  return CryptoJS.MD5(input)
}

/**
 * SHA-1
 * @param input
 * @return {*}
 */
export function sha1(input) {
  return CryptoJS.SHA1(input)
}

/**
 * SHA-256
 * @param input
 * @return {*}
 */
export function sha256(input) {
  return CryptoJS.SHA256(input)
}

/**
 * SHA-512
 * @param input
 * @return {*}
 */
export function sha512(input) {
  return CryptoJS.SHA512(input)
}

/**
 * SHA-224
 * @param input
 * @return {*}
 */
export function sha224(input) {
  return CryptoJS.SHA224(input)
}

/**
 * SHA-384
 * @param input
 * @return {*}
 */
export function sha384(input) {
  return CryptoJS.SHA384(input)
}

/**
 * SHA-3
 * @param input
 * @return {*}
 */
export function sha3(input) {
  return CryptoJS.SHA3(input)
}

/**
 * RIPEMD160
 * @param input
 * @return {*}
 */
export function rip(input) {
  return CryptoJS.RIPEMD160(input)
}
