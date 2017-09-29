import { SiteErvanPage } from './app.po';

describe('site-ervan App', () => {
  let page: SiteErvanPage;

  beforeEach(() => {
    page = new SiteErvanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
