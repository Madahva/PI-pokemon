require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getTypes } = require("./src/controllers/typeController.js");
const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    await getTypes();
    console.log(`💪 listening at ${port} 💪`); // eslint-disable-line no-console
  });
});
