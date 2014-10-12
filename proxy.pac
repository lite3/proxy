function FindProxyForURL(url,host){
	if(shExpMatch(url,"*.facebook.*")||
	shExpMatch(url,"*.cz88.*")||
	shExpMatch(url,"*.google.*")||
	shExpMatch(url,"*fonts.gstatic.com*")||
	shExpMatch(url,"*googlesyndication.com*")||
	shExpMatch(url,'*twimg.com*')||
	shExpMatch(url,'*googleusercontent.com*')||
	shExpMatch(url,'*github.com*')||
	shExpMatch(url,'*box.com*')||
	shExpMatch(url,'*dropbox.com*')||
	shExpMatch(url,'*tweetmarker.net*')||
	shExpMatch(url,'*path.com*')||
	shExpMatch(url,'*googlecode.com*')||
	shExpMatch(url,'*qx.net*')||
	shExpMatch(url,'*igfw.net*')||
	shExpMatch(url,'*wikipedia.org*')||
	shExpMatch(url,'*wikimedia.org*')||
	shExpMatch(url,'*youtube.com*')||
	shExpMatch(url,'*markmail.org*')||
	shExpMatch(url,'*live.com*')||
	shExpMatch(url,'*appledaily.com*')||
	shExpMatch(url,'*cloudfront.net*')||
	shExpMatch(url,'*ufree.org*')||
	shExpMatch(url,'*youversion.com*')||
	shExpMatch(url,'*mac.com*')||
	shExpMatch(url,'*instagr.am*')||
	shExpMatch(url,'*qooza.hk*')||
	shExpMatch(url,'*akamaihd.net*')||
	shExpMatch(url,'*googlepages.com*')||
	shExpMatch(url,'*googleapis.com*')||
	shExpMatch(url,'*google-analytics.com*')||
	shExpMatch(url,'*inc.gs*')||
	shExpMatch(url,'*fbcdn.net*')||
	shExpMatch(url,'*twitter.com*')||
	shExpMatch(url,'*t.co*')||
	shExpMatch(url,'*evernote.com*')||
	shExpMatch(url,'*facebook.com*')||
	shExpMatch(url,'*picturedip.com*')||
	shExpMatch(url,'*pandora.com*')||
	shExpMatch(url,'*pinporn.com*')||
	shExpMatch(url,'*nextmedia.com*')||
	shExpMatch(url,'*legend.pandafan.org*')||
	shExpMatch(url,'*google.com.hk*')||
	shExpMatch(url,'*t66y.com*')||
	shExpMatch(url,'*flickr.com*')||
	shExpMatch(url,'*gmail.com*')||
	shExpMatch(url,'*net.au*')||
	shExpMatch(url,'*sha7.info*')||
	shExpMatch(url,'*blogspot.com*')||
	shExpMatch(url,'*wordpress.com*')||
	shExpMatch(url,'*yahoo.com*')||
	shExpMatch(url,'*nytimes.com*')||
	shExpMatch(url,'*sex.com*')||
	shExpMatch(url,'*radiotime.com*')||
	shExpMatch(url,'*heqinglian.net*')||
	shExpMatch(url,'*instagram.com*')||
	shExpMatch(url,'*biz.tm*')||
	shExpMatch(url,'*google.com*')||
	shExpMatch(url,'*outlook.com*')||
	shExpMatch(url,'*tcno.net*')||
	shExpMatch(url,'*asana.com*')||
	shExpMatch(url,'*microsoft.com*')||
	shExpMatch(url,'*hkheadline.com*')||
	shExpMatch(url,'*ytimg.com*')||
	shExpMatch(url,'*akamai.net*')||
	shExpMatch(url,'*hootsuite.com*')||
	shExpMatch(url,'*hkepc.com*')||
	shExpMatch(url,'*yfrog.com*')||
	shExpMatch(url,'*googlevideo.com*')||
	shExpMatch(url,'*com.hk*')||
	shExpMatch(url,'*google.cn*')||
	shExpMatch(url,'*pandora.com*')||
	shExpMatch(url,'*rdio.com*')||
	shExpMatch(url,'*rdio.com*')||
	shExpMatch(url,'*p-cdn.com*')||
	shExpMatch(url,'*akamaihd.net*')||
	shExpMatch(url,'*simrworldwide.com*')||
	shExpMatch(url,'*scorecardresearch.com*')||
	shExpMatch(url,'*android.com*')||
	shExpMatch(url,'*.tw*')||
	shExpMatch(url,'*.jp*')||
	shExpMatch(url,'*.hk*')||
	shExpMatch(url,'*.tk*')||
	shExpMatch(url,"*.ip138.*")){
		return "SOCKS5 127.0.0.1:7070; DIRECT;";
	} else {
		return "DIRECT";
	}
}
