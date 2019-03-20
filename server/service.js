var router = require("express")();
var md = require("express-mongo-db");
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
router.post("/add/:tbl", function (req, res) {
    console.log(req.body);
   
    req.db.collection(req.params.tbl).insertOne(req.body, function (err, data) { 
        res.send({"msg":req.params.tbl});
    });
});
module.exports = router;