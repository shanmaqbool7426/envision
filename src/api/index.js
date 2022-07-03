import axios from "axios";

const reqconfig = (accessToken) => {
  let config = {};
  config = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Access-Control-Allow-Origin":"*"
        },
      }
    : {};

    return config
};

export const POST = async (url, data, callback, accessToken = false) => {
  try {
    axios
      .post(url, data,reqconfig(accessToken))
      .then((res) => {
        callback(res);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {}
};

export const GET = async (url, callback, accessToken = false) => {

  try {
    axios
      .get(url, reqconfig(accessToken))
      .then((res) => {
        callback(res.data);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (url, callback, accessToken = false) => {
  try {
    axios
      .put(url, (accessToken = false))
      .then((res) => {
        callback(res.data);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {}
};

export const DELETE = async (url, callback, accessToken = false) => {
  axios
    .delete(url, callback)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      callback(error.response);
    });
};
