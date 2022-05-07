const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/health",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Successful connection.");
}).catch((e)=>{
    console.log("Some error in connection.. : "+e);
});