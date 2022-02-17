
 
setInterval(function getTime() {
    
   const dateNow = new Date();

    document.querySelector(".clock").innerHTML =
    dateNow.getHours().toString().padStart(2,'0')+
    ":"+dateNow.getMinutes().toString().padStart(2,'0')+
    ":"+dateNow.getSeconds().toString().padStart(2,'0');

    
}
,1000);


let dateTarget = new Date("2022-02-17T12:30:00");

var countdown = setInterval(function getTime() {
    const dateNow = new Date();
    
    let differenz = dateTarget - dateNow;

    const hours = Math.floor((differenz / 1000 / 60 / 60) % 24 ).toString().padStart(2,'0');
    const minutes = Math.floor((differenz / 1000 / 60) % 60).toString().padStart(2,'0');
    const seconds = Math.floor((differenz / 1000) % 60).toString().padStart(2,'0');
    
    if (differenz > 0) {
        document.querySelector(".timer").innerHTML =`${hours}:${minutes}:${seconds}`;
    } else {
        document.querySelector(".timer").innerHTML = "Deadline"
    }
    

   
}
,1000);


document.querySelector(".date-button").addEventListener("click", function() {

    dateTarget = new Date(document.querySelector(".date-input").value);


});
