/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","61b5d89f22bc10db07aa60c3af309aea"],["/archives/index.html","ddf98050f244c794e4996c7f4c358f67"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","7351cfe2eb7e59a7558f35a0f45fc34c"],["/categories/Hbase/index.html","03a735e1b6003ca6508bb1e67e2d63d8"],["/categories/Hexo/index.html","25581a8c2294f4632421b42badc03a9e"],["/categories/Java/index.html","3fc6d42d3ca7df98395bde7e7e5e82c6"],["/categories/Kafka/index.html","1081771b10a1585daed771b4a71e2678"],["/categories/Spring/index.html","eb213ec3b5cb49ba9190cd417014f084"],["/categories/git/index.html","45510118db0da9cb275060065925941d"],["/categories/index.html","174b7e5ce9ff5d9e096a37c80378b7b9"],["/categories/人生/index.html","364b2febdb44e7a3a9511ef0da54003a"],["/categories/旅行/index.html","7bac4c107cf309e882d944b518431faf"],["/categories/算法/index.html","6c3d1fab2afc437e936318e65fda3cda"],["/category/2017/09/17/Tibet life and death line.html","44d15e8d6779e150a0c08e2529ba802b"],["/category/2018/03/10/At Chengdu.html","467bda1036dee2ae937bed0a7e4e70db"],["/category/2018/03/24/Look at the mountains and see the water.html","d35522d07ed3c91d3dce72685796885a"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","907b053979cca723b105e6eaa39377de"],["/category/2018/03/29/Open space in the north.html","3d895df0e623d69f0a5dd086f04a453d"],["/category/2018/04/01/Silk Road has no heroes.html","e9e4da7e1245386d0f66de839a4f6566"],["/category/2018/04/22/Return home.html","edbe97ce7519a369a11124cc9de73137"],["/category/2018/07/25/live well.html","78ed44f73602471e3de80c41ab5ba1eb"],["/category/2018/08/14/Development preparation.html","9101fb00ac0679c6fafe08de4c75f2bc"],["/category/2018/10/29/hello-world.html","d11795c803dc04d0f811ba85e2f72a45"],["/category/2018/10/30/Open the Hexo blog tour.html","c708b9a2233a2826060d6fe9a282c3c8"],["/category/2018/10/31/Hadoop distributed cluster construction.html","0a7f3b5f9a183bf2fad93f23ee4e96b5"],["/category/2018/10/31/Hbase distributed cluster construction.html","674f93b3cdeea1c6e76aedb1ec1ed44e"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","e496ec4fefec8c32f420c410eae80628"],["/category/2018/11/01/Kafka distributed cluster construction.html","cea3994b3e7ca1227522b34f53c9434a"],["/category/2018/11/13/Sort.html","5aa49730cfb00ebe33a2f33e65698ac5"],["/category/2018/11/14/Sort.html","4d6d9751c970e5d4f1ff20774151f20b"],["/category/2018/11/15/Sort.html","e4b23dff80def6f4f768f2ac1686e857"],["/category/2018/11/16/git.html","cdf06c6cdff83269b99262731b0eb34a"],["/category/2018/11/19/Sri Lanka Travel Guide.html","62b21f4906bb2e29c73c89ab8cd3881f"],["/category/2018/11/29/Sort.html","4f28c50e6fb4565e90255724264ac362"],["/category/2018/11/29/Spring learn note.html","ee386d84eaa5bca9a6437297292d9b4c"],["/category/2018/12/15/planning.html","49dcdec34fc0ac2d6ac08fd6a1d74d71"],["/category/2018/12/15/year-end summary.html","cc200410c989ca46eeb861cf1329d701"],["/category/2018/12/17/Bankok transit.html","065063d8fa3d6046ad67a265a71eca2a"],["/category/2018/12/18/travel.html","4865e16ddb150d17b91a0e6c9f809ce4"],["/css/main.css","3d36846a821ce2e27a3bc80aee18952d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1b13d2d82e3be6bf41d878861532f4da"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0e604d2f2e9b6bc91f1aea5869d30299"],["/page/3/index.html","5cfaf15553644ebac680dd2a7fbac6ed"],["/schedule/index.html","312ad9e605e858bd0191b7b62b4bc498"],["/sw-register.js","43f0818af20cd2f28f7adf103cabe2cb"],["/tags/109/index.html","58b422e98dca6c07c588c2e85d53a7d7"],["/tags/318/index.html","935fc63611c0a4d3c8ae3b8b8f94c4eb"],["/tags/AOP/index.html","cbaad085b6bae056427a08cdf61c6da1"],["/tags/DI/index.html","ea1cb96b767f5c4a08e300abbf1388ac"],["/tags/Hadoop/index.html","9576b75de5713090ec6c6f5e3871ae21"],["/tags/Hbase/index.html","fdafa60d0cea5113bfc1f6857d38e091"],["/tags/Hexo/index.html","0208e1fb1ed7972b17532194cbebabd8"],["/tags/IoC/index.html","3a47810499d7a6f2cdf8e4c8546f6308"],["/tags/Java/index.html","5880c8c2a2ed7c741d9c946390d285f0"],["/tags/Kafka/index.html","5118996b0f7f90647e6ec4c81976b0f7"],["/tags/Spring/index.html","70a256cd05cc6b7136a29b5af34e0f7c"],["/tags/git/index.html","bc760cc58dad05c1d93234e27e12c6f7"],["/tags/index.html","9b79c13e93ae8df87b705da97ea686fb"],["/tags/丝绸之路/index.html","2532fbff9e8a1d35bf88f48e84093cea"],["/tags/二叉树/index.html","ea76a8c4105514b158cc14a322d899c0"],["/tags/人生/index.html","19a718bb9ac44d3dcac921531a3a18c3"],["/tags/兰卡/index.html","72a07bc49b200ea98d51540621a2b2dc"],["/tags/内蒙/index.html","4731881e4c068728477379cd7e203357"],["/tags/凤凰/index.html","056d4c9d59f4d9012ffb71cdc9c1479d"],["/tags/可可西里/index.html","ec35c25fd5f0f7f2ee376c56233955f8"],["/tags/嘉峪关/index.html","b92349b74cadf417942925f8bf858031"],["/tags/四川/index.html","30d4b622dd5a3b06275eddccd2cf09b2"],["/tags/堆/index.html","eac731f8bcb0e8bb6dfaf84b6125065c"],["/tags/尼甘布/index.html","fe3b5d7379ff59fe54b7442c9db6880a"],["/tags/巫山/index.html","328b0a4593b9c9b380b297db75084b8c"],["/tags/巴丹吉林/index.html","34f97d40ad08840b85c2da44f0055288"],["/tags/归并/index.html","3f681ac189a898d5161af3f0592cc504"],["/tags/成都/index.html","4b30fad766c42d564e54ad3b541ecf25"],["/tags/排序/index.html","bfc624cec358f53bf1254481ac86f4b6"],["/tags/敦煌/index.html","d93c5c63b24644bcad40849350b5691e"],["/tags/数据结构/index.html","b921a37a529cd47f6d872e791e8c63fd"],["/tags/斯里兰卡/index.html","e5f97f3b20baea9a4fcc8d90cc457038"],["/tags/旅行/index.html","efac28f65cb2f15621310046ed7a6eab"],["/tags/曼谷/index.html","4090f0d411c9dce176394028f99c3e55"],["/tags/格尔木/index.html","6d3e5ab3e686d9e863a3da98bf3e5549"],["/tags/桶/index.html","d5271194eaadebfa734e5a3d2f577152"],["/tags/沈从文/index.html","072fe3bb5458f1543dfc7651f7d5c97a"],["/tags/泰国/index.html","102b96005d4cc7db13ffee76fe9d4976"],["/tags/秦岭/index.html","f07429df1d0c0129ce89b8c294cbfe6e"],["/tags/算法/index.html","269cc14c9bb9b85b5c31332f32d2580a"],["/tags/纳木错/index.html","b9bedc33bb5d7d5614979eae1a1fcfb8"],["/tags/西安/index.html","a735456db29eebe55744369ab2835935"],["/tags/西藏/index.html","acdd2e17acd6f057bca42ad4c10ccdf3"],["/tags/计数/index.html","57c3a8e487ed1082c200922eb1bd342d"],["/tags/金沙江/index.html","8c10586ed66bbbd8565c2428760f06d5"],["/tags/阿拉善/index.html","bc0d7620fc5e100e23d7745f8589f257"],["/tags/陈渠珍/index.html","c985786fec93a656b7ad6f4d4e9a9028"],["/tags/青海/index.html","4df55d55d6eb8008fd3f703a1cb6edc2"],["/tags/青海湖/index.html","a6036087a1678e508739d3490b4f86f5"],["/tags/骑行/index.html","5ff9978073529ab78f620977e04d4e2f"],["/top/index.html","ad326879962be2d2ed57cbc2161a71be"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
