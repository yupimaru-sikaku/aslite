import Stripe from 'stripe';
import { buffer } from 'micro';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(request, response) {
  const sig = request.headers['stripe-signature'];
  const buf = await buffer(request);

  let event;
  try {
    if (!sig) throw new Error('No signature provided');
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (e) {
    const err = e instanceof Error ? e : new Error('Bad Request');
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  const data = event.data.object;
  if (
    event.type !== 'checkout.session.completed' &&
    event.type !== 'checkout.session.async_payment_succeeded'
  ) {
    return response.status(200).end();
  }
  /**
   * 支払いが完全に完了している場合のみ処理する
   **/
  if (data.payment_status === 'paid') {
    const itemList = await stripe.checkout.sessions.listLineItems(data.id);
    // 商品のアーカイブ操作
    itemList.data.map(async (item) => {
      await stripe.products.update(item.price.product, { active: false });
    });
    /**
     * カートの中身の情報を利用して、発送業務などのシステムを呼び出す
     **/
  }
  return response.status(200).end();
}
