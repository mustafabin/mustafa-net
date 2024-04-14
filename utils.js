function JSONResponse(data, status) {
  const res = new Response(JSON.stringify(data), { status })
  res.headers.set("Access-Control-Allow-Origin", "*")
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  return res
}

export { JSONResponse }
