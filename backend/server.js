require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');
//Express app
const app = express();
const host = 'http://localhost:';


//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log('middleware : ' + req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);


// Connect to Db

mongoose.connect(process.env.MONGO_URI).then(() => {
    //Listen for req
    app.listen(process.env.PORT, () => {
        console.log(`Listening for req on ${host + process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
})

