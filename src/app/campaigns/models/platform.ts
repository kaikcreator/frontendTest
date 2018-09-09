import { Creatives } from './creatives';
import { Insights } from './insights';
import { TargetAudiance } from './target-audience';

export class Platform {
    status: string;
    totalBudget: Number;
    remainingBudget: Number;
    startDate: Date;
    endDate: Date;
    targetAudiance: TargetAudiance;
    creatives: Creatives;
    insights: Insights;

    constructor(data) {
        this.status = data.status;
        this.totalBudget = data.totalBudget;
        this.remainingBudget = data.remainingBudget;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetAudiance = data.targetAudiance;
        this.creatives = data.creatives;
        this.insights = data.insights;
    }
};