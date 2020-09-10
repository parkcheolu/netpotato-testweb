const Koa = require('Koa');
const fs = require('fs');
const Router = require('koa-router');
const serve = require('koa-static');
const send = require('koa-send');

const app = new Koa();
const router = new Router();

app.use(serve(__dirname + '/src'));

router.get('/', async ctx => {
    await send(ctx, 'index.html', {root: __dirname});
});

router.get('/js/socket.io.js', async ctx => {
    await send(ctx, '/js/socket.io.js', {root: __dirname});
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server started');
});