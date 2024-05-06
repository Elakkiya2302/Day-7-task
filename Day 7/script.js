var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
var arr  = result.filter((ele)=>ele.region);
console.log(arr);
var array=arr.map((ele)=>ele.region);
console.log(array);    
}
Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    var res = result.filter((ele)=>ele.population<200000);
console.log(res)
var result=res.map((ele)=>ele.population);
console.log(result)

}

var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
     result.forEach(element => {
        console.log(element.name,element.capital,element.flag);    
    });
}
var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
   var res=result.map((ele)=>ele.population);
    console.log(res)
    var arr= res.reduce((acc,ele)=>acc+ele);
    console.log(arr)
    
}

var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for (var i=0;i<result.length;i++){
        var uscurrencies = result[i].uscurrencies;        
        console.log("uscurrencies"+uscurrencies);
    
    }
    
}




s