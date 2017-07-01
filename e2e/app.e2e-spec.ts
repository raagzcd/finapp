import { FinAppPage } from './app.po';

describe('fin-app App', () => {
  let page: FinAppPage;

  beforeEach(() => {
    page = new FinAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
