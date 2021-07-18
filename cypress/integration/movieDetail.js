describe('Movie detail page rendering', () => {
  beforeEach(() => {
    cy.fixture('movieDetailMockData').then((testMovieDetail) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', testMovieDetail)
      cy.visit('http://localhost:3000/');
      cy.get('#694919').click()
    })
  });
    it('Should render a header', () => {
      cy.get('.site-title')
        .contains('Rancid Tomatillos')
      cy.get('button').click()
    })
    it('Should redirect you to home page', () => {
      cy.get('button').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
    it('Should go to movies detail page on click', () => {
      cy.url()
    })
    it('Should have movie details when you click a poster', () => {
      cy.get('.movie-detail-section')
        .get(".backdrop").should('exist').should('be.visible')
        .get('.title').should('exist').contains('Money Plane')
        .get('.overview').should('exist').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
        .get('.genre').should('exist').contains('Action')
        .get('.runtime').should('exist').contains(82)
    })
  })