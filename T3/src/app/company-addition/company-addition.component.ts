import { Component, OnInit, Output } from '@angular/core';
import { Company, Store, Subsidiary } from '../store/orgs.store';
@Component({
  selector: 'app-company-addition',
  templateUrl: './company-addition.component.html',
  styleUrls: ['./company-addition.component.css']
})
export class CompanyAdditionComponent {
  company : Company;
  companies : Company[];
  parentID;
  typeCompany;
  firstName : string;
  lastName : string;
  patronymic : string;
  constructor(private service : Store) {
    this.companies = service.getCompanies();
  }
  add() {
    //костыль
    (this.company as Subsidiary).ceo.firstName = this.firstName;
    (this.company as Subsidiary).ceo.firstName = this.lastName;
    (this.company as Subsidiary).ceo.firstName = this.patronymic;

  }
  isFilial() {
    if (this.typeCompany === "Филиал") {
      return true;
    }
  }
  createHeadCompany() {
        const _id = this.service.getLastElementId();
        this.company = new Company(_id+1);
        this.service.addCompany(this.company);
      
  }
  createFilial() {
      let headCompany = this.service.getCompanyById(this.parentID);
      const _id = headCompany.getLastSubsidiariesId();
      this.company = new Subsidiary(_id+1);
      headCompany.addSubsidiary(this.company as Subsidiary);
  }
  
}
