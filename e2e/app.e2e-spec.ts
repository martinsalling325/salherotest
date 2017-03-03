import { SalherotestPage } from './app.po';

describe('salherotest App', () => {
  let page: SalherotestPage;

  beforeEach(() => {
    page = new SalherotestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
