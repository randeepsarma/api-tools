


const makerequest= async ()=>{
    console.log(`Button Clicked`)
    try {
        //we get a response object
        const promiseObj= await axios.get('data.json')

        //Printing the response
        console.log(promiseObj)
      
        
        const final = promiseObj.data
        console.log(final)
        document.getElementById('divdata').innerHTML=`<h3>Name:${final.name} , Roll: ${final.roll}</h3>` 
    } catch (error) {
        console.log(error)
    }
}






document.getElementById("btn").addEventListener('click',makerequest)