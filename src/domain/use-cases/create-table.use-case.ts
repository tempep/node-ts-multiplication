
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(

    ) { }

    execute({ base, limit = 10 }: CreateTableOptions): string {
        const headerMessage: string = `
========================================
        Tabla del ${base}
========================================\n`;
        let outputMessage: string = '';
        for (let index = 1; index <= limit; index++) {
            outputMessage += `${base} x ${index} = ${(base * index)}\n`;
        }
        outputMessage = headerMessage + outputMessage;
        return outputMessage;
    }



}