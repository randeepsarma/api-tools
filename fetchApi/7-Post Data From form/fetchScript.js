
const makerequest = async (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let job = document.getElementById('job').value

    console.log('Button Clicked')
    try {

        const myInit = {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name,job:job})
        }
        console.log(`Body`+myInit.body)

        //returns promise
        const getdata = await fetch('https://reqres.in/api/users', myInit)

        console.log(getdata)
        if (!getdata.ok) throw Error('Not found');
        const final = await getdata.json()
        console.log(final)
    } catch (error) {
        console.log(error)
    }


}

document.getElementById("btn").addEventListener("click", makerequest)
console.log('End')
