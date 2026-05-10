const input = document.querySelector("#input")
const button = document.querySelector(".btn")
const card = document.querySelector(".cards-container")

const apiKey = "fa0e7efcd6d94df99be171826261005"


button.addEventListener("click", ()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`)
    .then(res =>res.json())
    .then(res => {
        // console.log(res);
        
        card.innerHTML=` <div>
        
         <h2>${res.location.name}</h2>
         <p>Temperature :${res.current.temp_c}°C</p>
         <p>${res.current.condition.text}</p>
          <img src="https:${res.current.condition.icon}" alt="weather icon">
      </div>`+card.innerHTML;
      input.value=" ";
        
    }).catch(err =>{
        console.log(err);
        
    })
})