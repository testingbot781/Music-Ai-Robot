require('dotenv').config();
const { Telegraf } = require('telegraf');
const config = require('./config');
const premium = require('./utils/premium');
const helpCommand = require('./commands/help');
const songCommand = require('./commands/song');
const fileCommand = require('./commands/file');
const addCommand = require('./commands/add');
const remCommand = require('./commands/rem');
const broadcastCommand = require('./commands/broadcast');

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start handler
bot.start(async (ctx) => {
    await ctx.reply(`🎶 Welcome to ${config.botName}!
    
Search any song in DM and get the MP3 file directly.
To know all commands and usage, type /help.

For Premium access, contact @${config.ownerUsername}.`);
});

// /help handler
bot.command('help', helpCommand);

// Song search by plain text in DM
bot.on('text', async (ctx) => {
    // Skip commands
    if (ctx.message.text.startsWith('/')) return;
    await songCommand(ctx);
});

// /file command - get file from channel
bot.command('file', fileCommand);

// Owner-only commands
bot.command('add', async (ctx) => addCommand(ctx));
bot.command('rem', async (ctx) => remCommand(ctx));
bot.command('broadcast', async (ctx) => broadcastCommand(ctx));

// Info fallback
bot.on('new_chat_members', helpCommand);

bot.launch();
console.log(`Bot running as @${config.botUsername}`);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));