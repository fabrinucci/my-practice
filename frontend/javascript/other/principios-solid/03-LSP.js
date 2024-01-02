function makeRequest(url, errorHandler) {
  fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      errorHandler.handle(err);
    });
}

const consoleErrorHandler = {
  handle: (error) => {
    console.log(error);
  },
};

const externalErrorHandler = {
  handle: (error) => {
    sendErrorToExternalService(error);
  },
};

makeRequest('https://my-api.com', consoleErrorHandler);
makeRequest('https://my-api.com', externalErrorHandler);
