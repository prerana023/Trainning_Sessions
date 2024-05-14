
require('dotenv').config({path: './.env' })
const express = require('express');
var cors = require('cors')

const stripe = require('stripe')(process.env.SECRET_KEY);
const app = express();

app.use(cors())
app.use(express.static('public'));
app.use(express.json());


app.post('/create-checkout-session', async (request, response) => {
  try{
    const { products} = request.body;
    console.log("Products", request.body)
    let lineItems = products.map((product) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title   
          },
          unit_amount: product.price * 100
        },
        quantity: product.quantity
      };
    });
    console.log("lineItems", lineItems);

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:${process.env.SERVER_PORT}/success.html`,
      cancel_url: `http://localhost:${process.env.SERVER_PORT}/cancel.html`,
    });

    response.json({id:session.id})
  
    // response.redirect(303, session.url);
  }
  catch(error){
    console.log("Error",error)
  }
});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, process.env.EndPointSecret);
    console.log("Event", event)
  }
  catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!', paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!', paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // console.log(event.type)
  // console.log(event.data.object)
  // console.log(event.data.object.id)
  // response.json({received: true});
});

app.listen(process.env.SERVER_PORT, () => console.log('Running on port 4242'));