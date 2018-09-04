import { Platform } from "./platform";

export class Campaign {
    _id: Number;
    name: String;
    goal: String;
    totalBudget: Number;
    status: String;
    platforms: Map<string, Platform>

    constructor({ _id, name, goal, totalBudget, status, platforms }) {
        this._id = _id;
        this.name = name;
        this.goal = goal;
        this.totalBudget = totalBudget;
        this.status = status;
        let platformObjectsArray = Object.entries(platforms);
        let platformsArray = <[string, Platform][]>platformObjectsArray.map(item => [item[0], new Platform(<Platform>item[1])]);
        this.platforms = new Map(platformsArray);
    }
}

