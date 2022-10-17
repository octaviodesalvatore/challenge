# Install dependencies
yarn

# Server with localhost
yarn start

### In case of need more than 60 requests per hour

In the function found in ReportContext, add your github access token after Bearer Example:

```
const getData = () => {
    fetch(currentUrl, {
      headers: {
        Authorization: `Bearer YourToken`,
      },
    })
    ...
```
