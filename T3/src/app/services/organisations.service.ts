import { Injectable } from "@angular/core";
import { Company } from '../store/orgs.store';

//Подобные обьекты должны приходить с сервера, но у меня его нет, так что вот такой костыль
let objs = {
    1 : {
      id : 1,
      name : "Microsoft",
      shortName : 'mcsf',
      INN : 100,
      KPP : 11,
      founder : {
          firstName : "Bill",
          lastName : "Gates",
          patronymic : "Rub",
      },
      address : "Seattle",
      numberPhone : 103020,
      subsidiaries : [
        {
            id : 1,
            name : "Microsoft Studio",
            shortName : 'ggl',
            INN : 11,
            founder : {
                firstName : "Bill",
                lastName : "Gates",
                patronymic : "Rub"
            },
            address : 'dsss',
            numberPhone : 12345,
        }
      ]
    },
    2 : {
      id : 2,
      name : "Google",
      shortName : 'ggl',
      INN : 101,
      KPP : 12,
      founder : {
        firstName : "Sergey",
        lastName : "Brin",
        patronymic : "Михайлович",
    },
      address : "Seattle",
      numberPhone : 103020,
      subsidiaries : [
        {
            id : 1,
            name : "HTC",
            shortName : 'ggl',
            INN : 11,
            founder : {
                firstName : "Name",
                lastName : "Surname",
                patronymic : "Rub"
            },
            address : 'dsss',
            numberPhone : 12345,
        }
      ]
    },
    3 : {
        id : 3,
        name : "Apple",
        shortName : "appl",
        INN : 102,
        KPP : 13,
        founder : {
            firstName : "Bill",
            lastName : "Gates",
            patronymic : "Rub",
        },
        address : "Seattle",
        numberPhone : 103020,
        subsidiaries : [
            {
                id : 1,
                name : "Beats",
                shortName : 'bbt',
                INN : 101,
                founder : {
                    firstName : "XX",
                    lastName : "YY",
                    patronymic : "DD"
                },
                address : 'dsss',
                numberPhone : 12345,
            }
          ]
    }
}


@Injectable({providedIn : "root"})
export class OrganisationService {
    // Здесь должен быть запрос с сервера, но я просто верну JS обьект
    
    getOrganisation() {
        return objs;
    }
    // Здесь должен быть запрос на сервер
    updateOrganisation(orgs : Company[]) {
       //
    }
}
