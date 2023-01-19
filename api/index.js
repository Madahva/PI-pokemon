const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getTypes } = require("./src/controllers/typeController.js");

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await getTypes();
    console.log("💪 listening at 3001 💪"); // eslint-disable-line no-console
  });
});
