import { Creatives } from './creatives';
import { Insights } from './insights';
import { TargetAudiance } from './target-audience';

export class Platform {
    status: String;
    totalBudget: Number;
    remainingBudget: Number;
    startDate: Date;
    endDate: Date;
    targetAudiance: TargetAudiance;
    creatives: Creatives;
    insights: Insights;

    constructor({ status, totalBudget, remainingBudget, startDate, endDate, targetAudiance, creatives, insights }) {
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