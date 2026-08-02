import express from 'express';
import dotenv from 'dotenv';
import Mailgun from 'mailgun-js';

dotenv.config();

const mailgun = () => 
    Mailgun({
        apiKey: '152ad9b20adec402fe52002c4ca3c0f0-f9517a64-b1620adf',
        domain: 'sandboxdeec3624f3ab4bdaa63b90f4dd6ecd2c.mailgun.org'
    });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/email', (req, res) => {
    const {name, email, subject, message} = req.body;
    mailgun().messages().send(
        {
            from: `${name} ${email}`,
            to: "opage77@gmail.com",
            subject: `${subject}`,
            html: `<p>${message}</p>`,
        },
        (error, body) => {
            if (error) {
                console.log(error);
                res.status(500).send({message: "Error sending email"});
            } else {
                console.log(body);
                res.send({message: "Email send"});
            }
        }
    );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});