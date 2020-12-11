# T3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.
## Комментарии к работе
Я делал это задание почти в полевых условиях. Так как мой основной ноутбук умер, мне пришлось откопать очень старый ноубук, на нем есть аж два гб оперативной памяти. Ну, не беда, всегда же можно поставить линукс 32битный. Класс подумал я, но не тут то было. Дело в том, что новые ноды почему то не выпускаются на 32 бита под линукс, но есть под виндоус. Я не понимиаю почему. Я был вынужден ставить старую ноду, но проблема в том что angular-cli требует новые ноды. Я даже попытался собрать из исходников, что заняло у меня 3 часа, которые завершились с ошибкой. Я подумал, что замечательно было бы (нет) поставить 64битную операционку. Но компьютер стал очень жестко тормозить. ng-serve  клал его на лопатки на минуты две. Это было суровая разработка! Поэтому она затянулось, поэтому код мягко говоря не очень. Но все работае, хотя не так как я хотел. Я признаю свои ошибки и подписываю их словом костыль. Дедлайн нужно соблюдать. Я не прописывал сервисы для работы с запросами, хотя я знаю как это сделать. Вместо этого у меня просто функции заглужки.Мне хотелось сделать все красиво, но получилось как всегда. Хотя я вряд ли могу обьективно оценить свой код. Я понимаю, что нарушаю прицниа DRY, у меня идентичные шаблоны, для почти одинаковых компонентов. А на систему аутентификации лучше не смотреть. Обновление на сервер вынесен в mobx-autorun, но это работает, и я не знаю почему. Данные с сервера я просто прописал в service, так делать нельзя понимаю, лучше вынести все в отдельный файл. Я использовал классы для сущностей, а не интерфейсы, что мне помогло бы очень легко инициализировать сущности, но классы практичнее и удобны для создания нового объекта, а метод init у store - это страшно. 
В общем жду ваших замечаний.
## При запуске
При запуске сайта, вас встретит форма логина и пароль. Для того чтобы протестировать права администратора введите в логин admin пароль 12345, чтобы обычного пользователя введите в поле логин user, пароль password. Для редактирования компании нажмите на имя компании в карточке.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
