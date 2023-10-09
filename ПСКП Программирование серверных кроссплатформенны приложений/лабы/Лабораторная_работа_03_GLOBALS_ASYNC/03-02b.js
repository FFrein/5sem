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