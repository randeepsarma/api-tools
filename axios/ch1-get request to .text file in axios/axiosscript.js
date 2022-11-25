


const makerequest= async ()=>{
    console.log(`Button Clicked`)
    try {
        //1.Long hand method
        /* config = {
            method : 'get',
            url: 'data.txt'
        }
        const promiseObj=await axios(config) */
        

        //2. Short hand method
        
        const promiseObj= await axios.get('data1.txt')

        //Printing the response
        console.log(promiseObj)
      
        
        const final = promiseObj.data
        console.log(final)
        document.getElementById('divdata').innerHTML=`<h3>${final}</h3>`
    } catch (error) {
        console.log(error)
    }
}






document.getElementById("btn").addEventListener('click',makerequest)