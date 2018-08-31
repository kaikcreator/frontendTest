import { MAT_PAGINATOR_INTL_PROVIDER_FACTORY } from "@angular/material";

export class Campaign {
    _id: Number;
    name: String;
    goal: String;
    totalBudget: Number;
    status: String;
    platforms: Map<string,Platform>
    
    constructor({_id, name, goal, totalBudget, status, platforms}){
        this._id = _id;
        this.name = name;
        this.goal = goal;
        this.totalBudget = totalBudget;
        this.status = status;
        let platformObjectsArray = Object.entries(platforms);
        let platformsArray = <[string,Platform][]>platformObjectsArray.map(item => [item[0], new Platform(<Platform>item[1])] );
        this.platforms = new Map(platformsArray);
    }
}

class Platform {
    status: String;
    totalBudget: Number;
    remainingBudget: Number;
    startDate: Date;
    endDate: Date;
    targetAudiance: TargetAudiance;
    creatives: Creatives;
    insights: Insights;

    constructor({status, totalBudget, remainingBudget, startDate, endDate, targetAudiance, creatives, insights}){
        this.status = status;
        this.totalBudget = totalBudget;
        this.remainingBudget = remainingBudget;
        this.startDate = startDate;
        this.endDate = endDate;
        this.targetAudiance = targetAudiance;
        this.creatives = creatives;
        this.insights = insights;

    }
};

class TargetAudiance{
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

class Creatives{
    header:string;
    header_1:string;
    header_2:string;
    description:string;
    url:string;
    image:string;
  };

class Insights{
    impressions: Number;
    clicks: Number;
    websiteVisits: Number;
    nanosScore: Number;
    costPerClick: Number;
    clickThroughRate: Number;
    advancedKpi_1: Number;
    advancedKpi_2: Number;

    constructor(){

    }
};
