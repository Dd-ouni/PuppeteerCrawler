const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const HTMLParser = require('node-html-parser');
// const atob = require('atob');
// const btoa = require('btoa');
const atob = (s) => (new Buffer(s, 'base64').toString('utf8'));
const btoa = (s) => (new Buffer(s, 'utf8')).toString('base64');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: false, // 忽略 HTTPS 错误
        devtools: false,
        // slowMo: 250, // Puppeteer 操作减少指定的毫秒数看清发生了什么，这很有用
        defaultViewport: {
            width: 800,
            height: 600
        },
        // args: [], // 传递给浏览器实例的参数 https://peter.sh/experiments/chromium-command-line-switches/
    });
    browser.on('disconnected', () => {
        log_on({ 'ON': 'disconnected', 'INFO': 'chromium close || crash', });
    });

    browser.on('targetchanged', (target) => {
        log_on({ 'ON': 'targetchanged', 'INFO': 'url changed', }, target);
    });

    browser.on('targetcreated', (target) => {
        log_on({ 'ON': 'targetcreated', 'INFO': 'call window.open || browser.newPage', }, target);
    });

    browser.on('targetdestroyed', (target) => {
        log_on({ 'ON': 'targetdestroyed', 'INFO': 'page close', }, target);
    });

    const page = await browser.newPage();

    InterceptedResponse(page);

    await page.setViewport({
        width: 1600,
        height: 900
    });
    // 设置显示区域大小
    await page.goto('https://www.baidu.com');
    const dim = await page.evaluate(() => {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    });
    // 执行js脚本
    console.dir(dim);

    await page.screenshot({ path: 'baidu.png' });
    await browser.close();
})();

async function InterceptedResponse(page) {
    const client = await page.target().createCDPSession();
    await client.send('Fetch.enable',
        {
            'patterns': [
                { 'urlPattern': '*', 'resourceType': 'Document', 'requestStage': 'Response' },
            ],
            'handleAuthRequests': true
        });
        
    client.on('Fetch.requestPaused', async (args) => {
        const response = await client.send('Fetch.getResponseBody', { 'requestId': args.requestId })
        let body = html_processing(response.base64Encoded ? atob(response.body) : response.body);
        // await write('baidu.html', body);

        await client.send('Fetch.continueRequest', {
            'requestId': args.requestId,
            'postData': response.base64Encoded ? btoa(body) : body
        });
        debugger;
    })
}

function html_processing(str) {
    let root = HTMLParser.parse(str);
    debugger;
    return str;
}

function log_on(info, target) {
    console.dir(Object.assign(info, target ? {
        'URL': target.url(),
        'TYPE': target.type()
    } : {}))
}

function write(filename, data) {
    filename = path.resolve(filename);
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    })
}
