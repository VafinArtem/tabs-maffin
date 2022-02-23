# Плагин для переключения табов

## Описание

Поддерживает CommonJS и ESModules

## Установка

`npm i tabs-maffin`

## Подключение

CommonJS:
`const Tabs = require("tabs");`

ESModules:
`import {Tabs} from ("tabs");`

## Использование

На переключателях прописываем дата атрибут data-tab-item равный дата атрибуту data-tab-name на самих табах

Пример:
`<button class="tab__btn active" data-tab-name="tab-1">toggler 1</button>
<button class="tab__btn" data-tab-name="tab-2">toggler 2</button>

<div class="tab__item" data-tab-item="tab-1">tab item 1</div>
<div class="tab__item" data-tab-item="tab-2">tab item 2</div>`

В js файле после подключения прописываем

`const tabsExampleOne = new Tabs(".tab__btn", "active"); tabsExampleOne.init();`

Остальные примеры на CodePen
https://codepen.io/vafinartem/pen/RwjJxab
