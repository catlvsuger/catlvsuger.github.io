/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","a202940359b462f7ba5844fd0136f751"],["/archives/index.html","7ad2dcf26627f1363f99a0578b2989f1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","93c3ec7be0585da8c85ee0350fd15e1f"],["/categories/Hbase/index.html","dc756149b1bf6445df1d9898c3629f3d"],["/categories/Hexo/index.html","cd522d1b1ad8ddb36495f4ff3fdf16dc"],["/categories/Java/index.html","d6f4fb0751853b4ce009dc4cd494b942"],["/categories/Kafka/index.html","3e0f55beed13e1663f7916100cad59ee"],["/categories/Spring/index.html","982552188cede45555501fbccac53536"],["/categories/git/index.html","cc616f28bf464d44b8cd7cb9e7c97468"],["/categories/index.html","9675a5081a3f0038c306df479fd770cd"],["/categories/人生/index.html","3c6a7a60078aeabb38afbd2107fd72c7"],["/categories/旅行/index.html","1280230182e938fa37a2147af16e80dc"],["/categories/算法/index.html","b108c39acca1e82c37e27b44c396f0e1"],["/category/2017/09/17/Tibet life and death line.html","6e6d1ed2a090739918e2af67253e0b80"],["/category/2018/03/10/At Chengdu.html","e70b66502b4af28538fe72340d4b6353"],["/category/2018/03/24/Look at the mountains and see the water.html","75407edddccf26cad7b678c7ffa2917a"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","353f11e5b572a4e9b5aa1fd7631a2d04"],["/category/2018/03/29/Open space in the north.html","9babe88c75ff995cddc85f1b010ceb21"],["/category/2018/04/01/Silk Road has no heroes.html","684c6bf1089afec7741842e3de8a2cc4"],["/category/2018/04/22/Return home.html","6e3a33bad7c9b87dee88ed4d5cee9ec7"],["/category/2018/07/25/live well.html","149a2ab2df8ef3b475510971d7d2edb5"],["/category/2018/08/14/Development preparation.html","ae78e4fa68e34d2001f5703de3099549"],["/category/2018/10/29/hello-world.html","4b4a8917248b3403edc71d0cff63e88f"],["/category/2018/10/30/Open the Hexo blog tour.html","2975fe2d66b94fa1ff85b9c2a9ca23af"],["/category/2018/10/31/Hadoop distributed cluster construction.html","eb8f46c73efc0aaa0abfe9986ce0a1e4"],["/category/2018/10/31/Hbase distributed cluster construction.html","33b5a482e9b63ed235173bb5b815b68e"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","a4777e12cdea55c4212c90c62b6196ae"],["/category/2018/11/01/Kafka distributed cluster construction.html","ef56232644d132f2edda2bfd13ecb1aa"],["/category/2018/11/13/Sort.html","19db607ce85a3dbd9b4aef807a2ef2f2"],["/category/2018/11/14/Sort.html","398a523e115245d075ed877bc11951ae"],["/category/2018/11/15/Sort.html","b67e32fbf9704275e19f03968c69b7d0"],["/category/2018/11/16/git.html","5460e31f58a10f71872f8aa225ef8e84"],["/category/2018/11/19/Sri Lanka Travel Guide.html","5841d76e252836ad72830671e38a8de1"],["/category/2018/11/29/Sort.html","04bae95967ad501e699f26106493763d"],["/category/2018/11/29/Spring learn note.html","ec9cb33d2246959f5def960b7e540584"],["/category/2018/12/15/planning.html","6baf01e86159d4cc211f542e1d7fbe4b"],["/category/2018/12/15/year-end summary.html","c38ffe204e13c47dc878a5a90d855dd0"],["/category/2018/12/17/Bankok transit.html","bda56ca240c25301dcd9658e5825b2e3"],["/category/2018/12/18/travel.html","6a43e2ed89c30cda7f7f5519ea8f2f39"],["/category/2018/12/19/travel.html","01e6d145d58029faf026ea26b1e050e6"],["/category/2018/12/20/travel.html","ebafdefd84c6f3ade8cbd51d17ef5218"],["/category/2018/12/21/2018-12-21记录.html","d5da792dd72f96694cf64c16b92f228a"],["/category/2018/12/21/music.html","4c36a75f5abe8d9d032519da4356024e"],["/category/2019/01/03/principle.html","8a47d7bede208cf0900670561c50074d"],["/category/2019/01/05/cooperation.html","e211e2915ec7a2bef43d59767aeb7df0"],["/css/main.css","4790e5b583dfb91826c8b311576c2f20"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","33594f62ca9b273628e5da45f8ffbf5d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bfc4230cd8178fc7e74927bbbc1b31d1"],["/page/3/index.html","730c00e3f0976e26fe54d5056e447c54"],["/page/4/index.html","c7b3d7e1c6c528f512fbcc5ae047317e"],["/schedule/index.html","0c143f3085b3d9118ac675aae412a56a"],["/sw-register.js","b624abddca487061eba1bf02b34ea37f"],["/tags/109/index.html","94f24e24559cd87ebcac6ab480fc48b5"],["/tags/318/index.html","8bd1be80f7481ba45f8a5f4561dcd30e"],["/tags/AOP/index.html","eace98e7144c3fe9ca19f24a6554258f"],["/tags/DI/index.html","73fc18ccb877cf33e9cef2dc2593df0e"],["/tags/Hadoop/index.html","91fc19ad3cca394041447ed0118e18c5"],["/tags/Hbase/index.html","7df112b528ddfc9fb4c51a110e9f8f19"],["/tags/Hexo/index.html","0e829b4704449e8901ec16dfb57b4e82"],["/tags/IoC/index.html","bbe7b0724ed362555780eb926e24a2d0"],["/tags/Java/index.html","ef47c5137d0b5f86e049d037533e397a"],["/tags/Kafka/index.html","54684983ffc7cc83364b39a178f95bc2"],["/tags/Spring/index.html","4d41e8cbfaf70d37a3f10223087cdb40"],["/tags/git/index.html","7e144c00a8c4f8fc36c201c5b731e76c"],["/tags/index.html","16b1962796156a7d35b157c67ac21c1e"],["/tags/丝绸之路/index.html","89a37372f420a5e66605488e55229b08"],["/tags/二叉树/index.html","1b8732a85a3d8bddd19df6e14b5c55be"],["/tags/人生/index.html","c9f874cc6cb8348730ed3163d06b4491"],["/tags/兰卡/index.html","e478674d3e9e096918269b6afb01af0a"],["/tags/内蒙/index.html","b7eaba8b3a72c42afef952f6675bc3b9"],["/tags/凤凰/index.html","050dbc2f0dedf4b274cd684ea08b2a39"],["/tags/可可西里/index.html","182bb83e41400066ae0e0534e1ed3f00"],["/tags/唱歌/index.html","34959b47b56dc7b67decde7ac9f35063"],["/tags/嘉峪关/index.html","cf9e9f7f889d8a0faa2309ec13eacb96"],["/tags/四川/index.html","09ec45b999180c3bd147405608d15ef0"],["/tags/堆/index.html","87766e5fee9fbd9685db020fd7f8395b"],["/tags/尼甘布/index.html","b47d412eb649814538da12cbca6934db"],["/tags/巫山/index.html","d89e6c0e245a8ead7ec4e56ee7cfd69d"],["/tags/巴丹吉林/index.html","881eb11dc3ae7930c1d839ad06e33af8"],["/tags/康提/index.html","6a0a7d83c3ad7a40155f4f8ee9decf88"],["/tags/归并/index.html","4533b632cdcf7b7bd37024a596192952"],["/tags/成都/index.html","d104118d9101494c68ba881448786394"],["/tags/排序/index.html","2d9ba773f23bd5d9619ac8d4a1c9f43f"],["/tags/敦煌/index.html","00e7e5cba345b304e9f231d6d6e3c167"],["/tags/数据结构/index.html","fa45b8b8330bf80a7bbd4a12eb8b51d8"],["/tags/斯里兰卡/index.html","d6f3599ec3dce387a77541b2ff31134b"],["/tags/旅行/index.html","38d00fdad5cac315dbac523f7b8d4fc2"],["/tags/曼谷/index.html","1eefafbdb2151bf26dbe70f0eb5505c4"],["/tags/格尔木/index.html","ffa3df6c856c3762dafbd0967e2486d8"],["/tags/桶/index.html","3ee6e4a148cd06cee3837f1328fbe738"],["/tags/沈从文/index.html","30221953eee08a845133321386d24d03"],["/tags/泰国/index.html","b931732be76a64ba7bcd48d672de951a"],["/tags/秦岭/index.html","bd37a2a22aa43dba276fabb763cc9bae"],["/tags/算法/index.html","4e1eddd0a366d083fd670b3814ec2890"],["/tags/纳木错/index.html","3c5949341f93dd97c3ba336142896338"],["/tags/西安/index.html","115ac0c856197074c5fb76465d4f64e4"],["/tags/西藏/index.html","f840916b3b7aa1a449256da13307f74c"],["/tags/计数/index.html","ba406e7d67271a3eeb89d9e0d3c0bef8"],["/tags/金沙江/index.html","4687d6972bdfee032af9baf885cda67b"],["/tags/阿拉善/index.html","e96cb5a1b3c3c4138418c9e5a0a0e99a"],["/tags/陈渠珍/index.html","6314207f48859d1bbf3e575aa17d1a42"],["/tags/青海/index.html","135ee80515b901649781be7187c4017a"],["/tags/青海湖/index.html","f9a3b8177b6337d72a429db6af58f491"],["/tags/骑行/index.html","087e7acc4fe32d36a24e2a2d91cfa852"],["/top/index.html","f5c9838863b0d491c58e3770db59faa8"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
