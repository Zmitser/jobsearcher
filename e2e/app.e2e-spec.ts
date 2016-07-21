import { JobsearcherPage } from './app.po';

describe('jobsearcher App', function() {
  let page: JobsearcherPage;

  beforeEach(() => {
    page = new JobsearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
