const server = require("./api/server.js");

const PORT = process.env.PORT || 2100;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on http://localhost:${PORT} ===\n`);
});
