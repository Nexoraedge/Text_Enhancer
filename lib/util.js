

export const SubmitReview = async({id , stars , review })=>{
 try{
 console.log("Review got:"+ id + " " + stars + " " + review);
 }
 catch(error){
    console.error(error);
 }
};

