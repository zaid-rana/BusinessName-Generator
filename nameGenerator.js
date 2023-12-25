const { stdin, stdout } = require('process');
const readline = require('readline');

const prefixes = ['Tech', 'Inno', 'Smart', 'Glo', 'Global', 'Nano', 'Eco', 'Vivo', 'Synth', 'Hyper'];
const suffixes = ['Hub', 'Labs', 'Solutions', 'Sys', 'Co', 'Tech', 'Net', 'Ware', 'Genius', 'Logic'];

function nameGenerator(){
    const firstChar = Math.floor(Math.random() * prefixes.length);
    const secondChar = Math.floor(Math.random() * suffixes.length);

    return prefixes[firstChar] + suffixes[secondChar];
}
// nameGenerator.js

function generatingName(){
    for(let i=0;i<=10;i++){
        console.log(nameGenerator());
    }
}

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question('enter something' , (userInput) => {

    prefixes.push(userInput);
    console.log(prefixes);
    generatingName();
    rl.close;
});
