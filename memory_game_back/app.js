require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const error = require('./middlewares/error');
const auth = require('./middlewares/auth');
const userRouter = require('./routes/usersRoutes');
const gameRouter = require('./routes/gameRoutes');


const app = express();
app.use(bodyParser.json());
app.use(cors);
app.use(auth);
app.use(error)
app.use("/api/v1/user", userRouter);
app.use("/api/v1/game", gameRouter);

mongoose.connect(process.env.DB_NAME)
.then(() => {
    console.log('DB-connected');
    app.listen(process.env.PORT, () => {
        console.log("Server is running")
    });
})
.catch(e => console.log(e))