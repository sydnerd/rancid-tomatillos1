describe('Movie detail page rendering', () => {
  beforeEach(() => {
    cy.fixture('movieDetailMockData').then((testMovieDetail) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', testMovieDetail)
    })
  });
    it('Should go to movies detail page on click', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#694919').click()
      cy.url()
    })
    it('Should have movie details when you click a poster', () => {
      cy.visit('http://localhost:3000/694919')
      cy.get('section[class="movie-detail-section"]').find(".backdrop").should('be.visible')
    })
  // it('Should be able to visit the page and render the header, home button, and search bar', () => {
  //   cy.get('.siteTitle')
  //     .contains('Rancid Tomatillos')
  //   cy.get('input[type="text"]')
  //   cy.get('button').click()
  // });
  // it('Should have a container that holds all the movie posters', () => {
  //   cy.get('.poster').should('have.length', '3');
  //   cy.get('.poster').should('exist')
  // })
  // it('Should have movie poster with image, title, and rating', () => {
  //   cy.get('div[class="movies-container"]').find(".movie-poster").should('be.visible');
  //   cy.get('div[class="movies-container"]').find(".movie-poster-title").should('be.visible');
  //   cy.get('div[class="movies-container"]').find(".movie-poster-rating").should('be.visible')
  // })

  // Yep. You can cy.get a single poster by ID, .click() it, then check the url has that same ID
});
