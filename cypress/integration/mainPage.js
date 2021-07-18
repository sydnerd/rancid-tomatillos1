describe('Main Page rendering', () => {
  beforeEach(() => {
    cy.fixture('movieListMockData').then((testMovieList) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovieList)
    })
    cy.visit('http://localhost:3000');
  });
  it('Should be able to visit the page and render the header, home button, and search bar', () => {
    cy.get('.site-title')
      .contains('Rancid Tomatillos')
    cy.get('button').click()
  });
  it('Should have a container that holds all the movie posters', () => {
    cy.get('.poster').should('have.length', '3');
    cy.get('.poster').should('exist')
  })
  it('Should have movie poster with image', () => {
    cy.get('div[class="movies-container"]').find(".movie-poster").should('be.visible');
  })
});
