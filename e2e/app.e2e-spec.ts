import { StockaidPage } from './app.po';

describe('stockaid App', () => {
  let page: StockaidPage;

  beforeEach(() => {
    page = new StockaidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
