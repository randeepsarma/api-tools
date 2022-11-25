

//Global Axios Default
axios.defaults.headers.common['Authorization'] = 'dcdcfvecsdcsdcfffhhchchcc';

const makerequest = async (e) => {

  try {
    console.log('Button Clicked')
    const promiseObj = await axios('https://dummyjson.com/products/1')
    console.log(promiseObj)
    const final=promiseObj.data
    console.log(final)
   /* console.log(`Id: ${final.data.id}`)
    console.log(`Email: ${final.data.email}`) */
  } catch (error) {
    console.log(error)
  }

}


document.getElementById('btn').addEventListener('click', makerequest)