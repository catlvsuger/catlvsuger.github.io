/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","6e9552acb290b166e90ea21f1220ad37"],["/archives/index.html","32bcfec148cc9f24c82e2c7e73a5bc83"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","fda1c33ee805b53fe66fcce29a3e40e9"],["/categories/Hbase/index.html","b475144f1daa9e0b4d00f5706f508559"],["/categories/Hexo/index.html","cc18a642f4a5f35492a56d15a1dafa2a"],["/categories/Java/index.html","c7499fa23f2c9ae779f2ee85c11e11e8"],["/categories/Kafka/index.html","717d724c550a10ac552bd122c78c9d52"],["/categories/Spring/index.html","7ad2cb6d0ddaf2e53965db60ea136e02"],["/categories/git/index.html","a9b4b3a61c8c107235cad52d824d8468"],["/categories/index.html","04ea3af94e0455fa0f3f838a91862d1b"],["/categories/人生/index.html","93b64daf3bcda01c824f49f9fc3e2107"],["/categories/旅行/index.html","ed10791dad4b09869bb1f803d065f8a7"],["/categories/算法/index.html","9cd01562abb9a16515d5e8fa276b0c51"],["/category/2017/09/17/Tibet life and death line.html","3d4e65711f91079bdddbeda9f6438c2f"],["/category/2018/03/10/At Chengdu.html","4325a94787b3bd88f0196d7ab2e83942"],["/category/2018/03/24/Look at the mountains and see the water.html","474f6adccd014e4c494c0a0d1f1e9735"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","433fae47815854066c7ae8d2806cb50d"],["/category/2018/03/29/Open space in the north.html","f38057f9a01a274ea28e8796e53a158c"],["/category/2018/04/01/Silk Road has no heroes.html","b96416bfaefa54ad6c41b97a8d5829da"],["/category/2018/04/22/Return home.html","08f697f686c8302139b73cf8eb269df7"],["/category/2018/07/25/live well.html","62d01b687212cfc9862ba9b929c14d07"],["/category/2018/08/14/Development preparation.html","567556de05615d70d2cc29799e077091"],["/category/2018/10/29/hello-world.html","a74879ee8d6dee25947d55aae225a826"],["/category/2018/10/30/Open the Hexo blog tour.html","e5888f1e4b2115a1c5aaa2b063d23e46"],["/category/2018/10/31/Hadoop distributed cluster construction.html","4a6f9f1302e5e158f75824399f35c6b2"],["/category/2018/10/31/Hbase distributed cluster construction.html","ec2c4f48408d171b513994ceefaf9db6"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","03cafe926ed593b3d04d796838cda6be"],["/category/2018/11/01/Kafka distributed cluster construction.html","6e0b3a201030b8125bda18dc7af08ed8"],["/category/2018/11/13/Sort.html","58149365fdaaf6038e12a260382fd2c1"],["/category/2018/11/14/Sort.html","8bbc5200ead8218527ae7aa37e4c587d"],["/category/2018/11/15/Sort.html","3951a3a53eb53999eab18ca8053658d7"],["/category/2018/11/16/git.html","7ff9e53637abfb66042709f88a8443c7"],["/category/2018/11/19/Sri Lanka Travel Guide.html","0867eb34f5b63bb90391c34abbf88c87"],["/category/2018/11/29/Sort.html","13087efca0f920741ce72591712e885d"],["/category/2018/11/29/Spring learn note.html","3e813d55df337f1d4bbc1c83c5e455d1"],["/category/2018/12/15/planning.html","7cb1633619deed1f93b624d4669e8a20"],["/category/2018/12/15/year-end summary.html","dc75206bc7fe79135c2716e25ca413cc"],["/category/2018/12/17/Bankok transit.html","a106d99ab9e831248c4c0ef40853364c"],["/category/2018/12/18/travel.html","32a5d33b53db7d4c424c365b9bbc8470"],["/category/2018/12/21/2018-12-21记录.html","34ed14a82aed8896390be9d8c7fd6766"],["/css/main.css","a1e9a9735a71f7e9da40c7295a638de8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","03ffbb1e4cc1bc44704c042c088530e2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7a5ed45342e38941c84d584c4e3d6f86"],["/page/3/index.html","6a57719853fffb9ce31fd99a37c315ec"],["/schedule/index.html","1d21515dbd9ccdacfb1f4e16d5014d8e"],["/sw-register.js","da8b976f86d19436c9a0ed0248af8ac7"],["/tags/109/index.html","3eb329b79c5b95bddde02e1b89d6a960"],["/tags/318/index.html","cf37bdf945174d1253ad4249dc3bfa57"],["/tags/AOP/index.html","6d322e211b64ce8f04e5d4e21564dac6"],["/tags/DI/index.html","8dcd71d27011febc49f1037701d3848c"],["/tags/Hadoop/index.html","a051e7e17ae55a0bee557cd6e7db9ad1"],["/tags/Hbase/index.html","f86c53c4495308b89a9b3f9de6794f89"],["/tags/Hexo/index.html","641d45707eddebed87a08585501b3f00"],["/tags/IoC/index.html","6e5715a35b18d44c83c213ba60ac8f80"],["/tags/Java/index.html","c0388261624ab29028b4877b09121b68"],["/tags/Kafka/index.html","00656c930bf6665d0cea6967bafc7cae"],["/tags/Spring/index.html","a4c5bd6bb2b8683d89ec7581f82c4dbc"],["/tags/git/index.html","c749cb27a5758d791f9b9dc511823b3b"],["/tags/index.html","b59a78592a101a231f8f47384bb43a08"],["/tags/丝绸之路/index.html","e439ea48ff716fc2e4009890f9452e92"],["/tags/二叉树/index.html","b256d8832456a3fa37d966a363e5a39e"],["/tags/人生/index.html","b325fdfffee0e3420b3b8d64d5a22dd1"],["/tags/兰卡/index.html","791b00e1cb14cecc51cb3922c00ce607"],["/tags/内蒙/index.html","4006941784841e33802477d910568b6b"],["/tags/凤凰/index.html","92c13c8416499c349a283fc346c91e9f"],["/tags/可可西里/index.html","7ca974be09b14deb2ceceb4525edf020"],["/tags/嘉峪关/index.html","43621ff1512ae5c51537be6bc5fe7688"],["/tags/四川/index.html","367eb069cc0f09221be32ff1ba123e15"],["/tags/堆/index.html","2c8d42d8daef9ea426dbf22b6a84ccac"],["/tags/尼甘布/index.html","cf9b763ea891a6dc0cacfb8cb47dfe88"],["/tags/巫山/index.html","ff1ab14cef81e1f47c62b4c0d9f91613"],["/tags/巴丹吉林/index.html","1b538256f553b1efe750360f91caf56a"],["/tags/归并/index.html","cc128fdddaf8e903775b6bccc46be8e9"],["/tags/成都/index.html","7ea11ff6cad751bb244d0de2e0a36337"],["/tags/排序/index.html","a76d01da090ae04ee969db8d09106af4"],["/tags/敦煌/index.html","8eec56e5bb94c58fc553ba2a4efaecf0"],["/tags/数据结构/index.html","f50f1d60179b158bf8507be545c6ef53"],["/tags/斯里兰卡/index.html","8445678b1d40af15c122e43843873cd3"],["/tags/旅行/index.html","d85d594aea8aab0a8c6152cb8a72051b"],["/tags/曼谷/index.html","0ba58ae02bb8329a05a3e08aed71e90c"],["/tags/格尔木/index.html","1e291da975b7dcf41a9b0f7160d6d25c"],["/tags/桶/index.html","8a92f54a31faef75623e338c1d6b1d55"],["/tags/沈从文/index.html","f3bb504e276222cf1ab2cfabaabb18e4"],["/tags/泰国/index.html","ff39937fd69d1efb3bc81fea986d4e02"],["/tags/秦岭/index.html","526c7f1a949f7412b56f6626f0609b06"],["/tags/算法/index.html","264c2d75e7408d678fbe6a6c5a2b2df2"],["/tags/纳木错/index.html","8e10a6948c9854506a94d28530673b2b"],["/tags/西安/index.html","521d8326ed81e1ce1304015ad8eb4506"],["/tags/西藏/index.html","4d4cd29757206707acf35ba7ff2bbf22"],["/tags/计数/index.html","ab9403b97c146639cec95568089e6721"],["/tags/金沙江/index.html","f5435b0e495f681f6f2eda5c12e51784"],["/tags/阿拉善/index.html","a9802c7971fcfab0ee7bb52c7fd41f96"],["/tags/陈渠珍/index.html","d0c17f38bea465605233869908f46a83"],["/tags/青海/index.html","437cbe276d66566b7217d34c3eb740b8"],["/tags/青海湖/index.html","d28bb4dc01bfaa73016309f631b9871c"],["/tags/骑行/index.html","17dc70b508bf0467892a608afaff447a"],["/top/index.html","47d6dbaa247841bade0ef3b3224ddcd3"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
