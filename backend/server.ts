import express from 'express';

const app = express();
const base = "/";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialise members
const bookings:{}[] = [{}];

app.post(base + "submit", (req, res) => {
  bookings.push({
    "Email": req.body.email,
    "Title": req.body.title,
    "First Name": req.body.firstname,
    "Last Name": req.body.lastname,
    "Date": req.body.date,
    "Time": req.body.time,
    "Phone Number": req.body.phone,
    "Number of people": req.body.people,
    "Number of children": req.body.children,
    "Number of disabilities": req.body.disabilities,
  });
  const message = "{\"status\" : \"success\", \"message\" : \"Booking successful.\"}";
  res.send(message);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});