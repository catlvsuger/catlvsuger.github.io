/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","1deaba2ac22fbc3969791feac79f83c0"],["/archives/index.html","66b375f54ceab2516bf397f0ffc44999"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","9db8235c71cee5de95c454647b67d875"],["/categories/Hbase/index.html","d90c2d95d112b17b01b25dfd62e046d2"],["/categories/Hexo/index.html","69fa00c008e57d6d0a550e0fa4527199"],["/categories/Java/index.html","415aefa05f6f0a0fad2199b937e86346"],["/categories/Kafka/index.html","1c5e7e3e8315b78d234b601b2c03036b"],["/categories/Spring/index.html","c98f1e5bebcbcdb314c46018af1f01e8"],["/categories/git/index.html","8f91e835b11754e1a59bf4bef065dcd8"],["/categories/index.html","8351f47b792cacd58c05b9c3b02c129b"],["/categories/旅行/index.html","47c3b0a859f737a29500f58cc84d3fa5"],["/categories/算法/index.html","ac481002209d1f364124cd4eab76e716"],["/category/2017/09/17/Tibet life and death line.html","ecf3703f25f2924db5a03390894b9595"],["/category/2018/03/10/At Chengdu.html","32db333b853fcb027bef83d1f499a38c"],["/category/2018/03/24/Look at the mountains and see the water.html","29fd77c11e280b9174efc0e82b6c8473"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","9a3ced6a3618973b11fb2c617f2f583b"],["/category/2018/03/29/Open space in the north.html","f01c6ebff85ae543ab8c877f92e05340"],["/category/2018/04/01/Silk Road has no heroes.html","a80376d01e6b2f87ea8fbf33ea7e8237"],["/category/2018/04/22/Return home.html","8b60e340fac9d078ddf3e0651cf62934"],["/category/2018/08/14/Development preparation.html","0584f9c21bddc48deca3fbf3794569fe"],["/category/2018/10/29/begin.html","d8b24c151ccdd8143c58533239175211"],["/category/2018/10/29/hello-world.html","077d31978ad787a1f2636bce611417e4"],["/category/2018/10/30/Open the Hexo blog tour.html","e123165fef4ee5cb5210e0368ba5e432"],["/category/2018/10/31/Hadoop distributed cluster construction.html","69692fedc8edd4953bdc9ed9b2245bc3"],["/category/2018/10/31/Hbase distributed cluster construction.html","e8384afe85365f51e0f4b99da43bc5bf"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","f313bf4e857b0c9f137b77210ffad75a"],["/category/2018/11/01/Kafka distributed cluster construction.html","bbd2a710e00fedfcf75df3f5b6328eb0"],["/category/2018/11/13/Sort.html","ee5bd3cbb8b0a9545425a482c43cde5b"],["/category/2018/11/14/Sort.html","308bdc2c7aeb593e732a3ad8be0f2dae"],["/category/2018/11/15/Sort.html","8ee9f2fd2a022763b36d249e5b393a3b"],["/category/2018/11/16/git.html","0fc90dae02784ee477df34c4fc521013"],["/category/2018/11/19/Sri Lanka Travel Guide.html","ee5687cd8a1f1f7f5358105309bbbe6c"],["/category/2018/11/29/Sort.html","5e8ebfe3f1854cb67c5199f614d6e83f"],["/category/2018/11/29/Spring learn note.html","1633e5f957830f5510c2e22164ac8c8f"],["/css/main.css","30ed726df386cd7ca18920c966e48519"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","649e87abb52f7522782668fd704fb9dd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","29037d3376c61f45e236188b3a22951e"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","d9170052b1ba300050febe5cd351ff89"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c0498cb6ea83adb9275d32017b4e73ce"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","2b3dad91b25eadf560d64d8937aea9dd"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","bfc5a1db025f2b2baf3a7c09920d6a0f"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b9b8c9422da2bce88de4cedabb1f5661"],["/lib/jquery_lazyload/README.html","f86e54c5f8260c130fc69e9689d4f827"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","6418907739b9a9fbfc9ed6fd5c3c4910"],["/lib/needsharebutton/needsharebutton.css","26981ed4922912ae2936b173e11e043b"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fb2a2c1f4850f3288ad0190d870eaed0"],["/page/3/index.html","62004855f62a2a7c4ae6bb4202aece27"],["/schedule/index.html","c916492fbbfd45108b4fa7f9aeedca28"],["/sw-register.js","1a81bdac1a0509f3be855faaaebbef9a"],["/tags/109/index.html","e1ce4d051f64d8699647542a38246c9f"],["/tags/318/index.html","342e02257596e67b5910907bad7a8d20"],["/tags/AOP/index.html","5bc9dfa100a8f8dca9911e792c443141"],["/tags/DI/index.html","45360396a9a7b8fb7a59b4dcd16ed534"],["/tags/Hadoop/index.html","572bae3b0a51a9873c9a301c1b0ecab2"],["/tags/Hbase/index.html","dd67c7013d0434ffec0f23e9ebe2643e"],["/tags/Hexo/index.html","2813a0e77a6fdb005631dfd139c71a0c"],["/tags/IoC/index.html","34a94a402eb4d0425743a72f47ee53fc"],["/tags/Java/index.html","502d13face0e0109c19cc818fd3a8dbc"],["/tags/Kafka/index.html","b279baaa9506106a7804cdd6e1a89b01"],["/tags/Spring/index.html","ff5c3a5eeba730a421595404795d02af"],["/tags/git/index.html","401a4dc854b897c9434747d9270c5af8"],["/tags/index.html","1d7254db8266feae5499f760689a6c0b"],["/tags/丝绸之路/index.html","db682c18d8e1d913236ccc5aa9a42394"],["/tags/二叉树/index.html","72e2dc0d9fa891678619e88bc22cbb4c"],["/tags/内蒙/index.html","82919b98df52887a90640b6e4e9af1bf"],["/tags/凤凰/index.html","e6f22eeb78f5970c71ca1a2c2570f632"],["/tags/可可西里/index.html","c99a35fa7dd758d426095f6d673c4651"],["/tags/嘉峪关/index.html","b675ce486b313614240540d388baa81c"],["/tags/四川/index.html","59206de45b859c3d2f4b002f5c65f59a"],["/tags/堆/index.html","418d893bf7e9b1726b2ed46edb3df8a5"],["/tags/巫山/index.html","0641881055c1719b085cb084750d83fb"],["/tags/巴丹吉林/index.html","5032f10319f67ab989910de8ce0a7eb0"],["/tags/归并/index.html","7d09489a39ca0edb8cd01461b4b4a665"],["/tags/成都/index.html","9539e5c8161acc6396f22ce7762642f6"],["/tags/排序/index.html","34300683c7b034f518b6df8e7a609007"],["/tags/敦煌/index.html","a81e735dd1609f3a0413004adbc6359c"],["/tags/数据结构/index.html","4d17642b499cd04b318fede59a18856d"],["/tags/斯里兰卡/index.html","148cfee632d88fe29644b7f3ab15add7"],["/tags/旅行/index.html","b57078620ad97ec15d96e58b765955d8"],["/tags/格尔木/index.html","338339a258138707e11b37c9b20e7b7b"],["/tags/桶/index.html","155e007e293b8d5728f42bf39596f163"],["/tags/沈从文/index.html","a192c9da0ec6d2b1f1df732a85a9b802"],["/tags/秦岭/index.html","871b339a3abfaee345a1bcf1cc57620f"],["/tags/算法/index.html","53a06387b0b1bbcc70c44aea3640f404"],["/tags/纳木错/index.html","942c7e6dcb3aa1cf9d135de33ac9db1d"],["/tags/西安/index.html","a81c6e953aa08c5becc31312b098e1d4"],["/tags/西藏/index.html","4b2b2e911f129737392ae06206d3a7ad"],["/tags/计数/index.html","931a5b1238b48674dedd44f432adce26"],["/tags/金沙江/index.html","8a2595f7060e0e5f75838d881abeb0ca"],["/tags/阿拉善/index.html","f8175d3021099bded699a84cb5340c2d"],["/tags/陈渠珍/index.html","6c690bc51873db78041880c340c216c9"],["/tags/青海/index.html","30225d92bad5630a5cc21661f4e4de2f"],["/tags/青海湖/index.html","ee9cea10387a2558fbd5834d9a59de5e"],["/tags/骑行/index.html","9cba6f6b793c9576fbd9ae204754e783"],["/top/index.html","98d8289d3d5e3a1796f422dfc2514b76"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
