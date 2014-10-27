var _Freq=false;
var _halt=false; 
var _NavHalt = false;
var MSNavChannel=false;
var _newProjWeight = 100, _oldProjWeight = 0; //Default weights
var _surl = document.location.toString();
var A=document.getElementsByName("MS.Nav.Channel");

if(typeof(A[0])!="undefined"&&A[0]!=null){
 MSNavChannel="MS.Nav.Channel="+A[0].getAttribute("content");
   //var _t =  var _t = COMSCORE.SiteRecruit.Broker.findPageMapping(); 
   //if(typeof(_t)!="undefined" && _t !=null && typeof(_t.prereqs)!="undefined" && _t.prereqs!=null){	
if(/windows\.microsoft\.com\/en-us/i.test(_surl)){
	if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0803;
		}
	}else if(/windows\.microsoft\.com\/en-ca/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/en-gb/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0154;
		}
	}else if(/windows\.microsoft\.com\/en-au/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}else if(/windows\.microsoft\.com\/ja-jp/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0505; 
		}
	}else if(/windows\.microsoft\.com\/de-de/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0106; 
		}
	}else if(/windows\.microsoft\.com\/fr-fr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0083; 
		}
	}else if(/windows\.microsoft\.com\/zh-cn/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0486;  
		}
	}else if(/windows\.microsoft\.com\/ko-kr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/ru-ru/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0118; 
		}
	}else if(/windows\.microsoft\.com\/pt-br/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0709; 
		}
	}else if(/windows\.microsoft\.com\/es-mx/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/es-es/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0205; 
		}
	}else if(/windows\.microsoft\.com\/it-it/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0192;
		}
	}else if(/windows\.microsoft\.com\/tr-tr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}else if(/windows\.microsoft\.com\/nl-nl/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}
 }else{MSNavChannel=false;}
 if(/(zh-cn|pt-br|es-mx|ja-jp)\/windows\-8\/(features|honestly)/i.test(_surl)){_NavHalt=false;}else if(!_Freq){ _NavHalt=true; }
COMSCORE.SiteRecruit.Broker.config={version:"5.0.3",testMode:false,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},thirdPartyOptOutCookieEnabled:false,prefixUrl:"",Events:{beforeRecruit:function(){}},mapping:[{m:"//[\\w\\.-]+/de-de",c:"inv_c_p176052898-DE-DE.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-gb",c:"inv_c_p176052898-EN-GB.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/",c:"inv_c_p176052898-US.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/internet-explorer/products/ie-9/welcome$|welcome\\-upgrade|welcome\\-upgrade2",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-US/windows/home",c:"inv_c_p284986060-EN-US-home.js",f:0.0003,p:2},{m:"//[\\w\\.-]+/en-US/windows/offers",c:"inv_c_p284986060-EN-US-offers.js",f:0.0003,p:2},{m:"//[\\w\\.-]+/en-us/windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-US/windows-8/",c:"inv_c_p284986060-EN-US-win8.js",f:0.0003,p:2},{m:"//[\\w\\.-]+/es-es",c:"inv_c_p234872763-ES-ES.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/fr-fr",c:"inv_c_p176052898-FR-FR.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/it-it",c:"inv_c_p176052898-IT-IT.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/ja-jp",c:"inv_c_p176052898-JA-JP.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/pt-br",c:"inv_c_p176052898-PT-BR.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/ru-ru",c:"inv_c_p176052898-RU-RU.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/zh-cn",c:"inv_c_p176052898-ZH-CN.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/((internet-explorer/products/ie-9/  (welcome|welcome-upgrade|welcome-upgrade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search))|(.*/windows/preview))",c:"inv_c_blank.js",f:0,p:5,halt:true},{m:"/((es-es)|(it-it)|(tr-tr)|(nl-nl))/((internet-explorer/products/ie-9/(welcome|welcome-upgrade|welcome-grade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)))",c:"inv_c_blank.js",f:0,p:5,halt:true}]};
COMSCORE.SiteRecruit.Broker.run();