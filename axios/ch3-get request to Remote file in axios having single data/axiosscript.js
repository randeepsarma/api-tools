


const makerequest = async () => {
    console.log(`Button Clicked`)
    try {
        //1- Without using Params
      /*  
        //we get a response object
        const promiseObj= await axios.get('https://reqres.in/api/users/2')

        //Printing the response
        console.log(promiseObj)
        
        const semi_final = promiseObj.data
        console.log(semi_final)

        const final=semi_final.data;
        console.log(final)
      // document.getElementById('divdata').innerHTML=`<h3>Name:${final.first_name} ${final.last_name},<br/>Id: ${final.id} ,<br/>email:${final.email}</h3>` 
      */
        
        //2 - Using params
         config = {
            params: {
                id:2
            }
        }


        const promiseObj = await axios.get('https://reqres.in/api/users/',config)
     
        //Printing the response
        console.log(promiseObj)
        
        const semi_final = promiseObj.data
        console.log(semi_final)

        const final=semi_final.data;
        console.log(final)
        document.getElementById('divdata').innerHTML=`<h3>Name:${final.first_name} ${final.last_name},<br/>Id: ${final.id} ,<br/>email:${final.email}</h3>` 
        
    
    } catch (error) {
        console.log(error)
    }
}






document.getElementById("btn").addEventListener('click', makerequest)