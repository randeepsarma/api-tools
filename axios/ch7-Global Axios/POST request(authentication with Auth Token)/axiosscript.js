

//Global Axios Default
axios.defaults.headers.common['Authorization'] = 'dcdcfvecsdcsdcfffhhchchcc';

const makerequest = async (e) => {

  try {
    
    const config ={
      method:'POST',
      url:'https://reqres.in/api/user',
      headers:{
        'Content-Type':'application/json'
      },
      data:{'name': 'Sonu' ,"job":'chew'}
    }
    
    console.log('Button Clicked')
    const promiseObj = await axios(config)
console.log(promiseObj.data)
   
   /* console.log(`Id: ${final.data.id}`)
    console.log(`Email: ${final.data.email}`) */
  } catch (error) {
    console.log(error)
  }

}


document.getElementById('btn').addEventListener('click', makerequest)