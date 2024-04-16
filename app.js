const express = require("express");
const cors = require("cors");
const app = express();
const divination = require("./divination.json");

app.use(express.json());
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500","https://rishikaam.github.io"]
}))

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/getDivinationResult", (req, res) => {

    const { name, selectedElement, areaOfLife } = req?.body;

    const divinationResultsForElement = divination[selectedElement][areaOfLife];

    const randomNumber = Math.floor(Math.random() * 10);

    return res.json({
        divinationResult: divinationResultsForElement?.[randomNumber]
    })

})

app.listen(3000, () => {
    console.log(`Server Started listening on: http://127.0.0.1:3000`);
})