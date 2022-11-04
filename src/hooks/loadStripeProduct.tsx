import Stripe from 'stripe';

export const loadStripeProduct = async () => {
  const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2022-08-01', // StripeのAPIバージョンを指定
    maxNetworkRetries: 3, // ネットワークエラーでStripe API呼び出しが失敗した時のリトライ回数を指定
  });
  const products = await stripe.products.list();
  if (!products.data || products.data.length < 1) {
    return [];
  }
  const response = await Promise.all(
    products.data.map(async (product, i) => {
      const prices = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        description: product.description,
        name: product.name,
        images: product.images,
        unit_label: product.unit_label,
        metadata: product.metadata,
        active: product.active,

        prices: prices.data.map((price) => {
          return {
            id: price.id,
            currency: price.currency,
            transform_quantity: price.transform_quantity,
            unit_amount: price.unit_amount,
          };
        }),
      };
    })
  );
  return response;
};
