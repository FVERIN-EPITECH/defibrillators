/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const LON = parseFloat(readline().replace(',', '.'));
 const LAT = parseFloat(readline().replace(',', '.'));
 const N = parseInt(readline());
 var obj = [];
 
 function calculDist(lon, lat){
     var x = (lon-LON)*Math.cos((LAT+lat)/2);
     var y = (lat - LAT);
     var d = (Math.sqrt((x*x)+(y*y)))*6371;
     return d;
 }
 
 for (let i = 0; i < N; i++) {
     const DEFIB = readline();
     obj = DEFIB.split(";");
     var name = obj[1];
     var lon = parseFloat(obj[4].replace(',', '.'));
     var lat = parseFloat(obj[5].replace(',', '.'));
     d = calculDist(lon, lat)
     if(i == 0){
         distanceTmp = d;
         nameToReturn = name;
     }
     else{
         if(d < distanceTmp){
         distanceTmp = d;
         nameToReturn = name;
         }
     }
 }
 
 console.log(nameToReturn);