import Stripe from 'stripe';

export default async function handler(req, res) {
  if (!req.method) return;
  if (req.method.toLocaleLowerCase() !== 'post') {
    return res.status(405).end();
  }
  try {
    const { price, items } = req.body;
    const lineItems = items
      ? items.map((item) => ({
          price: item.id,
          quantity: item.quantity,
        }))
      : [
          {
            price,
            quantity,
          },
        ];

    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2022-08-01',
      maxNetworkRetries: 3,
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      billing_address_collection: 'required',
    });
    if (!items) return res.redirect(301, session.url);

    res.status(200).json({
      url: session.url,
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
