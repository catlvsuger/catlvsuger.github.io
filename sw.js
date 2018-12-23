/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","58bae35c15e1a9d2dd9c35dbdc8d50d5"],["/archives/index.html","17befb89e9991ce0a5d885f7cdb418f8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","016b6d73abf7df001d519cc5401e1b94"],["/categories/Hbase/index.html","7ffc8e2429bc49738c95d91b6a5fbc03"],["/categories/Hexo/index.html","720093c0a0b8e7c4779eaefa64c00eab"],["/categories/Java/index.html","61b120821ecb842bc3f7b83df948ae05"],["/categories/Kafka/index.html","f119246966f3294295763d0192892b42"],["/categories/Spring/index.html","3b89f6bee408564468a002a053633c2d"],["/categories/git/index.html","629a68c4e6e8f0f7a6d1946c4f2ce1e3"],["/categories/index.html","73a06c9650ee09c63f9cf596d6bbb7f4"],["/categories/人生/index.html","05dfff9e1fc495a7eb30beb4f0dfb2a9"],["/categories/旅行/index.html","a5c6f67d6951a94024d1ed97bb0a12fa"],["/categories/算法/index.html","b72ce3771d9a200bca110745e855270b"],["/category/2017/09/17/Tibet life and death line.html","627db0bf6ab46aeb1cb862ff4fb51839"],["/category/2018/03/10/At Chengdu.html","a27adcb48731fce1724df0ac6513b355"],["/category/2018/03/24/Look at the mountains and see the water.html","97be874edbd2e4153ee276b0aad7d6fb"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","c488e1c87861fdbe113bd45a0a43731a"],["/category/2018/03/29/Open space in the north.html","3d1cacf39f212fb4ff78c085237ecbb8"],["/category/2018/04/01/Silk Road has no heroes.html","1d63ab9ddd8ffc6c92acc887ce5ea7e2"],["/category/2018/04/22/Return home.html","1b9b06310dc23ee8bfca95d8c5fff39e"],["/category/2018/07/25/live well.html","10f20f5ff2f52ba4b452662ca09868dd"],["/category/2018/08/14/Development preparation.html","02d941b7a95c981217126abda12c307a"],["/category/2018/10/29/hello-world.html","a0d459629f933f20c9d64a161473136b"],["/category/2018/10/30/Open the Hexo blog tour.html","d06b7662c7ffd5c2ee515197f806e21c"],["/category/2018/10/31/Hadoop distributed cluster construction.html","e42f0a75af2cd353bc41e16f11882d93"],["/category/2018/10/31/Hbase distributed cluster construction.html","11df5b1d9abda887e83dac064623ce62"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","bafe944d1fe96e3dc80d88283f61f78a"],["/category/2018/11/01/Kafka distributed cluster construction.html","74c90386b84540ad108741893e0bd376"],["/category/2018/11/13/Sort.html","3fdc9511ea497c471c135c1835938d13"],["/category/2018/11/14/Sort.html","827b7bd9a25f685ba6f519698f87532d"],["/category/2018/11/15/Sort.html","851df045e630c0e8e6f9563140c0f7d0"],["/category/2018/11/16/git.html","cbdbd17575160f9a1ab89731231c1078"],["/category/2018/11/19/Sri Lanka Travel Guide.html","22105c1b866b48198bca8fd56e380ddb"],["/category/2018/11/29/Sort.html","d8250cb9cb4e5191ac5256f73d8b3637"],["/category/2018/11/29/Spring learn note.html","7c0eeaaeda42af21afbf3dc2361db19a"],["/category/2018/12/15/planning.html","3f93c05916d0f024e03aadc7da33c575"],["/category/2018/12/15/year-end summary.html","57095827b14ebc0aec8b93df1862a980"],["/category/2018/12/17/Bankok transit.html","2c6ab758329a07af975943a63d087995"],["/category/2018/12/18/travel.html","4e23fff14e74466ca4d865cee31efc95"],["/category/2018/12/19/travel.html","e3a7570613afd09c7652e0ff463ce97a"],["/category/2018/12/21/2018-12-21记录.html","c0abe0112ea27d2d0089fc03a225acde"],["/css/main.css","69aba685b73cc955beaead578a133eab"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d57c81847d088b9e3e1b0642d803bb82"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f722fa5fb44b9fa39df63f7afd189b60"],["/page/3/index.html","2ee6f8980acd813c1c5270b0f245f2ac"],["/schedule/index.html","714cf6bb7423324e09cfcd260490c28d"],["/sw-register.js","d84967b76b2fb7969dab977592981e2e"],["/tags/109/index.html","334f1e067368155d47065daf9a30b067"],["/tags/318/index.html","4a583c8047ba76d7c83480bb1500b4a0"],["/tags/AOP/index.html","3214519ec8dcf3a7d6824ed190e767cf"],["/tags/DI/index.html","b0cd89028590fc832a74024b30c36372"],["/tags/Hadoop/index.html","4496630305097836bd86c7bbfba94d7a"],["/tags/Hbase/index.html","6fadb28fbb1144c62f54eaa841b2ad11"],["/tags/Hexo/index.html","d1db3f6872dc60bcfbdc1f9ab4829a6c"],["/tags/IoC/index.html","388b518f9cda2b5f8fd495355d7f3348"],["/tags/Java/index.html","1f928ab78b302ba35ab754667c9affa1"],["/tags/Kafka/index.html","47c2cf1de511beff85c2c1f310512e6a"],["/tags/Spring/index.html","92b8586a79d2b8e45315cbeec3c7fd4c"],["/tags/git/index.html","79ad210acfb742d0a5eb2a6f2349543b"],["/tags/index.html","844be4e9ada41fe8e7ad0c2031f4d2ac"],["/tags/丝绸之路/index.html","5e718f7860502ab983e523f28c8c3f20"],["/tags/二叉树/index.html","6045242dd41561ed5df468773345361c"],["/tags/人生/index.html","dba44e60ab97b36608c1a7dda2816ae1"],["/tags/兰卡/index.html","d64ac528e2ea3ffcc82482e17e760445"],["/tags/内蒙/index.html","92c33d72bae7f7bf0b487d899bbe5446"],["/tags/凤凰/index.html","48c69010ae74151814ce7e7690f49a6a"],["/tags/可可西里/index.html","0ab7752145cfd6074a2711a66d67ffdb"],["/tags/嘉峪关/index.html","39dc89bb9440ed589bd538d3ad680e71"],["/tags/四川/index.html","50ba606c21f58fb9b5f0be332e8e8b8c"],["/tags/堆/index.html","f65e390d3b28d8d7e969b709672cbc13"],["/tags/尼甘布/index.html","89b3ff9f4d4a8191716ec1b6546c687b"],["/tags/巫山/index.html","0bc03e00b6d6212b1d62b00599106f0f"],["/tags/巴丹吉林/index.html","aee56baece81e4a8dbd1cb3ae6ae02e6"],["/tags/康提/index.html","45b76b77a1f8dcc7ca3b2ea089573dc0"],["/tags/归并/index.html","6da7989a3625af1ef0a241f394c6ffd0"],["/tags/成都/index.html","10b5d841efea7da4957dc4be2551d2f7"],["/tags/排序/index.html","d11e8e7854b9e8757127aa37a1157129"],["/tags/敦煌/index.html","7d81ce9d2aad5a9fedb55d2a25259702"],["/tags/数据结构/index.html","1eaf0e1b1ce8c06a515dce13975a5b9e"],["/tags/斯里兰卡/index.html","aedde209de673d399bb86811a716e2b7"],["/tags/旅行/index.html","8132f6c18c4c604be730fe8e0eb4f2e8"],["/tags/曼谷/index.html","e21277b39bdfd782f056e87a97490368"],["/tags/格尔木/index.html","39830e47a4e4697169620bcb00503820"],["/tags/桶/index.html","cd9f21aa90ccc17d56c3492803027028"],["/tags/沈从文/index.html","64594c6400d66a1c77ba740d0d63189b"],["/tags/泰国/index.html","7600040599fcf3162008d7dbcf7afe91"],["/tags/秦岭/index.html","bf5ca7d7f9258abbc1f5b9df5f73eaa6"],["/tags/算法/index.html","f82acf6dd98e368554ace09f2032e2f3"],["/tags/纳木错/index.html","66e1e6716aaddb7189619e997482787b"],["/tags/西安/index.html","c2e9e8ec61e87a4ba7ea81677afebc7d"],["/tags/西藏/index.html","992f2b35ff7934a49d01cb6d74bc25ba"],["/tags/计数/index.html","476196ff88ee0b7679b4ab051a324787"],["/tags/金沙江/index.html","c9e8ca37789f5644c319f16e3fe081df"],["/tags/阿拉善/index.html","bb2a70b4f93eff8502c586fc235e2647"],["/tags/陈渠珍/index.html","bcd727fbbc78b3e321365cf3c0241677"],["/tags/青海/index.html","de5bf4d8e1fc7c0fa2c3915005694ec6"],["/tags/青海湖/index.html","59b609107b4231672fe83acaccca2a2c"],["/tags/骑行/index.html","e7660e444b25dfa12673625a560b0e53"],["/top/index.html","26bf06f799f0b4ba9b201d7ce852ed4d"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
