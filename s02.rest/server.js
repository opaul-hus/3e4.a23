//const chalk= require('chalk'); ancienne facon de faire
import chalk from 'chalk';

import app from './src/app.js';

const PORT = 3000;
app.listen(PORT, err =>{
    
    //Nous avons une erreur
    if(err){
        console.log(chalk.bold.red(err));
        process.exit(1);
    }

    console.log(chalk.green.bold(`👍 Serveur en fonction sure le ${PORT} 👍`));

})

console.log(chalk.blue.bold.underline.strikethrough('😄 Un bonjour en couleur '));
