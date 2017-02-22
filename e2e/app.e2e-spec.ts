import { QmpFrontPage } from './app.po';

describe('qmp-front App', function() {
  let page: QmpFrontPage;

  beforeEach(() => {
    page = new QmpFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
