module.exports = {
 /* all locator strategies:
            css selector
            link text
            partial link text
            tag name
            xpath
       https://nightwatchjs.org/api/commands/#element
    */
    SELECTORS: {
        CSS: 'css selector',
        XPATH: 'xpath',
        TAGNAME: 'tag name',
        LINK: 'link text',
        PARTIAL_LINK: 'partial link text'
    },
    PAUSE: {
        pauseFor1: 1000,
        pauseFor2: 2000,
        pauseFor3: 3000,
        pauseFor5: 5000,
        pauseFor6: 6000,
        pauseFor10: 10000,
        pauseFor15: 15000
    }
}