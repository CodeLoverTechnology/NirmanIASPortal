var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

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
    res.write(`<select>
    <option value="CurrentAffairs">Current Affairs</option>
    <option value="ClassNotesPaper1">Class Notes Paper I</option>
    <option value="ClassNotesPaper2">Class Notes Paper II</option>
    <option value="ClassNotesPaper3">Class Notes Paper III</option>
    <option value="ClassNotesPaper4">Class Notes Paper IV</option>
    <option value="SpecialClasses">Special Classes</option>
    <option value="TestYourself">Test Yourself</option>
    <option value="TopersAnswerCopy">Topers Answer Copy</option>
    <option value="Magazine">Magazine</option>
    <option value="PrintedMaterial">Printed Material<option>
    <option value="FacultyPic">Faculty Pic<option>
    <option value="StudentPic">Student Pic<option>
  </select>
  `);
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
      }
  }).listen(8080);