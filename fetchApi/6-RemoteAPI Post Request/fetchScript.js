
const makerequest =async ()=>{
    console.log('Button Clicked')
try {
    
    const myInit = {

        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: '{"name":"Sonam","job":"web dev"}'
    }
 const getdata= await fetch('https://reqres.in/api/users',myInit)
    
 console.log(getdata)
if(!getdata.ok)throw Error('Not found');
const final = await getdata.json()
console.log(final)
} catch (error) {
    console.log(error)
}


}

document.getElementById("btn").addEventListener("click", makerequest)
console.log('End')
