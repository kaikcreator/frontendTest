import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatGridListModule, MatSidenavModule, MatListModule, MatProgressBarModule } from '@angular/material';

import { CampaignsListComponent } from './pages/campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './pages/campaign-detail/campaign-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignDetailOverviewComponent } from './pages/campaign-detail-overview/campaign-detail-overview.component';
import { CampaignDetailPlatformComponent } from './pages/campaign-detail-platform/campaign-detail-platform.component';
import { TargetAudienceComponent } from './components/target-audience/target-audience.component';
import { PlatformOverviewComponent } from './components/platform-overview/platform-overview.component';
import { StatusComponent } from './components/status/status.component';
import { CreativesComponent } from './components/creatives/creatives.component';
import { InsightsComponent } from './components/insights/insights.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatGridListModule
  ],
  declarations: [CampaignsListComponent, CampaignDetailComponent, CampaignDetailOverviewComponent, CampaignDetailPlatformComponent, TargetAudienceComponent, PlatformOverviewComponent, StatusComponent, CreativesComponent, InsightsComponent]
})
export class CampaignsModule { }
