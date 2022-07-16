# React.js
> frontend

## About

...

## Table of Contents

...

## Examples

### Connecting React + Express

- https://medium.com/geekculture/build-and-deploy-a-web-application-with-react-and-node-js-express-bce2c3cfec32
- https://dev.to/salarc123/how-to-connect-a-react-frontend-with-a-nodejs-express-backend-50i9

**What I've Learned:**

- fetch() to get api routes
- useEffect() to initiate fetch()

```javascript
// https://dev.to/salarc123/how-to-connect-a-react-frontend-with-a-nodejs-express-backend-50i9
// example of fetch request to api
function GetData() {
    const formInfo = {
        username: "Bill123",
        password: "mypassword"    
    }

    useEffect(() => { 
        fetch("/route", {
            method: "POST", 
            headers: {
                'Content': 'application/json'
                },
            body: JSON.stringify(forminfo)
        }) 
    }, [])
}
```

