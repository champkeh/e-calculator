import CryptoJS from "crypto-js"
import { Ref } from "vue"

export function useOutputEncoding(output: any, outputEncoding: Ref<string>) {
  switch (outputEncoding.value) {
    case "UTF-8":
      return CryptoJS.enc.Utf8.stringify(output)
    case "Base64":
      return CryptoJS.enc.Base64.stringify(output)
    case "Latin1":
      return CryptoJS.enc.Latin1.stringify(output)
    case "Hex":
      return CryptoJS.enc.Hex.stringify(output)
    case "UTF-16":
      return CryptoJS.enc.Utf16.stringify(output)
    case "UTF-16LE":
      return CryptoJS.enc.Utf16LE.stringify(output)
  }
}
