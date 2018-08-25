import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }
  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }
  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }
  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }
  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }
  /** Taller 2 **/
  /*Go to DashBoard */
  goToDashboard() {
    return browser.get('/dashboard');
  }
  /* Create event to search hero */
  searchHero(keys: string) {
    element(by.id('search-box')).sendKeys(keys);
  }
  /* Count results of search */
  countSearchResult() {
    return element.all(by.className('search-result'));
  }

}
