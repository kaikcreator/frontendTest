import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [CampaignsListComponent, CampaignDetailComponent]
})
export class CampaignsModule { }
