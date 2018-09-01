import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsListComponent } from './campaigns/campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaigns/campaign-detail/campaign-detail.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
  },  
  { path: '',
    redirectTo: '/campaigns',
    pathMatch: 'full'
  },
  { path: '**', 
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
    data: {
      title: '404 - Not found!'
    } 
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
