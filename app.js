const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
let items=["Learn Coding","Practise it"];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day, itemNames: items
  });
});

app.post("/", function(req, res) {
  let item=req.body.newInput;
  items.push(item);
  res.redirect("/");
})

app.get("/about", function(req, res){
  res.render("about");
});
app.listen(3000, function() {
  console.log("server started at port 3000");
})
