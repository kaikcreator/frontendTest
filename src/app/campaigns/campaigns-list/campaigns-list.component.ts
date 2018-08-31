import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../shared/campaign.service';
import { Campaign } from '../shared/campaign';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {

  public campaigns:Campaign[];
  constructor(private campaignsService:CampaignService) { }

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe(items =>{
      this.campaigns = items;
    })
  }

  statusColor(status:string){
    let colors = {
      'mat-primary' : status === 'Delivering',
      'mat-warn' : status === 'Ended',
      'mat-disabled' : status === 'Scheduled',
    };

    return colors;
  }

}
