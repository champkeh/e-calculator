import CryptoJS from "crypto-js"
import { Ref } from "vue"

export function useInputEncoding(
  input: Ref<string>,
  inputEncoding: Ref<string>,
) {
  switch (inputEncoding.value) {
    case "UTF-8":
      return CryptoJS.enc.Utf8.parse(input.value)
    case "Base64":
      return CryptoJS.enc.Base64.parse(input.value)
    case "Latin1":
      return CryptoJS.enc.Latin1.parse(input.value)
    case "Hex":
      return CryptoJS.enc.Hex.parse(input.value)
    case "UTF-16":
      return CryptoJS.enc.Utf16.parse(input.value)
    case "UTF-16LE":
      return CryptoJS.enc.Utf16LE.parse(input.value)
  }
}
