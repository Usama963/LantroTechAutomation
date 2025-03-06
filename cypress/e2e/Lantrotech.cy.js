/// <reference types="cypress" />


function slowScroll(targetSelector, increment = 100, delay = 300) {
    cy.get(targetSelector).then($target => {
      const targetPosition = $target.offset().top;
      const scrollPosition = Cypress.$(window).scrollTop();
      const scrollStep = increment;
  
      const scroll = (currentPosition) => {
        if (currentPosition < targetPosition) {
          cy.scrollTo(0, currentPosition + scrollStep, { duration: 0 }).then(() => {
            cy.wait(delay);
            scroll(currentPosition + scrollStep);
          });
        } else {
          cy.scrollTo(0, targetPosition); // Ensure we're at the final position
        }
      };
  
      scroll(scrollPosition);
    });
  }

  function smoothScroll(pageHeight, increment = 400, duration = 500) {
    for (let scrollPosition = 0; scrollPosition <= pageHeight; scrollPosition += increment) {
      cy.scrollTo(0, scrollPosition, { duration });
    }
  }

describe("lantro automation",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    if (err.message.includes("Cannot read properties of undefined")) {
      return false;
    }
  });
    
    
    it("opening website of lantro",()=>{
        cy.visit("https://lantrotech.com/")
        cy.document().then((doc) => {
          const pageHeight = doc.documentElement.scrollHeight;
          smoothScroll(pageHeight);
        });
        cy.scrollTo('top');
        cy.get('input[class="checkbox"][type="checkbox"]',{timeout:3000}).click()
        
    })

    it("opening About Us page and verify its URL",()=>{
      // cy.viewport(1240,1500)
      cy.wait(3000)
      cy.get(':nth-child(2) > .accordion').contains('About').click({force:true})
      cy.get(':nth-child(1) > .mobile-link > a').contains('About Us').click()

        //assertion on "About Us" page
        cy.contains("We’re All About Unique Ideas").should('be.visible')

        // cy.viewport(1240,1500)
        cy.url().should('eq','https://www.lantrotech.com/about-us/')
        cy.document().then((doc) => {
          const pageHeight = doc.documentElement.scrollHeight;
          smoothScroll(pageHeight);
        });
        cy.scrollTo('top');
    })

    it('opening ESAAR page and verifying its URL',()=>{
      cy.wait(3000)
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.get(':nth-child(2) > .accordion',{timeout:5000}).contains('About').click()
      cy.get(':nth-child(2) > .mobile-link > a').contains('Esaar').click();

      cy.contains('Make an Impact').should('be.visible')
      cy.url().should('eq','https://www.lantrotech.com/esaar/');
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
    })

    it('opening "Blog" page and verifying its URL',()=>{
      cy.wait(3000)
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.get(':nth-child(2) > .accordion',{timeout:5000}).contains('About').click()
      cy.get(':nth-child(3) > .mobile-link > a').contains('Blog').click();

      cy.contains('Embark onExploration').should('be.visible')
      cy.url().should('eq','https://www.lantrotech.com/blog/');

      cy.viewport(1200,1080)

      cy.get('.swiper-slide-next > .small').click()
      cy.wait(3000)
      
      cy.get(':nth-child(1) > a > .single-blog-wrapper').click()
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
      
    })
    it('opening "Career Kickstart" page and verifying its URL',()=>{
      cy.wait(3000)
      cy.viewport(1200,1080)
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.get(':nth-child(2) > .accordion',{timeout:5000}).contains('About').click()
      cy.get(':nth-child(4) > .mobile-link > a').contains('Career Kickstart').click({force:true});

      cy.contains('Lantro Career').should('be.visible')
      cy.url().should('eq','https://www.lantrotech.com/summer-internship-program/');
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');

      cy.get('.field-box-wrapper-1').click() //eletrical and IT estimation
      cy.url().should('eq','https://www.lantrotech.com/estimation-services/electrical-and-it-estimation/')
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
      cy.wait(2000)
      cy.go('back')
      cy.wait(2000) 

      cy.get('.field-box-wrapper-2').click() //Shop Drawings
      cy.wait(3000)
      cy.url().should('eq','https://www.lantrotech.com/estimation-services/shop-drawings/')
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
      cy.go('back')
      cy.wait(2000)

      cy.get('.field-box-wrapper-3').click() //Marketing and Brand Building
      cy.wait(3000)
      cy.url().should('eq','https://www.lantrotech.com/marketing-services/')
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
      cy.go('back')
      cy.wait(2000)

      cy.get('.field-box-wrapper-4').click() //Web Development
      cy.wait(3000)
      cy.url().should('eq','https://www.lantrotech.com/marketing-services/web-development/')
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
      cy.contains('Code That Delivers Excellence').should('be.visible');
      cy.go('back')
      cy.wait(2000)
    })

    it("opening Services -> Web Services -> Web Application Development page and verify its URL",()=>{
      cy.wait(2000)
      cy.scrollTo(0, 500);
      cy.scrollTo('top');
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      // cy.viewport(1308,872)
      cy.get(':nth-child(3) > .accordion').contains('Services').click({force:true})
      cy.get(':nth-child(3) > .acc-panel > .LinksLevelTwoWrapper-mobile > :nth-child(1) > .mobile-link').contains("Web Services").click({force:true})
      cy.get(':nth-child(2) > .link > h6').contains('Web Application Development').click({force:true})



      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
    })

    it("opening service -> web services -> website development page and verify its URL",()=>{
      cy.wait(2000)
      cy.scrollTo(0, 500);
      cy.scrollTo('top');
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.viewport(1000,1080)
      cy.get(':nth-child(3) > .accordion').contains('Services').click()
      cy.wait(2000)
      cy.get(':nth-child(3) > .accordion').contains('Services').click({force:true})
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      cy.wait(1000)
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      // cy.get(':nth-child(3) > .acc-panel > .LinksLevelTwoWrapper-mobile > :nth-child(1) > .mobile-link',{timeout:5000}).contains("Web Services").click({force:true})

      // cy.get(':nth-child(2) > .link > h6',{timeout:5000}).contains("Website Development").click({force:true})
      cy.contains("Website Development",{timeout:5000}).click({force:true})
      cy.url().should('eq','https://www.lantrotech.com/web-services/website-development/')

      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
    })

    it("opening service -> web services -> Mobile Application Development page and verify its URL",()=>{
      cy.wait(2000)
      cy.scrollTo(0, 500);
      cy.scrollTo('top');
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.viewport(1000,1080)
      cy.get(':nth-child(3) > .accordion').contains('Services').click()
      cy.wait(2000)
      cy.get(':nth-child(3) > .accordion').contains('Services').click({force:true})
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      cy.wait(1000)
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      // cy.get(':nth-child(3) > .acc-panel > .LinksLevelTwoWrapper-mobile > :nth-child(1) > .mobile-link',{timeout:5000}).contains("Web Services").click({force:true})

      // cy.get(':nth-child(2) > .link > h6',{timeout:5000}).contains("Website Development").click({force:true})
      cy.contains("Mobile Application Development",{timeout:5000}).click({force:true})
      cy.url().should('eq','https://www.lantrotech.com/web-services/mobile-application-development/')

      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
    })

    it("opening service -> web services -> Software Quality Assurance page and verify its URL",()=>{
      cy.wait(2000)
      cy.scrollTo(0, 500);
      cy.scrollTo('top');
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.viewport(1000,1080)
      cy.get(':nth-child(3) > .accordion').contains('Services').click()
      cy.wait(2000)
      cy.get(':nth-child(3) > .accordion').contains('Services').click({force:true})
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      cy.wait(1000)
      cy.contains("Web Services",{timeout:5000}).click({force:true})
      // cy.get(':nth-child(3) > .acc-panel > .LinksLevelTwoWrapper-mobile > :nth-child(1) > .mobile-link',{timeout:5000}).contains("Web Services").click({force:true})

      // cy.get(':nth-child(2) > .link > h6',{timeout:5000}).contains("Website Development").click({force:true})
      cy.contains("Software Quality Assurance",{timeout:5000}).click({force:true})
      cy.url().should('eq','https://www.lantrotech.com/web-services/software-quality-assurance/')
      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });
      cy.scrollTo('top');
    })

    it("opening Our Team page and verify its URL",()=>{
      cy.wait(2000)
      cy.scrollTo(0, 500);
      cy.scrollTo('top');
      cy.get('input[class="checkbox"][type="checkbox"]').click({force:true})
      cy.viewport(1000,1080)
      cy.get(':nth-child(4) > .link > h2',{timeout:5000}).contains("Our Team").click({force:true})

      cy.url().should("eq","https://www.lantrotech.com/team/")

      cy.document().then((doc) => {
        const pageHeight = doc.documentElement.scrollHeight;
        smoothScroll(pageHeight);
      });

  
    })





    
})