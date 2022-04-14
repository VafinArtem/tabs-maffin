export class Tabs {
  constructor({ togglerSelector, activityTogglerClass, activityTabClass, isRadio = false, isOneToggler = false }) {
    this.togglerSelector = togglerSelector;
    this.togglerElements = document.querySelectorAll(this.togglerSelector);
    this.activityTogglerClass = activityTogglerClass;
    this.activityTabClass = activityTabClass;
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

  _addActivityClass(element, activityClass) {
    element.classList.add(activityClass);
  }

  _removeActivityClass(element, activityClass) {
    element.classList.remove(activityClass);
  }

  _setActivityTab(togglerElement, isFirstInit) {
    const name = togglerElement.dataset.tabName;

    const tabElements = document.querySelectorAll(`[data-tab-item="${name}"]`);

    if (isFirstInit) {
      if (togglerElement.classList.contains(this.activityTogglerClass) || togglerElement.checked) {
        this.curentToggler = togglerElement;

        tabElements.forEach((tabElement) => {
          this._setCurrentTabItems(tabElement);
          this._addActivityClass(tabElement, this.activityTabClass);
        });
      }
    } else {
      if (this.isOneToggler) {
        tabElements.forEach((tabElement) => {
          tabElement.classList.toggle(this.activityTabClass);
        });
      } else {
        this._clearCurrentTabItems();

        tabElements.forEach((tabElement) => {
          this._setCurrentTabItems(tabElement);
          this._addActivityClass(tabElement, this.activityTabClass);
        });
      }
    }
  }

  _setActivityToggler(togglerElement) {
    if (!this.isRadio) {
      if (this.curentToggler) {
        this._removeActivityClass(this.curentToggler, this.activityTogglerClass);
      }

      if (this.isOneToggler) {
        togglerElement.classList.toggle(this.activityTogglerClass);
      } else {
        this._addActivityClass(togglerElement, this.activityTogglerClass);

        this.curentToggler = togglerElement;
      }
    }
  }

  _onToggleClick(evt) {
    const target = evt.currentTarget || evt;

    if (!this.isOneToggler) {
      if (this.currentTabItems.length) {
        this.currentTabItems.forEach((currentTabItem) => this._removeActivityClass(currentTabItem, this.activityTabClass));
      }

      if (this.curentToggler) {
        this._removeActivityClass(this.curentToggler, this.activityTogglerClass);
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
