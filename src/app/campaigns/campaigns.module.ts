import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatGridListModule, MatSidenavModule, MatListModule, MatProgressBarModule } from '@angular/material';

import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignInfoComponent } from './campaign-info/campaign-info.component';
import { CampaignPlatformComponent } from './campaign-platform/campaign-platform.component';
import { TargetAudienceComponent } from './components/target-audience/target-audience.component';
import { PlatformOverviewComponent } from './components/platform-overview/platform-overview.component';
import { StatusComponent } from './components/status/status.component';



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
  declarations: [CampaignsListComponent, CampaignDetailComponent, CampaignInfoComponent, CampaignPlatformComponent, TargetAudienceComponent, PlatformOverviewComponent, StatusComponent]
})
export class CampaignsModule { }
