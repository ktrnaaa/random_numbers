document.addEventListener('DOMContentLoaded', function() {
    const playGameButtonOne = document.getElementById('playGameBtnOne');
    const redirectButton = document.getElementById('redirectBtn');
  
    playGameButtonOne.addEventListener('click', function() {
      fetch('/getNumber')
        .then(response => response.json())
        .then(data => {
          const resultElement = document.getElementById('result');
          const requestsElement = document.getElementById('requests');
          const numbersList = document.getElementById('numbersList');
  
          numbersList.innerHTML = '';
  
          const li = document.createElement('li');
          li.textContent = data.number;
          numbersList.appendChild(li);
  
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
      window.location.href = '/threeNumbersPage'; 
    });
  });
  