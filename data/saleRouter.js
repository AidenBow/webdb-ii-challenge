const router = require('express').Router();

const db = require('./db-config')

router.post("/", (req, res) => {
  db("sales").insert(req.body)
    .then(sales => {
      res.json(sales)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.get("/", (req, res) => {
  db("sales")
    .then(sales => {
      res.json(sales)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.put("/:id", (req, res) => {
  db("sales").where("saleID", req.params.id).update(req.body)
    .then(sales => {
      res.json(sales)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.delete("/:id", (req, res) => {
  db("sales").where("saleID", req.params.id).del()
    .then(sales => {
      res.json(sales)
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

module.exports = router;