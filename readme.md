[hoc]

## 为什么要处理异常

异常是不可控的，会影响最终的呈现结果，但是我们有充分的理由去做这样的事情。

增强用户体验；
远程定位问题；
未雨绸缪，及早发现问题；
无法复线问题，尤其是移动端，机型，系统都是问题；
完善的前端方案，前端监控系统；
对于 JS 而言，我们面对的仅仅只是异常，异常的出现不会直接导致 JS 引擎崩溃，最多只会使当前执行的任务终止。

## 需要处理哪些异常？

JS 语法错误、代码异常
AJAX 请求异常
静态资源加载异常
Promise 异常
Iframe 异常
跨域 Script error
崩溃和卡顿

## Try-Catch 的误区

try-catch 只能捕获到同步的运行时错误，对语法和异步错误却无能为力，捕获不到。

```javascript
try {
  let name = 'jartto';
  console.log(nam);
} catch (e) {
  console.log('捕获到异常：', e);
}
```

输出

```javascript
捕获到异常：ReferenceError: nam is not defined    at :3:15
```

不能捕获到具体的语法错误，只有一个语法错误提示。我们修改一下代码，删掉一个单引号：

```javascript
try {  let name = 'jartto;  console.log(nam);} catch(e) {  console.log('捕获到异常：',e);}
```

输出：

```javascript
Uncaught SyntaxError: Invalid or unexpected token不过语法错误在我们开发阶段就可以看到，应该不会顺利上到线上环境。
```

## window.onerror

当 JS 运行时错误发生时，window 会触发一个 ErrorEvent 接口的 error 事件，并执行 window.onerror()。
不论是静态资源异常，或者接口异常，错误都无法捕获到。

补充一点：window.onerror 函数只有在返回 true 的时候，异常才不会向上抛出，否则即使是知道异常的发生控制台还是会显示 Uncaught Error: xxxxx
需要注意：

onerror 最好写在所有 JS 脚本的前面，否则有可能捕获不到错误；
onerror 无法捕获语法错误；
到这里基本就清晰了：在实际的使用过程中，onerror 主要是来捕获预料之外的错误，而 try-catch 则是用来在可预见情况下监控特定的错误，两者结合使用更加高效。

## 解决方法

1.window.addEventListener

当一项资源(如图片或脚本)加载失败，加载资源的元素会触发一个 Event 接口的 error 事件，并执行该元素上的 onerror() 处理函数。这些 error 事件不会向上冒泡到 window ，不过(至少在 Firefox 中)能被单一的 window.addEventListener 捕获

```javascript
window.addEventListener('error', (error) => {
  console('error', error);
});
```

由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 的状态是 404 还是其他比如 500 等等，所以还需要配合服务端日志才进行排查分析才可以。

需要注意：

不同浏览器下返回的 error 对象可能不同，需要注意兼容处理。
需要注意避免 addEventListener 重复监听。

## Promise.catch

在 promise 中使用 catch 可以非常方便的捕获到异步 error ，这个很简单。

没有写 catch 的 Promise 中抛出的错误无法被 onerror 或 try-catch 捕获到，所以我们务必要在 Promise 中不要忘记写 catch 处理抛出的异常。

解决方案：为了防止有漏掉的 Promise 异常，建议在全局增加一个对 unhandledrejection 的监听，用来全局监听 Uncaught Promise Error。使用方式：

```javascript
window.addEventListener('unhandledrejection', function (e) {
  console.log(e);
});
```

## 错误上报

1.通过 Ajax 发送数据 因为 Ajax 请求本身也有可能会发生异常，而且有可能会引发跨域问题，一般情况下更推荐使用动态创建 img 标签的形式进行上报。

2.动态创建 img 标签的形式

```javascript
function report(error) {
  let reportUrl = `http://xxxx/report`;
  new Image().src = `${reportUrl}?logs=${error}`;
}
```

收集异常信息量太多，怎么办？实际中，我们不得不考虑这样一种情况：如果你的网站访问量很大，那么一个必然的错误发送的信息就有很多条，这时候，我们需要设置采集率，从而减缓服务器的压力：

```javascript
Reporter.send = function (data) {
  // 只采集 30%  if(Math.random() < 0.3) {    send(data)      // 上报错误信息
};
```

采集率应该通过实际情况来设定，随机数，或者某些用户特征都是不错的选择。
