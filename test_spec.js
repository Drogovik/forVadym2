    describe("User Registration Page Tests", () => {
     it("user registration success", () => { 
    beforeEach(function() {
    isAngularSite(false);
     });
	  browser.waitForAngularEnabled(false);
      browser.get('https://github.com/'); 
		   
	  element(by.model('id=user[login]')).sendKeys('some');
      element(by.model('id=user[email]')).sendKeys('some'+'@user.com');
      element(by.model('id=user[password]')).sendKeys('1-9'+'a-z');
      element(by.id('submitBtn')).click();
		
		browser.waitForAngularEnabled(true);
		browser.get('http://localhost:8000');
 	    browser.getCurrentUrl().then((url) => {
              expect(url).toBe('http://localhost:8000');
	});
	});
  });
