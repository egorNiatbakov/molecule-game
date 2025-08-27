let score = 0;
let timeLeft = 30;

const molecule = document.getElementById('molecule');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');

// Тап по молекуле
molecule.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Счёт: ${score}`;
});

// Таймер
const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ Время: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        submitBtn.disabled = false;
        molecule.style.pointerEvents = 'none';
        submitBtn.onclick = sendResult;
    }
}, 1000);

// Отправка результата в бота
function sendResult() {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({ score: score }));
        Telegram.WebApp.close();
    } else {
        alert(`Игра завершена! Ваш счёт: ${score}. Вернитесь в бота.`);
    }
}