/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","72cc1dd2f9935af2a4515701216e8b21"],["/archives/index.html","88decccb0d848e6cbf33465859754e7f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","a6b9f2223ae937a3759db7613f81edcd"],["/categories/Hbase/index.html","a2d3c29a33eb3a31a501718bd44020b8"],["/categories/Hexo/index.html","cdd8d111a63d15c25510c951e2327591"],["/categories/Java/index.html","49179b649ad97ed4b73505568ce2ac37"],["/categories/Kafka/index.html","efddc07a6e56da2a628aeb0f163185a2"],["/categories/Spring/index.html","e7b734b1b8b5ad50376591fc64c1a00c"],["/categories/git/index.html","b527c4c0b5c689b9dd0502dff813872d"],["/categories/index.html","7e52df965e213ef3d74153a1572511b4"],["/categories/人生/index.html","7d1972b24512498ae64cdf9f4753786f"],["/categories/旅行/index.html","32976434c914d229b3e1dd18ab7968d1"],["/categories/算法/index.html","23717eec9ccac7349917ce0240d312fb"],["/category/2017/09/17/Tibet life and death line.html","1bb539d4e0d5168a9660190565a6e3dc"],["/category/2018/03/10/At Chengdu.html","c0ad53ea9f9cc71566bec818c1dc5657"],["/category/2018/03/24/Look at the mountains and see the water.html","e3254db2a6a3024d0db93189182b9a65"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","5616cbbdf739ef67cdf985e6d8f51467"],["/category/2018/03/29/Open space in the north.html","2fff1ca6dd2dfd5a950343560a38f8a8"],["/category/2018/04/01/Silk Road has no heroes.html","a78d57efb9f5097b52d9d48432a6e935"],["/category/2018/04/22/Return home.html","3cb0dcf7b151b8ba93a89d8b751b8051"],["/category/2018/07/25/live well.html","2c622659a7ab1eee786def71cd905fa1"],["/category/2018/08/14/Development preparation.html","cb39f980124249a78e98a064b4bc003e"],["/category/2018/10/29/hello-world.html","31f3c6a87d05d0ff7f662966adb68df0"],["/category/2018/10/30/Open the Hexo blog tour.html","cba3fab4f53104ea7e5152e611a9f67b"],["/category/2018/10/31/Hadoop distributed cluster construction.html","deec60a5081d129dcac07b9cfcfdfb57"],["/category/2018/10/31/Hbase distributed cluster construction.html","3b7b336d8a6b130194be478a831ba040"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","bba5dce26090eca7914ecbfdc9cbb9dd"],["/category/2018/11/01/Kafka distributed cluster construction.html","8366451ed103aa8279f706b3fb8aad38"],["/category/2018/11/13/Sort.html","a315d3c26138eb91f5b94fbbfae999dd"],["/category/2018/11/14/Sort.html","4dddcba1f07baa36ecb5d76eca8d6f30"],["/category/2018/11/15/Sort.html","a4254e888025e48dd018fe85d2e43a88"],["/category/2018/11/16/git.html","48ca1c5b0721288858a34f7a6f5d3c2c"],["/category/2018/11/19/Sri Lanka Travel Guide.html","961986c625945b5fb7d2f266ba6a4c15"],["/category/2018/11/29/Sort.html","6fe72de065fa4fd4554702336effd6e7"],["/category/2018/11/29/Spring learn note.html","a424f67dd8d9491cde800f476b9b031f"],["/category/2018/12/15/planning.html","2c2d3762be3ea9e5a0e225ad29c99f0a"],["/category/2018/12/15/year-end summary.html","e6257f8b9fbf225885eeb6ea04210bf2"],["/category/2018/12/17/Bankok transit.html","7e8d39be65b680fd9c9e7e59928b1d9b"],["/category/2018/12/18/travel.html","b27b20165e4e61449ccb125f869793f2"],["/category/2018/12/19/travel.html","84e27ea51d392c3a40a61421f4e8b18d"],["/category/2018/12/20/travel.html","ea9f776a279c8dec3a45f2ade7e5b19b"],["/category/2018/12/21/2018-12-21记录.html","87fa074237e2b3be43ea723d179812fe"],["/css/main.css","7b0f9408a2b65eb589f841eeb3290d53"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","927a49019ef39a585763f4134d85d2ad"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0714cd4b16840113085d215e1a3a8763"],["/page/3/index.html","18eac06fc2bac7b4040b0dc74c76f616"],["/schedule/index.html","22050baf484afaa98ad02d96c1d3e0b4"],["/sw-register.js","b5b9cab1ae27d71f61b0b4982350ac49"],["/tags/109/index.html","ca33d3701f17866ac61c3ce5b50e968e"],["/tags/318/index.html","08e90980f6e856f6793e8587fcb4b141"],["/tags/AOP/index.html","b6d8935f883e36106993c01589a7715b"],["/tags/DI/index.html","a6d037ba42534fc4c19543690089ac16"],["/tags/Hadoop/index.html","818c55b2940b2b942bc138d2c7ca6576"],["/tags/Hbase/index.html","e97850371d48e8c9f766adff8f41cdfc"],["/tags/Hexo/index.html","a7b99d15362811811f95687d839dad6b"],["/tags/IoC/index.html","b35f94478cd0df1f4155d150e183bdea"],["/tags/Java/index.html","f02394a01cae1da9b8abb279ac4871ac"],["/tags/Kafka/index.html","632b62870e7a1f00cc181e570e804b87"],["/tags/Spring/index.html","b714f903b298e5e63d6866a93d83489b"],["/tags/git/index.html","1c89480284c7cccb8ad9cc6274446852"],["/tags/index.html","c52f91123b677641544407076d6d22e0"],["/tags/丝绸之路/index.html","3fed530689bbc79c2b817b495fe2bf8f"],["/tags/二叉树/index.html","4f4e732ec41a42549de44cdadeab4eb4"],["/tags/人生/index.html","0682c352a59b1c3fbafa9b457e2c2f1c"],["/tags/兰卡/index.html","9f548d19504849a1e68f9b4eea6ca192"],["/tags/内蒙/index.html","756c4f718083c5cfd309ef963dc2527b"],["/tags/凤凰/index.html","8fffcf60f60d6d85ccb1795598705f2e"],["/tags/可可西里/index.html","d05a29538ac244d6d5189eaf94b9fd05"],["/tags/嘉峪关/index.html","1570dc9547e552198f1c333da0e2d27d"],["/tags/四川/index.html","944ed161ed4521f85e984af467ec330b"],["/tags/堆/index.html","3a5d7ee912a4b8add3f76cf4aba07671"],["/tags/尼甘布/index.html","4a68e80e1ab923048f1e053bc9da2403"],["/tags/巫山/index.html","9d97a31edbdb4c359bdd26368318a0a7"],["/tags/巴丹吉林/index.html","f2d63ef226b8ad0863aabad8ec07ba5e"],["/tags/康提/index.html","612d5b2bfc339d9a475c2e991c4354b9"],["/tags/归并/index.html","d1c68e28a62c6ccb25210f0a77c0cd76"],["/tags/成都/index.html","6a341ffda977141a2124a3d1cf72528b"],["/tags/排序/index.html","ead99367dc37f7a1bed0d06a613402d5"],["/tags/敦煌/index.html","d9a265a954c641f63eac57cef78aa077"],["/tags/数据结构/index.html","f13d97f4c040cfbf07c44af7d0117306"],["/tags/斯里兰卡/index.html","1bc62828d912c7b9aeffce61d0c28c95"],["/tags/旅行/index.html","2593353b1fc91f8335ce1e47585113b5"],["/tags/曼谷/index.html","d38d319677f3166d11b38dbff80f2f48"],["/tags/格尔木/index.html","b831d7f003e839459fec2c1641750336"],["/tags/桶/index.html","4541270c5233529e4e9e4f64335d28dd"],["/tags/沈从文/index.html","cdf94808443f5b1c2fab5b19f9bc833e"],["/tags/泰国/index.html","95d6fbbbecec236530b2b4fb044275f7"],["/tags/秦岭/index.html","51fda75c264fcbc2799f8f9559fe8cea"],["/tags/算法/index.html","650d3e9709ef5b5faaf11d66b55203eb"],["/tags/纳木错/index.html","1ae4d0f154d1d38a274fdd448845ec48"],["/tags/西安/index.html","86436b5d3b2141323c0fc1512c2c7bf2"],["/tags/西藏/index.html","fd604ee3ce6982a15f7c49d9270b81cd"],["/tags/计数/index.html","062352258d05770ed09dbf215abd36ce"],["/tags/金沙江/index.html","9a96c998278547edc3d44729dcee74cd"],["/tags/阿拉善/index.html","1261aaa15f64655214c4b770ec7c4985"],["/tags/陈渠珍/index.html","03ef05608f4167a321394e0cfcb8e9da"],["/tags/青海/index.html","96d12e651f8a7097632a4f76e83b27c6"],["/tags/青海湖/index.html","147bbb51cb19f15667c59e75c8581278"],["/tags/骑行/index.html","eafc41fb6c9f49454ef41548fa6964a2"],["/top/index.html","e5ca215a2a5a33aaf81c53bbbb6318b9"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
