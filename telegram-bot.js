// telegram-bot.js
const BOT_TOKEN = '8546972046:AAFMR0WqJ0x_xBtosVmieypofIjHcnMtySY';

async function sendTelegramNotification(chatId, message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        return null;
    }
}
