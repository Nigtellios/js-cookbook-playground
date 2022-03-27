import { hash } from '../Config/secret';
import { Today } from '../Utils/CurrentDate';
// https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj
import "babel-polyfill";

const reqUrl= 'https://api.astronomyapi.com/api/v2/studio/moon-phase';
const today = new Today({}).getDate;

class FetchMoonPhases {
  constructor() {
    this.parameters = {
      "format": "png",
        "style": {
        "moonStyle": "default"
      },
      "observer": {
        "longitude": 54.58479,
          "latitude": 18.38543,
          "date": today
      },
      "view": {
        "type": "portrait-simple",
          "orientation": "south-up"
      }
    };

    this.headers = new Headers({
      'Authorization': `Basic <${hash}>`
    });

    this.body = new Request(reqUrl, {
      method: 'POST',
      body: JSON.stringify(this.parameters),
      headers: this.headers,
      mode: 'cors'
    });
  }

  init() {
    this.fetchPhases()
      .then(phases => {
        console.log(phases);
      })
      .catch(error => {
        console.log(error);
      });
  }

  async fetchPhases() {
    const response = await fetch(this.body);

    if (!response.ok) {
      console.log(`An error occurred: ${ response.status }`);
    } else {
      console.log(`Fetch has been made successfully.`);
    }

    return await response.json();
  }
}

export { FetchMoonPhases };