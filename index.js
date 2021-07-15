const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const HTMLParser = require('node-html-parser');
const request = require('request');
// const atob = require('atob');
// const btoa = require('btoa');
const atob = (s) => (new Buffer(s, 'base64').toString('utf8'));
const btoa = (s) => (new Buffer(s, 'utf8')).toString('base64');

puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: false, // 忽略 HTTPS 错误
    devtools: true,
    // slowMo: 250, // Puppeteer 操作减少指定的毫秒数看清发生了什么，这很有用
    defaultViewport: {
        width: 800,
        height: 600
    },
    // args: [], // 传递给浏览器实例的参数 https://peter.sh/experiments/chromium-command-line-switches/
}).then(async browser => {
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

    page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36")

    scriptDebugger2(page);

    // InterceptedResponse2(page);

    await page.setViewport({
        width: 1600,
        height: 900
    });
    // 设置显示区域大小
    await page.goto('https://www.douyin.com/');
    const dim = await page.evaluate(() => {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    });
    // 执行js脚本
    console.dir(dim);

    // await sleep(2000);

    await page.screenshot({ path: 'douyin.png' });

    // await sleep(10000);

    // await browser.close();
});

async function scriptDebugger2(page) {
    const client = await page.target().createCDPSession();
    const debuggerId = await client.send('Debugger.enable');

    client.on('Debugger.breakpointResolved', async (args) => {
        debugger;
    });
    client.on('Debugger.paused', async (args) => {
        // let callFrameIndex = 0;
        // while (true) {
        //     if (args.callFrames[callFrameIndex].functionName == 'Ya') {
        //         // 执行脚本
        //         await client.send('Runtime.enable');
        //         // let compileScriptResult = await client.send('Runtime.compileScript', {
        //         //     // expression: "if(!Ya.GetData){window.GetDouYinData=Ya.GetData=function(){Ar(\"/aweme/v1/web/channel/feed/\",Ha(Ha({},Va),{},(Wa(t={},\"tag_id\",a),Wa(t,\"count\",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}))}}",
        //         //     expression: "alert(123);",
        //         //     persistScript: false,
        //         //     sourceURL: ""
        //         // });
        //         let callFrameResult = await client.send('Debugger.evaluateOnCallFrame',
        //             {
        //                 callFrameId: args.callFrames[callFrameIndex].callFrameId,
        //                 // expression: "if(!Ya.GetData){alert(123);window.GetDouYinData=Ya.GetData=function(){Ar(\"/aweme/v1/web/channel/feed/\",Ha(Ha({},Va),{},(Wa(t={},\"tag_id\",a),Wa(t,\"count\",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}))}}",
        //                 expression: "alert(123)",
        //                 generatePreview: true,
        //                 includeCommandLineAPI: true,
        //                 throwOnSideEffect: true,
        //                 timeout: 500,
        //             });
        //         // console.log("scriptId: ", callFrameResult.exceptionDetails.scriptId, compileScriptResult);
        //         // let runScriptResult = await client.send('Runtime.runScript',
        //         //     {
        //         //         scriptId: callFrameResult.exceptionDetails.scriptId
        //         //     });


        //         // 删除断点
        //         await client.send('Debugger.removeBreakpoint', {
        //             breakpointId: args.hitBreakpoints[0]
        //         });
        //         // 恢复执行
        //         await client.send('Debugger.resume', {
        //             terminateOnResume: false
        //         });

        //         // console.log(compileScriptResult, callFrameResult);
        //         console.log(callFrameResult, runScriptResult);
        //         break;
        //     }
        //     callFrameIndex++;
        // }

        await client.send('Runtime.enable');
        let compileScriptResult = await client.send('Runtime.compileScript', {
            // executionContextId: 1,
            expression: "(function(){if(!Ya.GetData){window.GetDouYinData=Ya.GetData=function(){Ar(\"/aweme/v1/web/channel/feed/\",Ha(Ha({},Va),{},(Wa(t={},\"tag_id\",a),Wa(t,\"count\",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}))}}})()",
            persistScript: false,
            sourceURL: ""
        });

        console.log(args.callFrames[0].callFrameId);
        let callFrameResult = await client.send('Debugger.evaluateOnCallFrame',
            {
                callFrameId: args.callFrames[0].callFrameId,
                expression: "(function(){if(!Ya.GetData){window.GetDouYinData=Ya.GetData=function(){Ar(\"/aweme/v1/web/channel/feed/\",Ha(Ha({},Va),{},(Wa(t={},\"tag_id\",a),Wa(t,\"count\",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}))}}})()",
                generatePreview: true,
                includeCommandLineAPI: true,
                objectGroup: "console",
                returnByValue: false,
                silent: false
            });


        // 删除断点
        await client.send('Debugger.removeBreakpoint', {
            breakpointId: args.hitBreakpoints[0]
        });
        // 恢复执行
        await client.send('Debugger.resume', {
            terminateOnResume: false
        });

        console.log(callFrameResult, compileScriptResult);
    });
    client.on('Debugger.scriptParsed', async (args) => {
        if (args.url == "https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/index.6c44f9b9.js") {

            await client.send('Debugger.setBreakpointsActive', { active: true });
            const breakpointId = await client.send('Debugger.setBreakpointByUrl', {
                columnNumber: 71045,
                lineNumber: 0,
                url: "https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/index.6c44f9b9.js"
            });
            console.log(args.url, " executionContextId", args.executionContextId);
        }
    });
}

async function scriptDebugger(page) {
    const client = await page.target().createCDPSession();
    const debuggerId = await client.send('Debugger.enable');
    const breakpointId = await client.send('Debugger.setInstrumentationBreakpoint', {
        instrumentation: 'beforeScriptExecution'
    });
    // client.on('Debugger.scriptParsed', async (args) => {
    //     debugger;
    // });
}

async function InterceptedResponse2(page) {
    await page.setRequestInterception(true);
    page.on("request", async req => {
        // 非js脚本返回
        // 如果html中有inline的script检测html中也要改，一般没有
        if (req.resourceType() !== "script") {
            req.continue()
            return
        }
        // 获取url
        const url = req.url()
        if (url.indexOf("index.6c44f9b9.js") > -1) {
            await new Promise((resolve, reject) => {
                request.get(url, (err, res) => {
                    var body = res.body;
                    body = 'alert(123);' + body;
                    // console.log("======", body.indexOf(`Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}));`), "======");
                    // body = body.replace(`Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}));`, `Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)})),alert(123);`);
                    // console.log("======", body.indexOf(`alert(123)`), "========");
                    // console.log(body);
                    req.respond({
                        body: body,
                    })
                    resolve()
                })
            });
        } else {
            req.continue();
            return
        }
    })
}

async function InterceptedResponse(page) {
    const client = await page.target().createCDPSession();
    await client.send('Fetch.enable',
        {
            'patterns': [
                { 'urlPattern': '*', 'resourceType': 'Script', 'requestStage': 'Response' },
            ],
            'handleAuthRequests': true
        });

    client.on('Fetch.requestPaused', async (args) => {
        const response = await client.send('Fetch.getResponseBody', { 'requestId': args.requestId })
        // let body = html_processing(response.base64Encoded ? atob(response.body) : response.body);
        // await write('baidu.html', body);
        let body = response.base64Encoded ? atob(response.body) : response.body;
        if (args.request.url.indexOf("index.a216aa02.js") > -1) {
            // console.log(body);
            // debugger;
        }
        if (args.request.url.indexOf("vendors~tea.56febe7b783d8fb97f84.js") > -1
            ||
            args.request.url.indexOf("sentry.3.6.31.cn.js") > -1) {
            // console.log(body);
            // debugger;
            await client.send('Fetch.continueRequest', {
                'requestId': args.requestId,
                'postData': ""
            });
        } else {
            await client.send('Fetch.continueRequest', {
                'requestId': args.requestId,
                'postData': response.base64Encoded ? btoa(body) : body
            });
        }
    })
}

// await sleep();
function sleep(time = 3000) {
    return new Promise(resolve => setTimeout(resolve, time))
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
