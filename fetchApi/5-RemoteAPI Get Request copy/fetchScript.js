
const makerequest =async ()=>{
try {
    //returns multiple data
    const getdata=await fetch('https://dummyjson.com/products')
    console.log(getdata);
if(!getdata.ok)throw Error('Not found');
const final= await getdata.json()
console.log(final.products)
final.products.forEach(element => {
    console.log(element.id)
    document.getElementById('divdata').innerHTML+=`<h4>Id:${element.id} ,Title: ${element.title} </h4>`

});
//document.getElementById('divdata').innerHTML=`<h1>${final.id}</h1>`
} catch (error) {
    console.log(error)
}


}

document.getElementById("btn").addEventListener("click", makerequest)
console.log('End')
