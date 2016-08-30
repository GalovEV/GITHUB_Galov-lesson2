// Подключение модулей. Вызов встроенных методов.

var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var randomNumber = Math.random();
function random12 () {
	 return Math.floor(Math.random() * 2)+1;
}
function log(i){
 // Добавление данных к файлу
  fs.appendFile('./'+log_file, i+' ', function(err) {
   if (err) 
    throw err;
   });
}

var args = require('minimist')(process.argv.slice(2));
var log_file=args['_'][0];
//console.log('args is: ', log_file);
if (typeof log_file=='undefined') 
  log_file='log.txt';

rl.write('Игра "Орел или решка"!\n ');
//log('\n');
rl.write('Угадайте загаданное число 1 или 2?\n ');
rl.on('line', function(cmd) {
 var rand=random12 ();
// console.log(cmd);
 var rez=rand==cmd;
 log(+rez); 
 if (!rez)    
  console.log("Не угадали");
	else 
	 console.log("Угадали!");

  rl.question("Продолжаем? (Y/N)",	function(answer)	{
   if (answer=='y')
    console.log('Введите число');
   else
     rl.close();
  });
 // this.close(); // закрываем обработчик
});

