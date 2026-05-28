//async & await
let fetchdata = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching data...");
            resolve("data fetched");
        }, 2000);
    }); 
}

(async ()=>{
    console.log("Fetching data of user1");
    let data = await fetchdata();
    console.log(data);
    console.log("Fetching data of user2");
    data = await fetchdata();
    console.log(data);
})();