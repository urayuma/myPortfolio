var express = require("express");
var app = express();

app.use(express.static(__dirname));

// View Engineにpugを指定。
app.set('views', './src')
app.set('view engine', 'pug');

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});