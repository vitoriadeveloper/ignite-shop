import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

const success_url = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`;
const cancel_url = `${process.env.NEXT_URL}/`;
export default async function handleCheckout(req: NextApiRequest, res:NextApiResponse){
    const {priceID} = req.body;
    if(req.method !== 'POST'){
        return res.status(405).json({error: 'Method not allowed'})
    }
    if(!priceID){
        return res.status(400).json({error: 'Price not found'})
    }
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url,
        cancel_url,
        mode: 'payment',
        line_items: [
            {
                price: priceID,
                quantity: 1,
            }
        ]
    })
    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}