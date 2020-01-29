var express = require("express");
var app = express();

// app.use(express.static(__dirname + "/node_modules/jquery/dist/"));
app.use(express.static(__dirname + 'js/main.js'))
// app.use("/js/main.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/bootstrap/js/bootstrap..js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/bootstrap/js/bootstrap.min.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/easing/easing.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/easing/easing.min.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/easing/helpers/jquery.fancybox-buttons.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/easing/helpers/jquery.fancybox-media.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/easing/helpers/jquery.fancybox-thumbs.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/jQuery/jquery.js/", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/jQuery/jquery.min.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/lib/stellar/stellar.min.js", express.static(__dirname + "/node_modules/jquery/dist/"));
// app.use("/js", express.static('./js/'));
// app.use("/lib", express.static('./lib/'));
// app.use(express.static(__dirname + "http://localhost:3000/js/main.js/"));
// app.use(express.static(__dirname + "/lib"));
app.use(express.static(__dirname));

// app.use(express.static(__dirname + "/node_modules/jquery/dist/"))
// app.use(express.static(__dirname + "lib"))
// app.use(express.static(__dirname + "js"))



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