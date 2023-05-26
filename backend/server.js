const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const FitnessModel = mongoose.model(
  "Fitnes",
  mongoose.Schema({
    image: String,
    name: String,
    title: String,
  })
);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/lists", async (req, res) => {
  const { name } = req.query;
  const GetAll = await FitnessModel.find();
  if (!name) {
    res.status(200).send(GetAll);
  } else {
    const FilterName = GetAll.filter((m) =>m.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    res.status(200).send(FilterName);
  }
});

app.get("/api/lists/:id", async (req, res) => {
  const id = req.params.id;
  const GetById = await FitnessModel.findById(id);
  res.status(200).send(GetById);
});
app.post("/api/lists", async (req, res) => {
  const { image, name, title } = req.body;
  const NevObj = FitnessModel({
    image: image,
    name: name,
    title: title,
  });
  const obj = await NevObj.save();
  res.status(200).send(obj);
});
app.delete('/api/lists/:id', async(req,res)=>{
    const id = req.params.id
    const DeletById = await FitnessModel.findByIdAndDelete(id)
    res.status(200).send(DeletById)
})
PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`HERSEY YAXSIDIR ${PORT}`);
});

mongoose.connect(process.env.MY_CONNECT).then(() => {
  console.log("QAYDASINDADI");
});
