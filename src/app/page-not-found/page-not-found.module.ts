import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule} from '@angular/material';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing';

/**
 * Page Not Found Module
 * The module of the Page Not Found component. Having this page in a separate module
 * allows a lazy loading usage of the page
 */
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    PageNotFoundRoutingModule,
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
