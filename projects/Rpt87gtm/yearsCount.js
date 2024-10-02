module.exports = {
    getTimeDifference
};

function getTimeDifference(startDate, endDate) {
    let diff = endDate - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    let result = '';
    if (days > 0) result += `${days} дней `;
    if (hours > 0) result += `${hours} часов `;
    if (minutes > 0) result += `${minutes} минут `;
    if (seconds > 0) result += `${seconds} секунд`;

    return result.trim();
}