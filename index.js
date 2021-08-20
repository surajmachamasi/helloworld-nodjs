const express = require ('express'),
        app = express(),
        PORT= 8080;

app.get('/',(req,res)=>{
        res.send('Hello World');
})

app.listen(PORT,() => {
        console.log('Server listening on port ' + PORT );
})
