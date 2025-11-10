# Telegram YouTube Song Bot

A Telegram bot that lets users search for any song by name and get the MP3 directly, and fetch files from your Telegram channel to users via commands.  
Supports Premium membership and broadcast messaging.

## Features

- **Search Songs**: Type any song name; get the MP3 file, not just a link.
- **Fetch Files**: Use `/file <name>` to get files from your channel.
- **Help Command**: `/help` gives full instructions.
- **Premium Management**: Owner can add/remove premium users and broadcast messages.
- **User Info**: `/start` gives instructions and owner's contact for premium.

## Commands

- `/help` — Shows command usage and examples
- `[Song Name]` — Send song name to get MP3 via DM
- `/file <filename>` — Get file from your channel by name
- `/add <user id> <days>` — Owner only: add premium to user for X days
- `/rem <user id>` — Owner only: remove premium from user
- `/broadcast <message>` — Owner only: broadcast message to all users

## Example Usage

- Search: send `Imagine Dragons Believer` in DM
- Get file: `/file notes.pdf`
- Premium: `/add 123456 30` gives user 123456 premium for 30 days

## Premium Access

Premium users may get unlimited/priority features.  
To buy premium, message the owner: [@technicalserena](https://t.me/technicalserena).

## Deployment

### Environment Variables

Copy `.env.example` to `.env`, fill values:

```
BOT_TOKEN=your_telegram_bot_token
OWNER_ID=your_telegram_id
OWNER_USERNAME=technicalserena
CHANNEL_ID=@your_channel_username_or_id
YT_API_KEY=your_youtube_api_key
TELEGRAM_HASH=your_telegram_hash
MONGO_URL=mongodb+srv://your_mongodb_url
```

### Install & Run

```bash
git clone https://github.com/<your-username>/telegram-song-bot.git
cd telegram-song-bot
npm install
npm start
```

### Deploy on Render

- Create new Web Service on Render.
- Connect repo.
- Add environment variables in Render settings.
- Add [render.yaml](./render.yaml) for config.

### Hosting Platforms

- **Render**
- **Railway**
- **Heroku**
- Supports any host with Node.js + ability to run `yt-dlp`.

### Requirements

- Telegram Bot Token
- YouTube API Key
- MongoDB URL
- `yt-dlp` & `ffmpeg` installed on server host

## Support

Contact Owner: [@technicalserena](https://t.me/technicalserena)  
For bugs or feature requests, open issue in the repo or message owner.
