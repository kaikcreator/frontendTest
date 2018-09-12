import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Campaign } from '../../models/campaign';
import { Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Campaigns Detail Component
 * 
 * This component displays a side menu to access the overview information
 * of the campaign, as well as the details of each platform available in the campaign.
 * The overview option is selected by default.
 * 
 * It expects the campaign id in the url, so it can retrieves the campaign by using the 
 * CampaignService.
 */
@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  campaign$: Observable<Campaign> = null;
  private _mobileQueryListener: () => void;

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    private route: ActivatedRoute,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
      //listen to media query event to leave open or not the side menu
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);

      //register menu icon
      this.iconRegistry.addSvgIcon(
        'menu',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg')
      );
  }

  ngOnInit() {
    this.campaign$ = this.route.paramMap.pipe(
      switchMap( params => {
        const idParam = params.get('id');
        const id = parseInt(idParam, 10);
        return this.campaignService.findCampaignById(id);
      }),
      tap(campaign => {
        if (!campaign) {
          this.router.navigate(['/404']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
