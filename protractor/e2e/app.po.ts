import {browser, by, element, ElementFinder, protractor} from 'protractor';

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
  /* delete Hero */
  deleteFirstHero() {
    element(by.css('.heroes')).all(by.className('delete')).first().click();
  }

  /* Hero Name*/
  heroName(keyword: string) {
    element(by.cssContainingText('.module.hero', keyword)).click();
  }
  /* Update Hero name */
  updateHeroName(keyword: string) {
    element(by.tagName('input')).sendKeys(keyword);
    element(by.cssContainingText('button', 'Save')).click();
  }
  /* wait*/
  waitForElement(css: string) {
    const EC = protractor.ExpectedConditions;
    const elm = element(by.css(css));
    browser.wait(EC.presenceOf(elm), 5000/*miliseconds*/);
  }
  /*Get hero name */
  getHeroName(keyword: string) {
    return element(by.cssContainingText('.module.hero', keyword));
  }
  getInputHeroNameValue() {
    return element(by.tagName('input')).getAttribute('ng-reflect-model');
  }

}
