const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.render("./paginas/motos/index");
});



module.exports = router;