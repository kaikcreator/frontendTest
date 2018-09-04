import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Campaign } from '../../models/campaign';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  campaign$: Observable<Campaign> = null;
  
  constructor(private campaignService: CampaignService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.campaign$ = this.route.paramMap.pipe(
      switchMap( params => {
        let idParam = params.get('id');
        let id = parseInt(idParam, 10);
        return this.campaignService.findCampaignById(id);
      }),
      tap(campaign => {
        if(!campaign){
          this.router.navigate(['/404']);
        }
      })
    );
  }

}
