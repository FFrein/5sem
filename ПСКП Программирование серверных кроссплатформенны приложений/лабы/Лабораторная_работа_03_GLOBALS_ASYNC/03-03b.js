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