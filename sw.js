/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1733019837.html","cd9cf24b52ef883e7cda883148ed4134"],["/1771338196.html","3cd52b47bdb08efc5cdada55292edad4"],["/2148397210.html","bd8b218c7363fb02cada0eb92d276fa8"],["/2195189573.html","fbe87e8c9fa26a61bcdf96275594cfb6"],["/2360238627.html","98c1e2358037949dbbdd07f31a2c3ae0"],["/274610813.html","11fd9ad4de92ff8f22f0987161a36ad8"],["/2931784335.html","990826e80f2e1ad851ee1116bc493bf2"],["/3178170368.html","ac28b8416b5307eb4b379b7149c4743c"],["/3305003915.html","34d024132df750087d63eb9e76c8d5d1"],["/372674368.html","ac6d5083b5d2c08712374dddff72e310"],["/3740655047.html","6b55b852014f20c1bdbfb6b195fe41cf"],["/404.html","61606f38b79f8639c3bf11371ab6302c"],["/4183719525.html","a8ee813b1ed79527ce990dd78106a68c"],["/568795252.html","6bf97195579584d7dfab81c1a5389602"],["/75507639.html","d6a8c45e92497b618d1eb16c1f166e60"],["/757632919.html","dd8dd9dac5d14228bd97425a78ffe119"],["/76666735.html","48e22445a00d0cb5f39708e88b95f3a9"],["/8.html","226da87ac62a339d68915304901f3531"],["/8fb4.html","f581030abf16bfd49fdadda74f1d1d3f"],["/about/index.html","81843a38094c9efb50e297489f7e170a"],["/archives/2020/10/index.html","2b941aff0cb26c1206ba1c9511baee37"],["/archives/2020/10/page/2/index.html","3db8cb80c46a947155c8b004bc4b7d0a"],["/archives/2020/11/index.html","f10fb7c17bcc9b88ff4cbe10c3250d61"],["/archives/2020/index.html","dba1b5f70d2ed79cd44b99f565a820c2"],["/archives/2020/page/2/index.html","c6cd328808e61e501945759ed719860f"],["/archives/index.html","5715a87c3688c0e589230dd3d151aa87"],["/archives/page/2/index.html","4b6697e22c8a51fb07762c3a2403c484"],["/c4f.html","66572c19e5f6d694cb2bcf7811580539"],["/categories/index.html","bee417ab09bedcdde8d9219fc2a4cb9f"],["/categories/issues/index.html","7d3f40efd609143d65c0bccc88aa4412"],["/categories/site/index.html","88bfa709fcb4b618a1cd788e9c3a7a0c"],["/categories/tools/index.html","c3e942aa102d9293867510433cfc4210"],["/categories/知识储备/index.html","53414f3af3a6316a74c2427b8e9d5ebf"],["/css/index.css","5932f831a8c011ca35008f83dca5b802"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","089cc7a49a77582c613211079b671df7"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","62b66d3e212f531369e316d42f7a2043"],["/page/2/index.html","9378b999d3a9773e3ad349833283ceab"],["/reward/index.html","2b11fdd101b669b05f9379934b72153e"],["/style/card/css/cardlist.css","ead937dc5279c2e0953b37382c3b9fb1"],["/style/clock/css/clock.css","608daa92770d3e2d43db062f9dc7a332"],["/style/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/style/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/style/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/style/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/style/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/style/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/style/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/style/clock/js/clock.js","3559327e6a60001b8f53db0b9678f175"],["/style/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/style/css/awesome.css","fb231d761b93700a26aed08062bcc37c"],["/style/css/iconfont.css","0b87079f2ce925bf78fa347c60604463"],["/style/css/mouse.css","f9d9cedff7b97004868cd94b8243bdd3"],["/style/css/mystyle.css","714d98eb241a7bb7a8878934815754f6"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/gitcalendar/css/gitcalendar.css","86e677cdcc086b84ddcae21801e10c96"],["/style/gitcalendar/js/gitcalendar.js","21c81808cd579167d893be99d5aeab3f"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/Archive.jpg","a37e9db2785d8b6409f4d648756e1327"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/logo.png","ed0876380f6cab0ac20d1bc24c5e9b1a"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/echarts.min.js","61c1178400d6b1b6ae5501727cf15e5a"],["/style/js/mystyle.js","d53a09663e88a8c6815addfe63d99f7b"],["/style/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/style/js/weather.js","71a322e15d570455d894315024c3a7ca"],["/style/magnet/css/catalogMagnet.css","e63a468de6d0cd55917e22b8b73823bf"],["/style/magnet/js/catalogMagnet.js","fad906b018416870cec0f438eecdb4c1"],["/style/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/style/swiper/css/swiper.min.css","21b70942d56c99faef25bec8db671e10"],["/style/swiper/css/swiperstyle.css","7eba3c16adb3c4581a8bfd9dc8649f23"],["/style/swiper/js/swiper.min.js","58652d9ae7d519a471f2dfb4968019ba"],["/style/swiper/js/swiperindex.js","d3dc6d18f3474803a00930df0c4cec1f"],["/sw-register.js","b533cc789f77b6d569765a1e4aabe7b5"],["/swiper/css/swiper.min.css","21b70942d56c99faef25bec8db671e10"],["/swiper/css/swiperstyle.css","7eba3c16adb3c4581a8bfd9dc8649f23"],["/swiper/js/swiper.min.js","9c379840216a38360bb9b9ad8e04bb5c"],["/swiper/js/swiperindex.js","d3dc6d18f3474803a00930df0c4cec1f"],["/tags/403/index.html","41a96d17914d2c331dd299e4fd1c53a1"],["/tags/API/index.html","4b0b791b29624422387d6671beebc2df"],["/tags/Blog/index.html","9cf5eb0da768a11cf44d5c73611d13ff"],["/tags/Markdown/index.html","4b6eec401e2d54a8c4e0a026a39a7ee4"],["/tags/TortoiseSVN/index.html","cfd8fe318e721238c3173ef7092b1502"],["/tags/auto-js/index.html","59babb7f738d066539669eca6eab68b2"],["/tags/butterfly/index.html","bc9df57eb5a3e5d38a807bd2eb92a152"],["/tags/git/index.html","c4befe9564f3409ede7ee7584968c343"],["/tags/github/index.html","c7708c1837d156cafc11cc259c64ff9b"],["/tags/hexo/index.html","56a04e96531df5a8f35a0072debb21a1"],["/tags/index.html","b16281b3d77a5e259a0676363bf9965a"],["/tags/tools/index.html","666e12ac0b8aef8a0ed472da082fa771"],["/tags/valine/index.html","81dc9bbbb673d04990911eed684f1bda"],["/tags/vscode/index.html","2f54ac12f0ae2716bb928a74045cbc2e"],["/tags/图片/index.html","5e0900dd60dff1b1906a7f7c324bc736"],["/tags/技能/index.html","66d1c27b5a63c716c6639b150a055c45"]];
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
