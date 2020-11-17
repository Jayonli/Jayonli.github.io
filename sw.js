/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1186186792.html","19c120a3f7401355daf5df40d28b0c62"],["/1733019837.html","1f991b5f0f98ac89edc1f3f12d380791"],["/1771338196.html","6b36f6147aec04d6e7e644d9fa0e81b1"],["/2148397210.html","0b88a94ed552f690c15b57a5a78729a3"],["/2195189573.html","189b0742b1361e32d23b973a5e004660"],["/2360238627.html","892c52fb558fe1a068034099bb7fab70"],["/2476109404.html","8bcd9a53fb2091bf6c1012afac1a5c92"],["/274610813.html","d2e485af01d64d895065f1c4fc555bb2"],["/2931784335.html","757462c3707c08c6b1ba1f1105b8955b"],["/3178170368.html","13b0a2a5197835d4836630dbf603d7af"],["/3305003915.html","db17d3f2865b05b962520256eaa5973f"],["/372674368.html","d2128dad4c93b6b414d86d46c4776ad5"],["/3fe5.html","ca885b4fafa1509bd18b020221e68712"],["/404.html","06c21ec0213418ba69b5d6ed9e9e449e"],["/4183719525.html","9519dc323ecfc00d309f3b7461319917"],["/568795252.html","42c9b3a2165519c3b07e4d53ca4cfe70"],["/75507639.html","82d14269fe77d2f4a4104000fd227cfa"],["/757632919.html","c0688e312e77c4a8fbff5ede30479a82"],["/76666735.html","90fdc540f2dafe2bb27cc2df13e530ae"],["/8.html","40f8ecb1a54ead76b8c6fce2e336635a"],["/8fb4.html","689d1a824ac6f4fb33b880cacd7663eb"],["/about/index.html","95fd5fd42969ad12844f044329082291"],["/archives/2020/10/index.html","00916d615040e65f5d16301ac74cb659"],["/archives/2020/10/page/2/index.html","fee6c85c7a7810a8dbec9d5a77eed505"],["/archives/2020/11/index.html","612ab1c7e15a6265203c4bc2d7048689"],["/archives/2020/index.html","7400d6b76369a8235339858a79d1828f"],["/archives/2020/page/2/index.html","1ec540c374cabe73f5bfb91db8a26fed"],["/archives/2020/page/3/index.html","7fb5b5b807f58afad06831526c17cf40"],["/archives/index.html","dff13cddd37fdf6e7ff0a49b59d735c3"],["/archives/page/2/index.html","94fbd69694344bb132bb2d9b71a080d5"],["/archives/page/3/index.html","a9a0994e51ab688df46829552c176283"],["/c4f.html","89811cc0cf1edc5577684dbbb13ffd7a"],["/categories/index.html","32ab2a60fd1b6783a40fe4e078e811c5"],["/categories/issues/index.html","f0a6159c6f90ff06193973285d71f469"],["/categories/site/index.html","24aa1b7c8955b5104bb5b26357b9ace3"],["/categories/tools/index.html","6aaf08e5defb150a53dce42a6f5111c1"],["/categories/分类模板/index.html","a62c0fbefd899a2256dc97d6a4efff8c"],["/categories/知识储备/index.html","36ab867b4b71e296be917e084f5d25bb"],["/css/index.css","5932f831a8c011ca35008f83dca5b802"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f301523f05d464d3685f5883f447ec57"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","63a2286a8447a3c0b50d3de6eb1da316"],["/page/2/index.html","2d9a0e3d1dab44f1153f3d4581757c1c"],["/page/3/index.html","c341b1c47a040e67d71c73b2a5ab741d"],["/reward/index.html","3e5d661bff65c3049c93eac9e8fc1d85"],["/style/card/css/cardlist.css","a8251404d2b221c21e425c675bbbf7b9"],["/style/clock/css/clock.css","608daa92770d3e2d43db062f9dc7a332"],["/style/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/style/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/style/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/style/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/style/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/style/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/style/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/style/clock/js/clock.js","3559327e6a60001b8f53db0b9678f175"],["/style/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/style/css/awesome.css","fb231d761b93700a26aed08062bcc37c"],["/style/css/iconfont.css","0b87079f2ce925bf78fa347c60604463"],["/style/css/mouse.css","f9d9cedff7b97004868cd94b8243bdd3"],["/style/css/mystyle.css","12531838ebc790c6d9e14ca62a510447"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/gitcalendar/css/gitcalendar.css","86e677cdcc086b84ddcae21801e10c96"],["/style/gitcalendar/js/gitcalendar.js","21c81808cd579167d893be99d5aeab3f"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/Archive.jpg","a37e9db2785d8b6409f4d648756e1327"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/echarts.min.js","61c1178400d6b1b6ae5501727cf15e5a"],["/style/js/mystyle.js","d53a09663e88a8c6815addfe63d99f7b"],["/style/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/style/js/weather.js","71a322e15d570455d894315024c3a7ca"],["/style/magnet/css/catalogMagnet.css","e63a468de6d0cd55917e22b8b73823bf"],["/style/magnet/js/catalogMagnet.js","fad906b018416870cec0f438eecdb4c1"],["/style/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/sw-register.js","991847af737661c1e0db2cf04bcf7d10"],["/tags/403/index.html","bd2e62dff3780bcc41a1ff26cfb94692"],["/tags/API/index.html","253b8ce55e7ab93b4915d4462efa976e"],["/tags/Blog/index.html","fda63880c4858938651b813fab682a15"],["/tags/Markdown/index.html","b9c2032c23e6d96b1c746a2a8cbe5f25"],["/tags/TortoiseSVN/index.html","f430b7da53a35801058dff25fd7a3748"],["/tags/auto-js/index.html","ec64e3bf7c10b769497f3d225573facd"],["/tags/butterfly/index.html","4f577172a59ec7977c575d81ffd91d4a"],["/tags/git/index.html","960e34611a546755bda7bac3c3ce9914"],["/tags/github/index.html","7fec6254abe944e923db48c043d191d1"],["/tags/hexo/index.html","013f681cd335f9dcb279b6d407eb544b"],["/tags/index.html","b283ef9ad2fafea3af4d481bdd112d3b"],["/tags/tools/index.html","4c4fc09053b4df09ce75beba4bf282b9"],["/tags/valine/index.html","1663de1c25cc65b35e5bb8269fb1417c"],["/tags/vscode/index.html","e565221777546fa0aa1cb96679c8a713"],["/tags/图片/index.html","8202686b90ee3757de6ef22a0219cd3c"],["/tags/技能/index.html","55f9747ce015abb901ba5cb9b16e0438"],["/tags/标签1/index.html","68c5b1981b6ba2a0d5015f3a86248176"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
