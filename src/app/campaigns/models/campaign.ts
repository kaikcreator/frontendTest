import { Platform } from './platform';

/**
 * Campaign Model
 * 
 * Class representing a campaign object
 */
export class Campaign {
    _id: Number;
    name: string;
    goal: string;
    totalBudget: Number;
    status: string;
    platforms: Map<string, Platform>;

    constructor({ _id, name, goal, totalBudget, status, platforms }) {
        this._id = _id;
        this.name = name;
        this.goal = goal;
        this.totalBudget = totalBudget;
        this.status = status;
        const platformObjectsArray = Object.entries(platforms);
        const platformsArray = <[string, Platform][]>platformObjectsArray.map(item => [item[0], new Platform(<Platform>item[1])]);
        this.platforms = new Map(platformsArray);
    }
}

