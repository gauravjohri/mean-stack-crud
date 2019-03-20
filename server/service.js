var router = require("express")();
var md = require("express-mongo-db");
var ObjectId = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/mydb";
router.use(md(url));
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get("/:tbl", function (req, res) {
    req.db.collection(req.params.tbl).find().toArray(function (err, data) {
        res.send(data);
    });
});
router.get("/:tbl/:id", function (req, res) {
    req.db.collection(req.params.tbl).findOne({ "_id": ObjectId(req.params.id) }).then(function (data) {
        res.send(data);
    });
});
router.delete("/:tbl/:id", function (req, res) {
    req.db.collection(req.params.tbl).deleteOne({ "_id": ObjectId(req.params.id) }).then(function (data) {
        res.send(data);
    });
});
router.post("/add/:tbl/:id?", function (req, res) {
    if (req.params.id) {
       query = { "_id": ObjectId(req.params.id) };

        req.db.collection(req.params.tbl).updateOne(query,req.body, function (err, data) {
            res.send({ "msg": req.params.tbl });
        });
    } else {
        req.db.collection(req.params.tbl).insertOne(req.body, function (err, data) {
            res.send({ "msg": req.params.tbl });
        });
    }
});
module.exports = router;