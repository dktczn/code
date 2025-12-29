document.addEventListener('DOMContentLoaded', function() {
    
 var allowedURLs = [
     "https://commingsoonmovies.online",
"https://vacancynewstimes.in",
    "https://saanime.store",
     "https://www.movies4utv.online",
    "https://sstv.website",
     "http://rogmovies.shop",
     "https://movieshd4u.fun",
"https://movieclub.sbs",
     "https://www.vegamovies.surf",
     "https://uhdfilx.fun",
"https://movienrg9.blogspot.com",
"https://refilate.blogspot.com",
    "https://www.sahub.online",
"https://jobnewstodays.in",
"https://hdhub4uonline.com",
"https://refilate.blogspot.com",
"https://templixpro.blogspot.com",
"https://refilate.blogspot.com",
  "https://f-hd.top/Free",
  "https://allmoviesadday.blogspot.com",
"https://jobsvacancynews.in",
  "https://vegamovies.cfd",
"https://currentjobnews.in",
"https://edujobsnews.in",
  "https://vegamovies.quest",
    "https://vegamoviesnl.in",
    "https://www.aagmaal.best",
    "https://www.crckhd.lol",
    "https://hdhub4u.me",
    "https://techinternshipnews.com",
    "https://m.odiafilmy4u.site",
    "https://www.themoviesbangla.xyz",
    "https://vegaclone.dktheme.com",
    "https://movies4u.press",
    "https://fullvideoslink.xyz",
    "https://vega-movies.wtf",
    "https://imdbmovies.in",
    "https://vegaflix.in",
    "https://www.vegamovies.uk",
    "https://netprimemovies4u.cfd",
    "https://commingsoonmovies.online",
    "https://www.moviesbox.site",
    "https://www.filmysynchub.in",
    "https://filmflicker25.blogspot.com",
    "https://www.zcflick.in",
    "https://www.tamilrockers.fun",
    "https://bscnotes.in",
    "https://viralmedia49.blogspot.com",
    "https://www.bloggswriter.com",
    "https://flixababe.top",
    "https://www.tekku.online",
    "https://www.hindidubmovies4u.site",
    "https://www.odiafilmy4u.site",
    "https://dailymovies4u.com",
    "https://vg2.dktheme.com",
    "https://vg3.dktheme.com",
    "https://armovie.fun",
    "https://hdhb.dktheme.com",
    "https://hdhbclone.dktheme.com",
    "https://vegaog.dktheme.com",
    "https://filmyfly.dktheme.com",
    "kasganjnews24.blogspot.com",
    "https://www.rtibiharnews.in",
    "https://www.odiafilmy4u.fun",
    "https://bollyflix.run",
    "https://kundli100.shop",
    "https://hdhub4u4.xyz",
    "https://dktheme.com/mvdrive",
    "https://mirchimovies.xyz",
    "https://netprimemovies.site",
    "https://www.vegamovies-nl.casa",
    "https://movieshd4u.xyz",
    "https://greatcinema.net",
    "https://zharmovies.com",
    "https://www.pmmovies.shop",
    "http://www.filmflicker25.xyz",
    "https://www.filmflicker25.xyz",
    "https://www.moviestar4u.xyz",
    "https://boltmovies.fun",
    "https://www.utkalscreens.site",
    "https://vegamovies2k.in",
    "https://www.vegafilm.site",
    "https://hdhub4u.ml",
    "https://www.moviesdownhd.com",
    "http://primaniurlshortener.free.nf",
    "https://primaniurlshortener.free.nf",
    "https://rightmb.free.nf",
    "https://newsbeeta.com",
    "https://www.commingsoonmovies.com",
    "https://moviesin.xyz",
    "https://Animes4world.in",
    "http://moviespell.com",
    "https://moviespell.com",        
    "https://www.hdhub4umovies.co.in",
    "https://gharkulyojana.com",
    "https://kaliasyojana.com",
    "https://pmyasasviyojana.com",
    "https://www.hdhub4utv.live",
    "https://www.faxflix.site",
    "https://adultavenue.tattoo",
    "https://biographyhero.lovestoblog.com",
    "https://dktheme.online",
    "https://hdhub4utvm.blogspot.com",
    "https://scraper.rf.gd",
    "https://www.bdmoviehub.top",
    "https://top-anime4u.blogspot.com",
    "https://test.dktheme.com",
    "https://dktheme.com/apk",
    "https://pmfbyjobsnews.com",
    "https://movflix.info",
    "https://sarkarinewszone.com",
    "https://netprimemovies1.blogspot.com",
    "https://streamhd.fun",
    "https://bdmoviehubhd.blogspot.com",
    "https://jobsnewsalert.com",
    "https://vacancysnews.com",
    "https://jobnewstodays.com",
    "https://jobnewspost.com",
    "https://vegamoviese.fun",
    "https://Links.wuaze.com",
    "https://www.netprimemovies.site",
    "https://www.cineflim.com",
    "https://abc2movie.blogspot.com",
    "https://filmyking.rf.gd",
    "https://testyyyyrr4.blogspot.com",
    "https://solution-manualspdf.blogspot.com",
    "https://filmybuff.store",
    "https://zinkmovies.co",
    "https://neuplayer.blogspot.com",
    "https://jettheme-pro.blogspot.com",
    "https://mariyaui.blogspot.com",
    "https://1stepno.blogspot.com",
    "https://vegamovies4it.blogspot.com",
    "https://hdhub4u-clone.blogspot.com",
    "https://exprothikhad.blogspot.com",
    "https://jet-moviev3.blogspot.com",
    "https://dkhek.blogspot.com",
    "https://codingrider.blogspot.com",
    "https://eduhub-demo.blogspot.com",
    "https://vega-clone.blogspot.com",
    "https://dkchek1.blogspot.com",
    "https://girgit-ui.blogspot.com",
    "https://fletrothemes.blogspot.com",
    "https://faddalunga.blogspot.com",
    "https://mediunmovie.blogspot.com",
    "https://www.timestoryaxom.in",
    "https://vegaog.dktheme.com",
    "https://techhub.dktheme.com",
    "https://vegamovies6.nl",
    "https://gpmovie.dktheme.com",
    "https://filmymovies.in",
    "https://local.dktheme.com",
    "https://newspaper.dktheme.com",
    "https://gl.dktheme.com",
    "https://dktheme.com",
     "https://mvdrive.dktheme.com",
     "https://lux.dktheme.com",
    "https://discover.dktheme.com",
    "https://www.saanime.store",
    "https://www.sstv.website",
    "https://texhdjrkr.blogspot.com",
    "https://plusuiteme.blogspot.com",
    "https://actrers-biography.blogspot.com",
     "https://netprimemovies4u.site",
];

    
        var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
    if (window.location.href.startsWith(allowedURLs[i])) {
        foundMatch = true;
        break;
    }
}

if (!foundMatch) {
    alert('You need to verify your domain to use this theme. Please contact support.');

    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#000;
            color:#fff;
            text-align:center;
            font-family:Arial;
        ">
            <div>
                <h2>🚫 License Not Active</h2>
                <p>Your domain is not authorized.</p>
                <a href="https://t.me/dhanjeerider" target="_blank" 
                   style="color:#00ffcc;font-size:18px;text-decoration:none;">
                   Contact DHANJEE Rider
                </a>
            </div>
        </div>
    `;
}
});
