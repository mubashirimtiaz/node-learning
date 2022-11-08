// console.log('One');

// const getDataFromServer = (cb) => {
//   console.log('getting data from server...');

//   setTimeout(() => {
//     console.log('data received from server.');
//     let data = '555';
//     cb(data);
//   }, 1000);
// };

// const callback = (data) => {
//   console.log(data);
// };
// getDataFromServer();

// const doneWithAlluParatha = (message) => {
//   console.log(message);
// };

// const makeAlluParatha = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const makeMeethiLassi = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// makeAlluParatha(function () {
//   console.log('Paratha ready to eat!');
//   console.log('dakaaarr!!!');
//   console.log('Want Lassi');
//   makeMeethiLassi(function () {
//     console.log('Lassi is ready!');
//   });
// });

function getAlluParathaPromise() {
  const alluParathaPromise = new Promise((resolveCallback, rejectCallback) => {
    const mood = 6;
    setTimeout(() => {
      if (mood > 5) {
        resolveCallback('Paratha is ready!');
      } else {
        rejectCallback('Too tired');
      }
    }, 3000);
  });

  return alluParathaPromise;
}

function main() {
  getAlluParathaPromise()
    .then((response) => {
      console.log('response ', response);
    })
    .catch((error) => {
      console.log('error ', error);
    });
}

// main();

async function main2() {
  try {
    const result = await getAlluParathaPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// main2();

async function main3() {
  try {
    const result = await getAlluParathaPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('It will always run');
  }
}

// main3();

function getMeethiLassiPromise() {
  const meethiLassiPromise = new Promise((resolveCallback, rejectCallback) => {
    const stomachPosition = 7;
    setTimeout(() => {
      if (stomachPosition < 9) {
        resolveCallback('Lassi is ready!');
      } else {
        rejectCallback("I'm full");
      }
    }, 3000);
  });

  return meethiLassiPromise;
}

async function main4() {
  try {
    const paratha = await getAlluParathaPromise();
    const lassi = await getMeethiLassiPromise();
    console.log('paratha ', paratha);
    console.log('lassi ', lassi);
  } catch (error) {
    console.log('error ', error);
  }
}

main4();

function main5() {
  getAlluParathaPromise()
    .then((response) => {
      console.log('response ', response);
      return getMeethiLassiPromise();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('error ', error);
    });
}
