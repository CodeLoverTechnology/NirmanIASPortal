const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')

const cors = require('cors');

const app = express();
const router = express.Router();


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
var port =8080;

http.use(cors(corsOptions));
const upload = require('./upload');
http.post('/upload', upload);

http.listen(port, () => {
  console.log('Server started!');
});

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.path;
          var newpath = 'E:/Self/testProject/NodeServerExample/FileUploaded/' + files.filetoupload.name;
          fs.copyFileSync(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
        });
      } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
      }
  }).listen(port);