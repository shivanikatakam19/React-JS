# React-JS

- useMemo and Memo both are optimization tools in react.
- Memo is the higher order component which memorizes the component and prevents unnecessary re-renders. it only renders a component when it's props or state changes.
- Memo optimizes the re-renders
- useMemo is a pre-defined hook that memorizes a value and recalculate the value only when the dependency changes.
- useMemo optimizes the expensive calculations.

- when using React.StrictMode (it is on default when you use react-create-app while creating an app), react intentionally double invokes the render method to help with catching the issues and detect side effects.
- it happens only in development but not in production.
- To see the difference remove React.StrictMode in index.js of a react app.

- do not store any passwords or secrets in the environmental files as other users can see them.
- the environmental variables are embedded during build time.
- must create custom environmental variables starts with REACT*APP*

- Controlled component is under control of component's state.
- These components are predictable. internal state is not maintained. Controlled by parent component.
- can be controlled by use state.
- use controlled components when you want keep validations as the user types like trimming etc. when you want to disable or enable the buttons and fields conditionally,or for live search.

- Uncontrolled component is under control of DOM. these are uncontrolled because during the life cycle mthods data may loss.
- we access the value using refs. Controlled by DOM itself.
- use uncontrolled components when there are no input validations, file uploads.

- Javascript cookies are data, stored in small text files.
- when a user enters into a website his name or required data can be stored as cookies. (name value pairs)
- usually cokkies are persistent but we can give them expiry date using exprires keyword
  (eg: document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";)or max-age=3600 // seconds (expires in 1 hour)
- cookies use cases are authentication i.e., tokens, server aware sessions

- Local storage stores data permanently until you clear the data explicitly. it is only available on client side
- use cases are caching the data, storing user preferences, logged in user details etc.
- window.localStorage.setItem('theme',"dark") to get the item window.localStorage.getItem('theme');

- session storage clears the data when the tab or browser closed.
- use cases are storing temporary states, data that should not persist between the tabs. multi step forms
- window.sessionStorage.setItem("step", "2"); to get the value window.sessionStorage.getItem("step");

- Redux is a javascript library used for centralized state management for java script application.
