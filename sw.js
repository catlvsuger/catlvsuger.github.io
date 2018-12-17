/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","cbf8cdb2753e891cb085892568316713"],["/archives/index.html","0a529bb20ff348be86c09461d478b47d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","a8537dea66abaa34febbba9b4eeb652e"],["/categories/Hbase/index.html","c022314ee30f179442980aec6db0a776"],["/categories/Hexo/index.html","91ec467873b2bc673e6c33fbdc9d969d"],["/categories/Java/index.html","a937a7fb4cc3d437a45037d531bcc0a4"],["/categories/Kafka/index.html","a800c76f866a17ed7d3874e15b4c99a5"],["/categories/Spring/index.html","6ae8f34d568b00b13b99fbcf0c73fcd0"],["/categories/git/index.html","bf43a94392e9f5d93b70f94699a66a53"],["/categories/index.html","cc0bb91197bc09bbfe99cc759257b098"],["/categories/人生/index.html","25900396db61be52dd3183ea667dfdde"],["/categories/旅行/index.html","3549755aba12a2b5dd014ed021cb1069"],["/categories/算法/index.html","20c661d6286c291da689c64a673d6c3c"],["/category/2017/09/17/Tibet life and death line.html","8b181f88f8829db04a4c3fbbbafe66c8"],["/category/2018/03/10/At Chengdu.html","8071f39bf315dcfcbd036bfe344ea599"],["/category/2018/03/24/Look at the mountains and see the water.html","49c76830c8ec04153f5fda8e1f50bbaf"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","988375331a4d1a3ee3358f8d829f4ad6"],["/category/2018/03/29/Open space in the north.html","a205b82717d4c2683ec509be8045b894"],["/category/2018/04/01/Silk Road has no heroes.html","ffcd1afa37dc296e8ace31e76151c553"],["/category/2018/04/22/Return home.html","a2585e05c6b35b617ed40698ffea5076"],["/category/2018/07/25/live well.html","275dcf49d2c219012308fed36cafb7f1"],["/category/2018/08/14/Development preparation.html","13651f7d5f6a97b4f5440affbbe9bc9f"],["/category/2018/10/29/hello-world.html","2ad3c5f78b47f8366a86fd7a507e82a8"],["/category/2018/10/30/Open the Hexo blog tour.html","374afebc2a530b267505ae35e2d11958"],["/category/2018/10/31/Hadoop distributed cluster construction.html","ac92d75229853dd33c500eb69def4b91"],["/category/2018/10/31/Hbase distributed cluster construction.html","4506b1fe14ef9e703ccecee665dd3ec1"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","19cfbc98e026530add32b8806a2d7dc5"],["/category/2018/11/01/Kafka distributed cluster construction.html","88dfb8e56ba182d23160a19fd26ed5c8"],["/category/2018/11/13/Sort.html","d980c060ed260595f91b6f71cbd4f656"],["/category/2018/11/14/Sort.html","c25e01184aa06fea176a4c691e362fde"],["/category/2018/11/15/Sort.html","685ec451799444626258aa4d69c9bafa"],["/category/2018/11/16/git.html","43682b5937561ad696c8038d8e8e8519"],["/category/2018/11/19/Sri Lanka Travel Guide.html","301ec6799ef8d2435432eec7c964f189"],["/category/2018/11/29/Sort.html","c7dd344915a660acb40ece2414ede3bc"],["/category/2018/11/29/Spring learn note.html","269b39fa466dd19da1156a6c0d9ccc3c"],["/category/2018/12/15/planning.html","fca0d9cac05b9cbf4b0b5ee0c2d04cf8"],["/category/2018/12/15/year-end summary.html","dce6e90734cedfc917b429257c330cc7"],["/category/2018/12/17/Bankok transit.html","17a7349b66fae12874afdc3930183558"],["/css/main.css","7f46f634e35eb6c3fcfa5a7214b9d8f6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d8e0a86c4a179b3c090a23b33ffdcaf2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3c7306f5700cab067211df1fa7b5a64b"],["/page/3/index.html","14b2d660425f37efc332d0e82319170e"],["/schedule/index.html","24e087f41a9c8dfaeac4c8a19282e047"],["/sw-register.js","480df43f5d56c985dacdb622c5c664a8"],["/tags/109/index.html","0d68f8e53eb5715b5ae268174dc7241b"],["/tags/318/index.html","ceed5bf0b85290c01cedc6d1f7e4656b"],["/tags/AOP/index.html","a85db686478c6bb69a78307de6e06ba8"],["/tags/DI/index.html","8759e9369bb588bfd0fc36132c413d9d"],["/tags/Hadoop/index.html","d05e8dfe8a218544cfdd51cf95781745"],["/tags/Hbase/index.html","db2c63771d6c94296efded78f14d48f0"],["/tags/Hexo/index.html","fbb300ed5ba0e88f037b70c2e06550ff"],["/tags/IoC/index.html","89e4a57589a8d448381735c8f1444aa3"],["/tags/Java/index.html","4afd177c65a23f1e02d5e59078122883"],["/tags/Kafka/index.html","b17fc5d9d6d2a68e0363df58ebe30090"],["/tags/Spring/index.html","e9ec3c8ce5dd2b2f15040541921f84dc"],["/tags/git/index.html","6956557951bbbf1637e99a5745b66f90"],["/tags/index.html","66c88bdff925a50f4ae04170b7383685"],["/tags/丝绸之路/index.html","ccf4ceef806e58ac500295509cb8ffac"],["/tags/二叉树/index.html","14d3ba992c51fa296d1466f4b5dc7ace"],["/tags/人生/index.html","0a76d713e9ff8a2d0783b96232159cda"],["/tags/内蒙/index.html","75179a528a6ab48f586f35a27a5e4bb2"],["/tags/凤凰/index.html","d08296b5f462af5665fdf71fd8a676d1"],["/tags/可可西里/index.html","dd7de58c7f0340db8ef42b7a6073b86b"],["/tags/嘉峪关/index.html","882283ecf3d225e59577036af7019dc2"],["/tags/四川/index.html","cde44fb0d7e7cd4e53105044e1c75396"],["/tags/堆/index.html","cebcc84c5324c68acb7d5ef37a7d8bbe"],["/tags/巫山/index.html","644715a3ecd567ef2def96fff85d79d6"],["/tags/巴丹吉林/index.html","9085541d627aa2d008d879db28266727"],["/tags/归并/index.html","0781bb50cb582ffc5fffa0484ca6c880"],["/tags/成都/index.html","97d1a219d4b154cce9456390beb921a2"],["/tags/排序/index.html","4ce9ba4a87e6160887a4b6aab0b8f071"],["/tags/敦煌/index.html","e5d4f7cd90fb2b74b996ec2388f995b7"],["/tags/数据结构/index.html","96a005d4424870d6cf8a99441745f0df"],["/tags/斯里兰卡/index.html","ae27dece0cac1efd81b77f9bbccef384"],["/tags/旅行/index.html","aa18a60a1d007db9d265d844a96e35ac"],["/tags/曼谷/index.html","4659395987713e1d361fa7e7a957270a"],["/tags/格尔木/index.html","52c044a7c50955c45e14ac5838d0757c"],["/tags/桶/index.html","4de7d566024a2b064ac594cf3d96f344"],["/tags/沈从文/index.html","e2f276cd1c642989fce4faf9cf3ce5eb"],["/tags/泰国/index.html","5baee271d976f8b32c8d4db4fdbc49f1"],["/tags/秦岭/index.html","ad6f027b95c677b78557dee7f5657aa8"],["/tags/算法/index.html","e422209ca5a96de3709dce98965794fb"],["/tags/纳木错/index.html","d31947faea574c9c58e1b68579b80f8f"],["/tags/西安/index.html","17b5dfee88a491bc902276418531e05d"],["/tags/西藏/index.html","39cba738bebca5a1dfed29dede384d66"],["/tags/计数/index.html","3445c5fa32e9f1eb40fe44b75fbd7b5e"],["/tags/金沙江/index.html","80a1d47a0f5195812048373181e630ab"],["/tags/阿拉善/index.html","7d43d7cf4ce009d518ca32b72c5d90d8"],["/tags/陈渠珍/index.html","1a3fd8ac2816e1690cf38ce2321aee28"],["/tags/青海/index.html","c82d8cd2ee56362b8343f46f1739e33c"],["/tags/青海湖/index.html","9787dce4d5ae87fe5c746482c0ab3cbb"],["/tags/骑行/index.html","02a9e6d9f7fc66be27a3b2d352942ef2"],["/top/index.html","0b654b186f5cef96d2c8daac83c6b8bc"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
