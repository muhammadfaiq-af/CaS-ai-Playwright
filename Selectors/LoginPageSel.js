
// module.exports = {
//     email: '#email',
//     password: '#password',
//     loginButton: '[type="submit"]',
//   };
  
 // selectors.js
  module.exports = {
    
    h1: '.filter-area.mb-5',
    welcomeAssertion: '[class="filter-area mb-5"] h1',
    validationAssert: '#email ~ span strong',

    // 1. Xpath of validationAssertion = '//div[@class="fields" and contains(., "Email Address")]//strong' ""

    // 2. (//strong)[1] "Using Indexing"

    userIcon: '[id="userAction"]',
    logoutButton: '[class="bx bx-power-off me-2"]',
    welcomeBackAssert: '[class="field-area login-area"]',
  };
   