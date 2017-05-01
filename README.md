# LogRocket ngrx Middleware

This package exports a default function which takes a `LogRocket` instance and returns an `ngrx` middleware.

## Getting Started

1.  Install with NPM: `npm i --save logrocket logrocket-ngrx`.

2. Create a free account at [https://logrocket.com](https://logrocket.com) and
take note of you application ID.

3. Initialize LogRocket in your app:

```
import LogRocket from 'logrocket';

// Initialize LogRocket with your app ID
LogRocket.init(<your_application_id>);
```
4. (optional) Add the ngrx middleware.

```
import LogRocket from 'logrocket';
import createNgrxMiddleware from 'logrocket-ngrx';

const logrocketMiddleware = createNgrxMiddlware(LogRocket, opts)
```

That’s it- this is all you need to get started with LogRocket and ngrx!

![](https://cdn-images-1.medium.com/max/1000/1*gdV9FMQZ18xKE3GSURpPDQ.png)

If you’d like to learn more about LogRocket, you can check out the links below.
We’d also like to thank the developers who helped us test out our Angular and
ngrx support and stuck with us despite a few gnarly bugs :)

### Further Info

* LogRocket website- [https://logrocket.com](https://logrocket.com)
* LogRocket Docs - [https://docs.logrocket.com](https://docs.logrocket.com)
* Redux Logging in Production -
[https://blog.logrocket.com/redux-logging-in-production-3b2a4816b713](https://blog.logrocket.com/redux-logging-in-production-3b2a4816b713)

