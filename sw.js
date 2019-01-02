/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","82c54fe2da8acdce67054274b79bcb40"],["/archives/index.html","aba86d057800d9cf3d01fc0be0307f5c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","06be34635a7e428655f0be9d5c8870ef"],["/categories/Hbase/index.html","34fc43905c44dc696fe88b4d49583b70"],["/categories/Hexo/index.html","2c6d83dd5539b47fd9a1dc3630841279"],["/categories/Java/index.html","03ec4c9e8e1948ae555de64846f66adc"],["/categories/Kafka/index.html","bcc4998531dffbaa912db68b089b8d09"],["/categories/Spring/index.html","bf762ac3c6108f49e30c6ac0f75f67e6"],["/categories/git/index.html","b59479ca83cb76e95c2cb27faf7b674f"],["/categories/index.html","975ec5e2e8265fdd78985526caf91711"],["/categories/人生/index.html","4b919cd93f38aa5bd28b9a5082ddf182"],["/categories/旅行/index.html","a42455567547ffa68fb235e1ea90f464"],["/categories/算法/index.html","7a7225a9033e05d0790e1813ba2260a6"],["/category/2017/09/17/Tibet life and death line.html","32b26b3bdd83808809e7bb3521462450"],["/category/2018/03/10/At Chengdu.html","9919b7425d7bd2e9c14acf0b16bc4357"],["/category/2018/03/24/Look at the mountains and see the water.html","a1fe47a50b0cd569fffae2f7e435476d"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","18ef135dba700a102acbabc19f006892"],["/category/2018/03/29/Open space in the north.html","a0c76211e0e4fbf768842f7a0b03f6ae"],["/category/2018/04/01/Silk Road has no heroes.html","be6f2626f4293a09ff285b55070f9575"],["/category/2018/04/22/Return home.html","42d02d07c5d25f65d7262f5af11dc403"],["/category/2018/07/25/live well.html","496cb6bf979e79d8d5c5160805cd51a3"],["/category/2018/08/14/Development preparation.html","64d8141724bc4e4f022139e9d1e84a88"],["/category/2018/10/29/hello-world.html","c9e27f6833cdeaafdd50bd0a5fb38922"],["/category/2018/10/30/Open the Hexo blog tour.html","7ba17fb8b499b5a888dd23c0013a9195"],["/category/2018/10/31/Hadoop distributed cluster construction.html","91820623f0dcaa86c5e769e20a351fe4"],["/category/2018/10/31/Hbase distributed cluster construction.html","84860933f2f3df932f0c87ce6b69c9c7"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","05c20fed2bf39584c5f655f6195cd38b"],["/category/2018/11/01/Kafka distributed cluster construction.html","f42f657b8eb0cdaf707238642f740bf8"],["/category/2018/11/13/Sort.html","c1af1d2e3fa6297553e66ff6e3fb8ddb"],["/category/2018/11/14/Sort.html","e73b00b27e9fac8f51f1af5b9e611d7f"],["/category/2018/11/15/Sort.html","fedc2bb40c25de18513b9ba816fedbb7"],["/category/2018/11/16/git.html","616598a3f56e66d7b0193b3dee26faca"],["/category/2018/11/19/Sri Lanka Travel Guide.html","3d80b894ccd8ed033e9deca7c6830348"],["/category/2018/11/29/Sort.html","5b65668f1265a2e43d82d804949a0131"],["/category/2018/11/29/Spring learn note.html","ee6e6a2933de70c756b83d1263b147e3"],["/category/2018/12/15/planning.html","e90f11bbb96b987563be4e36f9f039af"],["/category/2018/12/15/year-end summary.html","3947118e6d1c0e86f898e0e242d16add"],["/category/2018/12/17/Bankok transit.html","686475e49a0ceca8bc8b76bc9c0e9ff9"],["/category/2018/12/18/travel.html","3e656c31398c6d24f885045230af5fa0"],["/category/2018/12/19/travel.html","f434eb82462da4f77652a5d62b3771b9"],["/category/2018/12/20/travel.html","2ab4837f4676598c428f77d5ad78551d"],["/category/2018/12/21/2018-12-21记录.html","e3888ef4f8b4b973a620f1595e49e0d2"],["/category/2018/12/21/music.html","8a080ee92ad0f66f95f0754ba769f6a7"],["/category/2018/12/21/principle.html","1ea08fc3b5ee694af7c0d53a0d1a04b7"],["/css/main.css","556396a0d019fe7d0d1eaa796e4dce8b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","647b3a21e2eb05fbc064765681a25532"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ca78ad08caf30c8bb4e16a67321c6bd7"],["/page/3/index.html","90e2b7023e666fdd66d3f469044ff451"],["/page/4/index.html","8bbe9041b453abe7968b63b20356b2e9"],["/schedule/index.html","5fb84604fa5fe878aa9d445eb4c5f556"],["/sw-register.js","9dc2b67bf993ca5a9400613d2c3ee074"],["/tags/109/index.html","6a12e6629d844a5b8d22cf586ea9266b"],["/tags/318/index.html","67936ae28180eb40b67c740cb556e50f"],["/tags/AOP/index.html","41ddee228ff24f55ff12faa9dc91e93f"],["/tags/DI/index.html","293eaeef342b28a82e96cc6584c89f0b"],["/tags/Hadoop/index.html","0beebc6384c6f4c7d074776b8df3deb8"],["/tags/Hbase/index.html","77bb93d024b4f2a67a4fd1e43c37c1d1"],["/tags/Hexo/index.html","c225c34055ae59c121b66f1346849181"],["/tags/IoC/index.html","1e03a3e50ec4b3deb43f898fe354f733"],["/tags/Java/index.html","2cd2aa349b0f1dd0f92fc885b335bdd8"],["/tags/Kafka/index.html","bddf4985dc96fcdfcd6836e2f3398bb9"],["/tags/Spring/index.html","2032fa222507933557718df5f8a0371a"],["/tags/git/index.html","f2b389f0e7eb2323d318c07d2d68ef66"],["/tags/index.html","5f1e7bca74f2357cdee7dca46db2bc63"],["/tags/丝绸之路/index.html","7366e869d9931760f3bd63769d21cb8d"],["/tags/二叉树/index.html","c61d760588aee7f5b574fb31ff107aa5"],["/tags/人生/index.html","1b00cea52d208181e6414a8ff1557be0"],["/tags/兰卡/index.html","b4d2416300a10104de0d41b9cef36c42"],["/tags/内蒙/index.html","e9bcd874f6c29a1fd7a8eace5ba8b498"],["/tags/凤凰/index.html","b97ff1f5a10e88533eb7eea28bb00082"],["/tags/可可西里/index.html","bef5ee408894ea2d783db5fb058323ed"],["/tags/唱歌/index.html","ff51bc710a23d291a05f2e8f143bb433"],["/tags/嘉峪关/index.html","18324dcb8855ffc1306ab43750d893bc"],["/tags/四川/index.html","5f44735ec28ef43afe358b609f25f31f"],["/tags/堆/index.html","abab4d247cc2b05a0c7843f301b25bc9"],["/tags/尼甘布/index.html","d5957ab47f221bd8fa0b30d07a07fbbc"],["/tags/巫山/index.html","203eb978eb2f0346d5b2f376005509f1"],["/tags/巴丹吉林/index.html","ab640200c2249dc0b26317b69bd0a9d4"],["/tags/康提/index.html","b6c6d8901024edf1dbb69575af8466be"],["/tags/归并/index.html","64627b1926dd0c79c68a91f74bb066f2"],["/tags/成都/index.html","3541e092345b885bed1f09964f1aee85"],["/tags/排序/index.html","7ef406fdc97d23a6f912904d230ee60d"],["/tags/敦煌/index.html","162d3aca15249302762e7133304b90fc"],["/tags/数据结构/index.html","b26c4c471c4945f4c1196cc3bad268da"],["/tags/斯里兰卡/index.html","b260b7b1735dc4b2799d6f2b614f5aec"],["/tags/旅行/index.html","d04411ae1ec224196487f84710ddd8ad"],["/tags/曼谷/index.html","3b7a6a6c9204e8121f75d6ed752ec8ab"],["/tags/格尔木/index.html","83d3e2379daa069b831b6a9c82eaf669"],["/tags/桶/index.html","d991de99b083f8fa73992255540fe687"],["/tags/沈从文/index.html","3dfeb492fca333ba5d2608970a4d7d11"],["/tags/泰国/index.html","2981f8138b7da9ca66b8a0756077789c"],["/tags/秦岭/index.html","10acbe9c94254e1e7cc803c35e62ddd2"],["/tags/算法/index.html","4e49b3cb8b6ee45f6db80cd1b11a7fa9"],["/tags/纳木错/index.html","cd771a5ebd4289ce5bdd2f9eb1046e3c"],["/tags/西安/index.html","cc1acc5e83562dc3a88675a2d4602175"],["/tags/西藏/index.html","de9e3f9d1df967c3ee193e082ac0f6e2"],["/tags/计数/index.html","5d23839e1d5015fabf8eec87316f18f7"],["/tags/金沙江/index.html","9a5cb8a2b5fe34c65a55e71015bc82d9"],["/tags/阿拉善/index.html","9e5f648a84500b729f1054f5e206e0b6"],["/tags/陈渠珍/index.html","0ca275000bbbc1bd2407f81cdfe435ef"],["/tags/青海/index.html","6f67c9033f3033d64198962f9ccf6e1a"],["/tags/青海湖/index.html","c3055380b9e8c98582a145c473662f3d"],["/tags/骑行/index.html","53fabc9def6e00c6a64189707ac7a563"],["/top/index.html","d036e5bcc705d193eebeb107b9e662fe"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
