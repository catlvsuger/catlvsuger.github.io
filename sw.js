/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","b6fdfbab9358d7d6b65efd5f5a4d395c"],["/archives/index.html","b72fa2c269a1aa49ef7c656129d412ca"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","11840028d893a818e2c3fc9ba27a5d86"],["/categories/Hbase/index.html","c3f5ae938939ba85d993d3b9ab8e3fba"],["/categories/Hexo/index.html","10159d1586e9b39caa6191d6628a5c15"],["/categories/Java/index.html","b276c8ea186861c77dbfd7ed43997335"],["/categories/Kafka/index.html","7cd804518c93b21d7ea18d84e8de0da4"],["/categories/Spring/index.html","c398771f2835a410419e039e34855f90"],["/categories/git/index.html","cc2dcdc020f125733affca5a838e8f5e"],["/categories/index.html","2259eed9713b60e2f88cdace1a7ff91a"],["/categories/人生/index.html","493cbbc642a789f4678fdf6ecd3b281a"],["/categories/旅行/index.html","bebd1f80e808e5e5b9fb226634fc92e4"],["/categories/算法/index.html","749bdb0cfaa3497dd4abc3161f553eb0"],["/category/2017/09/17/Tibet life and death line.html","cc1cc50eb61c2a80d148e7319e47b008"],["/category/2018/03/10/At Chengdu.html","06c7e18f6919ab8725525e7ed5e6a241"],["/category/2018/03/24/Look at the mountains and see the water.html","58c63417f187d25ef9b4b46083bae3a7"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","3ddd8b82a29c88aa8f53cdd8b5d5abdd"],["/category/2018/03/29/Open space in the north.html","02a205d4bf50a7fa2a920cedc49fbe64"],["/category/2018/04/01/Silk Road has no heroes.html","6917b044fc49355375015cce04a6a715"],["/category/2018/04/22/Return home.html","d90a0c0444e4851b2c50ff1ce931bae1"],["/category/2018/07/25/live well.html","deac23af8b07d8f1919b28a6d003ae94"],["/category/2018/08/14/Development preparation.html","fb49de6fa41428173927d5813b6ddede"],["/category/2018/10/29/hello-world.html","3c0ecceb37edd8efb5bb0ca0e958c46b"],["/category/2018/10/30/Open the Hexo blog tour.html","54bfb4fc13ab137228ee0d4e874f20b0"],["/category/2018/10/31/Hadoop distributed cluster construction.html","5cb33ad4543b92324f6103785757559a"],["/category/2018/10/31/Hbase distributed cluster construction.html","9748bf704b9af2b522fbbe92f246d774"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","0cc16acbac470121c71283fbd86e9707"],["/category/2018/11/01/Kafka distributed cluster construction.html","25e7f46d8db4350e82defc8a311122df"],["/category/2018/11/13/Sort.html","3fb7e311ce1707ce09d7b6b06839924f"],["/category/2018/11/14/Sort.html","594312a50a1905b251fd7b896565c4f8"],["/category/2018/11/15/Sort.html","f1e81255ab3e9cb061ce7c015be61422"],["/category/2018/11/16/git.html","e0a08afb392c768eb7d3e35df9535d8b"],["/category/2018/11/19/Sri Lanka Travel Guide.html","4444f0cda986aa6126b1b7304ff11a20"],["/category/2018/11/29/Sort.html","15700838c0d229c5cb3f325c40bdc64c"],["/category/2018/11/29/Spring learn note.html","baa444e6c6e79a697d53045058427002"],["/category/2018/12/15/planning.html","1ad4e48c61a2487301410fd55d56f00f"],["/category/2018/12/15/year-end summary.html","6782a73c3dd4d79d8d19e1440bc2533f"],["/category/2018/12/17/Bankok transit.html","5aba2539276c7233603452760e88f474"],["/category/2018/12/18/travel.html","c3e8653d650bcd50782b15bf558c8e97"],["/category/2018/12/21/2018-12-21记录.html","11f7589a68276b2d1f0e9d2c4efd56e1"],["/css/main.css","9d7544272bd4bba1d81f40bdf30d6694"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4639066dbfbc6bad4fd8eb210baf0a5f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","880e9d04b47f70a501e8f144e1773ad9"],["/page/3/index.html","19300233e33d7480a240729cb52669bf"],["/schedule/index.html","eddc9e30a8ad6730a43501d5818840df"],["/sw-register.js","3a9459027f7a97fa8f9329226eab1982"],["/tags/109/index.html","7bd20bfdbcbdec13cdc07acbd79136fd"],["/tags/318/index.html","6ab2e73f1def450c61e2df705fe7c7c1"],["/tags/AOP/index.html","504dc996b7e7fe98f800b6cff3ac800d"],["/tags/DI/index.html","a8ea9af23a31926da0ff48b28456b13d"],["/tags/Hadoop/index.html","1700a744acad187c69f4a382b6eabde6"],["/tags/Hbase/index.html","26e1a0072f741f34b983e456299c1cd3"],["/tags/Hexo/index.html","8b536d24761c0bee88e581be00d7bf3a"],["/tags/IoC/index.html","ae92d6a431afcc0b9e2feab047e0e456"],["/tags/Java/index.html","30ba98c943739bc416ad6a7d58d3eff3"],["/tags/Kafka/index.html","d1cf781235d62dfc5f25207e74ce8714"],["/tags/Spring/index.html","f66c111e03d0a6c7d741112ac7559bdc"],["/tags/git/index.html","03f4842cc43da83bad1783c95d4ef31a"],["/tags/index.html","b4363fbfbbbc5a111e53209d82fafe1d"],["/tags/丝绸之路/index.html","55e1bc4693e9fb7478b9c77dd49166b2"],["/tags/二叉树/index.html","158b738f22c0d73651ae188f65c873c1"],["/tags/人生/index.html","4ef4ed9cbbaa8be205b1ffbb2e6d9e50"],["/tags/兰卡/index.html","c23ed42b55bc6963a6f163be75ac01d8"],["/tags/内蒙/index.html","ad32fbebba8ad431f20ab5cf55c6b5bd"],["/tags/凤凰/index.html","01690f4f27a2fb212a56c8e831079ed1"],["/tags/可可西里/index.html","8fc5abb02479f7cd623e1db083a1d0ef"],["/tags/嘉峪关/index.html","5ab01f22cf739974767ba04d8e9b0b8d"],["/tags/四川/index.html","b31261e58360d74de73128958598e966"],["/tags/堆/index.html","411e4334b3fcfe459c31ea947274022d"],["/tags/尼甘布/index.html","d78e1befda8ee485710e0437bbe19179"],["/tags/巫山/index.html","8e0b2b249a898b1c07a2adce4b2e43b6"],["/tags/巴丹吉林/index.html","9d1d53917d5e4f0f866fca916a067d90"],["/tags/归并/index.html","798a2190e98dd717fdca2d5876d1f8db"],["/tags/成都/index.html","cbf0244476d1266da07ae25a93f38e55"],["/tags/排序/index.html","8130c61f47f36792e4b6763f790ac892"],["/tags/敦煌/index.html","56720d438d9535a5bde015c97d149c4a"],["/tags/数据结构/index.html","4ec0c62eeabb6776e750d21c40ecdf90"],["/tags/斯里兰卡/index.html","2aad726af7cc1c3c49bd697c1b8dbd3f"],["/tags/旅行/index.html","08cda10e838ff3d33a2ff0f67e66eb30"],["/tags/曼谷/index.html","22805d411d8a2291f33605366f37edcd"],["/tags/格尔木/index.html","f1e94a02b03f02c7b004f2cdefb4e0bd"],["/tags/桶/index.html","dc04c7ce9b7bcd981e5a006f48660fe9"],["/tags/沈从文/index.html","75cf41031269b42dec7d7689273e3914"],["/tags/泰国/index.html","7666d92aa99672266211c5e78add1dbf"],["/tags/秦岭/index.html","0331f90e9cf39342517dd44aa5affdf2"],["/tags/算法/index.html","ead8debaf94cdca07ae4bca935f227f2"],["/tags/纳木错/index.html","1f70338943213c3126e8664a10f43720"],["/tags/西安/index.html","a47dda8aafd8a85961cfbc541035eb57"],["/tags/西藏/index.html","8d65214ea098485b9a19fe169df16ee0"],["/tags/计数/index.html","1df9ea3d5cf7320a51c38a8ff4d4206c"],["/tags/金沙江/index.html","34943ee8aabd357fc294b279c5104fd1"],["/tags/阿拉善/index.html","1e133ffa15e784e17e5c1f2b17200d3d"],["/tags/陈渠珍/index.html","bf4d634845364e6ceca88e0a7a58ca0c"],["/tags/青海/index.html","29d582d4798264690346b722e8f35431"],["/tags/青海湖/index.html","5eeb52d60181f56f80dc641f8e8ddb2a"],["/tags/骑行/index.html","63b4dd301de8117aaddfdd9d2307d48d"],["/top/index.html","bc3797b4d3a50bafba7ad8c5a02f4077"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
