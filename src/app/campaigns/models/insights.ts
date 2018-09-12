/**
 * Insights Model
 *
 * Class representing an insights object
 */
export class Insights {
    impressions: Number;
    clicks: Number;
    websiteVisits: Number;
    nanosScore: Number;
    costPerClick: Number;
    clickThroughRate: Number;
    advancedKpi_1: Number;
    advancedKpi_2: Number;

    constructor(data) {
        this.impressions = data.impressions;
        this.clicks = data.clicks;
        this.websiteVisits = data.websiteVisits;
        this.nanosScore = data.nanosScore;
        this.costPerClick = data.costPerClick;
        this.clickThroughRate = data.clickThroughRate;
        this.advancedKpi_1 = data.advancedKpi_1;
        this.advancedKpi_2 = data.advancedKpi_2;
    }
}
