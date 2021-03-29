const dgram = require("dgram")

const msg = process.argv[2] || "hello world"

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "127.0.0.1"

const client = dgram.createSocket("udp4")

client.send(Buffer.from(msg), PORT, HOST)

client.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}: ${rinfo.port}`)
})

client.on("error", (err) => {
  console.info(err.message)
  console.error(err.stack)
})
