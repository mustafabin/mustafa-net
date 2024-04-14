import { file } from "bun"
import { JSONResponse } from "./utils"

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    try {
      return handleRequest(request)
    } catch (error) {
      return JSONResponse({ error: "Server error" }, 500)
    }
  },
})
function handleRequest(request) {
  const url = new URL(request.url)
  console.log(`Request to ${url.pathname}`)
  switch (url.pathname) {
    case "/":
      return new Response(file("./index.html"))
    default:
      return JSONResponse({ error: "Invalid path" }, 404)
  }
}

console.log(`Listening on localhost:${server.port}`)
