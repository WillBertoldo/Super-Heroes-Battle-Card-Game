# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### API Data
This project needs an API to work.
Data architecture example:
[
   {
      "id":1,
      "name":"A-Bomb",
      "slug":"1-a-bomb",
      "powerstats":{
         "intelligence":38,
         "strength":100,
         "speed":17,
         "durability":80,
         "power":24,
         "combat":64
      },
      "appearance":{
         "gender":"Male",
         "race":"Human",
         "height":[
            "6'8",
            "203 cm"
         ],
         "weight":[
            "980 lb",
            "441 kg"
         ],
         "eyeColor":"Yellow",
         "hairColor":"No Hair"
      },
      "biography":{
         "fullName":"Richard Milhouse Jones",
         "alterEgos":"No alter egos found.",
         "aliases":[
            "Rick Jones"
         ],
         "placeOfBirth":"Scarsdale, Arizona",
         "firstAppearance":"Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
         "publisher":"Marvel Comics",
         "alignment":"good"
      },
      "work":{
         "occupation":"Musician, adventurer, author; formerly talk show host",
         "base":"-"
      },
      "connections":{
         "groupAffiliation":"Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
         "relatives":"Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
      },
      "images":{
         "xs":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/xs\/1-a-bomb.jpg",
         "sm":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/sm\/1-a-bomb.jpg",
         "md":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/md\/1-a-bomb.jpg",
         "lg":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/lg\/1-a-bomb.jpg"
      }
   },
   {
      "id":2,
      "name":"Abe Sapien",
      "slug":"2-abe-sapien",
      "powerstats":{
         "intelligence":88,
         "strength":28,
         "speed":35,
         "durability":65,
         "power":100,
         "combat":85
      },
      "appearance":{
         "gender":"Male",
         "race":"Icthyo Sapien",
         "height":[
            "6'3",
            "191 cm"
         ],
         "weight":[
            "145 lb",
            "65 kg"
         ],
         "eyeColor":"Blue",
         "hairColor":"No Hair"
      },
      "biography":{
         "fullName":"Abraham Sapien",
         "alterEgos":"No alter egos found.",
         "aliases":[
            "Langdon Everett Caul",
            "Abraham Sapien",
            "Langdon Caul"
         ],
         "placeOfBirth":"-",
         "firstAppearance":"Hellboy: Seed of Destruction (1993)",
         "publisher":"Dark Horse Comics",
         "alignment":"good"
      },
      "work":{
         "occupation":"Paranormal Investigator",
         "base":"-"
      },
      "connections":{
         "groupAffiliation":"Bureau for Paranormal Research and Defense",
         "relatives":"Edith Howard (wife, deceased)"
      },
      "images":{
         "xs":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/xs\/2-abe-sapien.jpg",
         "sm":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/sm\/2-abe-sapien.jpg",
         "md":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/md\/2-abe-sapien.jpg",
         "lg":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/lg\/2-abe-sapien.jpg"
      }
   },
   {
      "id":3,
      "name":"Abin Sur",
      "slug":"3-abin-sur",
      "powerstats":{
         "intelligence":50,
         "strength":90,
         "speed":53,
         "durability":64,
         "power":99,
         "combat":65
      },
      "appearance":{
         "gender":"Male",
         "race":"Ungaran",
         "height":[
            "6'1",
            "185 cm"
         ],
         "weight":[
            "200 lb",
            "90 kg"
         ],
         "eyeColor":"Blue",
         "hairColor":"No Hair"
      },
      "biography":{
         "fullName":"",
         "alterEgos":"No alter egos found.",
         "aliases":[
            "Lagzia"
         ],
         "placeOfBirth":"Ungara",
         "firstAppearance":"Showcase #22 (October, 1959)",
         "publisher":"DC Comics",
         "alignment":"good"
      },
      "work":{
         "occupation":"Green Lantern, former history professor",
         "base":"Oa"
      },
      "connections":{
         "groupAffiliation":"Green Lantern Corps, Black Lantern Corps",
         "relatives":"Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
      },
      "images":{
         "xs":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/xs\/3-abin-sur.jpg",
         "sm":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/sm\/3-abin-sur.jpg",
         "md":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/md\/3-abin-sur.jpg",
         "lg":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/lg\/3-abin-sur.jpg"
      }
   },
   {
      "id":4,
      "name":"Abomination",
      "slug":"4-abomination",
      "powerstats":{
         "intelligence":63,
         "strength":80,
         "speed":53,
         "durability":90,
         "power":62,
         "combat":95
      },
      "appearance":{
         "gender":"Male",
         "race":"Human \/ Radiation",
         "height":[
            "6'8",
            "203 cm"
         ],
         "weight":[
            "980 lb",
            "441 kg"
         ],
         "eyeColor":"Green",
         "hairColor":"No Hair"
      },
      "biography":{
         "fullName":"Emil Blonsky",
         "alterEgos":"No alter egos found.",
         "aliases":[
            "Agent R-7",
            "Ravager of Worlds"
         ],
         "placeOfBirth":"Zagreb, Yugoslavia",
         "firstAppearance":"Tales to Astonish #90",
         "publisher":"Marvel Comics",
         "alignment":"bad"
      },
      "work":{
         "occupation":"Ex-Spy",
         "base":"Mobile"
      },
      "connections":{
         "groupAffiliation":"former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
         "relatives":"Nadia Dornova Blonsky (wife, separated)"
      },
      "images":{
         "xs":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/xs\/4-abomination.jpg",
         "sm":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/sm\/4-abomination.jpg",
         "md":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/md\/4-abomination.jpg",
         "lg":"https:\/\/cdn.jsdelivr.net\/gh\/akabab\/superhero-api@0.3.0\/api\/images\/lg\/4-abomination.jpg"
      }
   }
]
