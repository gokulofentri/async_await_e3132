function fetchData(){
    console.log("Activity Initiated");
    const dataSource = "https://jsonplaceholder.typicode.com/comments";

    return fetch(dataSource)
      .then((response)=>{
        if(!response.ok)
            {
            console.log("Status Code Red")
            throw new Error('HTTP Error Occured :'+ response.status)
            }
        return response.json();
      })
      .then((data)=>{
        console.log('Data extracted '+ data);
        return data;
      })
      .catch((error)=>{
        console.log("Error Handling Area" + error.message);
      })
}

fetchData()
    .then((data)=>{
        console.log(data);
        var fdata = data[0].email;
        document.getElementById('data').innerHTML = `<h3>${fdata}</h3>`

    })
    .catch((error)=>{
        console.error("Error Occured" + error);
    })
    .finally(()=>{
        console.log("Activity Completed")
    })