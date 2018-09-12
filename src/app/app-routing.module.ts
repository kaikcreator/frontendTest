import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsListComponent } from './campaigns/pages/campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaigns/pages/campaign-detail/campaign-detail.component';
import { CampaignDetailOverviewComponent } from './campaigns/pages/campaign-detail-overview/campaign-detail-overview.component';
import { CampaignDetailPlatformComponent } from './campaigns/pages/campaign-detail-platform/campaign-detail-platform.component';


const routes: Routes = [
  {
    path: 'campaigns',
    component: CampaignsListComponent,
    data: {
      title: 'campaigns'
    }
  },
  {
    path: 'campaigns/:id',
    component: CampaignDetailComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: CampaignDetailOverviewComponent},
      {path: ':platform', component: CampaignDetailPlatformComponent},
    ]
  },
  { path: '',
    redirectTo: '/campaigns',
    pathMatch: 'full'
  },
  { path: '404',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
    data: {
      title: '404 - Not found!'
    }
  },
  { path: '**',
    redirectTo: '404'
  }
];

/**
 * App Routing Module
 * This module contains all the routes of the application
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
