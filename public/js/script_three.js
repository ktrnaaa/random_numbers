document.addEventListener('DOMContentLoaded', function() {
    const playGameButtonThree = document.getElementById('playGameBtnThree');
    const redirectButton = document.getElementById('redirectBtn');
  
    playGameButtonThree.addEventListener('click', function() {
      fetch('/getThreeNumbers')
        .then(response => response.json())
        .then(data => {
          const resultElement = document.getElementById('result');
          const requestsElement = document.getElementById('requests');
          const numbersList = document.getElementById('numbersList');
  
          numbersList.innerHTML = '';
  
          data.numbers.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            numbersList.appendChild(li);
          });
  
          requestsElement.textContent = `Кількість кроків: ${data.requests}`;
  
          if (data.gameOver) {
            resultElement.textContent = 'Найбільше число знайдено!';
          } else {
            resultElement.textContent = '';
          }
        })
        .catch(error => console.error('Помилка:', error));
    });
  
    redirectButton.addEventListener('click', function() {
      window.location.href = '/oneNumberPage';
    });
  });
  