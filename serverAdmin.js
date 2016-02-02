var http    = require('http');
var server  = http.createServer();
var port    = 9001;



var exec = require('child_process').exec;

var child;

server.on('request', function(req, res){
    
    child = exec("ps aux | awk '{if($3>0 || $4>0){cpu+=$3;mem+=$4}}END{print cpu,mem}'", function (error, stdout, stderr) {

        var result = stdout.split(" ");
        var server ={
            
                cpu:result[0].trim(),
                mem:result[1].trim()
            
        }
        if (error !== null) {

            console.log('exec error: ' + error);
            
        }
 var body = "{\"nikos\":\"fata\"}";
res.writeHead(200, {
  'Content-Length': body.length,
  'Content-Type': 'application/json' });
  res.write(body);

  res.end();
});});

server.on('listening', function(){
  console.log('Listening to ', port);
});

server.on('error', function(err){
  console.log(err);
});

server.listen(port);

// app.get('/serverStat',function(req,res){
	
//     child = exec("ps aux | awk '{if($3>0 || $4>0){cpu+=$3;mem+=$4}}END{print cpu,mem}'", function (error, stdout, stderr) {

//         var result = stdout.split(" ");
//         var server ={
            
//                 cpu:result[0].trim(),
//                 mem:result[1].trim()
            
//         }
//         if (error !== null) {

//             console.log('exec error: ' + error);
            
//         }
      
      
//          res.send({ some: 'json' });

// //       console.log(res.headersSent); // false
// //   res.send('OK');
//   console.log(res);
//     });
// });




