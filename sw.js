/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","955cc800fe5e3f4be433405dc83afae6"],["/archives/index.html","b4262119e32503e7e87e07958dbd6696"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","0636b79fd06f30017e02230f8c332da8"],["/categories/Hbase/index.html","1606070c9d0f8d007c8f61d56855368b"],["/categories/Hexo/index.html","4a90aef093cab523f5c51d44e2482f8d"],["/categories/Java/index.html","78758b5712428b8e7bbdd5eb099921ff"],["/categories/Kafka/index.html","be9096f9912e72a88804b9f5f15aab30"],["/categories/Spring/index.html","b70c181dd9d5c964d3c2aab5c05c1b1d"],["/categories/git/index.html","08b24d22f1fc089e1be5ffa248435484"],["/categories/index.html","ac49cfe0b38fe28e9c6ba699001c31f6"],["/categories/人生/index.html","2cf0aed10077607c84a6cb77ad34afaf"],["/categories/旅行/index.html","273707ba541701bb1ecce81d18d26f94"],["/categories/算法/index.html","a3018ba610a3b0bd0e678482f3099942"],["/category/2017/09/17/Tibet life and death line.html","ec19685fb62c1375aef41a19519eac34"],["/category/2018/03/10/At Chengdu.html","8153e0aad783b51c85094a3bd74239b8"],["/category/2018/03/24/Look at the mountains and see the water.html","0c68c7b2f16411341146021c531e34ba"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","86bc008e7f286beab581be177964f051"],["/category/2018/03/29/Open space in the north.html","735a210edace25a06182448d3c9f81da"],["/category/2018/04/01/Silk Road has no heroes.html","cd4ee35c1aaffb4e609332ce9e396f86"],["/category/2018/04/22/Return home.html","7d5c032c10b7c8d5122a2a75e66b29fb"],["/category/2018/07/25/live well.html","41854ad340f9fdf86bb2a80e19bf62f5"],["/category/2018/08/14/Development preparation.html","ae6d24e7a556413d6e2ba7a602f22098"],["/category/2018/10/29/hello-world.html","37a0a8f3a75f1aa40822b1ff5e3d066b"],["/category/2018/10/30/Open the Hexo blog tour.html","d7d00ef7c764ea5c69a48c9d30b051b3"],["/category/2018/10/31/Hadoop distributed cluster construction.html","79fd4e78fda69465c72049f67a804686"],["/category/2018/10/31/Hbase distributed cluster construction.html","dd89434cc33ef4c748b549a3a20b463e"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","e9bc10195692424281cffadf61b03cce"],["/category/2018/11/01/Kafka distributed cluster construction.html","4c463df024c960159493540b0fc8018b"],["/category/2018/11/13/Sort.html","0b382c73967b57883ad65f235ab74ddb"],["/category/2018/11/14/Sort.html","02b6b77217c155b2fea40a1c2b8171b8"],["/category/2018/11/15/Sort.html","ea69f3ae382890b369e0689d7f50c9d3"],["/category/2018/11/16/git.html","4bbb6145a939d82b52e632dc0cbc4707"],["/category/2018/11/19/Sri Lanka Travel Guide.html","4a5be516230fa97e63ca26c8336b66ff"],["/category/2018/11/29/Sort.html","97259c07a2d3d3a5f87c6764c3fa9e87"],["/category/2018/11/29/Spring learn note.html","734ee655d87163ecd0262ef8dc4f0886"],["/category/2018/12/15/planning.html","1fd3e6857bc169809ac41f7d580e3a01"],["/category/2018/12/15/year-end summary.html","26dd68e43a0a265b64d64de9248e1157"],["/category/2018/12/17/first day of travel.html","ee9c59740e02bf14d8922ec249da24d8"],["/css/main.css","b9faf51cad4d55c5d73cce96a12c15db"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","afe02da4fc33f9df0ff4269d388facea"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5121e226510115765c593e1cc5e2d750"],["/page/3/index.html","b7b5454e8060e637595ce7ba4057233c"],["/schedule/index.html","d1d0e2e9c156f1f1a98f77b0571945b2"],["/sw-register.js","55041e491008a7e53d4497fbe3ab7384"],["/tags/109/index.html","f066c9ab49b5b65178bc0ac46204deaa"],["/tags/318/index.html","0b03b8661a22034ae7da3c955cc137be"],["/tags/AOP/index.html","de0bc58f80bca6bec7c887774e2aa2e5"],["/tags/DI/index.html","cbeeb9a0a9632411f5a8f5153009805e"],["/tags/Hadoop/index.html","e37ee0d109d20a10d1b6437089c07006"],["/tags/Hbase/index.html","ede1e71ee9cf9e3ff6053a1613836876"],["/tags/Hexo/index.html","4acc359db8fe95260e02fb474a5b7106"],["/tags/IoC/index.html","7f35b7fa367e3120ea5554892d725480"],["/tags/Java/index.html","742f65444cab34b8fd388d512a847f39"],["/tags/Kafka/index.html","39d09d3dda9e3738a11da82ba3909a76"],["/tags/Spring/index.html","070ce6d46886f6a95006cb2ce162edbd"],["/tags/git/index.html","b912cfb0a81e8cc54ad3338ee75bbbba"],["/tags/index.html","d0a57140672ea4ce17cd92553fd722e2"],["/tags/丝绸之路/index.html","88bac9b8874a156cf270494b1362b2b1"],["/tags/二叉树/index.html","38f80f1b8c94c6e56fbd74c1f276b0d8"],["/tags/人生/index.html","1edd5a0c69d3d92d4f1ae92af5122915"],["/tags/内蒙/index.html","66cfc602e0739cdc4d449157cdb59f09"],["/tags/凤凰/index.html","77bb2b45d8b415ecc18347d1dd942b66"],["/tags/可可西里/index.html","fdff8125db1544f96af2447838054f08"],["/tags/嘉峪关/index.html","e503ce4948345f7a8b5385596c9ac73a"],["/tags/四川/index.html","84c964640e12f6fa444cf72a5dbbe4f4"],["/tags/堆/index.html","1c32a9429037a86baf77193e868f926c"],["/tags/巫山/index.html","7e6d1dbd37ed80e6379d337209deb2cb"],["/tags/巴丹吉林/index.html","785170ff98fecc923596dfb522cfa35a"],["/tags/归并/index.html","b78955ccfcf0ec94ba2a2111b067995e"],["/tags/成都/index.html","9b8d6dfaf51b0ed53e3f80ec99fc7890"],["/tags/排序/index.html","0f5fa8a334112afd6f247e3f154e3385"],["/tags/敦煌/index.html","63e79a098f52267f680218995828040c"],["/tags/数据结构/index.html","91d0b439278a4beaaaf421c06a2eb9f6"],["/tags/斯里兰卡/index.html","90ced8e24a0cd638de8b615110b456f1"],["/tags/旅行/index.html","05dffac268e77a9d60ff5e41ea1699d5"],["/tags/格尔木/index.html","81c0fb3fa72b86b80ceb383ee7e204ec"],["/tags/桶/index.html","e7cc96ac26805da9311eca7e1aaeff75"],["/tags/沈从文/index.html","6dcdf91ea915392e8e925cf8bf777c63"],["/tags/泰国/index.html","730a60f8eae07ef1935b8f03bc0e2558"],["/tags/秦岭/index.html","9c64ce153f085f58575fb4dcc384f980"],["/tags/算法/index.html","3d0a5faaca432a2598c1ba1fc58e4819"],["/tags/纳木错/index.html","f9281dcfeb85185155f86720c2534660"],["/tags/西安/index.html","565b114cbb7d5b917d89791be13250d9"],["/tags/西藏/index.html","a6bc606bf8ee4ebc2e4ca09a82c89b91"],["/tags/计数/index.html","bd532117b59ad2e1841601ec0bd0d3af"],["/tags/金沙江/index.html","5c8b253d7862b323b651043e561c5621"],["/tags/阿拉善/index.html","caef343c7624c3a48585a79537078c38"],["/tags/陈渠珍/index.html","8e069b174e014c99ccc77b36cdd1921c"],["/tags/青海/index.html","4654d33a17d4d89dda20a3e73824acee"],["/tags/青海湖/index.html","7fb777e98c928d528537aab45a54c711"],["/tags/骑行/index.html","fd16d02728f47a896a6918095ef01d4f"],["/top/index.html","f189da20c713a5131e21c86e6ef52a1a"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
