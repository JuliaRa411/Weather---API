const api = {
endpoint: "https://api.openweathermap.org/data/2.5/",
key:"d3648ce47228d3bbbb9a909945caf081"
}

const input = document.querySelector("#input")
input.addEventListener("keypress" ||"click", enter)


function enter(e){
    if (e.keyCode === 13) {
        getInfo(input.value);
      }
}

async function getInfo(data){
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
const result = await res.json();
displayResult(result)
}

function displayResult(result){

    // CITY
    let city = document.querySelector("#city")
    city.textContent = `${result.name}, ${result.sys.country}`;

      // TEMPERATURE
      let temperature = document.querySelector("#temperature");
      temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

      // FEELS LIKE
      let feelsLike = document.querySelector("#feelsLike");
      feelsLike.innerHTML ="Feels Like:" + " "+ `${Math.round(result.main.feels_like)}<span>°</span>`;
  
     // CONDITIONS
      let conditions = document.querySelector("#conditions");
      conditions.innerHTML = `${result.weather[0].main}`;
        
    // VARIATION (MIN - MAX TEMPERATURE)
      let variation = document.querySelector("#variation");
      variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`
     
 


      getOurDate();
  }
  function getOurDate() {
    const myDate = new Date();
    console.log(myDate)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];
  
    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

     let year = myDate.getFullYear();

     let showDate = document.querySelector("#date");
     showDate.textContent = `${day}` + ", " + `${todayDate}` + " " + `${month}` + " " + `${year}` 
}
 // Adittional

 let text = "Find your perfect weather . . ."
let i = 0;
let speed = 300;

function type(){
if (i <text.length){
document.querySelector("#par"). textContent+=text.charAt(i);
    i++
setInterval(type, speed)
}

}
type();

//
gsap.from("#input",{
y:350, duration:4,delay:0.3


})