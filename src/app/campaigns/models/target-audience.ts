export class TargetAudiance {
    languages: String[];
    genders: String[];
    age: {
        min: Number;
        max: Number;
    };
    locations: String[];
    interests: String[];
    keywords: String[];
}