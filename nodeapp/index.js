const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.post("/user", async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).send({ message: "name is required" });
        const encodedName = encodeURIComponent(req.body.name);
        console.log(encodedName);
        const service = process.env.GO_SERVICE;
        const { data } = await axios.get(`http://${service}:8080/hello?name=${encodedName}`);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
app.listen(5000, () => console.log("Server is runnion on port 5000"));
