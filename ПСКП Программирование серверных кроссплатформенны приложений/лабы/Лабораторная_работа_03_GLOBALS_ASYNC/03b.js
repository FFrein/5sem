//Exercise 1
function firstJob(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Hello world');
        }, 2000);
    });
}

firstJob()
.then((result)=>{
    console.log("Block Then: " + result);
})
.catch((error)=>{
    console.error("Block catch: " + error);
})

async function firstJob2(){
    try{
        var result = await firstJob();
        console.log("Block try: " + result);
    }
    catch(err){
        console.error("Block catch2: " + err);
    }
}

firstJob2();

//Exercise 2

function SecondJob() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Ошибка: Произошла ошибка');
      }, 3000);
    });
  }
  
  // Обработка с помощью обработчиков Promise
    SecondJob()
    .then((result) => {
      console.log("Block Then" + result);
    })
    .catch((error) => {
      console.error("Block Catch: " + error);
    });
  
  // Обработка с помощью async/await и try/catch
  async function SecondJob2() {
    try {
      const result = await SecondJob();
      console.log("Block try" + result);
    } catch (error) {
      console.error("Block Catch2: " + error);
    }
  }
  
  SecondJob2();

//Exercise 3

  function thirdJob(data) {
    return new Promise((resolve, reject) => {
      if (typeof data !== 'number') {
        reject('error');
      } else if (data % 2 === 1) {
        setTimeout(() => {
          resolve('odd');
        }, 1000);
      } else {
        setTimeout(() => {
          reject('even');
        }, 2000);
      }
    });
  }
  
  // Обработка с помощью обработчиков Promise
  thirdJob(5)
    .then((result) => {
      console.log('Результат третьей задачи с использованием обработчиков Promise:', result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Обработка с помощью async/await и try/catch
  async function thirdJob2() {
    try {
      const result = await thirdJob(4);
      console.log('Результат третьей задачи с использованием async/await и try/catch:', result);
    } catch (error) {
      console.error(error);
    }
  }
  
  thirdJob2();

  //Exercise 4

  function validateCard(cardNumber) {
    console.log('Проверка карты с номером:', cardNumber);
    const random = Math.random() < 0.5 ? 0 : 1;
    return random === 1;
  }
  
  function createOrder(customerCardNumber) {
    return new Promise((resolve, reject) => {
      if (!validateCard(customerCardNumber)) {
        reject('Card is not valid');
      } else {
        // Генерируем номер заказа (в данном случае, случайное число)
        const orderId = Math.floor(Math.random() * 1000);
        // Задержка в 5 секунд перед разрешением обещания
        setTimeout(() => {
          resolve(orderId);
        }, 5000);
      }
    });
  }
  
  function proceedToPayment(orderId) {
    console.log('Производится оплата для заказа с номером:', orderId);
    return new Promise((resolve, reject) => {
      // Генерируем случайное число (0 или 1)
      const random = Math.random() < 0.5 ? 0 : 1;
      // Разрешаем обещание успешно с вероятностью 50%
      if (random === 1) {
        resolve('Payment successful');
      } else {
        reject('Payment failed');
      }
    });
  }
  
  // Вызываем функцию createOrder и обрабатываем результаты с использованием обещаний и обработчиков
  createOrder('1234567890123456')
    .then((orderId) => {
      console.log('Заказ создан успешно. Номер заказа:', orderId);
      return proceedToPayment(orderId);
    })
    .then((paymentResult) => {
      console.log('Результат оплаты:', paymentResult);
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
  
  // Вызываем функцию createOrder и обрабатываем результаты с использованием async/await и try/catch
  async function processOrder() {
    try {
      const orderId = await createOrder('2345678901234567');
      console.log('Заказ создан успешно. Номер заказа:', orderId);
      const paymentResult = await proceedToPayment(orderId);
      console.log('Результат оплаты:', paymentResult);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
//Exercise 5

  processOrder();

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
    calculateFourthPower(5)
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
    calculateSquare(5),
    calculateCube(5),
    calculateFourthPower(5)
    ])
    .then((result) => {
        console.log('Первый разрешенный результат (Promise.any()):', result);
    })
    .catch((errors) => {
        console.error('Все Promise отклонены (Promise.any()):', errors);
    });
  
    
//Exercise 7    

function f1(){
    console.log('f1');
}
        
function f2(){
     console.log('f2');
}
        
function f3(){
    console.log('f3');
}
        
function main(){
    console.log('main');
        
    setTimeout(f1, 50);
    setTimeout(f3, 50);
        
    new Promise((resolve, reject) => 
        resolve('I am a Promise, right after f1 and f3! Really?')
    ).then(resolve => console.log(resolve));
        
    new Promise((resolve, reject) => 
        resolve('I am a Promise after Promise')
    ).then(resolve => console.log(resolve));
        
    f2();
}
        
main();