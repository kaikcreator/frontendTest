import { Component, OnInit } from '@angular/core';

/**
 * Page Not Found component
 *
 * A 404 page to render when navigating to an invalid route
 */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
