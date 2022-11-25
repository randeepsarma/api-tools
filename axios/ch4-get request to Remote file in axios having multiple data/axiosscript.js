


const makerequest = async () => {
    console.log(`Button Clicked`)
    try {
        //1- Without using Params
        
        //we get a response object
        const promiseObj= await axios.get('https://reqres.in/api/users?page=2')

        //Printing the response
        console.log('Response Object ---')
        console.log(promiseObj)
        
        console.log(`value to key named 'data' in Response Object---`)
        const semi_final = promiseObj.data
        console.log(semi_final)
        console.log('-----------According to remote servers-----------')
        console.log(`value to key named 'data' inside 'data' inside Response Object---`)
       const final=semi_final.data;
       console.log(final)
      
       final.forEach(element => {
        document.getElementById('divdata').innerHTML+=`<h3>Name:${element.first_name} ${element.last_name},<br/>Id: ${element.id} ,<br/>email:${element.email}</h3>` 
       });
      
      
        
    } catch (error) {
        console.log(error)
    }
}






document.getElementById("btn").addEventListener('click', makerequest)