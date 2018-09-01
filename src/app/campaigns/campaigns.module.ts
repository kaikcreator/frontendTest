import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatSidenavModule } from '@angular/material';

import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { HttpClientModule } from '@angular/common/http';



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
    MatSidenavModule
  ],
  declarations: [CampaignsListComponent, CampaignDetailComponent]
})
export class CampaignsModule { }
