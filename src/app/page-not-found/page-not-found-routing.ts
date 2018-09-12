import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * Page Not Found Routing Module
 *
 * The route for the page not found page
 */
const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
