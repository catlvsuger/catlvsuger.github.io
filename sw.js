/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","a5597b6ba529fcd36efdc4176b6acb3a"],["/archives/index.html","0e5130c54253bcd7354e385f70feca6e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","8d172bc7068aeda05dcdc5673dca77dc"],["/categories/Hbase/index.html","16d480090808cb0bb504b13c81b0f293"],["/categories/Hexo/index.html","cbe01c207ad2e942f2e69ddd38a5c906"],["/categories/Java/index.html","11d1f6ec0f9ff2b75f1368c372e5bd3f"],["/categories/Kafka/index.html","f18c16b9e36ef143ca1b774389e6916d"],["/categories/Spring/index.html","bf3459ec5ab5c367ad8b9b3952f47725"],["/categories/git/index.html","bb1c8b34655675300925352c2bc9f2a5"],["/categories/index.html","c66f58f33fa614ba217ace6a741fcbb3"],["/categories/旅行/index.html","4c2417d29f2c1c09dd803f8e795a827b"],["/categories/算法/index.html","40cc818a8ea24b808324239776d9e487"],["/category/2017/09/17/Tibet life and death line.html","94b35efe576138f2c1e87ccb653f3825"],["/category/2018/03/10/At Chengdu.html","02060a4eb1abdfbd4b740a52113f0f57"],["/category/2018/03/24/Look at the mountains and see the water.html","e88c9e3536fd24424e181da17c0bd67a"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","8cc2d0d57d42dd29116f10e6406598ca"],["/category/2018/03/29/Open space in the north.html","c1ec260c8d7a436dd4b8365d5eb09828"],["/category/2018/04/01/Silk Road has no heroes.html","6d0a37efe0002447c673e4bd896b59e7"],["/category/2018/04/22/Return home.html","e7509d58cd5268abd51f40af7e77281a"],["/category/2018/08/14/Development preparation.html","98450c3fdb76bbba417a686823e65d63"],["/category/2018/10/29/begin.html","592d99e4f36911534383bf97185b67f3"],["/category/2018/10/29/hello-world.html","26f30796b25d7bba13a6e5724a52a441"],["/category/2018/10/30/Open the Hexo blog tour.html","75dc9440c84315265209e3fede09ab8d"],["/category/2018/10/31/Hadoop distributed cluster construction.html","bd16d5575778a86accb8dd01621f368a"],["/category/2018/10/31/Hbase distributed cluster construction.html","324de9feb95fce498f37894b01779698"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","a5aa31efaa3e186216e2db3ea790fa98"],["/category/2018/11/01/Kafka distributed cluster construction.html","44f71c5be3c20485b6c8bcc8f81e0eec"],["/category/2018/11/13/Sort.html","0c31d4a3b630d559d896292727396f6f"],["/category/2018/11/14/Sort.html","f7796ff27ddffbd3cb1bc7d3f955b585"],["/category/2018/11/15/Sort.html","65ead73a86fa8df0e75f1b123ca9f84b"],["/category/2018/11/16/git.html","b4bb8da71d0d18825f29a47529be0388"],["/category/2018/11/19/Sri Lanka Travel Guide.html","3a3881976a8a1240ba30b540264741b7"],["/category/2018/11/29/Sort.html","12652009fbc0ddd08c920f5adfd1b08d"],["/category/2018/11/29/Spring learn note.html","a280f7f0bf136ec18c5952249cc2fb7d"],["/css/main.css","c3c6dcdee1d12614e9a3a1242628bd18"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f5147684f1fd4710e01e87671e90b1e7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e7439ab7fde2b6b23c95be726721ca91"],["/page/3/index.html","68a9e56b91c5b4bdacab934010fedd13"],["/schedule/index.html","4e3b70f6a7a79716829cbe652e112ca7"],["/sw-register.js","26a4d9af9935e55f08830b137c5bb0d1"],["/tags/109/index.html","c0ee42d970bffe7fefe5f31ad09c194e"],["/tags/318/index.html","80624114aded4e1af21c05035013d054"],["/tags/AOP/index.html","1b686ac219c0b3336e243b0ee93c23d3"],["/tags/DI/index.html","952f81e05a11df71c3de5056df7fad21"],["/tags/Hadoop/index.html","9a3d9d930cbac74f0cc8bd88f69dcd8a"],["/tags/Hbase/index.html","684c4fc03dddc3f2955a46681e0dbdeb"],["/tags/Hexo/index.html","5c4352dd7e85814351b517abc590bbe0"],["/tags/IoC/index.html","a2763440d2e5e2b61b1659e6198eba68"],["/tags/Java/index.html","3a7cf15467d9cb1f1195e239159c8643"],["/tags/Kafka/index.html","e20cebb843a1bd1b48cbdca825e87b70"],["/tags/Spring/index.html","46d3254fe65d1b580e100ef8b401a7e4"],["/tags/git/index.html","c3146e7d021c13bd2bb16be80f6a6b72"],["/tags/index.html","0a1fb277efcade6f81f86824f56e847a"],["/tags/丝绸之路/index.html","d031de717f60b2345a5c485d700d7784"],["/tags/二叉树/index.html","bb569d4163732ace6a44737d75014187"],["/tags/内蒙/index.html","928ad22e39d8cfb06a1ba2a1932137b2"],["/tags/凤凰/index.html","cbfd5ddf5dac5018c8e9181f85224aad"],["/tags/可可西里/index.html","5900f207f67e2191fdd0124d88ad5feb"],["/tags/嘉峪关/index.html","b3a15dedb26d70d6f0a4e27180e4b225"],["/tags/四川/index.html","8d9d5f79eaf3820fd7cc9664f1d302ec"],["/tags/堆/index.html","d445a5960c2ae749503856b48bc3f395"],["/tags/巫山/index.html","c04dd0fa9293de6f6c81eaec9a96dc8c"],["/tags/巴丹吉林/index.html","138aea24b038fac88c4bfa50989e80d8"],["/tags/归并/index.html","03e919da8772e611906b3dfe8a6a69bc"],["/tags/成都/index.html","b854fff34fbf544770075221d724ef5a"],["/tags/排序/index.html","fb4e865655ecd45697e9ed6405264cc1"],["/tags/敦煌/index.html","8ff3c50f1cf4e8d851d9c57d9834c571"],["/tags/数据结构/index.html","e60f19ba44a942d8613108001894e2fe"],["/tags/斯里兰卡/index.html","0123fddabde6e01653804eb6f9f1ed03"],["/tags/旅行/index.html","18738477e1da4695254176d64ca9e28a"],["/tags/格尔木/index.html","95007a783d7292415d6091b3455f6cc5"],["/tags/桶/index.html","96879885d66ea35f61043997b2ad9acd"],["/tags/沈从文/index.html","5539301859e2b96ae91b13e230258c33"],["/tags/秦岭/index.html","58c2e3a91223ddc25d044201489b68fc"],["/tags/算法/index.html","469dcc3343f6756505d9ef9f867b7130"],["/tags/纳木错/index.html","6795a6086a73c980be073bca58c62c56"],["/tags/西安/index.html","6e6d625eba5e5ac80797bc8ba75617a3"],["/tags/西藏/index.html","0673d0ddadb2b51cf7fbbff16a6df286"],["/tags/计数/index.html","45366d5cdca2c8eef41e617740daed20"],["/tags/金沙江/index.html","ea113c60e610ba00372091722d231dac"],["/tags/阿拉善/index.html","27ff516a85f40077b9ead41699244018"],["/tags/陈渠珍/index.html","f0f602ad000b717bc735045e1b54f83f"],["/tags/青海/index.html","5b083ab79decf1376d9c099bc65cef6d"],["/tags/青海湖/index.html","fc8b5b713a2510808c1075dd71994058"],["/tags/骑行/index.html","ed93bf5e160944cc2a2ca6960f8cdf2d"],["/top/index.html","d8235192eadd30f22de2807a0314c3e3"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
