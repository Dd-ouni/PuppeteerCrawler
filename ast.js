const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const template = require("@babel/template").default;
const fs = require("fs");
const path = require('path');
const atob = (s) => (new Buffer(s, 'base64').toString('utf8'));
const btoa = (s) => (new Buffer(s, 'utf8')).toString('base64');
// http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/#prettyPhoto
function read(filename, data) {
    filename = path.resolve(filename);
    return new Promise((resolve, reject) => {
        fs.readFile(filename, data, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    })
}


async function run() {
    // console.log(types.valueToNode("console.log(123)"));
    // console.log(types.callExpression(types.stringLiteral("console.log(123)")));
    // console.log(types.valueToNode(`window.cc = function aa(){ console.log('ccc') }`));

    let code = await read("douyin.js");
    code = atob(code);
    var cc = code.replace(new RegExp(`Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}));`, "g"), `Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}));if(!Ya.GetData){window.GetDouYinData=Ya.GetData=function(){Ar("/aweme/v1/web/channel/feed/",Ha(Ha({},Va),{},(Wa(t={},"tag_id",a),Wa(t,"count",i),t)),c,Ka,{errorTags:{tagId:a}},(function(e){var t;return 0===e.statusCode&&0===(null===(t=e.awemeList)||void 0===t?void 0:t.length)}))}};`);

    console.log(cc);

    // const ast = parse(atob(code));

    traverse(ast, {
        CallExpression: function (path) {
            path.replaceWithSourceString('function (a) { console.log(i) }');
            // let node = template(`function ccc() {  }, ccc()`);
            // path.replaceWith(node);
            // path.insertAfter(node)
            // console.log(node);
            // path.insertBefore(path.node);
            // path.insertAfter(types.valueToNode(`gg = 12`))
            // path.replaceWithSourceString('gg = 12, ll = 13');
            // path.replaceWithSourceString(types.expressionStatement(types.stringLiteral("A little high, little low.")))
            // path.replaceInline(types.valueToNode(`console.log(789)`))
            // path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));
            // path.insertAfter(types.valueToNode("console.log(123);"));
            // debugger;
            // if(path.node.callee.name == "Ar"){
            //     debugger;
            // }
            // if (path.parent.type == "AssignmentExpression" && path.node.callee.name) {
            //     debugger;
            // }
        }
    });

    // const result_js_code = generator(ast).code;
    // console.log(result_js_code);
}

run();

