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

  get = () => {
    let data;
    try {
      data = this.promisedData();
    } catch (err) {
      data = new Error('Oops! Something went wrong !');
    }
    return data;
  }

  post(obj) {
    if (Object.keys(obj).length) {
      try {
        this.promisedData(obj);
      } catch (err) {
        throw err.message;
      }
    } else {
      throw new Error('Please fill the form before submission ...');
    }
  }
}

export default new Api();