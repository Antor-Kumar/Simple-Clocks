function displayTime (){
     let seconds = 0;
     let minutes = 0;
     let hours =0;
    setInterval( () =>{
        if(seconds >= 5){
            seconds =0;
        }
         else{
            seconds++;
            document.querySelector("#sec").innerText ="0"+seconds;
        }
        if(seconds==5){
            minutes++;
            document.querySelector("#min").innerText="0"+minutes;  
        }
        if(minutes==5){
            minutes=0;
            document.querySelector("#min").innerText="0"+minutes;
            hours++;
            document.querySelector("#hour").innerText="0"+hours;
        }
           
    },1000)
}
displayTime()

