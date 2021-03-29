const net = require("net")

const server = net.createServer((socket) => {
  console.log("client connected")

  socket.write("Hello\r\n")

  socket.on("data", (data) => {
    console.log(data.toString())
    socket.write("received\r\n")
  })

  socket.on("end", () => {
    console.log("client disconnected")
  })
})

server.listen(8000, () => {
  console.log("- init")
})
