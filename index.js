var express = require('express');
var app = express();
app.set('view engine','ejs');

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});


app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/', urlencodedParser ,function(req,res){
    console.log(req.body);
    res.render('success',{data: req.body});
});

app.get('/about/',function(req,res){
    res.render('about');
    console.log(req.query);
});

app.get('/news/:id',function(req,res){
    var obj = {title: 'Новость', id:4,paragraphs: ['Параграф',2,3,4]};
    res.render('news',{newsId: req.params.id,obj:obj});
    console.log(req.query);
});



app.listen(3000);



