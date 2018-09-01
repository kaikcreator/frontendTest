import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsListComponent } from './campaigns/campaigns-list/campaigns-list.component';
import { CampaignDetailComponent } from './campaigns/campaign-detail/campaign-detail.component';
import { CampaignInfoComponent } from './campaigns/campaign-info/campaign-info.component';
import { CampaignPlatformComponent } from './campaigns/campaign-platform/campaign-platform.component';


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
    children:[
      {path: '', redirectTo:'overview', pathMatch:'full'},
      {path: 'overview', component:CampaignInfoComponent},
      {path: ':platform', component:CampaignPlatformComponent},
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
