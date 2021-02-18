# ID_Assg3 - COVIDetectives
* Student Names: Keith Toh, Lim Xiang
* Student ID: S10202764, S10205010
* Class: T03

Our project aims to educates users on the pandemic through gamification. Users will go through a fictitious detective game with true and useful information, referenced from official websites, provided in the storyline.

__[Link to GitHub Page](https://keithtohx.github.io/ID_Assignment3/)__

## Design Process
By creating a storyline, we hope that visitors of the website will be engaged by the storyline and play the game. Following the storyline, users can learn more about the symptoms of COVID-19, actions they can take to protect themselves and their loved ones, where to get trusted information, know why contact tracing is important, and what businesses and government are able to do to prevent the spread of the virus. There are also links to offical websites, such as the WHO, CDC, MOH, displayed in our website to allow users to get more information on the pandemic beyond what was stated in our storyline. 

## Features
### Existing Features Implemented
1. __COVID-19 Global Cases Statistics__
    * Total number of cases, number of critical cases, number of deaths resulting from COVID-19 and number of recovered cases
2. __COVID-19 Country Cases Statistics__
    * Total number of cases, number of critical cases, number of deaths, number of recovered cases and number of tests done by the respective country
3. __Leaderboard__
    * Name of player, score and time they took to complete.
4. __Checkpoint__
    * When player stop halfway in the game, they can resume the game to the nearest checkpoint if their progress is still in local storage.
5. __First Quiz/ Showdown__
    * The first quiz allows user to choose 5 symptoms of covid to test whether users know these symptoms.
6. __Second and Third Quiz__
    * The second and third quiz are multiple choices questions where users select the right answer.
7. __Typing effect__
    * Typing effect is used to create a plot.


### Features to Implement in the Future
1. Randomise selection of symptoms of Covid-19 to be tested for first quiz
   * Out of all the symptoms of Covid-19, select some to be use to test users in the first quiz.

## Technologies Used
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * HTML is used to create the structure of the website
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  * CSS is used organize content in the webpage
* [JavaScript](https://www.javascript.com/)
  * JavaScript is used to in this project to make it dynamic.
* [jQuery](https://jquery.com/)
  * jQuery is used in this project to make DOM manipulation easier.
* [Bootstrap](https://getbootstrap.com/)
  * Bootstrap is used to simplify the creation of a responsive website
* Adobe XD
* Adobe Illustrator 2021
* [restdb.io](https://restdb.io/)
  * restdb is used to store leader board information 
* Validation
  * [W3C_Markup_Validation_Service](https://validator.w3.org/)
  * [W3C_CSS_Validation_Service](https://jigsaw.w3.org/css-validator/)
  * [JSHint](https://jshint.com/)

## Testing
### Landing Page
* API global Covid-19 statistics should be loaded
* Lottie animation of a virus should be shown
* Buttons "Start Searching", "Acknowledgements","Leaderboard" should appear
(Pass)
#### Acknowledgement Button (click)
* The user will be directed to Acknowledgement Page
(Pass)
### Acknowledgement Page
* A list of hyperlink covid-19 related websites will be shown
* Hyperlink for API used will be shown
* "Back to Home Page" button is shown
(Pass)
#### Leader Board Button (click)
* User will be directed to a leader board page
(Pass)
### LeaderBoard
* Banner is shown
* Leader Board retrieve data from database and display
(Pass)

#### Start Searching button(click)
* The game should start running
(Pass)
## Credits
API used:
* [Novel Covid19 API (Disease.sh)](https://disease.sh/docs/)

For visuals in this website:
* Animations: [LottieFiles](https://lottiefiles.com/)
* Text fonts: [Google Fonts](https://fonts.google.com/)
* Inspirations for graphics: [Google Images](https://www.google.com/imghp?hl=en)

To better use Javascript, jQuery, CSS, HTML:
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [jQuery](https://jquery.com/)
  
For information on Covid-19:
* [World Health Organization](https://www.who.int/)
* [Centers for Disease Control and Prevention](https://www.cdc.gov/)
* [Singapore Government Agency](https://www.gov.sg/)
* [Singapore Ministry Of Health](https://www.moh.gov.sg/covid-19)
* [Singapore Ministry of Manpower](https://www.mom.gov.sg/covid-19)