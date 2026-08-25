import type { Timestamp } from "firebase-admin/firestore";

export default defineEventHandler(async (event) =>
{

    // const session = await getUserSession(event);
    const { user } = await requireUserSession(event);

    if (user.GoogleId !== useRuntimeConfig().PersonalGoogleId)
    {

        throw createError({
            statusCode: 401,
            statusMessage: "Not Authorized"
        });

    }

    const database = FirestoreDatabase;
    const documents = database.collection("ContactForm").orderBy("CreatedAt", "desc");
    const snapshot = await documents.get();

    const submissions = snapshot.docs.map(record => record.data() as ContactForm);

    for (const submission of submissions)
    {

        submission.TimeStamp = (submission.CreatedAt as Timestamp).toDate();

    }

    return submissions;

});