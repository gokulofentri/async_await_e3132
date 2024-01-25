async function fetchdata(){
    var data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    var fdata = data.json();
    fdata.then((d)=>{
        document.getElementById('data').innerHTML = `<h3>${d.name}</h3>`
    })
    

}