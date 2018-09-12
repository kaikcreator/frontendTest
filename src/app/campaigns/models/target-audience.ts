/**
 * Target Audiance Model
 *
 * Class representing a target audiance object
 */
export class TargetAudiance {
    languages: string[];
    genders: string[];
    age: {
        min: Number;
        max: Number;
    };
    locations: string[];
    interests: string[];
    keywords: string[];

    constructor(data) {
        this.languages = data.languages;
        this.genders = data.genders;
        this.age = data.age;
        this.locations = data.locations;
        this.interests = data.interests;
        this.keywords = data.keywords;
    }
}
