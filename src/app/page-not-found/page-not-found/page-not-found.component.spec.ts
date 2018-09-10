import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from 'src/testing/router-link.stub';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let linkDe;
  let routerLink;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent, RouterLinkDirectiveStub ],
      imports: [MatToolbarModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // find DebugElement with an attached RouterLinkStubDirective
    linkDe = fixture.debugElement.query(By.directive(RouterLinkDirectiveStub));
    // get attached link directive instance using the DebugElement's injector
    routerLink = linkDe.injector.get(RouterLinkDirectiveStub);    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLink from template', () => {
    expect(routerLink.linkParams).toBe('/');
  });
  
  it('can click `Go back` link in template', () => {
    expect(linkDe.navigatedTo).toBeFalsy('should not have navigated yet');
    linkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(routerLink.navigatedTo).toBe('/');
  });

});
