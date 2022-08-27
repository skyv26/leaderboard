class Api {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JqyMjlAIfzoPkOxklElb/scores/';
  }

  promisedData = (obj = null) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(obj),
    };
    return (async () => (await fetch(this.url, obj ? option : [])).json())();
  }

  get() {
    return this.promisedData();
  }

  post(obj) {
    this.promisedData(obj);
  }
}

export default new Api();