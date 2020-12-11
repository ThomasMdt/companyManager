import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { Company, Store } from '../store/orgs.store';
@Component({
  selector: 'app-companies',
  templateUrl: './app-companies.component.html',
  styleUrls: ['./app-companies.component.css']
})
export class AppCompaniesComponent implements OnInit {
  companies: Array<Company>;
  @ViewChild('listTemplate', {static: false}) listTemplate: TemplateRef<any>;
  @ViewChild('treeViewTemplate', {static: false}) treeViewTemplate: TemplateRef<any>;
  constructor(private orgService : Store)  { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companies = this.orgService.getCompanies();
  }
  templateType : TemplateRef<any>;
  toggleListView = () => {  this.templateType = this.listTemplate };
  toggleTreeView = () => { this.templateType = this.treeViewTemplate };
}
