
$(document).ready(function(){
    
    $("#submit").on('click',function(){
        
        let $inputValue = $("#inputVal").val();
        let $myKey = "&APPID=d6ac9a8b8d7c463ad353c08b092e0cd9";
        let $myPoint = "https://api.openweathermap.org/data/2.5/weather?q="+$inputValue+$myKey;
        console.log($myPoint);
        if($inputValue!=""){
            $.get($myPoint, function (data,status) {
                console.log("the temp is" +" "+ data);
                // let total = data.weather[0];    
                // return "<p>total</p>";    
            })
        }else{
            console.log("salio");
        }
    });
});



  

   

// d6ac9a8b8d7c463ad353c08b092e0cd9



//Heredia,CR&appid=a7885bf35c64037d8462ae5f2ecbb0ac

