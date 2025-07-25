import { db } from "../lib/firebaseAdmin";

export default async function POST(request){
    try{
        const body = await request.json();
        const {id , stars , review} = body;
        if(!id || !stars || !review){
            console.log("Invalid request :"+ id + " " + stars + " " + review);
            return new Response("Invalid request", {status: 400});
        }
        await db.collection("reviews").doc(id).set({
            stars,
            review,
            id,
            timestamp: new Date()
        });
        console.log("Review submitted successfully :"+ id + " " + stars + " " + review);
        return new Response("Review submitted successfully", {status: 200});

    }
    catch(error){
        console.error(error);
        return new Response("Error submitting review", {status: 500});
    }

}