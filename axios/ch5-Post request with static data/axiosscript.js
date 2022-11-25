
const makerequest = async () => {
    console.log(`Button Clicked`)
    try {
        
        //1-we create a Request Config
        /*
        const config = {
          
          method: 'POST',

          url:'https://reqres.in/api/users',
          headers: { 'Content-Type': 'application/json' },
          data: '{"name":"Randeep" ,"job":"cheer"}'
        };
        const promiseObj= await axios(config); 
        */

        //2-Short way of sending post request
        const config = {
          
            headers: { 'Content-Type': 'application/json' }
          };
          const promiseObj= await axios.post('https://reqres.in/api/users','{"name":"Randeep" ,"job":"cheer"}',config); 
        
        console.log(promiseObj)
      
        console.log(promiseObj.data)
      
        
    } catch (error) {
        console.log(error)
    }
}






document.getElementById("btn").addEventListener('click', makerequest)