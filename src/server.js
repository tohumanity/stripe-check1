var cors = require('cors');
const app = require("express")();
const stripe = require("stripe")("sk_test_2KYiDGsFdvpLYDPcr9NrHXav00K8cLUnXY");

app.use(require("body-parser").text());
app.use(cors());

app.post("/charge", async (req, res) => {
    try {
      let response = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json(response);
    } catch (err) {
      res.json(err).status(500).end();
    }
  });
  console.log('I got payment request')
  app.listen(9000, () => console.log("Listening on port 9000"));
