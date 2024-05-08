const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost/myformdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Retrieve and display form data from MongoDB
  FormData.find()
    .then((formDataList) => {
      console.log('Retrieved Form Data:');
      formDataList.forEach((formData) => {
        console.log(formData); // Log each form data document to the console
      });
    })
    .catch((error) => {
      console.error('Error retrieving form data:', error);
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    gender: String,
    interests: [String], // Store as array of strings
    subscription: String
});


const FormData = mongoose.model('FormData', formDataSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const formData = new FormData({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message,
        gender: req.body.gender,
        interests: req.body.interests, // Assuming 'interests' is an array of strings
        subscription: req.body.subscription
    });

    formData.save()
        .then(() => {
            res.send('Form submitted successfully!');
        })
        .catch((err) => {
            res.status(500).send('Error submitting form');
        });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});