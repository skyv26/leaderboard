class Api {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7TFRZjVXv77rLqtHEHfB/scores/';
  }

  promisedData = (obj = null) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(obj),
    };
    return (async () => {
      let dataHolder;
      try {
        dataHolder = await (await fetch(this.url, obj ? option : [])).json();
      } catch (err) {
        dataHolder = new Error('Oops ! Something went wrong ...').message;
      }
      return dataHolder;
    })();
  }

  get = async () => {
    const data = await this.promisedData();
    return data;
  }

  post = async (obj) => {
    let data;
    if (obj.user !== '' && obj.score !== '') {
      data = await this.promisedData(obj);
    } else {
      data = new Error('Please fill the form, before submission ...').message;
    }
    return data;
  }
}

export default new Api();