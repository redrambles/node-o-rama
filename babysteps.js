//console.log(process.argv);

var total = 0;

for (i = 2; i < (process.argv.length); i++){
    
    total = Number(total) + Number((process.argv[i]));
}
    console.log(total);



