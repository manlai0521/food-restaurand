// // This is your test secret API key.
// const stripe = require('stripe')('sk_test_51N6ANEJ8KPkCZuRI1pQY0xvDAuLuTImlhcNdPQHjNks2mXjlyNrq0lUb6mORxm1eMm6EqkhJw9q3QthdqEXaWlun00PmGeDZer');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// import { PRODUCTS } from './products';

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//        PRODUCTS
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));