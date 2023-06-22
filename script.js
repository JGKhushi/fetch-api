let p=fetch("https://goweather.herokuapp.com/weather/Shimla")
// p.then(value)=>{
//   return value1
//   )}.then(value2)=>{
//   return value2.json

//   }
// }
p.then((response)=>{
  console.log(response.status)//b/w 200-299  
    console.log(response.ok)
    // console.log(response.text())
    console.log(response.headers)
  return response.json()
      })
.then(value2=>{console.log(value2)})
//2times .then because 2-stage process