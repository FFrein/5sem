//Exercise 6

function calculateSquare6(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number !== 'number') {
          reject('Input is not a number');
        } else {
          resolve(number * number);
        }
      }, 1000); // Разрешаем Promise через 1 секунду
    });
  }
  
  function calculateCube6(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number !== 'number') {
          reject('Input is not a number');
        } else {
          resolve(number * number * number);
        }
      }, 2000); 
    });
  }  
  
  function calculateFourthPower6(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number !== 'number') {
          reject('Input is not a number');
        } else {
          resolve(number * number * number * number);
        }
      }, 3000); 
    });
  }
    
      
      
      // Используем Promise.race() для получения первого разрешенного Promise
Promise.race([
    calculateSquare6(5),
    calculateCube6(5),
    calculateFourthPower6(5)
])
.then((result) => {
    console.log('Первый разрешенный результат:', result);
})
.catch((error) => {
    console.error('Ошибка:', error);
});
      
// Используем Promise.any() для получения первого разрешенного Promise
Promise.any([
    calculateSquare6(5),
    calculateCube6(5),
    calculateFourthPower6(5)
    ])
    .then((result) => {
        console.log('Первый разрешенный результат (Promise.any()):', result);
    })
    .catch((errors) => {
        console.error('Все Promise отклонены (Promise.any()):', errors);
    });
  
   