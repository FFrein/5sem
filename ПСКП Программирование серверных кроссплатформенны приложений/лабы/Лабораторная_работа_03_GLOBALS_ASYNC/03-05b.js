//Exercise 5


function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('Input is not a number');
    } else {
      resolve(number * number);
    }
  });
}

function calculateCube(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('Input is not a number');
    } else {
      resolve(number * number * number);
    }
  });
}

function calculateFourthPower(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('Input is not a number');
    } else {
      resolve(number * number * number * number);
    }
  });
}


Promise.all([
  calculateSquare(5),
  calculateCube(5),
  calculateFourthPower(asdasd)
])
  .then((results) => {
    const [squareResult, cubeResult, fourthPowerResult] = results;
    console.log('Квадрат:', squareResult);
    console.log('Куб:', cubeResult);
    console.log('Четвертая степень:', fourthPowerResult);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });