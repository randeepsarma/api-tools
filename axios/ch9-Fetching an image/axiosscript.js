

//Axios instance of object- we write the common url by creating an axios instance
const ai= axios.create({
  baseURL : ''
})


 const makerequest = async (e) => {

  try {
    console.log('Button Clicked')
    const promiseObj = await axios('https://dog.ceo/api/breeds/image/random')
    console.log(promiseObj)
    const final = promiseObj.data
    console.log(final)
    const url=final.message
    console.log(url)
    document.getElementById('image').src=url
  
  } catch (error) {
    console.log(error)
  }

} 



document.getElementById('btn').addEventListener('click', makerequest)






