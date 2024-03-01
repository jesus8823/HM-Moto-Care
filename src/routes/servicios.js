const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.render("./paginas/servicios/index");
});



module.exports = router;