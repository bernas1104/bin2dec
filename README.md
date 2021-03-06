# Bin2Dec

## Disclaimers

This project was created as a beginners suggestion from [here](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To achieve theses results, I chose to use: useState and useEffect. I could probably
get away with only 'useState', but the combination made the code less confusing.

## Project Instructions

Tier: 1-Beginner

Binary is the number system all digital computers are based on. Therefore it's 
important for developers to understand binary, or base 2, mathematics. The purpose 
of Bin2Dec is to provide practice and understanding of how binary calculations.

Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's and 1's, 
in any sequence and then displays its decimal equivalent.

This challenge requires that the developer implementing it follow these constraints:

- Arrays may not be used to contain the binary digits entered by the user
- Determining the decimal equivalent of a particular binary digit in the sequence 
must be calculated using a single mathematical function, for example the natural 
logarithm. It's up to you to figure out which function to use.

### User Stories
- [x] <del>User can enter up to 8 binary digits in one 
input field</del>

- [x] <del>User must be notified if anything other than 
a 0 or 1 was entered</del>

- [x] <del>User views the results in a single output field 
containing the decimal (base 10) equivalent of the binary number that was entered</del>

### Bonus Features
- [x] <del>User can enter a variable number of binary digits</del>

- [ ] User can select the base input and output
  - [ ] User can select base input (2-8-10-16)
    - [x] <del>Bin2Any</del>
    - [ ] Oct2Any
    - [x] <del>Dec2Any</del>
    - [ ] Hex2Any
  - [ ] User can select base output (2-8-10-16)
    - [ ] Any2Bin
    - [ ] Any2Oct
    - [ ] Any2Dec
    - [ ] Any2Hex

- [x] <del>Unit tests for the bin2dec function</del>
- [x] <del>Unit tests for the bin2octhex function</del>
  - [x] <del>Unit tests for the bin2oct</del>
  - [x] <del>Unit tests for the bin2hex</del>
- [x] <del>Unit tests for the dec2any function</del>
  - [x] <del>Unit tests for the dec2bin part</del>
  - [x] <del>Unit tests for the dec2oct part</del>
  - [x] <del>Unit tests for the dec2hex part</del>

More tests TODO

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
