// import MoviePoster from "../../src/components/moviePoster/MoviePoster";

describe('Main Page rendering', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movieListMockData'});
    cy.fixture('movieListMockData').then(function (movieListMockData) {this.movieListMockData})
    cy.visit('http://localhost:3000');
  });
  it('Should be able to visit the page and render the header, home button, and search bar', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
    cy.get('input[type="text"]')
    cy.get('button').click()
  });
  it('Should have a container that holds all the movie posters', () => {
    cy.get('.movies-container').contains(movieListMockData)
    // cy.get('#welcome').contains(this.testdata.welcomeText)
      // .contains({fixture})
      // .contains({fixture: 'movieListMockData'})
      // .contains(fixture)
      //.contains('.poster')//want to see if this contains fixture
  })
});