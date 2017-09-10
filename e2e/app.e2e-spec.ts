import { SampleStockaidPage } from './app.po';

describe('sample-stockaid App', () => {
  let page: SampleStockaidPage;

  beforeEach(() => {
    page = new SampleStockaidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
