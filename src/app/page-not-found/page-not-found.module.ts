import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule} from '@angular/material';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing';


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
