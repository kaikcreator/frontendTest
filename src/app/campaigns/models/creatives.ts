/**
 * Creatives Model
 * 
 * Class representing a creatives object
 */
export class Creatives {
    header: string;
    header_1: string;
    header_2: string;
    description: string;
    url: string;
    image: string;

    constructor(data) {
        this.header = data.header;
        this.header_1 = data.header_1;
        this.header_2 = data.header_2;
        this.description = data.description;
        this.url = data.url;
        this.image = data.image;
    }
}
