const functions = require('firebase-functions');
const express = require('express');
const path = require("path")
const app = express();

// firebase cloud storage
const admin     = require('firebase-admin');
// const request   = require('request')

admin.initializeApp(functions.config().firebase);

exports.writeUrl = functions.storage.object().onFinalize((object) => {
  const bucketName = 'gs://myportfolio-20200130.appspot.com/'; // ご自身の
  const filePath = object.name;
  const db = admin.firestore();

  db.collection('img').add({
    filePath,
    downloadUrl: `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(filePath)}?alt=media`,
  }).then(() => console.log('Done')); // eslint-disable-line no-console
});

// View Engineにpugを指定。
// app.set('views', 'public')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());

app.use(express.static(__dirname));
// app.use(express.static(__dirname + '../public'));
// app.use('/views', express.static('img'))


app.get("/", function(req, res, next){
  res.render("index", {});
});

const api = functions.https.onRequest(app)
module.exports = {
  api
}

// exports.app = functions.https.onRequest(app);
// module.exports = {
//   api
// }