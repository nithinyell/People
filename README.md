[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">People Application</h3>

  <p align="center">
    People Application to browser list of people
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#recordings">App Recordings</a></li>
        <li><a href="#tests">Tests</a></li>
        <li><a href="#structure">Project Structure</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

**People Application** is a React Native mobile application that enables users to explore a list of individuals and retrieve details such as email addresses and phone numbers.

### Built With

A hybrid mobile application build on React Native framework

[![React][React.js]][React-url]
[![Jest][Jest]][Jest-url]
[![Maestro][Maestro]][Maestro-url]

<!-- GETTING STARTED -->
## Getting Started

Clone the application
* git clone
  ```
  git clone git@github.com:nithinyell/People.git
  ```

### Prerequisites

This project requires React Native up as per [developer guilde](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone repository
2. Change Directory to root
   ```sh
   cd People
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Change Directory to ios
   ```sh
   cd ios
   ```
5. Install dependencies
   ```sh
   pod install
   ```
6. Run application in either Android or iOS Simulator
   ```sh
   npm start
   ```

## Recordings
|Android|iOS|
|-|-|
|<img src="https://github.com/nithinyell/People/assets/18254027/5fee9fe3-a54f-4744-9398-0ab5ccfe8dd1" width="200" height="250" />|<img src="https://github.com/nithinyell/People/assets/18254027/fde715de-bc92-4c0e-8fb4-d7ac29926391" width="200" height="250" />|

## Tests

Run test using, in rot folder
```sh
npm test
```

Included tests for 
* View Models
* Views
* Utilities
* E2E testing flow([test suit](https://github.com/nithinyell/People/blob/main/src/tests/views/E2E-flow.test.js)) for **Name and or email address is edited details page reflects those changes**
  <img width="1082" alt="tests" src="https://github.com/nithinyell/People/assets/18254027/c0a9377d-1dac-490e-954c-90ffc8e33913">

### Automation
We have `maestro` enabled for automation
- Test Suit [E2E Flow](https://github.com/nithinyell/People/blob/main/src/maestro/E2Eflow.yaml)
- Set up maestro in local machine
- cd to src/maestro
- run `maestro test E2Eflow.yaml`
  
  __Recording__
  
  https://github.com/nithinyell/People/assets/18254027/425d518c-2ac1-4388-a4b3-7936f29c483a
  
## Structure

```
|-- People
    |-- android                   # Android specific files
    |-- ios                       # iOS specific files
    |-- node_modules              # Node.js modules
    |-- src
        |-- analytics             # Logs app telemetry
            |-- analytics.js
        |-- modules               # Application modules
            |-- people            # People 
                |-- data          # Service / API requests
                |-- models        # Models for people
                |-- view          # View Components
                |-- view-models   # View Models for View
            |-- person-details
                |-- data          # Service / API requests
                |-- models        # Models for person details
                |-- view          # View Components
                |-- view-models   # View Models for View
            |-- utils
                |-- utils.js      # Utilities / Helper Functions
        |-- navigation            # Build Root Component
            |-- navigation.js
        |-- service               # Handle service calls
            |-- navigation.js
        |-- tests                 # Module vise tests
    |-- .gitignore                # Git ignore file
    |-- App.js                    # Main App component
    |-- app.json                  # App configuration
    |-- babel.config.js           # Babel configuration
    |-- index.js                  # Entry point for the app
    |-- package.json              # Node.js package file
    |-- README.md                 # Project readme file
```

## High Level Documentation(HLD) & Low Level Documentation(LLD)
TBD

<!-- ROADMAP -->
## Roadmap

- [ ] Update to latest UI / UX
- [ ] Enhance Telemetry
- [ ] Enhance Test Cases
- [ ] Improve accessibility
- [ ] Build CI CD
- [ ] Localization
    - [ ] French(CANADA)

<!-- MARKDOWN LINKS -->

[contributors-shield]: https://img.shields.io/badge/Contributors-Nithin_Yallakara-blue?style=for-the-badge
[contributors-url]: https://github.com/nithinyell

[issues-shield]: https://img.shields.io/badge/Issues-0-red?style=for-the-badge
[issues-url]: https://github.com/nithinyell/People/issues/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nithinios/

[React.js]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactnative.dev/

[Jest]: https://img.shields.io/badge/Jest-008000?style=for-the-badge&logo=jest&logoColor=#61DAFB
[Jest-url]: https://jestjs.io/docs/tutorial-react

[Maestro]: https://img.shields.io/badge/Maestro-808080?style=for-the-badge&logo=maestro&logoColor=61DAFB
[Maestro-url]: [https://reactnative.dev/](https://maestro.mobile.dev/)https://maestro.mobile.dev/
