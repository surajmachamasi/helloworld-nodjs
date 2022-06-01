const express = require ('express'),
        app = express(),
        PORT= 3000;

app.get('/',(req,res)=>{
        res.send('Hello World');
})

app.listen(PORT,() => {
        console.log('Server listening on port ' + PORT );
})
