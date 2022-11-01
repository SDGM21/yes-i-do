import Express from "express";

const PORT = process.env.PORT || 3001;
const expressApi = Express();
// expressApi.use(Express.static(path.resolve(__dirname, "../client/build")));

expressApi.get("/api", (req, res) => {
  return res.json({ data: "new Data" });
});
expressApi.get("/api/1", (req, res) => {
  return res.json({ data: "2 new Data" });
});

expressApi.get("/*", (req, res) => {
  res.json(null);
});

expressApi.listen(PORT, () => {
  console.log(`SERVER:${PORT}`);
});
