export class Tabs {
  constructor(togglerSelector, activityClass, isRadio, isOneToggler) {
    this.togglerSelector = togglerSelector;
    this.togglerElements = document.querySelectorAll(this.togglerSelector);
    this.activityClass = activityClass;
    this.isRadio = isRadio;
    this.isOneToggler = isOneToggler;

    this.currentTabItems = [];
    this.curentToggler;
    this.radioName;
    this.radioValue;

    this._onToggleClick = this._onToggleClick.bind(this);
  }

  _setCurrentTabItems(tabElement) {
    this.currentTabItems.push(tabElement);
  }

  _clearCurrentTabItems() {
    this.currentTabItems = [];
  }

  _addActivityClass(element) {
    element.classList.add(this.activityClass);
  }

  _removeActivityClass(element) {
    element.classList.remove(this.activityClass);
  }

  _setActivityTab(togglerElement, isFirstInit) {
    const name = togglerElement.dataset.tabName;

    const tabElements = document.querySelectorAll(`[data-tab-item="${name}"]`);

    if (isFirstInit) {
      if (togglerElement.classList.contains(this.activityClass) || togglerElement.checked) {
        this.curentToggler = togglerElement;

        tabElements.forEach((tabElement) => {
          this._setCurrentTabItems(tabElement);
          this._addActivityClass(tabElement);
        });
      }
    } else {
      if (this.isOneToggler) {
        tabElements.forEach((tabElement) => {
          tabElement.classList.toggle(this.activityClass);
        });
      } else {
        this._clearCurrentTabItems();

        tabElements.forEach((tabElement) => {
          this._setCurrentTabItems(tabElement);
          this._addActivityClass(tabElement);
        });
      }
    }
  }

  _setActivityToggler(togglerElement) {
    if (!this.isRadio) {
      if (this.curentToggler) {
        this._removeActivityClass(this.curentToggler);
      }

      if (this.isOneToggler) {
        togglerElement.classList.toggle(this.activityClass);
      } else {
        this._addActivityClass(togglerElement);

        this.curentToggler = togglerElement;
      }
    }
  }

  _onToggleClick(evt) {
    const target = evt.currentTarget || evt;

    if (!this.isOneToggler) {
      if (this.currentTabItems.length) {
        this.currentTabItems.forEach((currentTabItem) => this._removeActivityClass(currentTabItem));
      }

      if (this.curentToggler) {
        this._removeActivityClass(this.curentToggler);
      }
    }

    this._setActivityToggler(target);

    this._setActivityTab(target);
  }

  init() {
    if (this.togglerElements.length) {
      this.togglerElements.forEach((togglerElement) => {
        this._setActivityTab(togglerElement, true);

        togglerElement.addEventListener(`click`, this._onToggleClick);
      });
    }
  }
}
