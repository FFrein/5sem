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
        console.log("Карта " + customerCardNumber + " валидна");
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
      console.log('1Заказ создан успешно. Номер заказа:', orderId);
      return proceedToPayment(orderId);
    })
    .then((paymentResult) => {
      console.log('1Результат оплаты:', paymentResult);
    })
    .catch((error) => {
      console.error('1Ошибка:', error);
    });
  
  // Вызываем функцию createOrder и обрабатываем результаты с использованием async/await и try/catch
  async function processOrder() {
    try {
      const orderId = await createOrder('2345678901234567');
      console.log('2Заказ создан успешно. Номер заказа:', orderId);
      const paymentResult = await proceedToPayment(orderId);
      console.log('2Результат оплаты:', paymentResult);
    } catch (error) {
      console.error('2Ошибка:', error);
    }
  }

processOrder();
