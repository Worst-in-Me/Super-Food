const { Telegraf } = require('telegraf');

const { config } = require('dotenv');

config();

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.HTTPS_DOMAIN;

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.sendMessage('Open', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'mini-app',
                        web_app: {
                            url: `https://${webAppUrl}`,
                        },
                    },
                ],
                [
                    {
                        text: 'Ролл Постный',
                        web_app: {
                            url: `https://${webAppUrl}/products/446`,
                        },
                    },
                ],
                [
                    {
                        text: 'Ролл Альфа',
                        web_app: {
                            url: `https://${webAppUrl}/products/510`,
                        },
                    },
                ],
                [
                    {
                        text: 'Пицца Диабло',
                        web_app: {
                            url: `https://${webAppUrl}/products/485`,
                        },
                    },
                ],
            ],
        },
    });
});

bot.on('message', (ctx) => {
    try {
        if (ctx.message.text === '/start') return;
        const params = JSON.parse(ctx.message.text);
        const url = new URL(`https://${webAppUrl}`);

        for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);

        console.log(params, url.toString());

        ctx.sendMessage(url.toString(), {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: url.toString(),
                            web_app: {
                                url: url.toString(),
                            },
                        },
                    ],
                ],
            },
        });
    } catch (e) {
        console.error(e);
        ctx.reply('No valid json');
    }
});

bot.launch();
