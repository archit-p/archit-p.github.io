---
slug: "/blog/internationalize-a-react-app-using-format-js"
date: 2020-08-27
title: "Internationalize a React App using FormatJS"
description: "Introduction to FormatJS - a library to internationalize Javascript apps, and how to use it along with a React project"
keywords: "react, formatjs, i18n, internationalize"
---

First we'll need to install FormatJS for our project.

```
npm install react-intl
```

Let's start by creating translation files. We'll focus on English (`en`) and Hindi (`hi`) messages for now. Let's create a directory `src/translations` and place `en.json` and `hi.json` there.

#### `src/translations/en.json`

```json
{
  "welcome": "Welcome to FormatJS demo!",
  "footer": "Created using Create-React-App.."
}
```

#### `src/translations/hi.json`

```json
{
  "welcome": "FormatJS डेमो में आपका स्वागत है!",
  "footer": "Create-React-App का उपयोग करके बनाया गया."
}
```

Now, let's setup our app to include these messages. We initialize the messages and wrap our app using `<IntlProvider>` in `index.js`.

#### `src/index.js`

```js
...
import { IntlProvider } from 'react-intl';
import messages_en from './translations/en.json';
import messages_hi from './translations/hi.json';

const messages = {
  en: messages_en,
  hi: messages_hi
};

const language = navigator.language.split(/[-_]/)[0];
...
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
...
```

Now, these messages can be accessed in `App.js`.

#### `src/App.js`

```js
...
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="App">
      <header>
        <FormattedMessage id="welcome" defaultMessage="Welcome to FormatJS demo!"/>
      </header>
      <footer>
        <FormattedMessage id="footer" defaultMessage="Created using Create-React-App."/>
      </footer>
    </div>
  );
}
...
```

We're using `FormattedMessage` to auto-translate our text. The `id` parameter tells FormatJS which message to provide, while `defaultMessage` acts as a fallback in case we don't support the locale.

Now our app will display messages based the users locale! We can extend the locale support further by adding more language configs in the future.
