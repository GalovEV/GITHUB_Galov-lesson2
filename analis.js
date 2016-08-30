// Подключение модулей. Вызов встроенных методов.

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var args = require('minimist')(process.argv.slice(2));
var log_file=args['_'][0];
//console.log('args is: ', log_file);
if (typeof log_file=='undefined') 
  log_file='log.txt';

rl.write('Игровая статистика:\n');


fs.readFile('./'+log_file, function (err, logData) {
    if (err) throw err;

 var text = logData.toString().trim();
 
 var line = text.split(' '),kolp=0, maxv=0,maxvp=0,maxpp=0;
 
 kolp =line.length;
 rl.write("Общее количество партий:"+kolp+'\n ');
  var maxr0=0,maxr1=0;
 
 line.forEach(function(r) {
      if (r==1){ 
	   maxv++;
	   if (maxr0>maxpp) 
			maxpp=maxr0;
       maxr0=0; maxr1++;
	   }else{
	    if (maxr1>maxvp) 
			maxvp=maxr1;
        maxr1=0; maxr0++;
	   }
 });
	rl.write("Количество выигранных партий:"+maxv+'\n ');	
	rl.write("Количество проигранных партий:"+(kolp-maxv)+'\n ');
	rl.write("Cоотношение партий:"+((maxv/(kolp-maxv)).toFixed(1))+'\n ');
	rl.write("Максимальное число побед подряд:"+maxvp+'\n ');
	rl.write("Максимальное число проигрышей подряд:"+maxpp+'\n ');
	
 rl.close();
});








