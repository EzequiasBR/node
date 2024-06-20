//Node js module file system
const fs = require('fs');

fs.readFile('./dados.csv', (err, data)=>{
   if(err){
    console.log(err);  
   }
   else
   {
      console.log(data.toString());
   }
})