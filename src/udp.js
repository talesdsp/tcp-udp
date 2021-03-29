const dgram = require("dgram")

const server = dgram.createSocket("udp4")

server.on("message", (msg, rinfo) => {
  console.table(rinfo)
  console.log(`server got: ${msg} from ${rinfo.address}: ${rinfo.port}`)

  server.send("response from server", rinfo.port, rinfo.address)
})

server.on("listening", () => {
  const address = server.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

server.bind(8000)
