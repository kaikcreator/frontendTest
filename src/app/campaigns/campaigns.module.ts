import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatGridListModule, MatSidenavModule, MatListModule, MatProgressBarModule, MatIconModule } from '@angular/material';

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
import { LabeledChipsComponent } from './components/labeled-chips/labeled-chips.component';
import { KeysArrayPipe } from './pipes/keys-array.pipe';


/**
 * Campaigns Module
 * 
 * This module includes the whole campaigns feature 
 * (list and detail views, and required dependencies)
 */
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
    MatGridListModule,
    MatIconModule
  ],
  providers: [KeysArrayPipe],
  declarations: [CampaignsListComponent, CampaignDetailComponent, CampaignDetailOverviewComponent, CampaignDetailPlatformComponent, TargetAudienceComponent, PlatformOverviewComponent, StatusComponent, CreativesComponent, InsightsComponent, LabeledChipsComponent, KeysArrayPipe]
})
export class CampaignsModule { }
