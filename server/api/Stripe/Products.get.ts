export default defineEventHandler(async () =>
{

    const products = await StripeClient.products.list({ limit: 1 });

    return { success: true, products };

});