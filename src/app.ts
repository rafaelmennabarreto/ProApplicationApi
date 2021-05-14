import express from "express";
import morgan from "morgan";
import router from "./1-application/routes";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(router);

app.listen(port, () => {
  console.log(`Sever started on port : ${port}`);
});

export default app;
