document.addEventListener('DOMContentLoaded', function() {
    var allowedURLs = [
        "https://vegamoviesnl.in",
        "https://movies4u.press",
        "https://dhanjeerider.shop/newvega",
        "https://filmflicker25.blogspot.com",
        "https://www.zcflick.in",
        "https://bscnotes.in",
        "https://www.rtibiharnews.in",
        "https://www.odiafilmy4u.fun",
        "https://bollyflix.run",
        "https://kundli100.shop",
        "https://netprimemovies.site",
        "https://www.vegamovies-nl.casa",
        "https://movieshd4u.xyz",
        "https://www.universityscope.com",
        "https://www.bscnotes.com",
        "https://dhanjeerider.shop/vegav2",
        "https://universityscore.com",
        "https://moviesdada.help",
        "https://filmyfly.pl",
        "https://odiafilmy4u.blogspot.com",
        "https://filmyfly.hair",
        "https://sexvideo.free.nf",
        "https://9xflix.ch",
        "https://greatcinema.net",
        "https://zharmovies.com",
        "https://www.pmmovies.shop",
        "http://www.filmflicker25.xyz",
        "https://www.filmflicker25.xyz",
        "https://www.moviestar4u.xyz",
        "https://boltmovies.fun",
        "https://filmyfly.lu",
        "https://www.utkalscreens.site",
        "https://vegamovies2k.in",
        "https://www.vegafilm.site",
        "https://hdhub4u.ml",
        "https://www.moviesdownhd.com",
        "http://primaniurlshortener.free.nf",
        "https://primaniurlshortener.free.nf",
        "https://vegamovie-nl.cfd",
        "https://rightmb.free.nf",
        "https://newsbeeta.com",
        "https://filmyhunk.fun",
        "https://moviewale24x7.xyz",
        "https://www.commingsoonmovies.com",
        "https://dhanjeerider.shop/Mvsdrv",
        "https://moviesin.xyz",
        "http://filmyfly.at",
        "https://filmyfly.at",
        "https://Animes4world.in",
        "http://moviespell.com",
        "https://moviespell.com",        
        "https://www.hdhub4umovies.co.in",
        "https://hdhuog.dhanjeerider.shop",
        "https://cinema4free.online",
        "https://gharkulyojana.com",
        "https://oasisscholarships.com",
        "https://kaliasyojana.com",
        "https://hdboss4u.com",
        "https://universityscope.com",
        "https://demo-mhp.blogspot.com",
        "https://pmyasasviyojana.com",
        "https://www.hdhub4utv.live",
        "https://www.faxflix.site",
        "https://adultavenue.tattoo",
        "https://moviesbake.online",
"https://biographyhero.lovestoblog.com",
    "https://dktheme.online",
        "https://hdhub4utvm.blogspot.com",
        "https://scraper.rf.gd",
        "http://Filmybuff.space",
        "https://filmygallery54.space",
        "https://www.bdmoviehub.top",
        "https://top-anime4u.blogspot.com",
        "https://test.dktheme.com",
        "https://dktheme.com/apk",
        "https://pmfbyjobsnews.com",
        "https://nayaharyana-com.preview-domain.com",
        "https://movflix.info",
        "https://sarkarinewszone.com",
        "https://movieflix.digital",
        "https://netprimemovies1.blogspot.com/",
        "https://filmyking.site",
        "https://streamhd.fun",
        "https://filmycab.today",
        "https://bollypro.sbs",
        "https://filmyking4u.in",
        "https://bdmoviehubhd.blogspot.com",
        "https://jobsnewsalert.com",
        "https://vacancysnews.com",
        "https://jobnewstodays.com",
        "https://jobnewspost.com",
        "https://nayaharyana.com",
        "https://vegamoviese.fun",
        "https://filmybuff.space",
    "https://Links.wuaze.com",
        "https://www.netprimemovies.site",
        "https://www.cineflim.com",
        "https://abc2movie.blogspot.com",
        "https://filmyking.rf.gd",
        "https://luxmovies2.live",
        "https://sauthflix.com",
        "https://moviemod.city",
        "https://sdrips.fun",
        "https://akayamovie.xyz",
        "https://movies4u24.in",
        "https://vegamoviese.lol",
        "https://tmoviezone.blogspot.com",
        "https://sauthmovies.com",
        "https://www.moviesdon.online",
        "https://moviesdon143.blogspot.com",
        "https://wh1408502.ispot.cc",
        "https://moviesmod.cfd",
        "https://desiremovies.blog",
        "https://wh1408502.ispot.cc/lux",
        "https://multimoviez.xyz/chek",
        "https://wh1408502.ispot.cc/chek",    
        "https://vegamoviesog.blogspot.com",
        "https://dotmovies.foo",
        "https://hubdrive.cloud",
        "https://filmybuff.store",
        "https://zinkmovies.co",
     "https://moviesmod.buzz",
        "https://movieshub.cyou",
        "https://vegamovies4u.bz",
        "https://hdhub4u.pet",
        "https://sparkloot.me",
        "https://hindianimes.me/demo",
        "https://24x7earning.com/demo",
    "https://vega.dhanjeerider.shop",
    "https://filmyhit.gen.in",
    "https://vegaog.dktheme.com",
    "https://luxmovie.online",
    "https://techhub.dktheme.com",
    "https://vegamovies6.nl",
    "https://19flicks.com",
    "https://neuplayer.blogspot.com",
    "https://vegamovies.com.co",
    "https://vegamoviezz.in",
    "https://movie4me.tech",
    "https://www.moviesfhd.in",
    "https://vegamoviesz.site",
    "https://jettheme-pro.blogspot.com",
    "https://mariyaui.blogspot.com",
    "https://1stepno.blogspot.com",
    "https://www.films4u.in",
    "https://vegamovies.click",
    "https://allmovieshub.best",
    "https://www.movieshub.best",
    "https://vegamovies4it.blogspot.com",
    "https://filmyfly.solutions",
    "https://hindustaniparivar.in",
    "https://taagsqywsg.blogspot.com",
    "https://hdhub4u-clone.blogspot.com",
    "https://exprothikhad.blogspot.com",
    "https://jet-moviev3.blogspot.com",
    "https://dkhek.blogspot.com",
    "https://draft.blogger.com",
    "https://www.blogger.com",
    "https://blogger.com",
    "https://www.jawazbook.com",
    "https://hdhub4u.net.pl",
    "https://codingrider.blogspot.com",
    "https://www.blogger.com/blog/post/edit/preview",
    "https://eduhub-demo.blogspot.com",
    "https://vega-clone.blogspot.com",
    "https://dkchek1.blogspot.com",
    "https://girgit-ui.blogspot.com",
    "https://www.filmyslap.xyz",
    "https://fletrothemes.blogspot.com",
    "https://faddalunga.blogspot.com",
    "https://mediunmovie.blogspot.com",
    "https://www.myanimehindi.in",
    "https://plusuiteme.blogspot.com",
    "https://jet-movie.blogspot.com",
    "https://www.timestoryaxom.in",
    "https://moviesmod4u.com",
    "https://Thevegamovies.life", 
        "https://solution-manualspdf.blogspot.com",
    "https://testyyyyrr4.blogspot.com",
    "https://desiremovies.boutique",
    "https://orgmovies.store",
    "https://desiremovies.store",
    "https://desiremovies.art",
    "https://vega-movies.in.net",
    "https://thehdhub4u.in",
    "https://movies4u.dhanjeerider.shop",
    "https://plusui.dhanjeerider.shop",
    "https://news.dhanjeerider.shop",
    "https://hdhub4u.dhanjeerider.shop",
    "https://chek.dhanjeerider.shop",
        "https://dktheme.com/sarkari",
    "https://filmybuff.store",
    "https://www.mkvmoviespoint.me",
    "https://www.mkvmoviespoint.tech",
    "https://samovies.in",
    "https://hdhub4u.tires",
        "https://actrers-biography.blogspot.com",
    "https://www.vegamovie.blog",
    "https://news.dktheme.online",
    "https://movieshd4u.in",
    "https://vega-movies.news",
        "http://hindidubmovies4u.site",
        "https://newspaper.dktheme.com",
        "https://dktheme.com/Gl",
        "https://sabmovies.blog",
        "https://dktheme.com",
        "https://discover.dktheme.com",
        "https://samovies.online",
        "https://vegaflix.com",
        "https://www.saanime.store",
        "https://www.sstv.website",
        "https://plusuiteme.blogspot.com",
        "https://texhdjrkr.blogspot.com",
        "https://gpmovie.dktheme.com",
        "https://vegamovies.mywire.org",
        "https://filmymovies.in",
        "https://pornwood.free.nf",
        "https://multimoviez.xyz/chek",
        "https://local.dktheme.com",
        "https://bollypro.lol",
        "https://www.hindidubmovies4u.site",
        "https://dandajatra.blogspot.com"
];
    (function(_0x139c4c,_0x363f0a){var _0x6801a8=_0x139c4c();function _0x236abe(_0x17b456,_0x3362e4,_0x2730aa,_0x2ad5fa){return _0x5742(_0x2ad5fa- -0x376,_0x17b456);}function _0x1b12d4(_0x592b58,_0x4a0e2c,_0x102d6c,_0x351236){return _0x5742(_0x351236-0x2e9,_0x102d6c);}while(!![]){try{var _0x15d3e6=parseInt(_0x236abe(-0x2aa,-0x29b,-0x287,-0x2c3))/(0x25a0+-0x270a+0x16b)*(parseInt(_0x1b12d4(0x3bc,0x3c6,0x3ae,0x3b4))/(-0x223f+0x1*-0x2263+0x44a4))+parseInt(_0x236abe(-0x2a0,-0x281,-0x293,-0x2b1))/(0xcfa+-0x1f*0x7d+0x2*0x116)+-parseInt(_0x236abe(-0x2a9,-0x29d,-0x277,-0x293))/(-0x189f+-0x171a+0x2fbd)*(-parseInt(_0x236abe(-0x296,-0x26d,-0x238,-0x265))/(-0x1a96+0x1ee8+-0x3*0x16f))+-parseInt(_0x236abe(-0x2d0,-0x2d9,-0x2ac,-0x2bd))/(-0x1934+-0x60*-0x57+-0x766)*(-parseInt(_0x236abe(-0x25d,-0x2b9,-0x252,-0x286))/(0x1d*0x9d+-0x1921*0x1+-0x275*-0x3))+-parseInt(_0x236abe(-0x2bc,-0x2a6,-0x2ab,-0x28c))/(0x17*0x47+0x1f9c+-0x1*0x25f5)+-parseInt(_0x1b12d4(0x3cb,0x3a9,0x3a9,0x3b8))/(0x2570+-0x1*0x692+-0x1ed5)*(parseInt(_0x1b12d4(0x3da,0x3d4,0x3be,0x3b6))/(0x1*-0xa7f+0x2212+-0x1789))+-parseInt(_0x1b12d4(0x395,0x37a,0x3e5,0x3ab))/(0x1*0x16f9+0x1*-0x1307+-0x3e7);if(_0x15d3e6===_0x363f0a)break;else _0x6801a8['push'](_0x6801a8['shift']());}catch(_0x914c2c){_0x6801a8['push'](_0x6801a8['shift']());}}}(_0x2464,-0x141d8e+-0x925f9+0x278395));var _0xf9c8ed=(function(){function _0x2289a7(_0x440f12,_0x209e6d,_0xde9d4,_0x33aeec){return _0x5742(_0x209e6d- -0x221,_0x440f12);}var _0x15d5b9={};function _0x15d4ee(_0x4b21ba,_0x1cfc52,_0x5147f8,_0x3c9465){return _0x5742(_0x4b21ba- -0x1c5,_0x1cfc52);}_0x15d5b9['gzFfv']=function(_0x5b83c4,_0x2077df){return _0x5b83c4===_0x2077df;},_0x15d5b9[_0x2289a7(-0x18f,-0x171,-0x15f,-0x191)]=_0x15d4ee(-0x11e,-0x14e,-0x156,-0x12a),_0x15d5b9[_0x15d4ee(-0x10d,-0xfd,-0x139,-0x138)]=_0x2289a7(-0x14b,-0x146,-0x171,-0x13b),_0x15d5b9[_0x2289a7(-0x148,-0x143,-0x11d,-0x116)]='kehlq',_0x15d5b9[_0x2289a7(-0x157,-0x182,-0x155,-0x178)]=_0x2289a7(-0x15f,-0x163,-0x155,-0x18d),_0x15d5b9[_0x2289a7(-0x12b,-0x15e,-0x18d,-0x126)]=function(_0x52297b,_0x5a67b3){return _0x52297b===_0x5a67b3;},_0x15d5b9[_0x15d4ee(-0x10e,-0x117,-0x12f,-0x116)]=_0x2289a7(-0x162,-0x142,-0x178,-0x140);var _0xf133a9=_0x15d5b9,_0x297e7b=!![];return function(_0x27b586,_0x180da0){var _0x2064fe={};function _0x57e043(_0x187cc2,_0x236878,_0x5b62ee,_0x55c7ba){return _0x15d4ee(_0x236878-0x2fd,_0x187cc2,_0x5b62ee-0x3b,_0x55c7ba-0xfa);}function _0xa0cbe7(_0x3b4d2b,_0x1a9d09,_0x113d23,_0x7b377f){return _0x2289a7(_0x3b4d2b,_0x113d23-0xf,_0x113d23-0x19,_0x7b377f-0xe4);}_0x2064fe[_0x57e043(0x1dd,0x1fc,0x231,0x1f3)]=_0xf133a9[_0x57e043(0x1b1,0x1d7,0x1c4,0x205)];var _0xc9a46d=_0x2064fe;if(_0xf133a9[_0xa0cbe7(-0x138,-0x16f,-0x14f,-0x118)](_0xa0cbe7(-0xff,-0x115,-0x133,-0x163),_0xf133a9['jbGVi'])){var _0x3c59c7=_0x297e7b?function(){function _0x200874(_0x5accc3,_0x55c53c,_0x4a719d,_0x45e482){return _0x57e043(_0x45e482,_0x55c53c- -0x142,_0x4a719d-0x55,_0x45e482-0x1cb);}function _0x326510(_0x47f537,_0x17988f,_0x31a90f,_0x4badde){return _0xa0cbe7(_0x17988f,_0x17988f-0x1cf,_0x47f537-0x2be,_0x4badde-0x1cb);}if(_0xf133a9['gzFfv'](_0xf133a9[_0x326510(0x15c,0x190,0x120,0x159)],_0xf133a9['VcvPD']))_0x4f888a[_0x200874(0x106,0xf5,0xbe,0xec)][_0x326510(0x148,0x130,0x112,0x13b)]=_0xc9a46d[_0x200874(0x88,0xba,0x9a,0xc7)],_0x29995f['innerHTML']=_0x200874(0x86,0xb3,0xd8,0xef)+'=\x22alert\x22>Y'+_0x200874(0xf7,0xfe,0x122,0xc5)+_0x326510(0x1bc,0x1f2,0x1f7,0x19a)+_0x326510(0x1ae,0x187,0x1b3,0x1a7)+_0x200874(0xf7,0xc2,0xb8,0xa0)+_0x326510(0x1a0,0x19d,0x19e,0x18f)+_0x200874(0x67,0x99,0x71,0xcb)+'.me/dhanje'+_0x326510(0x14c,0x14c,0x14c,0x182)+'rget=\x22_bla'+_0x200874(0x11f,0xed,0xf5,0x121)+'designer</'+_0x326510(0x157,0x125,0x11e,0x154)+'vate\x20your\x20'+_0x326510(0x167,0x18b,0x18d,0x180)+_0x200874(0xd3,0x104,0x12e,0xe0);else{if(_0x180da0){if(_0xf133a9[_0x200874(0xd0,0xd4,0xf3,0xc6)]===_0xf133a9[_0x200874(0xd9,0xd4,0xa5,0x107)]){var _0x5463a3=_0x180da0[_0x326510(0x16c,0x14d,0x181,0x18c)](_0x27b586,arguments);return _0x180da0=null,_0x5463a3;}else _0x4402d6=_0x307b44;}}}:function(){};return _0x297e7b=![],_0x3c59c7;}else{if(_0x189a7f){var _0x2d990a=_0x3d17f6['apply'](_0x19cdc5,arguments);return _0x5776de=null,_0x2d990a;}}};}()),_0x1d8f8c=_0xf9c8ed(this,function(){var _0x4dde09={};function _0x5b7bfc(_0x27c552,_0x396f02,_0x1bcb14,_0x35400f){return _0x5742(_0x396f02-0x1ca,_0x1bcb14);}_0x4dde09[_0x4cedb3(0x4f,0x8b,0xa4,0x80)]='(((.+)+)+)'+'+$';var _0x5f2d2b=_0x4dde09;function _0x4cedb3(_0x13d93d,_0x35708b,_0x43e0b8,_0x11fc59){return _0x5742(_0x11fc59- -0x81,_0x13d93d);}return _0x1d8f8c[_0x4cedb3(0x79,0x8c,0x87,0x8c)]()[_0x4cedb3(0x8b,0x7d,0x63,0x57)](_0x5f2d2b['dYyGw'])[_0x5b7bfc(0x2eb,0x2d7,0x2b6,0x2e0)]()[_0x4cedb3(0x84,0x30,0x3e,0x54)+'r'](_0x1d8f8c)[_0x4cedb3(0x62,0x8a,0x37,0x57)](_0x5f2d2b['dYyGw']);});_0x1d8f8c();var _0x17375c=(function(){var _0x4834e6={};_0x4834e6[_0x100e8c(-0xca,-0xeb,-0x105,-0xff)]='(((.+)+)+)'+'+$';function _0x100e8c(_0xc6cacd,_0x15b8a2,_0x1eef18,_0x3253c9){return _0x5742(_0x3253c9- -0x1e1,_0xc6cacd);}var _0x1466f5=_0x4834e6,_0x2d7db8=!![];return function(_0x5b88e5,_0x4d685b){function _0x54bcc3(_0x48f624,_0x52de9d,_0x36f9b8,_0x5570a7){return _0x100e8c(_0x52de9d,_0x52de9d-0x1cd,_0x36f9b8-0x81,_0x5570a7-0x4b1);}var _0x252a93={};_0x252a93[_0xe830dc(0xa,-0x21,-0x27,0x7)]=_0x1466f5['JbaiB'],_0x252a93[_0x54bcc3(0x3c5,0x39d,0x37c,0x396)]=_0x54bcc3(0x36e,0x38a,0x35c,0x382);var _0x16b2ae=_0x252a93,_0x18ac71=_0x2d7db8?function(){function _0x53fcd7(_0x3c28f8,_0x3f0ad2,_0x35c61c,_0x29f8f1){return _0x54bcc3(_0x3c28f8-0xd1,_0x35c61c,_0x35c61c-0x10d,_0x3f0ad2- -0x5e6);}function _0x18f2f7(_0x476595,_0x149bb7,_0x314724,_0x1d42cf){return _0x54bcc3(_0x476595-0xd1,_0x314724,_0x314724-0x6b,_0x476595- -0x3b7);}if(_0x4d685b){if(_0x16b2ae[_0x53fcd7(-0x283,-0x250,-0x22e,-0x288)]!==_0x16b2ae[_0x18f2f7(-0x21,-0x5e,0x16,-0x2c)])return _0x56a10e[_0x18f2f7(0x26,0x1c,-0x17,0x19)]()[_0x53fcd7(-0x20a,-0x23e,-0x24a,-0x247)](_0x16b2ae[_0x18f2f7(-0x2,-0x34,0x1c,-0x32)])[_0x18f2f7(0x26,0x5e,0x1d,0x3b)]()['constructo'+'r'](_0x177af5)[_0x53fcd7(-0x252,-0x23e,-0x250,-0x23f)](_0x16b2ae[_0x18f2f7(-0x2,0x1f,0x24,-0x21)]);else{var _0x354493=_0x4d685b[_0x18f2f7(-0x27,-0x29,-0x19,-0x64)](_0x5b88e5,arguments);return _0x4d685b=null,_0x354493;}}}:function(){};_0x2d7db8=![];function _0xe830dc(_0x56522a,_0x425563,_0x4cf5bc,_0x450f69){return _0x100e8c(_0x450f69,_0x425563-0x32,_0x4cf5bc-0xa8,_0x4cf5bc-0xd5);}return _0x18ac71;};}()),_0x5b03d8=_0x17375c(this,function(){var _0xc28b91={'VRTBW':'3|4|1|0|2','tXbAR':'log','jYTIk':_0x33de5d(0x18c,0x16f,0x179,0x17f),'fRkwi':'info','KHgKr':_0x33de5d(0x1da,0x1d6,0x1d3,0x20c),'lyENL':_0x39f97c(-0xda,-0xd2,-0xe0,-0xca),'anhUn':_0x39f97c(-0xff,-0x111,-0xec,-0x146),'Zwfyn':_0x33de5d(0x1bc,0x156,0x183,0x190),'zLoie':function(_0x37ebf9,_0x2d2b4b){return _0x37ebf9<_0x2d2b4b;},'bzarc':'1|4|2|5|3|'+'0','HrLNi':function(_0x61e827,_0x4acecb){return _0x61e827(_0x4acecb);},'pfWwK':_0x39f97c(-0xa0,-0xaa,-0x7c,-0xc9)+'ctor(\x22retu'+_0x33de5d(0x1bf,0x1da,0x1bc,0x1b8)+'\x20)','UWWgt':function(_0x21d5f2){return _0x21d5f2();},'cQzae':function(_0x2e8d19,_0x233b7d){return _0x2e8d19!==_0x233b7d;},'CHJID':_0x39f97c(-0x10c,-0x106,-0xdd,-0xcb),'QyNdj':function(_0x145672,_0x1f87c4){return _0x145672+_0x1f87c4;},'ScrHm':'return\x20(fu'+_0x39f97c(-0xab,-0xd8,-0xbb,-0xd2),'sgzHh':_0x33de5d(0x170,0x19a,0x161,0x172),'aLhBe':_0x39f97c(-0x8c,-0xc0,-0xb5,-0x98)},_0x3fcb50;function _0x39f97c(_0x21b566,_0xa465b0,_0x1701cd,_0x241405){return _0x5742(_0xa465b0- -0x1af,_0x1701cd);}try{if(_0xc28b91[_0x39f97c(-0xf2,-0xd3,-0xb2,-0x101)](_0xc28b91['CHJID'],_0xc28b91[_0x33de5d(0x137,0x13b,0x15f,0x12d)])){var _0x1308bb=_0xc28b91[_0x39f97c(-0xd3,-0xc8,-0x90,-0xa7)][_0x33de5d(0x178,0x1bc,0x18d,0x188)]('|'),_0x5c22f5=0x4*-0x11c+-0x1bac+0x100e*0x2;while(!![]){switch(_0x1308bb[_0x5c22f5++]){case'0':var _0x60c382=[_0xc28b91[_0x39f97c(-0x136,-0x10d,-0x133,-0x107)],_0xc28b91[_0x33de5d(0x186,0x17e,0x1a8,0x18d)],_0xc28b91[_0x39f97c(-0xf6,-0x101,-0x12a,-0xf2)],_0xc28b91[_0x39f97c(-0xf7,-0xbd,-0xdd,-0xd8)],_0xc28b91[_0x33de5d(0x184,0x192,0x192,0x1c4)],_0xc28b91[_0x33de5d(0x197,0x160,0x194,0x172)],_0xc28b91[_0x39f97c(-0xe1,-0x103,-0xc8,-0x11e)]];continue;case'1':var _0x4ff2d0=_0x9b90e8[_0x33de5d(0x16b,0x186,0x1a4,0x1d1)]=_0x9b90e8[_0x33de5d(0x170,0x174,0x1a4,0x1c9)]||{};continue;case'2':for(var _0x5ec63a=0x1ad+-0x7c2+-0x3*-0x207;_0xc28b91[_0x33de5d(0x18d,0x1ab,0x1b2,0x1cb)](_0x5ec63a,_0x60c382[_0x39f97c(-0xdc,-0xee,-0xe2,-0xc7)]);_0x5ec63a++){var _0x1e9a22=_0xc28b91[_0x39f97c(-0xc5,-0xd5,-0xa0,-0xa4)][_0x33de5d(0x16e,0x15f,0x18d,0x1a6)]('|'),_0x492dfa=-0xb93+0x25de+-0x1a4b;while(!![]){switch(_0x1e9a22[_0x492dfa++]){case'0':_0x4ff2d0[_0x16308f]=_0x371b1c;continue;case'1':var _0x371b1c=_0x5b9c4d[_0x39f97c(-0xb2,-0xda,-0x111,-0xe4)+'r']['prototype'][_0x33de5d(0x1c0,0x189,0x18e,0x1c0)](_0x36544c);continue;case'2':var _0x371f88=_0x4ff2d0[_0x16308f]||_0x371b1c;continue;case'3':_0x371b1c['toString']=_0x371f88[_0x39f97c(-0x7d,-0xa2,-0xc0,-0x98)][_0x33de5d(0x1a5,0x16c,0x18e,0x195)](_0x371f88);continue;case'4':var _0x16308f=_0x60c382[_0x5ec63a];continue;case'5':_0x371b1c[_0x39f97c(-0x9e,-0xb2,-0xc7,-0x91)]=_0x468f5a['bind'](_0x482569);continue;}break;}}continue;case'3':var _0x9b90e8;continue;case'4':try{var _0x2e94a4=_0xc28b91[_0x39f97c(-0xd3,-0xba,-0x85,-0xcc)](_0x52291f,'return\x20(fu'+_0x39f97c(-0x101,-0xd8,-0xac,-0xe2)+_0xc28b91['pfWwK']+');');_0x9b90e8=_0xc28b91[_0x39f97c(-0x93,-0xb4,-0xc8,-0xc6)](_0x2e94a4);}catch(_0x2b246c){_0x9b90e8=_0x11cddf;}continue;}break;}}else{var _0x5f195a=_0xc28b91['HrLNi'](Function,_0xc28b91[_0x39f97c(-0x111,-0xd6,-0xb9,-0x101)](_0xc28b91[_0x33de5d(0x173,0x180,0x19d,0x16f)](_0xc28b91[_0x39f97c(-0xb6,-0xd9,-0xb7,-0x111)],_0x33de5d(0x1c1,0x203,0x1c9,0x1ff)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)'),');'));_0x3fcb50=_0x5f195a();}}catch(_0x32a29b){if(_0xc28b91[_0x33de5d(0x177,0x1af,0x178,0x156)]!==_0xc28b91[_0x39f97c(-0x117,-0x100,-0xea,-0x101)])_0x3fcb50=window;else{var _0x3e1738=_0x13e744[_0x33de5d(0x1ab,0x173,0x184,0x16b)](_0x4bfd90,arguments);return _0x46a940=null,_0x3e1738;}}var _0x2fb377=_0x3fcb50[_0x33de5d(0x199,0x1dc,0x1a4,0x1d5)]=_0x3fcb50['console']||{},_0xce59a8=[_0xc28b91['tXbAR'],_0xc28b91[_0x39f97c(-0xb1,-0xcb,-0x91,-0xd4)],_0xc28b91[_0x39f97c(-0xce,-0x101,-0x112,-0xd0)],_0x39f97c(-0x90,-0xa0,-0x65,-0xc2),_0xc28b91['lyENL'],_0x33de5d(0x136,0x161,0x162,0x178),_0xc28b91[_0x39f97c(-0xdc,-0x103,-0xdd,-0x126)]];function _0x33de5d(_0x92f2b5,_0x1f4e1b,_0x51a727,_0x1a1afe){return _0x5742(_0x51a727-0xc4,_0x1a1afe);}for(var _0xa34b81=0x2*-0xae5+-0x1*-0x1e3b+0x871*-0x1;_0xc28b91[_0x33de5d(0x192,0x183,0x1b2,0x188)](_0xa34b81,_0xce59a8['length']);_0xa34b81++){var _0x28acd8=_0x17375c[_0x39f97c(-0xf1,-0xda,-0xc2,-0xd9)+'r']['prototype'][_0x33de5d(0x1a2,0x181,0x18e,0x15d)](_0x17375c),_0x569752=_0xce59a8[_0xa34b81],_0x5b9b21=_0x2fb377[_0x569752]||_0x28acd8;_0x28acd8[_0x33de5d(0x1f9,0x1a1,0x1c1,0x1f5)]=_0x17375c[_0x33de5d(0x1c7,0x1bb,0x18e,0x16f)](_0x17375c),_0x28acd8['toString']=_0x5b9b21[_0x39f97c(-0xb7,-0xa2,-0x89,-0xdb)]['bind'](_0x5b9b21),_0x2fb377[_0x569752]=_0x28acd8;}});function _0x2fd1ce(_0x1b02bb,_0x466b70,_0x125072,_0x317f22){return _0x5742(_0x317f22-0xe0,_0x1b02bb);}_0x5b03d8();function _0x5742(_0x2ef402,_0x1545a){var _0x2bcbf9=_0x2464();return _0x5742=function(_0x369323,_0x17352b){_0x369323=_0x369323-(-0x2141+-0x7f*-0x2c+0xc07);var _0x48ad32=_0x2bcbf9[_0x369323];if(_0x5742['AkLDzI']===undefined){var _0x11fe76=function(_0x52223c){var _0x3a84b7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x112b4b='',_0x5c84af='',_0x18620c=_0x112b4b+_0x11fe76;for(var _0x5c99e2=-0x14ef+-0xeda+0x23c9*0x1,_0x4f888a,_0x29995f,_0x3bfe1e=0xc77*-0x1+0x28c*-0xb+0x1*0x287b;_0x29995f=_0x52223c['charAt'](_0x3bfe1e++);~_0x29995f&&(_0x4f888a=_0x5c99e2%(-0x685+-0x16de+0x1d67)?_0x4f888a*(0xd79+0x6d*0x4+0xeed*-0x1)+_0x29995f:_0x29995f,_0x5c99e2++%(0x61*-0x64+0x3b+0x25ad))?_0x112b4b+=_0x18620c['charCodeAt'](_0x3bfe1e+(-0x1573+0x1ca9+-0x72c))-(-0x1d9d+-0x8*-0x1b1+0x101f*0x1)!==-0xb7*-0x2d+0x2d*0x7f+-0x367e?String['fromCharCode'](-0x4cd*0x8+-0x8c5+0x302c&_0x4f888a>>(-(0xd39+-0x12eb*-0x2+0x330d*-0x1)*_0x5c99e2&0x176a+0x1691+0x931*-0x5)):_0x5c99e2:0x5d*-0x55+-0x19*-0xa6+-0x5*-0x2ef){_0x29995f=_0x3a84b7['indexOf'](_0x29995f);}for(var _0x3e1876=-0x8*-0x3fa+-0x1332+-0xa*0x143,_0x7dea7c=_0x112b4b['length'];_0x3e1876<_0x7dea7c;_0x3e1876++){_0x5c84af+='%'+('00'+_0x112b4b['charCodeAt'](_0x3e1876)['toString'](-0x26a2+0x1*-0x2345+0x49f7))['slice'](-(-0x27*-0x25+-0x8*-0x59+0x869*-0x1));}return decodeURIComponent(_0x5c84af);};_0x5742['WOHPve']=_0x11fe76,_0x2ef402=arguments,_0x5742['AkLDzI']=!![];}var _0x586760=_0x2bcbf9[0x23d1+0x16b0+-0x3a81],_0x4905f3=_0x369323+_0x586760,_0x4de491=_0x2ef402[_0x4905f3];if(!_0x4de491){var _0x409596=function(_0x34b52e){this['LFUvFc']=_0x34b52e,this['dAoTbw']=[0x6d*-0x11+-0x248f+0x2bcd,0x6f*0x53+0xc7*0x7+-0x296e,0x933*-0x2+-0x5*0x29e+-0x82*-0x3e],this['dGUROL']=function(){return'newState';},this['aSZVEF']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['YnjtFN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x409596['prototype']['aFjRJg']=function(){var _0x4dc67c=new RegExp(this['aSZVEF']+this['YnjtFN']),_0x135c41=_0x4dc67c['test'](this['dGUROL']['toString']())?--this['dAoTbw'][0xed0+-0x9*0xc7+0x1*-0x7d0]:--this['dAoTbw'][0x390*-0x6+0x42a+0x2*0x89b];return this['dAgXmU'](_0x135c41);},_0x409596['prototype']['dAgXmU']=function(_0x84644f){if(!Boolean(~_0x84644f))return _0x84644f;return this['fGRivz'](this['LFUvFc']);},_0x409596['prototype']['fGRivz']=function(_0xe1a1ca){for(var _0x155e4c=-0x3ae*-0xa+-0x1*-0xea5+-0xd*0x3f5,_0x1e5edc=this['dAoTbw']['length'];_0x155e4c<_0x1e5edc;_0x155e4c++){this['dAoTbw']['push'](Math['round'](Math['random']())),_0x1e5edc=this['dAoTbw']['length'];}return _0xe1a1ca(this['dAoTbw'][0x2547+-0x28*-0xb1+-0x40ef]);},new _0x409596(_0x5742)['aFjRJg'](),_0x48ad32=_0x5742['WOHPve'](_0x48ad32),_0x2ef402[_0x4905f3]=_0x48ad32;}else _0x48ad32=_0x4de491;return _0x48ad32;},_0x5742(_0x2ef402,_0x1545a);}var foundMatch=![];for(var i=-0x5ea+0x116a+-0x2*0x5c0;i<allowedURLs[_0x2fd1ce(0x1b9,0x1d9,0x196,0x1a1)];i++){if(window[_0x2f3936(0x34d,0x31b,0x330,0x307)][_0x2f3936(0x2ff,0x2e7,0x2f0,0x2fd)][_0x2fd1ce(0x1ad,0x18c,0x194,0x18d)](allowedURLs[i])){foundMatch=!![];break;}}function _0x2464(){var _0x4f23f3=['nJCYoti0B3DKqw5g','ALLuswS','BvvHBK8','y3jLyxrLrwXLBq','vLjuqLC','BIiGBM90igzVDq','CxvLCNLtzwXLyW','otC5mdm1mM9ZDNDTva','yxK6ig5VBMuGiq','cIaGicaGicaGia','y3jLyxrLvgv4Da','EKXVAwu','yvnkqxG','mJu1ndu1ouHswvzMuG','AgvHza','s0HNs3i','y29UDgvUDcWGyq','Dca8ysbOCMvMpq','shjmtMK','BgvHC2uGy29UDa','BMSIpLrOzw1Lia','CM4GDgHPCYiPka','y29SB3i6ihDOAq','Bg9JyxrPB24','vvDxz3q','zxj0ihSkicaGia','x19WCM90B19F','CNrPy2XLihSkia','C3r5Bgu','icaGicaGicaGia','zfL5r3C','y3rPDMuUifbSzq','CMDLDd0Ix2jSyq','yxbWzw5Kq2HPBa','E30Uy29UC3rYDq','icaGicaGigjHyW','Dgu7cIaGicaGia','B3vYieXPy2vUCW','icaGicaGic5HBa','DxrOB3jPEMvKia','icbTyxjNAw46ia','DMf0zsb5B3vYia','Dg9tDhjPBMC','zgL2pG','zxjYB3i','zsbjCYboB3qGqq','mZvqwKDMA2y','DgGGsuqGiM1HAq','i21HAw4','q0Hksuq','zgLZCgXHEq','AgLrqum','DgfIBgu','zNHcrha','zxjPzgvYiIb0yq','icb9cIaGicaGia','DfHIqvi','iMH0DhbZoI8VDa','icaGFqOGicaGia','BMqU','rwXLBwvUDcb3Aq','vujmwuG','zgvZAwDUzxi8lW','A1Dot3G','icaGicbKAxnWBa','yt4GDg8Gywn0Aq','wNDMEw4','C3rHCNrZv2L0Aa','zLjRD2K','yuXOqMu','z3vQvve','Aw5Uzxjive1m','vxzSvvm','odm3otmWrK9XwNze','C2D6sgG','D2fYBG','zw50','AMjhvMK','vMn2ueq','nMn3DevhwG','AhjLzG','BgLJzw5Zzs48lW','Dg8GDxnLihrOAq','pgrPDIbJBgfZCW','yMXVy2S','DhjHy2u','yxbWBhK','BgvUz3rO','mtyXmtu2mZHXrwzjsvu','yKTiwMK','DKzIqMS','mZq3ote1nfL1CvrVzW','CezKC0i','idHWEdSkicaGia','tM9Kzq','C3bSAxq','yMLUza','mLjzzeX0uq','yxnLignVBNrHyW','ndi3nJbcveDuEuy','BhLftKW','mZC4zfDewgHu','yw5Ovw4','BIbPCYbUB3qGyq','ywn0ihn1ChbVCG','zwq7cIaGicaGia','AxvZoIa1ChG7cG','y29UC3rYDwn0BW','u2nYsg0','BMn0Aw9UkcKG','C2vHCMnO','uxLozgO','yNPHCMm','B1b5v1q','y1f6ywu','zxHJzxb0Aw9U','vuDmr28','CwLlAuO','y29UC29Szq','Aw1WB3j0yw50oW','sMjHAui'];_0x2464=function(){return _0x4f23f3;};return _0x2464();}function _0x2f3936(_0x171f65,_0x2e0ce2,_0xd873c2,_0x4e1d09){return _0x5742(_0xd873c2-0x236,_0x4e1d09);}if(!foundMatch){var css='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20.entry-'+_0x2fd1ce(0x201,0x1e9,0x1db,0x1d3)+_0x2f3936(0x304,0x301,0x334,0x337)+_0x2fd1ce(0x1ec,0x1c4,0x21c,0x1e0)+_0x2fd1ce(0x183,0x157,0x14f,0x18a)+_0x2fd1ce(0x19e,0x199,0x1b7,0x1cb)+_0x2f3936(0x348,0x2f2,0x317,0x347)+_0x2f3936(0x30f,0x330,0x322,0x31e)+_0x2f3936(0x316,0x2c3,0x2da,0x2d7)+_0x2fd1ce(0x1c9,0x1ce,0x1d9,0x1e9)+_0x2fd1ce(0x1f1,0x216,0x1ea,0x1dc)+_0x2f3936(0x34b,0x34d,0x336,0x36f)+'\x20\x20padding:'+_0x2f3936(0x2cc,0x335,0x2fd,0x2ef)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x2fd1ce(0x211,0x1b1,0x1f1,0x1eb)+'15px\x20auto;'+_0x2f3936(0x32e,0x332,0x322,0x2e7)+_0x2f3936(0x31d,0x31a,0x33c,0x367)+'kground:\x20r'+_0x2f3936(0x2cd,0x2eb,0x309,0x334)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x2f3936(0x315,0x358,0x32f,0x351)+_0x2f3936(0x366,0x307,0x33d,0x340)+_0x2fd1ce(0x1c7,0x1e7,0x1ad,0x1e0)+'border-rad'+_0x2fd1ce(0x1b1,0x18d,0x177,0x1b4)+_0x2f3936(0x370,0x324,0x336,0x36a)+_0x2f3936(0x2b4,0x2bc,0x2d7,0x2f6)+'\x20\x20',style=document[_0x2fd1ce(0x1a7,0x1b1,0x191,0x1c6)+_0x2f3936(0x2c0,0x2eb,0x2ec,0x301)](_0x2f3936(0x372,0x307,0x335,0x35d));style[_0x2fd1ce(0x1f2,0x1d2,0x21b,0x1e4)+'d'](document[_0x2fd1ce(0x1d9,0x209,0x198,0x1cd)+_0x2f3936(0x329,0x32d,0x2fe,0x325)](css)),document[_0x2fd1ce(0x204,0x1d3,0x1f4,0x1d1)]['appendChil'+'d'](style);var mainElement=document[_0x2f3936(0x33c,0x330,0x31f,0x2f7)+'tor'](_0x2f3936(0x29a,0x301,0x2d0,0x2e2));mainElement?(mainElement[_0x2fd1ce(0x216,0x1e2,0x1b6,0x1df)][_0x2fd1ce(0x19a,0x173,0x160,0x17c)]=_0x2fd1ce(0x1a0,0x17f,0x1b7,0x19e),mainElement[_0x2f3936(0x2ca,0x2ca,0x2e7,0x2dc)]=_0x2fd1ce(0x17c,0x18f,0x195,0x19d)+'=\x22alert\x22>Y'+'our\x20Licens'+'e\x20Is\x20Not\x20A'+_0x2f3936(0x361,0x367,0x338,0x36d)+_0x2f3936(0x2d5,0x334,0x302,0x312)+_0x2f3936(0x30f,0x31b,0x32a,0x33a)+_0x2f3936(0x2f1,0x303,0x2d9,0x29f)+'.me/dhanje'+_0x2fd1ce(0x195,0x182,0x147,0x180)+_0x2f3936(0x362,0x33a,0x339,0x314)+_0x2f3936(0x320,0x344,0x32d,0x319)+_0x2fd1ce(0x175,0x154,0x1a0,0x188)+_0x2f3936(0x2be,0x2f4,0x2e1,0x2bf)+_0x2fd1ce(0x1df,0x208,0x205,0x1ec)+'license.</'+_0x2f3936(0x35e,0x35d,0x344,0x30a)):console['error'](_0x2f3936(0x2db,0x2f1,0x2dc,0x2ee)+_0x2f3936(0x377,0x343,0x348,0x368)+_0x2f3936(0x2ed,0x2e9,0x31e,0x330)+_0x2fd1ce(0x172,0x189,0x1a0,0x185)),alert('Your\x20domai'+_0x2fd1ce(0x18d,0x19a,0x179,0x1b1)+_0x2fd1ce(0x204,0x1ad,0x205,0x1ea)+_0x2fd1ce(0x1c6,0x196,0x1cf,0x19c)+'s\x20theme.\x20P'+_0x2fd1ce(0x1e1,0x1f8,0x1e5,0x1d6)+_0x2f3936(0x2f6,0x333,0x308,0x31b)+'t.');}
});
