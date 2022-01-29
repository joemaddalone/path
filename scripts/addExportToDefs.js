var fs = require('fs');
fs.appendFile('./dist/path.d.ts', 'export default Path;', function (err) {
  if (err) {
    console.log(err);
  }
});
