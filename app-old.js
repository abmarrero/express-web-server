
const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'}); 
    // res.writeHead('Content-Disposition','attachment; filename=lista.csv'); 
    // res.writeHead(200, {'Content-Type': 'application/csv'}); 

    // res.write('id, name\n');
    // res.write('id, Fernando\n');
    // res.write('id, Abel\n');
    // res.end();

    



})
.listen(8080);


console.log('escuchando el puerto', 8080)