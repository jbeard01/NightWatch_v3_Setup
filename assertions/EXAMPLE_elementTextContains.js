// EXAMPLE custom assertion

/**
 * @function
 * @name elementTextContains
 * @param {string} selector - The CSS/XPath selector for the element
 * @param {string} expectedText - The text that should be contained in the element
 * @param {string} [msg] - Optional custom message for the assertion
 *
 * @description
 * Custom assertion to check if an element's text contains a specific substring.
 * This is useful when you want to verify partial text matches rather than exact matches.
 *
 * @example
 * // Check if a button contains the word "Submit"
 * browser.assert.elementTextContains('button.submit-btn', 'Submit', 'Submit button contains expected text');
 *
 * @example
 * // Check if an error message contains specific text
 * browser.assert.elementTextContains('.error-message', 'Invalid email', 'Error message is displayed');
 */

exports.assertion = function(selector, expectedText, msg) {
  this.message = msg || `Testing if element <${selector}> contains text: "${expectedText}"`;
  this.expected = expectedText;
  this.pass = function(value) {
    return value && value.includes(expectedText);
  };
  this.value = function(result) {
    return result.value;
  };
  this.command = function(callback) {
    return this.api.getText(selector, callback);
  };
};

