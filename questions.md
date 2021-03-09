# Дополнительные вопросы


1. если в инпут привязку кидать через просто атрибут, то не создадуться функции привязки - специально смотрел скомпиленные исходники

Да, действительно. В случае, когда в `@Input()` передаем статическое значение дополнительные вотчеры не создаются (только для дев среды(ng-reflect-), но это мы не учитываем ).
Обновил пример - 1-content-generation/attribute-decorator/src/app/child/child.component.ts



2.  ViewContainerRef - почему так, почему не в сам контейнер ?

документация - https://angular.io/api/core/ViewContainerRef

*Root elements of views attached to this container become siblings of the anchor element in the rendered view.*

хорошая попытка объяснить - https://github.com/angular/angular/issues/9035#issuecomment-223983064

Перефразирую своими словами: 
ViewContainer - это просто "коробка", которая идет вместе с View.
View в данном случае это не просто шаблон, а нода со всеми свойствами подключенная к ChangeDetection 
(то что говорил вначале занятия о отличии определения View для ядра и пользователя)
Так вот в эту коробку, которая прицеплена к вью как сиблинг (с точки зрения оптимизации CD), можно что-то положить.
Именно поэтому, то что вы положили, не затирает шаблон.


3. ngAfterViewInit in Angular Element

`ngAfterViewInit` в  Angular Elements отрабатывает прекрасно.
расширил пример и добавил случай, когда элемент добавляется динамически потом - и все равно ngAfterViewInit срабаывает.
В вашем случае похоже проблема была в том, что ChangeDetection основного приложения и виджета не были синхронизированы.



4. Есть какой то способ уничтожать сервис после использования?

Нет, это не предусмотрено Ангуляром. 
Если мы посмотрим на исходных код инжектора - https://github.com/angular/angular/blob/master/packages/core/src/di/injector.ts#L152,
то увидим, что провайдеры регистрируются во внутреннем свойстве:
```
    private _records: Map<any, Record|null>;
```
Которое можно будет получить только переписав и подменив инжектор. 
Хорошие новости: сервисы удаляются вместе с инжектором. То есть, если у вас много севрисов, которые используются только в каких-то конкретных компонентах, 
то лучше их прописывать не в `root`, а определять в самом компоненте. Тогда сервис будет уничтожен вместе с компонентом.
Чтобы проверить, что сервис удален можно использовать хук `ngOnDestroy`, да это хук компонента, но работает также с сервисами.
Добавил пример - 3-di/service-destroy



5. unit tests with onPush: нельзя вызывать несколько раз CD
https://stackoverflow.com/questions/50137734/detectchanges-not-working-within-angular-test
https://github.com/angular/angular/issues/12313


Вот тут бы хорошо получить репозиторий с конкретной изолированной проблемой, чтобы более точно подсказать что подойдет.
Общие случаи решения: 
- выключать onPush (если нам это не принципиально в тесте):
    ```
    ...
        .overrideComponent(MyComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
        })
    ...    
    ```
- оборачивать в родительский компонент и менять Input
- делать fixture.detectChanges() только в it, но убрать из beforeEach



6. инкрементального DOM-а, как концепции в Angular?
https://habr.com/ru/post/448048/

В переводе статьи (как и в самом оригинале), попытались дать высокоуровневое понимание, которое не дало понимания вообще, ИМХО.
Чтобы лучше понять принципы Incremental dom я рекомендую идти сюда - http://google.github.io/incremental-dom/

Что касается Incremental dom и Angular.
Появился он вместе с Ivy, когда все шаблоны стали компилироваться в стиле Incremental dom (то что подсветил на занятии):
```
    core.ɵɵelementStart(0, "div", 0);
    core.ɵɵelementStart(1, "h1");
    core.ɵɵtext(2, 'Hello');
    core.ɵɵelementEnd();
    core.ɵɵelementEnd();
``` 
кстати "ɵ" - специальная буква, которой нет на клавиатуре, придуманная Ангулар разработчиками, чтобы поддерживать мнимую приватность методов (не выскочит подсказка случайно)       
Сделано это с фокусом на экономию памяти на мобильных устройствах.


7. как сделать чтобы при наследовании не прокидывать все инжекшены?

Единственный хак действительно - инжектирование глобального инжектора, и там уже по ситуации получать зависимости. 
Я понимаю что в вашей ситуации рефакторинг невозможен или практически невозможен, но с этим дополнительным хаком вы еще больше усложняете жизнь последующим разработчикам.


8. Reactive Forms native form submit
https://stackblitz.com/edit/angular-reactive-forms-gzcrnv?file=app%2Fapp.component.ts

Тут нужно определиться что вы хотите добиться:
- чтобы Ангуляр не обрабатывал формочку и работал нативный submit?
    тогда просто убираете директиву formGroup и добавляете ngNoForm (что скажет Ангуляру проигнорировать форму)
- обрабатывать форму Ангуляром, но при этом потом сделать нативный submit?
    тогда добавляем обработчку события ngSubmit:
    ```
     (ngSubmit)="onSubmit()"     
    ```
    у вас это почему-то в песочнице отсуствовало
    и методе onSubmit уже делаем нативный сабмит, предварительно передав в него ссылку на элемент формы `#myform`:
    ```
        onSubmit(myform) {
            myform.submit();
        }
    ```
    

9. module federation with shared state

Добавил пример для Module Federation (7-module-federation/module-federation-plugin-example), где 2 микрофронтенда используют один и тот же севис (то есть делят одни и теже данные)
для запуска выполняем:
`ng serve shell -o` - основное приложение
`ng serve mfe1` - вложенный микрофронтенд
На что обратить внимание: 
- используется общая внутренняя библиотека auth-lib, а в ней сервис AuthLibService (7-module-federation/module-federation-plugin-example/projects/auth-lib/src/lib/auth-lib.service.ts)
- компонент основного приложения изменяет значение сервиса (7-module-federation/module-federation-plugin-example/projects/shell/src/app/app.component.ts)
- это значение подхватывается компонентов микрофронтенда (7-module-federation/module-federation-plugin-example/projects/mfe1/src/app/flights/flights-search/flights-search.component.ts)
- присборке возникает ворнинг "DEP_WEBPACK_CHUNK_MODULES_ITERABLE" - версия под Ангуляр пока не стабильна, думаю в следующих релизах исправят