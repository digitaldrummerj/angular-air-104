import { AngularAirPage } from './app.po';

describe('angular-air App', () => {
  let page: AngularAirPage;

  beforeEach(() => {
    page = new AngularAirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
