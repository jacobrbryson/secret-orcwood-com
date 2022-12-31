const express = require("express")
const app=express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.listen(8100, function() { 
	console.log('Server running on port 8100'); 
});

require('./routes')(app);