import { Injectable, IterableDiffers } from '@angular/core';
import { observable, computed, action, autorun, toJS, extendObservable, makeAutoObservable } from 'mobx';
import { OrganisationService } from '../services/organisations.service';
interface Person {
    firstName : string;
    lastName : string;
    patronymic : string;
}
export class Company {
    readonly ID : number;
    private _founder: Person;
    public get founder(): Person {
        return this._founder;
    }
    public set founder(value: Person) {
        this._founder = value;
    }
    protected _INN: number;
    public get INN(): number {
        return this._INN;
    }
    public set INN(value: number) {
        this._INN = value;
    }
    
    protected _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    protected _shortName: string;
    @observable public get shortName(): string {
        return this._shortName;
    }
    public set shortName(value: string) {
        this._shortName = value;
    }
    protected _address;
    public get address() {
        return this._address;
    }
    public set address(value) {
        this._address = value;
    }
    protected _numberPhone: number;
    public get numberPhone(): number {
        return this._numberPhone;
    }
    public set numberPhone(value: number) {
        this._numberPhone = value;
    }
    
    private _KPP : number;
    public get KPP() : number {
        return this._KPP;
    }
    public set KPP(value : number) {
        this._KPP = value;
    }
    private subsidiaries : Subsidiary[];
    constructor(id : number) {
        this.ID = id;
        this._name = "Название компании";
        this._shortName = "Короткое название компании";
        this.INN = 0;
        this.KPP = 0;
        this.address = 'Aдресс';
        this.numberPhone = 0;
        this.founder = {
            firstName : '',
            lastName : '',
            patronymic : ''
        }
        this.subsidiaries = [];
    }
    addSubsidiary(subsidiary : Subsidiary) {
        this.subsidiaries.push(subsidiary);
    }
    getSubsidiaries() : Subsidiary[] {
        return this.subsidiaries;
    }
    getSubsidiaryById(id : number) {
        return this.subsidiaries.find(el => el.ID == id)
    }
    getLastSubsidiariesId(): number {
        return this.subsidiaries[this.subsidiaries.length-1].ID;
    } 
}
export class Subsidiary extends Company {
    readonly ID : number;
    private _ceo : Person;
    public get ceo(): Person {
        return this._ceo;
    }
    public set ceo(value: Person) {
        this._ceo = value;
    }
    constructor(id : number) {
        super(id);
        this.ceo = {
            firstName : '',
            lastName : '',
            patronymic : ''
        }

    }

}
@Injectable({ providedIn: 'root' })
export class Store {

  orgs : Array<Company>;
  constructor(private orgsService : OrganisationService) {
      this.orgs = [];
      this.init(orgsService.getOrganisation())
      makeAutoObservable(this);
      autorun(() => {
        orgsService.updateOrganisation(this.orgs);
    })
  }
  getCompanies(): Array<Company> {
    return this.orgs;
  }
  getCompanyById(id : number) : Company {
      return this.orgs.find(el => el.ID == id)
  }
  getLastElementId(): number {
      return this.orgs[this.orgs.length-1].ID;
  }
  addCompany(company : Company) {
      this.orgs.push(company);
  }
  init(data) {
    let initItem = function(prop) : Company {
        let item = new Company(prop.id)
        item.INN = prop.INN;
        item.KPP = prop.KPP;
        item.name = prop.name;
        item.shortName = prop.shortName;
        item.founder = prop.founder;
        item.address = prop.address;
        item.numberPhone = prop.numberPhone;
        if (prop.subsidiaries) { 
            
            prop.subsidiaries.forEach(element => {
                item.addSubsidiary(initItem(element) as Subsidiary);
                 
            });
            return item;
        }
        else
          (item as Subsidiary).ceo = prop.ceo;
          return item;
        
        
    }
    for (var prop in data) {
        let item = initItem(data[prop]);
        this.addCompany(item);
    }
  }
}
