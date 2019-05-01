
$(document).ready(function(){
    let $myPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    $("#submit").on('click',function(){
        let $inputValue = $("#inputVal").val();
        
        if($inputValue!= ""){
            console.log($inputValue);
        }else{
            console.log("salio");
        }
    });
});



  

    // $.get($myPoint, function (data,status) {
        
    // })

// d6ac9a8b8d7c463ad353c08b092e0cd9



//Heredia,CR&appid=a7885bf35c64037d8462ae5f2ecbb0ac

