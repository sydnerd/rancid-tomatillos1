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
    it('Should have movie detailse when you click a poster', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#694919').click()
      cy.get('.movie-detail-section')
        .get(".backdrop").should('exist').should('be.visible')
        .get('.title').should('exist').contains('Money Plane')
        .get('.overview').should('exist').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
        .get('.genre').should('exist').contains('Action')
        .get('.budget').should('exist').contains(0)
        .get('.runtime').should('exist').contains(82)
    })
    it('Should have movie details when you click a poster', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#694919').click()
      cy.get('.movie-detail-section').find(".backdrop")
        .should('exist')
        .should('be.visible')
        // cy.get('.movie-detail-section').find(".backdrop")
        // .should('exist')
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
