const express = require("express");
const app = express();


app.get("/clock", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html")
});


app.listen(process.env.PORT || "5000", () => {
    console.log("the server is running", 5000);
});
