/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","0627908c849490e45646fab30f246936"],["/archives/index.html","a4a4a03e8e8ef455d7107724991a093e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","1aca4eaf15e81c98a3077511ba44506a"],["/categories/Hbase/index.html","6a83f0f29b8dd90635ed2e5a86300d08"],["/categories/Hexo/index.html","7c018e1f6fbd1b66ae0f11abd9d68835"],["/categories/Java/index.html","e1c1528ba3cb46adebfe315624c2a0c3"],["/categories/Kafka/index.html","bf1687439b2954f425499a21245c723c"],["/categories/Spring/index.html","9c428000e6d36a0f49233fd5910db109"],["/categories/git/index.html","93a39f9775e78902eda605d355e90040"],["/categories/index.html","e09ef0ccc05b210361febc6e6059a470"],["/categories/人生/index.html","e8ed3c3825f42071bf024f79a5567c66"],["/categories/旅行/index.html","813582f2642d5c8a1ccb320b3ab8f08e"],["/categories/算法/index.html","b30708617c377d9bf2cd8da8a0ba0cf7"],["/category/2017/09/17/Tibet life and death line.html","4ad4be4461c7e24b6a36a75efb4099f3"],["/category/2018/03/10/At Chengdu.html","1a398bc2247ed2d8df18742ba980b75b"],["/category/2018/03/24/Look at the mountains and see the water.html","ea19281e9ec3e7b1871982c7f7257e31"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","0bce9b9c7fb854aeb524a2794c532d4f"],["/category/2018/03/29/Open space in the north.html","95e601f7f4e446b8997506e5182ccaf1"],["/category/2018/04/01/Silk Road has no heroes.html","286ae27b7c55e35c5bc8a3d6ba96db9f"],["/category/2018/04/22/Return home.html","bffbbfd9327626219468a9b02bdc1c29"],["/category/2018/07/25/live well.html","9f287309276a0ed31790eb07374fc0f7"],["/category/2018/08/14/Development preparation.html","8cd1df1865c6af40891dbc95942c4213"],["/category/2018/10/29/hello-world.html","ba6ce854e55ef0c4334070d84f53df91"],["/category/2018/10/30/Open the Hexo blog tour.html","034e80ea492d4c95be9d5ab25419705b"],["/category/2018/10/31/Hadoop distributed cluster construction.html","963b48f4f8ffd241deab6dfabb799114"],["/category/2018/10/31/Hbase distributed cluster construction.html","a1e13a08628acccc90132490a8732420"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","93059b4ad827aba1e1df363b130e09fd"],["/category/2018/11/01/Kafka distributed cluster construction.html","ad53efd4a4c3fe8361522851749ed2b8"],["/category/2018/11/13/Sort.html","1ebb6029122d7e31be4c2346efd8bbd7"],["/category/2018/11/14/Sort.html","17fd4e6ce5d24a2f42a5cf7aaa05a13d"],["/category/2018/11/15/Sort.html","86e2abc2f5c26d8735a5c29e30e1f0f3"],["/category/2018/11/16/git.html","695a1060feafd5e10cf8fbeb7b52ee72"],["/category/2018/11/19/Sri Lanka Travel Guide.html","07a8cb0984cf1bf2886482d37e463aa5"],["/category/2018/11/29/Sort.html","c806fca0eed1cbd4c14eccd378e62886"],["/category/2018/11/29/Spring learn note.html","7271b2d8677b54345460b6a4c2ffcf9e"],["/category/2018/12/15/planning.html","0b4d5559802c1a5fd2d6be4285030208"],["/category/2018/12/15/year-end summary.html","ecf965b7ab02e5f1e13d08b0f57fbc7b"],["/category/2018/12/17/Bankok transit.html","49917446be6df457065a8d34563bea05"],["/category/2018/12/18/travel.html","80117cf7a98131400c2a5af1d2a154ae"],["/css/main.css","5cfc02a570ed5e2c4f858cacdb49ae49"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c878c3e29242d5e44a60f6cf6ff4b633"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4b2e7fe6697276082e73ced398ef36fb"],["/page/3/index.html","749008bc1c99f4d4b4269a26cfccccf2"],["/schedule/index.html","de38af9782beeaf2a1b634a2053e2afb"],["/sw-register.js","d123afd25feb5cf9aa42feea6464da55"],["/tags/109/index.html","e1a620ea9b875d62088fdc8dc706d4cf"],["/tags/318/index.html","a967af7deddb3db3396aacfa52c18540"],["/tags/AOP/index.html","99a6e4bade2fd18cd458e1811b78fae3"],["/tags/DI/index.html","a41ec0532b7f3f465655b19d94f3eaa6"],["/tags/Hadoop/index.html","302c4b989df19972215dcf7c209fe05b"],["/tags/Hbase/index.html","f43b196682696a233dabf50ded54b2fe"],["/tags/Hexo/index.html","3e7b4b952536b4d4f2fdb9ccf326ae9b"],["/tags/IoC/index.html","9dee688cdb236f1a6f962bca12d49b7c"],["/tags/Java/index.html","1965bd0d463f689cff10227877b432b1"],["/tags/Kafka/index.html","d21c01beecf5cfc3dd46438b38548e55"],["/tags/Spring/index.html","67fb5464baeb0d99cb1ccae1e3583d2b"],["/tags/git/index.html","425f4815bfb59bb075bdc574370381a9"],["/tags/index.html","8182c107038087092cd0b96632fd244f"],["/tags/丝绸之路/index.html","73ac2add641d46ed04e2974d118caf41"],["/tags/二叉树/index.html","f7e83f9818c7b327b001cf332201bc9e"],["/tags/人生/index.html","e7b99434c7b444b345eb17f4e8c75e28"],["/tags/兰卡/index.html","13b682ae97b42d41fefbec7ae13006d9"],["/tags/内蒙/index.html","00a1fae81753627e1f282e6c7105d964"],["/tags/凤凰/index.html","d14ab5a136401230974aa85031f3ac7a"],["/tags/可可西里/index.html","509f7173e1b733a169f6e1639d18b607"],["/tags/嘉峪关/index.html","c1122b540c9bc715eb13a1e48759ee8c"],["/tags/四川/index.html","d1db004228f81e51ad55b8ec04a7b985"],["/tags/堆/index.html","73a3e2129371a1ee41e6bf734409da1e"],["/tags/尼甘布/index.html","6ac504a8e2c1d522ffcaa20f18babf07"],["/tags/巫山/index.html","7a14feab471a95ddc9209b3778620211"],["/tags/巴丹吉林/index.html","cbc704ffe896e9c7e04736fdc456257a"],["/tags/归并/index.html","afffa3070991ef4fbf8e3141158ac652"],["/tags/成都/index.html","3e2f168ada925cbcfeb2ed56d2883d0d"],["/tags/排序/index.html","c8c1f2f18e2909efd8fc95d596f896ba"],["/tags/敦煌/index.html","6f5fa0fb050a851ac8adad93e302496b"],["/tags/数据结构/index.html","62e59ec0674807ad8dcdbf00be5fbb35"],["/tags/斯里兰卡/index.html","a1fc2f407aef01b2159efec3f9932fec"],["/tags/旅行/index.html","5069dfc7f3d2689db63a5ecab0a2b0db"],["/tags/曼谷/index.html","61ec0389cc9ae02d9a2fef9d5725e423"],["/tags/格尔木/index.html","4c7458cc1c1763b6ea0c852c99b8c243"],["/tags/桶/index.html","df2c053ef09608f14bc7f12817f0c029"],["/tags/沈从文/index.html","b06e22415f57a98fe46d81b82a22dc61"],["/tags/泰国/index.html","4e55a455737a2d20e99ec8c4b6b0a5b3"],["/tags/秦岭/index.html","3a398e9290a00cbd460087e5730e0d84"],["/tags/算法/index.html","a0691b9b1474b08629ec17cc5b6f5fa3"],["/tags/纳木错/index.html","08bc861f7fe6db7fa9e61c220a0f073e"],["/tags/西安/index.html","14f7cea3e7b1b1b007fc8eb073eef10a"],["/tags/西藏/index.html","ab2068d310f64e65c0caf8285ae17e95"],["/tags/计数/index.html","b5446676cbf70e9f0e2f0640bcd950f9"],["/tags/金沙江/index.html","e57217b99760dce0153cbd57f64d3eeb"],["/tags/阿拉善/index.html","dc29a16b7ccd925c9f6f92b48cc9688f"],["/tags/陈渠珍/index.html","14fbae3d28f872da81c7a779e6421cd1"],["/tags/青海/index.html","a325ca43ba1cdbb6b0a4b54b1c3f479d"],["/tags/青海湖/index.html","a1976d8ce31338418331a1f9ae6b7729"],["/tags/骑行/index.html","40a323f0678820f8f92550e909d0c4e3"],["/top/index.html","3332225e45a21c282d5cf1935d9642df"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
