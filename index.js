const submitData = () => {
  const userData ={name : "Steve",email : "steve@steve.com"}

  return fetch("http://localhost:3000/users",{
    method : "POST",
    headers : {
      "content-Type":"application/json",
      Accept : "application/json",
    },
    body:JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data =>{
    document.body.innerHTML = data.id
  })
  .catch(err => {
    document.body.innerHTML = err.message
    alert("incorrect!")
  })
}