const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  const queryText = `SELECT "genres".name, "genres".id FROM "movies_genres"
                    JOIN "genres" ON "movies_genres".genre_id = "genres".id
                    WHERE "movies_genres".movie_id = $1;`;
  pool
  .query(queryText, [req.params.id])
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.error("Error completing SELECT movie details query", error);
    res.sendStatus(500);
  });
});

module.exports = router;