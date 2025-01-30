// 1 Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// 2 Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomIndex4 = Math.floor(Math.random() * alphabet.length);
// 3 Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
const randomLetter1 = alphabet[randomIndex1];
const randomLetter2 = alphabet[randomIndex2];
const randomLetter3 = alphabet[randomIndex3];
const randomLetter4 = alphabet[randomIndex4];

const randomWord = randomLetter1 + randomLetter2 + randomLetter3 + randomLetter4;
// 4 Выведи полученное случайное слово на экран, чтобы проверить результат.

console.log(`Случайное слово: ${randomWord}`);