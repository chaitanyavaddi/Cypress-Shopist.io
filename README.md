# Cypress-Shopist.io
This repo contains e2e tests written in Cypress for shopist.io application


## Run Tests
To run cart actions tests in interactive mode use following command

`npx cypress open`

To run cart actions tests in normal mode use following command

`npm run cy:run-all`


## Demo
![App Screenshot](https://codelikedude.com/wp-content/uploads/2022/01/gif.gif)


## Video Explanation

[click here to see the video](https://www.codelikedude.com/cypress-project/)

![App Screenshot](https://codelikedude.com/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-7.51.15-AM-1024x572.png)



## Patterns
Despite what Cypress says, Page Object Model is used because it improves code readability.
- POM pattern is used and every page at [shopist.io](https://www.shopist.io) is represented as a single class
- As the test usecases are limited, only one command was added `Cypress.Commands.add('setResolution'..`
- At times, arrow functions didn't work for aliasing. So, normal functions `function()` are used
- Data is fed from fixtures > chair-data.json 


## Dependencies

- cypress-mochawesome-reporter: ^2.3.0
- cypress-xpath: ^1.6.2

## Lessons Learned

It's common to mix up synchronised cypress and asynchronous Javascript codes

Trying to prevent this happening while chaining my assertions is a little challenging.

But binding elements to variables using `.then()` solved most of my issues.


## Feedback

If you have any feedback, please reach out to us at chaitanya@codelikedude.com


