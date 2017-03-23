import { CilayoutPage } from './app.po';

describe('cilayout App', () => {
  let page: CilayoutPage;

  beforeEach(() => {
    page = new CilayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
