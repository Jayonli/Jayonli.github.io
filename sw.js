/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1186186792.html","bee91b2f91b90c27c3d4867d8643cacc"],["/1733019837.html","869126d62a0d2cec2f6b968c7933ffd4"],["/1771338196.html","94d18a17a01fbb12ead5a3704de1ad15"],["/2148397210.html","2fb78bf9705b03d266f06081df55bb48"],["/2195189573.html","857e1f37b00eb73dc2fff7b24aeeea60"],["/2360238627.html","12da14c742e2356d08742cddf6897f73"],["/2476109404.html","d77fa272b1ee11932085a5b951f39100"],["/274610813.html","50fbc141af7ae71b6a74243661891e0d"],["/2931784335.html","0fc3679f854b6d2394aac480b5c63f84"],["/3178170368.html","53cea415d6473ce879b2f0a0ab04cd16"],["/3305003915.html","59c19dbbc22c8a3be5bd7bfa62dfd9e2"],["/372674368.html","58ef4b1a5fbd73ea6b91e92a78b8d4c5"],["/3fe5.html","0eb81779cfea5490cf9430a5f48f6ff1"],["/404.html","e9739bc3863769d129e0f85e789f8501"],["/4183719525.html","52785e11fdba1755b323de053c1ff038"],["/568795252.html","7cb14c132a73f44d31d649223f7f4e13"],["/75507639.html","bc4091deb9f1a211d1697877860cd679"],["/757632919.html","63ab7f5bd1cab93b5915ad33d3bc5792"],["/76666735.html","1f80e7ff87ec93860e578ee27d81e810"],["/8.html","4812b5d91ca951ac02788e5ca229bcdd"],["/8fb4.html","1aa0e19620d97bce232a7e90c583c42e"],["/about/index.html","09b784fbb147d995b01b4b5de4d19336"],["/archives/2020/10/index.html","35d773fb87324b8c266d7ad725121543"],["/archives/2020/10/page/2/index.html","9ac89d59c9da1a610415d685f4b2ca40"],["/archives/2020/11/index.html","27f88d12d5610ffb98194d2b43764dfe"],["/archives/2020/index.html","81be92918b43f6f5dcdd4160cf3ea445"],["/archives/2020/page/2/index.html","91d568c23bc5606c9aa71f88aa7a629c"],["/archives/2020/page/3/index.html","5a49df7c6fcec91e3e18dfbe97c88023"],["/archives/index.html","d4e928ebff599482678c723a04f36a50"],["/archives/page/2/index.html","bc343e14c6da94adc77f6c10c2e290de"],["/archives/page/3/index.html","0ca3dc4757b720e9107d0c01f05dafca"],["/c4f.html","8b029aee7623d1997b48a2ae27e5e48e"],["/categories/index.html","447f34b60c51ecd0e8fb621d5635564d"],["/categories/issues/index.html","6c295ef82062045614e26e10176e3ef6"],["/categories/site/index.html","3dd030a334c0fb4a557ff5cf76405006"],["/categories/tools/index.html","5b2a4f90e24cb183b5dc73f2eb5ec1e1"],["/categories/分类模板/index.html","72e1febbc857b757473481e1a03e814f"],["/categories/知识储备/index.html","6f39f9ca2451a31d40fd4f1328d5c2ee"],["/css/index.css","5932f831a8c011ca35008f83dca5b802"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","17a83d839b383b7b53f07642d384daa8"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","59bd8afa52e200fe3dc9c83463e75643"],["/page/2/index.html","6170a0b6032a6d573e2ff83cfaddd8da"],["/page/3/index.html","019b783b20e0bce56db2870eecd49779"],["/reward/index.html","f44e9eb51d1f84836af287504f340962"],["/style/card/css/cardlist.css","2e335074e274b440457a9735fd616265"],["/style/clock/css/clock.css","608daa92770d3e2d43db062f9dc7a332"],["/style/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/style/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/style/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/style/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/style/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/style/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/style/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/style/clock/js/clock.js","3559327e6a60001b8f53db0b9678f175"],["/style/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/style/css/awesome.css","fb231d761b93700a26aed08062bcc37c"],["/style/css/iconfont.css","499f7b950b07ce201df4e031cacb925b"],["/style/css/mouse.css","f9d9cedff7b97004868cd94b8243bdd3"],["/style/css/mystyle.css","12531838ebc790c6d9e14ca62a510447"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/gitcalendar/css/gitcalendar.css","86e677cdcc086b84ddcae21801e10c96"],["/style/gitcalendar/js/gitcalendar.js","21c81808cd579167d893be99d5aeab3f"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/Archive.jpg","a37e9db2785d8b6409f4d648756e1327"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/echarts.min.js","61c1178400d6b1b6ae5501727cf15e5a"],["/style/js/mystyle.js","d53a09663e88a8c6815addfe63d99f7b"],["/style/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/style/js/weather.js","71a322e15d570455d894315024c3a7ca"],["/style/magnet/css/catalogMagnet.css","e63a468de6d0cd55917e22b8b73823bf"],["/style/magnet/js/catalogMagnet.js","fad906b018416870cec0f438eecdb4c1"],["/style/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/sw-register.js","b3c56fb610a7c9e86fca4c8d6a6a26b4"],["/tags/403/index.html","689b4cf6a18929bef0cf83173c5f7fa3"],["/tags/API/index.html","1c503839d6e1a39ebbc3759c2444722a"],["/tags/Blog/index.html","c13d894637664386022f754cb47e637d"],["/tags/Markdown/index.html","058830a0d595204cf251459cb6cd1614"],["/tags/TortoiseSVN/index.html","982e647a8e29e53b875acfb2c62f6a5a"],["/tags/auto-js/index.html","a9cded8cdc4060104988aadbbd603f8d"],["/tags/butterfly/index.html","b1a45ada2b465b55071be2460eaa44da"],["/tags/git/index.html","1fe7a543304c49355c94f7655084a8e3"],["/tags/github/index.html","441c946511d6e9904360ef92a67e32ff"],["/tags/hexo/index.html","1f18e06739d2103892dc13b685a881b2"],["/tags/index.html","60ba9bedf399e6ffe7ddac8de25d0fe2"],["/tags/tools/index.html","d04a6ce8bca3f6dcde2e0af59b20e752"],["/tags/valine/index.html","577972c01c9e82ff65f2ff63c2e49f92"],["/tags/vscode/index.html","58b818ab80cc53a5b5feee90f4c67455"],["/tags/图片/index.html","791c8134daee2a1d4a8eeb2960381678"],["/tags/技能/index.html","a63aacb797432dd2fd5a68a1ca7aed9c"],["/tags/标签1/index.html","35481ae61678f3661abe740ef7c7e440"]];
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
