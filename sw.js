/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about.html","e36a3e3b0c27bb246a582f728023d0a0"],["/archives/index.html","dfc2d66ac5f581e679ef34771f97858e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bundle.js","ab702d4e63f2da9625ff573234f5a1c5"],["/categories/Hadoop/index.html","c387b1244536e0ada2d8bd09ddfc995e"],["/categories/Hbase/index.html","99b4e3d1e4c784c1310500b44edb926b"],["/categories/Hexo/index.html","98bbd6d0a4b681d9507361bb8ce6f2e1"],["/categories/Java/index.html","1357a1abe31cfb7b4f377282616f61af"],["/categories/Kafka/index.html","b0a10b40f5fb2a914852b48f8f03e647"],["/categories/Spring/index.html","78c4284912af17fc68fda2f11c7edb32"],["/categories/git/index.html","f14e365564c2b81a417f2ca1c45b4e87"],["/categories/index.html","c87592fb1e068f17668d5c85cf519fab"],["/categories/人生/index.html","ff0e5d83e5a9f36e703719aad0a30b21"],["/categories/旅行/index.html","e1708772199286a43cc63f88d15e6190"],["/categories/算法/index.html","6995c1f4c5cabe83cdab3c5a24799654"],["/category/2017/09/17/Tibet life and death line.html","5f83ab8427b1c11c94f41e25c1c88e81"],["/category/2018/03/10/At Chengdu.html","3fe4a974a7f8d0daa5474381dad56fc1"],["/category/2018/03/24/Look at the mountains and see the water.html","f1f7f2302c5a05b5a15140c52a9f7470"],["/category/2018/03/24/The journey of life, no matter what life is dead.html","302eaec3cff7ba7f8f78e85d34a5d4cd"],["/category/2018/03/29/Open space in the north.html","6e92c67b0056b9306379adedcb4eb98c"],["/category/2018/04/01/Silk Road has no heroes.html","ac13c2f77313b3866164a6f06cbb44ec"],["/category/2018/04/22/Return home.html","4fd2d30f27b5c42cdd679650cdcf85d2"],["/category/2018/07/25/live well.html","08245d6cf9bbd8db0fc6ec72c0103338"],["/category/2018/08/14/Development preparation.html","1feffae8514d19c0ecdca69f5c502a90"],["/category/2018/10/29/hello-world.html","807f947e3b1456e9b5f3ca0bc08a5757"],["/category/2018/10/30/Open the Hexo blog tour.html","fa491363f6a5c84ac5ccae212e0c4738"],["/category/2018/10/31/Hadoop distributed cluster construction.html","92bb689a416d977896d78663f92f695f"],["/category/2018/10/31/Hbase distributed cluster construction.html","666f67b4e0b5ce4ec8f1f36d0d5f9d3a"],["/category/2018/11/01/Hadoop Hbase HA distributed cluster construction.html","8833698b727c4893a4e3fb50fa5c1256"],["/category/2018/11/01/Kafka distributed cluster construction.html","6398d7e0432c0462670b88a42b73f0f5"],["/category/2018/11/13/Sort.html","39cb3760dbe2ab3eab67e5b0c5245114"],["/category/2018/11/14/Sort.html","ff5bf5d604b5eba862f8560b04228e88"],["/category/2018/11/15/Sort.html","3c20231a9072bd463e32c42504253853"],["/category/2018/11/16/git.html","1a3b1f1873776a7bf36f58ee625a955f"],["/category/2018/11/19/Sri Lanka Travel Guide.html","3e02e1dd320ed3d5bb8694660a8bdc80"],["/category/2018/11/29/Sort.html","3db75a5b1df26e2ce5a7adfd8f458f51"],["/category/2018/11/29/Spring learn note.html","a243922686a74384ba64f042de59b5fb"],["/category/2018/12/15/planning.html","8ec3d9f6a906dde20895ff7dcd751725"],["/category/2018/12/15/year-end summary.html","b756f92ba6bca396b95bb42bc90f1369"],["/category/2018/12/17/Bankok transit.html","0622ed123fae042c476c3c40315d7dcb"],["/category/2018/12/18/travel.html","3e00d1d7760670d94d51bc5ab5ecd96b"],["/category/2018/12/19/travel.html","4d961985699827b8b464824e0348ca8f"],["/category/2018/12/20/travel.html","e1f67fe766e0fb59b4b5d8758cac1626"],["/category/2018/12/21/2018-12-21记录.html","ee1d50ebf49aee0f02644b5290fa7949"],["/category/2018/12/21/music.html","24739705f326b9308e9d4fb58ce9f6ed"],["/css/main.css","781e847caa8fab6dfa4048c3f8c44356"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cat.png","bdb3f2a1a3aee13c6abbe3834aabbff7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8509520ee2d8b60f7c65bb026b2de24f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","35cf9fb299e00015c2ead14881805085"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6d0d543e800a1787588cfe0ab4ee53c9"],["/page/3/index.html","eae65ba9ee8d64140fda0244e24d64a5"],["/schedule/index.html","6f2923d8b7347571be7f9c9eb9c90e93"],["/sw-register.js","89b4d53942775d7c2f8b2bfe5a9fd103"],["/tags/109/index.html","d7e105841bc46e7ecec3c35d1ba65c14"],["/tags/318/index.html","39a62059b383ef325219cfabf9f9d6dc"],["/tags/AOP/index.html","8dba95a6bd6c2ffd4260d54b14a880f7"],["/tags/DI/index.html","1fb292eea9f30697892da9479ac7dcb1"],["/tags/Hadoop/index.html","ac1d209d3bbd77d081f9a3d0c8453dcd"],["/tags/Hbase/index.html","54d5eaeb1ce3a2db9c43e1357fc47842"],["/tags/Hexo/index.html","8fd55cd3565ae84fe65dcdf5caf229f5"],["/tags/IoC/index.html","59e2b7bf14014eb62e5a4591cead7ad1"],["/tags/Java/index.html","4eccf57646e4f6d06449ea85fb2a883e"],["/tags/Kafka/index.html","cb1c4cb1253e06b8869c87cddc8bac9c"],["/tags/Spring/index.html","c5831b732b6df989d5e445110e4f06ef"],["/tags/git/index.html","cd7e11dd7d288a37997e91716c7e8222"],["/tags/index.html","efe75a0fc15011d5a20e7fe532e25a17"],["/tags/丝绸之路/index.html","11df9baeb0d3047ca5c486208d21787e"],["/tags/二叉树/index.html","149c0fa5a3570765df24822fab224918"],["/tags/人生/index.html","e18d6fab1489fa3926025d36eddfb383"],["/tags/兰卡/index.html","def396d01a5961d903dd6940db512c96"],["/tags/内蒙/index.html","f71b9645eebb99a85741e28d7fed2009"],["/tags/凤凰/index.html","54a1de6e5909b7e8c1e7bebb1640eed8"],["/tags/可可西里/index.html","8c3172d87904a6f1026e15a32b7c9a24"],["/tags/唱歌/index.html","65d66e2bb269cab886f890f7d105cc15"],["/tags/嘉峪关/index.html","ded39b08a16e43e088fa34b49eff5f5b"],["/tags/四川/index.html","abecbc8c854864e0d730017ee7ca672c"],["/tags/堆/index.html","dd9ee129f77966f857b037308836fc97"],["/tags/尼甘布/index.html","23cd625be988e5ae8c3d0b4ee5bf51b2"],["/tags/巫山/index.html","edf07635170d67c8d8570fcea69223a4"],["/tags/巴丹吉林/index.html","432a2cd81f16418e5427f7fe09586d56"],["/tags/康提/index.html","acd4fafa510e458a0532cb12378837ab"],["/tags/归并/index.html","012e5c70c36568cb39bfd5162fb3c6c0"],["/tags/成都/index.html","d8f8e7142b07f6431f5d96248a41e7a5"],["/tags/排序/index.html","d080da3f366649cd751c06be4ff01486"],["/tags/敦煌/index.html","fc5d7c21b689a7693bb0b38b8c2479a7"],["/tags/数据结构/index.html","4c772735aae6130b53634f0885b33dc6"],["/tags/斯里兰卡/index.html","33d358cf29e4159f28739110a0be94d4"],["/tags/旅行/index.html","ad90a6106317e76547dae3f2cba35a55"],["/tags/曼谷/index.html","8d695b07fe00b92a20d302bdd753335a"],["/tags/格尔木/index.html","49c9a00daaf0f625a536ec02c1ba10ca"],["/tags/桶/index.html","c07b6b6a26eef290810938f12e688548"],["/tags/沈从文/index.html","74f3177cc852d0ae5ba061603bb92ffa"],["/tags/泰国/index.html","5b50f0f8703a9f1184ea9cdb7f182000"],["/tags/秦岭/index.html","460d5aeabed25723a5242e59e92971b4"],["/tags/算法/index.html","74a469da43542733503d3ed23e513457"],["/tags/纳木错/index.html","b1b9ebeb9845f38cff502d2f37151e46"],["/tags/西安/index.html","79daf2203d43b688f8a09a2278f390af"],["/tags/西藏/index.html","356d968b4bf912a25748453462d22eff"],["/tags/计数/index.html","17fb5e077c57ad206a3d883f67ada789"],["/tags/金沙江/index.html","7e40417b84a7e63ea5d8308067b23c72"],["/tags/阿拉善/index.html","933af9b58b8db4ee09030f74421c32ae"],["/tags/陈渠珍/index.html","8a844b5693718fd05a634e122a581179"],["/tags/青海/index.html","344d6d4522fcd7b3dc258e5278a0073f"],["/tags/青海湖/index.html","b376d60f40d5d9c31a1e848732f98041"],["/tags/骑行/index.html","1ac433598acc0a503665e1467332c753"],["/top/index.html","9737f1c6334b5b47745f2ef223a06896"],["/uploads/avatar.jpg","3b2c108908ba26033c870b8787a81f7b"],["/uploads/background.jpg","ed57caae4f36cbf0fdde5bda26b6b2e4"],["/uploads/code.svg","25675afbfb82cd310c4c09270c3713a8"],["/uploads/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"]];
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
