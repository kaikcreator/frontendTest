import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';

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
    MatChipsModule
  ],
  declarations: [CampaignsListComponent, CampaignDetailComponent]
})
export class CampaignsModule { }
