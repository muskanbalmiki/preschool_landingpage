// const express = require('express');
// const router = express.Router();
// const Enquiry = require('../models/Enquiry');

// router.post('/submit', async (req, res) => {
//    
//     try {
//         const data = new Enquiry(req.body);
//         await data.save();
//         res.json({ message: "Form submitted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Error saving data" });
//     }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Enquiry = require('../models/Enquiry');

// router.post('/enquiry', async (req, res) => {

//   console.log(req.body);  // ✅ WRITE HERE

//   const newData = new Enquiry(req.body);
//   await newData.save();

//   res.send("Data Saved");
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/enquiry', async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body); // ✅ Debug

    if (!req.body.name || !req.body.email) {
      return res.status(400).send("Missing fields");
    }

    const newData = new Enquiry({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });

    await newData.save();

    console.log("Data saved in MongoDB ✅");

    res.send("Data Saved Successfully");
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;