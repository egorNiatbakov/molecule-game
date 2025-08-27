let score = 0;
let timeLeft = 5;

const molecule = document.getElementById('molecule');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');

molecule.onclick = () => {
    score++;
    scoreDisplay.textContent = `Счёт: ${score}`;
};

const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ Время: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        submitBtn.disabled = false;
        molecule.style.pointerEvents = 'none';
    }
}, 1000);

submitBtn.onclick = () => {
    const data = { score: score };
    console.log("🎮 Отправляю результат:", data);  // 🔥 Проверка в консоли браузера

    if (window.Telegram?.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(data));
        Telegram.WebApp.close();
    } else {
        alert(`Игра завершена! Счёт: ${score}. Вернитесь в бота.`);
    }
};
