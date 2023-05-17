import { db } from "./connection.js";

export const getData = (_, res) => {
  const q = "SELECT * FROM infotcc";

  db.query(q, (err, data) => {
    if (err) res.send(err);

    return res.status(200).json(data);
  });
};

export default {
  getData,
};
