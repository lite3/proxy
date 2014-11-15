var blackList = [
'google.com',
'gstatic.com',
'googlecode.com',
'googlesyndication.com',
'googleusercontent.com',
'googlepages.com',
'googleapis.com',
'google-analytics.com',
'googlevideo.com',
'gmail.com',
'android.com',
'youtube.com',
'facebook.com',
'twitter.com',
'bit.l',
'twimg.com',
'box.com',
'dropbox.com',
'tweetmarker.net',
'path.com',
'qx.net',
'igfw.net',
'wikipedia.org',
'wikimedia.org',
'markmail.org',
'live.com',
'appledaily.com',
'cloudfront.net',
'ufree.org',
'youversion.com',
'mac.com',
'instagr.am',
'qooza.hk',
'akamaihd.net',
'inc.gs',
'fbcdn.net',
't.co',
'evernote.com',
'picturedip.com',
'pandora.com',
'pinporn.com',
'nextmedia.com',
'legend.pandafan.org',
't66y.com',
'flickr.com',
'net.au',
'sha7.info',
'blogspot.com',
'wordpress.com',
'yahoo.com',
'nytimes.com',
'sex.com',
'radiotime.com',
'heqinglian.net',
'instagram.com',
'biz.tm',
'outlook.com',
'tcno.net',
'asana.com',
'microsoft.com',
'hkheadline.com',
'ytimg.com',
'akamai.net',
'hootsuite.com',
'hkepc.com',
'yfrog.com',
'pandora.com',
'rdio.com',
'rdio.com',
'p-cdn.com',
'akamaihd.net',
'simrworldwide.com',
'scorecardresearch.com',
'linode.com',
'codeandweb.com',
];

function FindProxyForURL(url,host){
    var len = blackList.length;
    var i = 0;
    for (i; i < len; i++) {
        if (host.indexOf(blackList[i]) >= 0) {
            return 'PROXY 192.168.1.241:8118; DIRECT;';
        }
    }
	return 'DIRECT';
}

// shExpMatch(host, '*.google.com')
