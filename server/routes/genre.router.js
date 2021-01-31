const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  let id = Number(req.params.id)

  const queryText = `SELECT "movies".id, "movies".title, "movies".description, "movies".poster, "genres".name FROM "movies"
                      JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                      JOIN "genres" ON "movies_genres".genre_id = "genres".id
                      WHERE "movies".id = $1;`;
  pool
  .query(queryText, [id])
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.error("Error completing SELECT movie details query", error);
    res.sendStatus(500);
  });
});

module.exports = router;