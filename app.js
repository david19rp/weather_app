
$(document).ready(function(){
    
    $("#submit").on('click',function(){
        
        let $inputValue = $("#inputVal").val();
        let $myKey = "&units=metric&APPID=d6ac9a8b8d7c463ad353c08b092e0cd9";
        let $myPoint = "https://api.openweathermap.org/data/2.5/weather?q="+$inputValue+$myKey;
        if($inputValue!= ''){
            $.get($myPoint, function (data,status) {
                let widget = show(data);
                $("#show").html(widget);
                // $("#inputVal").val('');
            })
        }else{
            $("#show").html("<h1>Put the name of the region, this is a error!! Alert! Alert!</h1>");
        }
    });
});

function show(data){
    return "<h2>"+data.name+"</h2>" +
    "<h3><strong>Weather</strong> : "+ data.weather[0].main+"</h3>" +
    "<h3><strong>Weather</strong> : "+ data.weather[0].description+"</h3>" +
    "<h3><strong>Temp</strong> : "+ data.main.temp+"</h3>" +
    "<h3><strong>Humidity</strong> : "+ data.main.humidity+"</h3>" 
}



  

   

// d6ac9a8b8d7c463ad353c08b092e0cd9



//Heredia,CR&appid=a7885bf35c64037d8462ae5f2ecbb0ac

