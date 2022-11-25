console.log('Start')
//Using then and catch
/* 
const makerequest = () => {
    console.log(`Button Clicked`)
    const promiseObj = fetch('data.txt')//returns a promise
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
            document.getElementById('divdata').innerText = data;
        }).catch((error)=>{
            //a promise of fetch api is rejected only when there is a network error.So if we have entered the wrong URL ,then the .catch() error handler will not be called
            console.log(error)
        })
}
 */

//using async await
const makerequest = async () => {
    try {
        const getdata = await fetch('data1.txt');
        if (!getdata.ok) throw Error(getdata.statusText)
        console.log(getdata)
        const final = await getdata.text()
        console.log('This is the final data' + final)
    } catch (error) {
        console.log(`Inside Catch`)
        console.log(error)
    }
}



document.getElementById("btn").addEventListener("click", makerequest)
console.log('End')
