module.exports = {
    botName: 'YouTube Song Bot',
    botUsername: process.env.BOT_USERNAME || 'Song_Bot',
    ownerId: process.env.OWNER_ID, // Telegram user ID
    ownerUsername: process.env.OWNER_USERNAME || 'technicalserena',
    channelId: process.env.CHANNEL_ID, // ID of your Telegram channel
    ytApiKey: process.env.YT_API_KEY,
    telegramHash: process.env.TELEGRAM_HASH,
    mongoUrl: process.env.MONGO_URL
};