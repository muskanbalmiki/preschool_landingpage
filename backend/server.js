// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const enquiryRoute = require('./routes/enquiry');
// app.use('/api', enquiryRoute);


// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connect
// mongoose.connect('mongodb://127.0.0.1:27017/preschoolDB')
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// app.listen(5000, () => console.log("Server running on port 5000"));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // ✅ FIRST create app

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const enquiryRoute = require('./routes/enquiry');
app.use('/api', enquiryRoute);


// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/preschoolDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server start
app.listen(5000, () => console.log("Server running on port 5000"));