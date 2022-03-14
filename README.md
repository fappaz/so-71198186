# Description

Answer to [question 71198186](https://stackoverflow.com/questions/71198186/test-url-params-in-react-testing-library-without-react-router) on StackOverflow.

# Requirements

- NodeJS v16.15.0

# Instructions

## Run

- In your shell, run `npm start`
- On the browser tab that just launched, you should see `param is false`
- Add `?openWidget=true` to the end of your url (e.g.: `http://localhost:3000/?openWidget=true`)
- You should now see `param is true`

## Test

- In your shell, run `npm test`. You should see a message confirming that all tests are passing.