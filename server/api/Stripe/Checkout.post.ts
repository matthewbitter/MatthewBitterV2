export default defineEventHandler(async (event) =>
{

    const body = await readBody(event);

    const { PriceId } = body;

    if (!PriceId)
    {

        throw createError({
            statusCode: 400,
            statusMessage: "PriceId is required"
        });

    }

    const session = await StripeClient.checkout.sessions.create({
        mode: "payment",
        line_items: [
            {
                price: PriceId, // Pass Price ID from the frontend request
                quantity: 1
            }
        ],
        success_url: `${getRequestURL(event).origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${getRequestURL(event).origin}/cancel`
    });

    return {
        url: session.url
    };

});