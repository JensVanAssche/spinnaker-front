import axios from 'axios';

class Network {
  static getUrl(route) {
    if (
      route.indexOf('http://') === 0 ||
      route.indexOf('https://') === 0 ||
      route.indexOf('www.') === 0
    ) {
      return route;
    }
    return `${process.env.REACT_APP_API_HOST}${route}`;
  }

  static basicHeaders() {
    const headers = {};

    // ONLY USE THIS IF YOU WORK IN A BROWSER
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    return headers;
  }

  static errorHandler(error) {
    if (error.response) {
      // eslint-disable-next-line no-throw-literal
      throw {
        errors: (error.response.data && error.response.data.errors) || [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.response,
          },
        ],
      };
    } else if (error.request) {
      // The request was made but no response was received
      // eslint-disable-next-line no-throw-literal
      throw {
        errors: [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.request,
          },
        ],
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      // eslint-disable-next-line no-throw-literal
      throw {
        errors: [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.message,
          },
        ],
      };
    }
  }

  static async get(route) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.get(this.getUrl(route), {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async getWithoutCredentials(route) {
    try {
      const headers = {
        ...this.basicHeaders(),
      };
      const result = await axios.get(this.getUrl(route), {
        headers,
        withCredentials: false,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async put(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.put(this.getUrl(route), body, {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async patch(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.patch(this.getUrl(route), body, {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async post(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.post(this.getUrl(route), body, {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async delete(route) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.delete(this.getUrl(route), {
        headers,
        withCredentials: true,
      });
      return result.data || true;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async uploadImage(route, body) {
    const formData = new FormData();
    formData.append('file', body);

    try {
      const headers = {
        ...this.basicHeaders(),
        'content-type': 'multipart/form-data',
      };
      const result = await axios.post(this.getUrl(route), formData, {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async uploadPdf(route, body) {
    const formData = new FormData();
    formData.append('file', body.pdfData);
    formData.append('text', body.title);
    formData.append('text', body.pdfName);
    if (body.type) formData.append('text', body.type);

    try {
      const headers = {
        ...this.basicHeaders(),
        'content-type': 'multipart/form-data',
      };
      const result = await axios.post(this.getUrl(route), formData, {
        headers,
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }
}

export default Network;
