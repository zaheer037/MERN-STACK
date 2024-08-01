var fs=require('fs');

fs.appendFile('apple.txt','yes, white crows are flying',function(err){
    if(err) throw err;
    console.log('Updated!');
});