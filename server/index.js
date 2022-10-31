const Express = require("express");

const PORT = process.env.PORT || 3001;
const serverApp = Express();

serverApp.get("/api", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001/api");
  res.json({ message: "Hola" });
  return res;
});

serverApp.use();

serverApp.listen(PORT, () => {
  console.log("Servidor Iniciado en Puerto: " + PORT);
});
