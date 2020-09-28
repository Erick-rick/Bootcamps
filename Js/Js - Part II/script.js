const executaFetch= async()=>{
    //fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      //  .then(response=> console.info(response.status))
       // .catch(reason=>console.info("Deu erro: " + reason));
   // console.info("Linha Depois");
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
   console.info(response.status); 
   response.json().then(data=>{
       data = data.filter(item=> item.completed === true);
       console.info(data);
    //for(i=0; i<=data.length; i++){
      //  for(data[i].completed === true)
      //  console.info(data[i].title);
  //  }
   });
   
}

executaFetch();

//fetch("xpto").then{response=> fetch("xyz")}