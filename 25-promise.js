
// I promise, Will share the notes
const promiseNotes = new Promise( (resolve, rejected)=> {
    // you guys wait till 3 PM
     // resolve("Hey.. Here you go.. Takes these notes");
     rejected("Sorry. Guys. I didn't get time..");
 }); 
 promiseNotes.then( (success)=>{
     console.log(success);  
 }).catch((rejected)=>{
     console.log(rejected);
 }).finally(()=>{
     console.log('I must have notes'); 
 });
 function fetchData(){
    console.log(` Promise will fetch the Data....`);
    const promise =new Promise( (resolve, reject )=>{
        setTimeout(() => {
            // resolve("Successfully fetched Data..");
            reject("Failed to fetch data");
        }, 20000);
    } );
    return promise;
}

async function main(){
    console.log("main function");
    try {
        const promise = await fetchData();
        console.log(promise);
    } catch (error) {
        console.log(error);   
    }
    
    // promise.then((success)=>{
    //     console.log(success); 
    // }).catch((failure)=>{
    //     console.log(failure);  
    // });
   
    
     console.log("After fetch..."); 
}
main();