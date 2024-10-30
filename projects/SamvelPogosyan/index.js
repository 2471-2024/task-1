const currentDate = new Date();
const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
const daysUntilNewYear = Math.ceil((nextNewYear - currentDate) / (1000 * 60 * 60 * 24));

console.log(`Осталось дней до Нового года: ${daysUntilNewYear}`);