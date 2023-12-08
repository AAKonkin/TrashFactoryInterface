import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
 
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
