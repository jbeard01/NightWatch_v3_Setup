// EXAMPLE page object

const constants = require('../global_constants');

module.exports = {
    //Use this template to spin off new page object files 
    elements: {
        emailLoc: '#email',
        passwordLoc: '#password',
        loginBtn: '#login-btn'
    },

    commands: [
        {   // Example login page object function for reference
            // Expects 2 parameters: 1) email 2) password
            login: function(email, password) {
                const self = this;
                this.setValue(constants.SELECTORS.CSS, self.elements.emailLoc.selctor, email);
                this.setValue(constants.SELECTORS.CSS, self.elements.passwordLoc.selector, password)    ;
                this.click(constants.SELECTORS.CSS, self.elements.loginBtn.selector);
            }

        },

        {
            // New page object function can go here

        }
    ]
}