import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatSidenavModule, MatListModule, MatProgressBarModule } from '@angular/material';

import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignInfoComponent } from './campaign-info/campaign-info.component';
import { CampaignPlatformComponent } from './campaign-platform/campaign-platform.component';



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
    MatProgressBarModule
  ],
  declarations: [CampaignsListComponent, CampaignDetailComponent, CampaignInfoComponent, CampaignPlatformComponent]
})
export class CampaignsModule { }
