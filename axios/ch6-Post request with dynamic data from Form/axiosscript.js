


const makerequest = async (e) => {
  e.preventDefault()
  let name = document.getElementById('name').value;
  let job = document.getElementById('job').value
  try {

    const config = {
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'Content-Type': 'application/json',
      },

      data: JSON.stringify({ name: name, job: job })
    }

    const promiseObj = await axios(config)

    console.log(promiseObj)

    console.log(promiseObj.data)

    console.log('Name:'+promiseObj.data.name)
    console.log('Job:'+promiseObj.data.job)
    console.log('Id:'+promiseObj.data.id)
    console.log('CreatedAt:'+promiseObj.data.createdAt)
    //console.log(promiseObj.data.id)

  } catch (error) {
    console.log(error)
  }

}


document.getElementById('btn').addEventListener('click', makerequest)