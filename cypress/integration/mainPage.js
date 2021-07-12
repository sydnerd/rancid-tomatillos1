// import MoviePoster from "../../src/components/moviePoster/MoviePoster";

describe('Main Page rendering', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movieListMockData'});
    cy.fixture('movieListMockData').then((testMovieList) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovieList)
    })
    cy.visit('http://localhost:3000');
  });
  // it('Should be able to visit the page and render the header, home button, and search bar', () => {
  //   cy.get('h1')
  //     .contains('Rancid Tomatillos')
  //   cy.get('input[type="text"]')
  //   cy.get('button').click()
  // });
  it('Should have a container that holds all the movie posters', () => {
    // cy.get('.movies-containers').should('have.length', '2')
    cy.get('.poster').should('have.length', '2')
    // cy.get('.poster')
  })
});