
const makerequest = () => {
    console.log(`Button Clicked`)
    const promiseObj = fetch('data.txt')//returns a promise
    console.log(promiseObj)//promise not resolved so it is pending
    promiseObj
        .then((res) => {//receives a promise from promiseObj
            console.log(res)

            //returns a promise ,that returns a text representaion of request body when it resolved
            return res.text()
        }).then((data) => {
            console.log(data)
        })
}


document.getElementById("btn").addEventListener("click", makerequest)

