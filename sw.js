/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1733019837.html","ab1efe3f0b6d93e1b7145bfcdbcbd711"],["/1771338196.html","b055c589b5874d6a9a0fd78ab9176e5a"],["/2148397210.html","cb97e5dc2c4a11917859406be8ce7f39"],["/2195189573.html","4967f963229ad51ed15306a07dd53d29"],["/2360238627.html","b7d1fae0a89cb5f95f735fd4b9789cc9"],["/274610813.html","aa68594d06a4cbb79856179b7f171d4e"],["/2931784335.html","1a33469c9dd122b993d958d7a2ff0dec"],["/3178170368.html","ab039abdcb07a18bd084fa83464c564a"],["/3305003915.html","5365d9572fafb85ffc87654399f40279"],["/372674368.html","f5d5493ad8a7be0353e2b4db49790897"],["/3740655047.html","35c8e89539f0f279981bcab11271c4da"],["/404.html","073f81448d7fc87d4f259d4626f18e23"],["/4183719525.html","4d0cfc14187c0b94fe5929da51716090"],["/568795252.html","f4d21ad7a77846298cc7a17aea4b5d8e"],["/75507639.html","d2dbfcdec4c2a3675ceabcd2ba92e1d3"],["/757632919.html","77455d259b428e0cea112ef10c333fad"],["/76666735.html","d7c5947c1b6304ea6a24c8d1753f8290"],["/8.html","511f7edcd35744a9fd74d74df58d68fa"],["/8fb4.html","aaba6acf42b6b0eac7f35b2249b46120"],["/about/index.html","c6adf4dc9ad74ea760b07a9e58595c38"],["/archives/2020/10/index.html","8695cb81c7f57626f0396034e5fbfb54"],["/archives/2020/10/page/2/index.html","6008841d70f9db5abeeba7f555b81880"],["/archives/2020/11/index.html","1871975491d8517b65d1c283356f539b"],["/archives/2020/index.html","9c18e25450741009cd4c685bdbdf6324"],["/archives/2020/page/2/index.html","4eee79b92d51a4bec96371cec4276227"],["/archives/index.html","ab3f1909a5f9fa03a7b8532456ec73f6"],["/archives/page/2/index.html","34a54b22a209ec945d662428b4d85b74"],["/c4f.html","383f6eaa792e0a690e977a87871ad2ca"],["/categories/index.html","df5335bd4b2f6ff629c087951c17bc55"],["/categories/issues/index.html","5152b6a3cbc7c2e328ce625d430e4325"],["/categories/site/index.html","29c73b251ae56e3cf6f56a85ae165e92"],["/categories/tools/index.html","3e7a8c0ba2d007734f9de089571409a2"],["/categories/知识储备/index.html","9c03f2c0aa20f025e39a169407c3d8a6"],["/css/index.css","5932f831a8c011ca35008f83dca5b802"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","696203a84cbd4b4614bc274564f9168a"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","7e9fd504f01fbfdace9ecc5609d9d95d"],["/page/2/index.html","c3f9cb137e8d175da9ea0aa4d29e876f"],["/reward/index.html","41987cbdc6f3b0e77e62c4f67b9a4654"],["/style/card/css/cardlist.css","ead937dc5279c2e0953b37382c3b9fb1"],["/style/clock/css/clock.css","608daa92770d3e2d43db062f9dc7a332"],["/style/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/style/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/style/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/style/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/style/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/style/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/style/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/style/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/style/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/style/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/style/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/style/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/style/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/style/clock/js/clock.js","3559327e6a60001b8f53db0b9678f175"],["/style/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/style/css/awesome.css","fb231d761b93700a26aed08062bcc37c"],["/style/css/iconfont.css","0b87079f2ce925bf78fa347c60604463"],["/style/css/mouse.css","f9d9cedff7b97004868cd94b8243bdd3"],["/style/css/mystyle.css","714d98eb241a7bb7a8878934815754f6"],["/style/css/reward.css","4546f52491aa25a71ac1ae29eacdabe0"],["/style/font/15991914154209.ttf","ce0149009ca03eb2811c24bb013785db"],["/style/font/16026684292569.ttf","6db42670e2a06b5181649281a2576e1a"],["/style/gitcalendar/css/gitcalendar.css","86e677cdcc086b84ddcae21801e10c96"],["/style/gitcalendar/js/gitcalendar.js","21c81808cd579167d893be99d5aeab3f"],["/style/img/01.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/style/img/03.jpg","7cfc909ebe8d83683909846edd6b5232"],["/style/img/04.jpg","7cf7593463d0870d96c13a125815b848"],["/style/img/Archive.jpg","a37e9db2785d8b6409f4d648756e1327"],["/style/img/alipay.jpg","f36366377e30ef42916588a16b8f9551"],["/style/img/logo.png","ed0876380f6cab0ac20d1bc24c5e9b1a"],["/style/img/wechat.jpg","57d1b828eb278f064dfd6cb4f3e9294e"],["/style/js/echarts.min.js","61c1178400d6b1b6ae5501727cf15e5a"],["/style/js/mystyle.js","d53a09663e88a8c6815addfe63d99f7b"],["/style/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/style/js/weather.js","71a322e15d570455d894315024c3a7ca"],["/style/magnet/css/catalogMagnet.css","e63a468de6d0cd55917e22b8b73823bf"],["/style/magnet/js/catalogMagnet.js","fad906b018416870cec0f438eecdb4c1"],["/style/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["/style/swiper/css/swiper.min.css","21b70942d56c99faef25bec8db671e10"],["/style/swiper/css/swiperstyle.css","7eba3c16adb3c4581a8bfd9dc8649f23"],["/style/swiper/js/swiper.min.js","58652d9ae7d519a471f2dfb4968019ba"],["/style/swiper/js/swiperindex.js","d3dc6d18f3474803a00930df0c4cec1f"],["/sw-register.js","594a00e9de09e5d30eea85be76b9f764"],["/swiper/css/swiper.min.css","21b70942d56c99faef25bec8db671e10"],["/swiper/css/swiperstyle.css","7eba3c16adb3c4581a8bfd9dc8649f23"],["/swiper/js/swiper.min.js","9c379840216a38360bb9b9ad8e04bb5c"],["/swiper/js/swiperindex.js","d3dc6d18f3474803a00930df0c4cec1f"],["/tags/403/index.html","55512b4de231191c9228ba509e68d38e"],["/tags/API/index.html","ddaf992c1a7b6c5731bd3f8ab8d3a5d0"],["/tags/Blog/index.html","1bb3266816ecc2f74ad8cbe1c41da7d2"],["/tags/Markdown/index.html","58606fda5bb6e295fd0200a244a99361"],["/tags/TortoiseSVN/index.html","8bba1b52d1786c515ecafcab0ea20365"],["/tags/auto-js/index.html","3bdf80363fced4a2632eab36aa5859f5"],["/tags/butterfly/index.html","da440032a827c2c6d8b6a3bfb73d729f"],["/tags/git/index.html","b2ff783da5ffbda30bc9ded430b9c613"],["/tags/github/index.html","f66165d00c21af47cec6e02bad1a465b"],["/tags/hexo/index.html","51270221503f0ac68340ddf6a2c364d4"],["/tags/index.html","0ac44db0ceb50d3286e85f3a15afb121"],["/tags/tools/index.html","c0f1f136b67d325219ee4ff73e3ab726"],["/tags/valine/index.html","4fa4287bc46b565179c5be991a0f222c"],["/tags/vscode/index.html","9aac95892206eddffe04e15560869f92"],["/tags/图片/index.html","50c5aef561c9b6a0f297385693430365"],["/tags/技能/index.html","478aa8c811cddbc35f3dee1cc4a90bab"]];
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
