import { FamilyPage } from './app.po';

describe('family App', function() {
  let page: FamilyPage;

  beforeEach(() => {
    page = new FamilyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
