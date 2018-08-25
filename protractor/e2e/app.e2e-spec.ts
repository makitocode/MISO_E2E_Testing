import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;
  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });
  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
});

/* Test 1 - Buscar héroes */
describe('Search Hero', () => {
  let page: TourOfHeroesPage;
  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.goToDashboard();
  });
  it('Search Hero', () => {
    page.searchHero('as');
    const count = page.countSearchResult().count();
    expect(2).toBe(count.then((n) => n));
  });
});
/* Test 2 - Eliminar un héroe */
describe('Delete Hero', () => {
  let page: TourOfHeroesPage;
  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });
  it('Delete Hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.deleteFirstHero();
    expect(page.getAllHeroes().count().then(n => n)).toBe(currentHeroes.then(n => n - 1));
  });

});
/*Test 3 - Editar un héroe */
describe('EditHero', () => {
  let page: TourOfHeroesPage;
  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });
  it('EditHero', () => {
    page.heroName('Mr. Nice');
    page.updateHeroName(' edited');
    page.waitForElement('.module.hero');
    const hero = page.getHeroName('M');
    expect(hero.getText().then(n => n)).toBe('Mr. Nice edited');
  });

});


