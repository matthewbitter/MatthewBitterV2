export default defineEventHandler(async (event) =>
{

    const { user } = await requireUserSession(event);

    if (user.GoogleId !== useRuntimeConfig().PersonalGoogleId)
    {

        throw createError({
            statusCode: 401,
            statusMessage: "Not Authorized"
        });

    }

    const database = FirestoreDatabase;
    const document = database.collection("Markdown").doc("DeepRead");
    const snapshot = await document.get();

    if (snapshot.exists)
    {

        return snapshot.data()?.Data;

    }

    return "";

});