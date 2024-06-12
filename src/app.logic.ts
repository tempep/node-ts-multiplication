import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

console.log(yarg);

const writeTableOnFile = (base: number, limit: number, show: boolean) => {

    const headerMessage: string = `
========================================
        Tabla del ${base}
========================================\n`;
    let outputMessage: string = '';
    for (let index = 1; index <= limit; index++) {
        outputMessage += `${base} x ${index} = ${ (base * index) }\n`;
    }
    outputMessage = headerMessage + outputMessage;

    const outputPath: string = `outputs/`;
    const filename: string = `${ outputPath }/tabla-${base}.txt`;
    
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(filename, outputMessage);
    
    console.log('Tabla guardada!');
    if ( show ) console.log(outputMessage);
}

writeTableOnFile( yarg.b, yarg.l, yarg.s );