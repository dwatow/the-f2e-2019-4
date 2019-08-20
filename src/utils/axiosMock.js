const get = (url, param) =>
  new Promise(function(resolve) {
    setTimeout(() => {
      console.dir(`XHR finished loading: GET "http://fake-api.io${url}".`);
      resolve({
        data: API_DOC["get " + url](param)
      });
    }, 300);
  });

const post = (url, data) =>
  new Promise(function(resolve) {
    console.dir(`XHR finished loading: POST "http://fake-api.io${url}".`);
    setTimeout(() => {
      API_DOC["post " + url](data);
      resolve({
        data: {
          message: "success"
        }
      });
    }, 300);
  });

const API_DOC = {
  "get /me": () => {
    return database.me;
  },
  "post /me": data => {
    database.me = data;
  },
  "get /crypto/payment": () => {
    return database.payment;
  },
  "post /crypto/payment": data => {
    database.payment = data;
  },
  "get /shopping_cart": () => {
    return database.shopping_cart;
  },
  "post /crypto/checkout": () => {
    // return database.order_id;
  }
};

const database = {
  me: {
    name: "john Doe",
    phone: "",
    country: "United States",
    city: "New York",
    zip: 12401,
    addr: "132, My Street, Kingston"
  },
  payment: {
    currency: "ETH",
    speed: "average",
    transactionFee: 0.00021
  },
  shopping_cart: {
    store_name: "Store Name Inc.",
    currency_type: "ETH",
    productions: [
      {
        id: 0,
        name: "First Product",
        quantity: 3,
        price: 0.134
      },
      {
        id: 1,
        name: "Second Product",
        quantity: 1,
        price: 0.033
      }
    ]
  }
};

export default {
  get,
  post
};
