var fs=require('fs');

fs.rename('apple.txt','banana.txt',function(err){
    if(err) throw err;
    console.log("Renamed!");
});