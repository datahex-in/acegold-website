const express = require("express");
const axios = require("axios");

var router = express.Router();
/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://securtity-website.azurewebsites.net/api/v1/our-service"
    );
    const data = response.data; // Extract the data from the response

    // Log the API response to the console
    console.log("API Response:", data);

    res.render("index", { title: "Express", data: data }); // Pass the data to the template
  } catch (error) {
    console.error("Error fetching API data:", error);
    next(error); // Pass the error to Express error handler
  }
});

module.exports = router;
