# Challenge Repository Searcher

## Install dependencies

```
yarn
```

## Server with localhost

```
yarn start
```

### In case of need more than 60 requests per hour

In the function found in RepotContext, add or generate a Github Personal access tokens
Example:

```
const getData = () => {
    fetch(currentUrl, {
      headers: {
        Authorization: `Bearer YourPersonalAccesToken`,
      },
    })
    ...
```
