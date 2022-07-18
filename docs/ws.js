// 0x81 0x05 0x48 0x65 0x6c 0x6c 0x6f

// 0b1000_0001 0b0000_0101

// Fin: 1
// opcode: 1
// mask: 0
// length: 5

// 0x81 0x85 0x37 0xfa 0x21 0x3d 0x7f 0x9f 0x4d 0x51 0x58

// 0b1000_0001 0b1000_0101

// Fin: 1
// opcode: 1 文本
// mask: 1
// len: 5
// mask_key: 0x37 0xfa 0x21 0x3d
// payload:  0x7f 0x9f 0x4d 0x51 0x58
//           0x48 0x65 0x6c 0xbc 0x6f

function parseFrame(data) {
  if (data.length < 2) {
    throw new Error("message not valid")
  }
  let offset = 0
  const result = {}

  let byte = data[offset++]
  result.fin = (byte & 0x80) >> 7
  result.opcode = byte & 0x0f

  byte = data[offset++]
  result.mask = (byte & 0x80) !== 0
  const len = byte & 0x7f
  if (len === 127) {
    const b1 = data[offset++]
    const b2 = data[offset++]
    const b3 = data[offset++]
    const b4 = data[offset++]
    const b5 = data[offset++]
    const b6 = data[offset++]
    const b7 = data[offset++]
    const b8 = data[offset++]
    const buf = new Uint8Array([b1, b2, b3, b4, b5, b6, b7, b8])
    result.len = new DataView(buf.buffer).getBigUint64(0)
  } else if (len === 126) {
    const b1 = data[offset++]
    const b2 = data[offset++]
    const buf = new Uint8Array([b1, b2])
    result.len = new DataView(buf.buffer).getUint16(0)
  } else {
    result.len = len
  }
  let maskKey = []
  if (result.mask) {
    const m1 = data[offset++]
    const m2 = data[offset++]
    const m3 = data[offset++]
    const m4 = data[offset++]
    maskKey = [m1, m2, m3, m4]
    result.maskKey = maskKey
  }

  const payload = data.slice(offset)
  if (result.mask) {
    for (let i = 0; i < payload.length; i++) {
      payload[i] = payload[i] ^ maskKey[i % 4]
    }
  }

  if (result.opcode === 1) {
    result.text = new TextDecoder().decode(new Uint8Array(payload))
  } else {
    result.payload = payload
  }

  return result
}

const res = parseFrame([
  0x8a, 0x85, 0x37, 0xfa, 0x21, 0x3d, 0x7f, 0x9f, 0x4d, 0x51, 0x58,
])
console.log(res)
