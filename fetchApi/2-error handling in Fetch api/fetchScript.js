//Error handling using then and catch
/*
const makerequest = () => {
    console.log(`Button Clicked`)
    const promiseObj = fetch('data1.txt')//returns a promise
    console.log(promiseObj)//promise not resolved so it is pending
    
    promiseObj
        .then((res) => {//receives a promise from promiseObj
            console.log(res)

if(!res.ok){//moves control to .catch()
    console.log('I get called when there is an Error in the URL but not the network. So,the control moved to .catch() from here on')
    throw Error(res.statusText)
} 




            //returns a promise ,that returns a text representaion of request body when it resolved
            return res.text()
        }).then((data) => {
            console.log('I get called when second promise is resolved')
            console.log(data)
        }).catch((error)=>{
            //a promise of fetch api is rejected only when there is a network error.So if we have entered the wrong URL ,then the .catch() error handler will not be called
            console.log(error)
        })
}*/

// error handling using try and catch
const makerequest = async () => {

    try {
        console.log(`Button Clicked`)
        const promiseObj = await fetch('data1.txt')//returns a promise
        console.log(promiseObj)//promise not resolved so it is pending
        
        const data =await promiseObj.text()
        console.log(data)  
    } catch (error) {
        console.log(error)
    }
    
}

document.getElementById("btn").addEventListener("click", makerequest)

