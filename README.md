# Плагин для переключения табов

## Описание

Управление осуществляется с помощью дата атрибутов, что позволяет скрывать и показывать сразу несколько блоков на странице, в различных местах.

Активность переключается с помощью указанного вами css класса.

Поддерживает CommonJS и ESModules

## Установка

`npm i tabs-maffin`

## Подключение

CommonJS:
`const Tabs = require("tabs-maffin");`

ESModules:
`import {Tabs} from "tabs-maffin";`

## Использование

На переключателях прописываем дата атрибут data-tab-item равный дата атрибуту data-tab-name на самих табах

Пример:

```
<button class="tab__btn active" data-tab-name="tab-1">toggler 1</button>
<button class="tab__btn" data-tab-name="tab-2">toggler 2</button>

<div class="tab__item" data-tab-item="tab-1">tab item 1</div>
<div class="tab__item" data-tab-item="tab-2">tab item 2</div>
```

В js файле после подключения прописываем

```
const tabsExampleOne = new Tabs({togglerSelector: ".tab__btn", activityTogglerClass: "active", activityTabClass: "active"});
tabsExampleOne.init();
```

Дополнительные опции:

isRadio - переключатель явлется input type radio

isOneToggler - единственный переключаетель

Остальные примеры на CodePen
https://codepen.io/vafinartem/pen/RwjJxab
