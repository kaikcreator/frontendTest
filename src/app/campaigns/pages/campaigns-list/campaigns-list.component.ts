import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {

  public campaigns: Campaign[];
  constructor(private campaignsService: CampaignService) { }

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe(items => {
      this.campaigns = items;
    });
  }

}
