import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, Store, Subsidiary } from '../store/orgs.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company : Company;
  constructor(
    private route: ActivatedRoute,
    private service: Store,
  ) {
    
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {
    let company = this.service.getCompanyById(Number(this.route.snapshot.paramMap.get('id'))) 
    let id1 = this.route.snapshot.paramMap.get('id1');
    this.company = company;
    if (id1) {
       this.company = company.getSubsidiaryById(Number(id1));
    }
    
    
  }
  save() : void {
    console.log(0);
  }
  getSubsidiary() : void {
    //
  }
}