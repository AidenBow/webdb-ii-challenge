const router = require('express').Router();

const db = require('./db-config')

router.post("/", (req, res) => {
  db("cars").insert(req.body)
    .then(cars => {
      res.json(cars)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.put("/:id", (req, res) => {
  db("cars").where("ID", req.params.id).update(req.body)
    .then(car => {
      res.json(car)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.delete("/:id", (req, res) => {
  db("cars").where("ID", req.params.id).del()
    .then(car => {
      res.json(car)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

module.exports = router;