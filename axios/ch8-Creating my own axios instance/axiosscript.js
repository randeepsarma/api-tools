

//Axios instance of object- we write the common url by creating an axios instance
const ai= axios.create({
  baseURL : 'https://dummyjson.com'
})


/* const makerequest = async (e) => {

  try {
    console.log('Button Clicked')
    const promiseObj = await ai('/products/1')
    console.log(promiseObj)
    const final=promiseObj.data
    console.log(final)
  
  } catch (error) {
    console.log(error)
  }

} */

 const makerequest = async (e) => {

  try {
    console.log('Button Clicked')
    const promiseObj = await ai('/products')
    console.log(promiseObj)
    const final=promiseObj.data
    console.log(final.products)
  
  } catch (error) {
    console.log(error)
  }

} 

document.getElementById('btn').addEventListener('click', makerequest)