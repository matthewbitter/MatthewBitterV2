import type { FieldValue } from "firebase/firestore";

export interface ContactForm
{

    Name: string
    Email: string
    Message: string
    CreatedAt: FieldValue
    PhoneNumber?: string
    token?: string

}