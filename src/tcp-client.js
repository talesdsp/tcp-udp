const net = require("net")

const msg = process.argv[2] || "hello world"

const client = net.createConnection({
  port: 8000,
  host: "127.0.0.1",
  timeout: 1000,
})

client.on("connect", () => {
  client.write(msg)
})

client.on("data", (data) => {
  console.log(data.toString())
})

client.on("timeout", () => {
  console.log("closing after 1s inactivity")
  client.end()
})

client.on("end", () => {
  console.log("disconnected from server")
})
