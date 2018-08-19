import Dexie from "dexie";

const db = new Dexie("thanks");
db.version(1).stores({
  thanks: "++id"
});

export default db;
