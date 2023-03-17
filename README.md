# Syroco Front End Engineering Challenge

This is a solution to the Syroco Front End Engineering Challenge. It is built with javascript and React.js. TailwindCSS is used for styling.

## Getting Started

First install the dependencies:

```bash
npm install
# or
yarn install
```

Run the backend server:

```bash
npm run backend
# or
yarn backend
```

Then run the frontend server:

```bash
npm start
# or
yarn start
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend

Only one route exists and serve  `GET http://localhost:8080/api/computation-options`  which returns the list of computation options.

It can be found in `api/index.js`

### Frontend

The frontend show the options with selectable cards, only one option for each category can be selected at a time.

When the selection is done the "Launch computation" button can be clicked to show a modal with the selected options.

The modal can be closed by clicking on the "Close" button or by clicking outside of the modal.
