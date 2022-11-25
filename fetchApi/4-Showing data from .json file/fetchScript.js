
const makerequest = async () => {
    try {
        const getdata = await fetch('data.json');
        if (!getdata.ok) throw Error(getdata.statusText)
        console.log(getdata)

        const final = await getdata.json()
        console.log(final)//Dont use text with .json file like console.log('This is final',final)<-----wrong
        console.log('This is the final data name ' + final.name)
        console.log('This is the final data roll ' + final.roll)
document.getElementById('divdata').innerHTML=`<h2>Name:${final.name} <br/>Roll:${final.roll}</h2>`;
    } catch (error) {
        console.log(`Inside Catch`)
        console.log(error)
    }
}



document.getElementById("btn").addEventListener("click", makerequest)
console.log('End')
