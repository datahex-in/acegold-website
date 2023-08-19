import { Router } from "express";
var router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("contact-us");
});

export default router;
