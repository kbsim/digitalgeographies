var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


///////////////////////////////////////////////////////
//This is cookie Stuff//[START]////////////////////////
/////////////////////////////////////////////////////// 
 
//This function only works in IE
/*function getTheCrum(da_elmt)
{

if(document.cookie != "")
{
return getCookieData(da_elmt)
} else {
return ""
}

}

 
 
function setTheCrum(name,list,expires,path,domain,secure)
{
var theValu = list; //list.options[list.selectedIndex].value
var exp = new Date();
var oneYearFromNow = exp.getTime() + (365 * 24 * 60 * 60 * 1000);
exp.setTime(oneYearFromNow);
exp = exp.toGMTString();
 
 if(expires == "NOW") { 
 
 document.cookie = name + "=" + escape(theValu) + 
	//((expires) ? "; expires=" + exp : "") +
	 ((path) ? "; path=" + path : "") + 
	 ((domain) ? "; domain=" + domain : "") +
	 ((secure) ? "; secure" : "");
	
	} else {
	
 document.cookie = name + "=" + escape(theValu) + 
	 ((expires) ? "; expires=" + exp : "") +
	 ((path) ? "; path=" + path : "") + 
	 ((domain) ? "; domain=" + domain : "") +
	 ((secure) ? "; secure" : "");
	
	}
}
 
function getCookieData(label) {
var labelLen = label.length
var cLen = document.cookie.length
var i = 0
var cEnd
while (i < cLen) {
var j = i + labelLen
if (document.cookie.substring(i,j) == label) {
cEnd = document.cookie.indexOf(";",j)
if (cEnd == -1) {
cEnd = document.cookie.length
}
var thend = unescape(document.cookie.substring(j,cEnd))
 thend = thend.replace("=","")
return thend
}
i++
}
return ""
}
 
*/
//this plants the cookie
//onchange="setTheCrum('bankNum', this.value, '000', '/', null, false);"
 
///////////////////////////////////////////////////////
//This is cookie Stuff////[END]////////////////////////
/////////////////////////////////////////////////////// 

/*
var daProt = "http://";
var daDomain = "www.unionplanters.com";
*/

// set the protocol
//if ((location.protocol).toUpperCase() == "HTTPS:") daProt = "https://";

//if (getCookieData("daDomain") == "") {
// set the domain name
//if (((document.referrer).toUpperCase()).indexOf(("uptest.upbna.com:8088").toUpperCase()) != -1) daDomain = "uptest.upbna.com:8088";
//if (((document.referrer).toUpperCase()).indexOf(("www.unionplanters.com").toUpperCase()) != -1) daDomain = "www.unionplanters.com";
  
/*// set the daDomain cookie
setTheCrum("daDomain", daDomain, "NOW", "/", null, false); 
} else {
daDomain = getCookieData("daDomain");
}
*/

var daBaseURL = "https://web.archive.org/web/20030603195715/http://www.unionplanters.com"; 
 
var sec_0 = "";
sec_0 += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n";
sec_0 += "<tr> \n";
sec_0 += "<!--:::topNav Starts::://-->\n";
sec_0 += "<td align=\"left\" valign=\"top\">\n";
sec_0 += "<script>\n";
sec_0 += "<!--\n";
sec_0 += "document.write(eval(\"topNav(\"+upNav+\")\"));\n";
sec_0 += "//-->\n";
sec_0 += "</script></td>\n";
sec_0 += "<!--:::topNav Ends::://-->\n";
sec_0 += "</tr>\n";
sec_0 += "<tr> \n";
sec_0 += "<td align=\"left\" valign=\"top\">\n";
sec_0 += "	<!--:::Middle Table Starts::://-->\n";
sec_0 += "	<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n";
sec_0 += "	<tr>\n";
sec_0 += "	<!--:::leftNav Starts::://-->\n";
sec_0 += "	<td width=\"1%\" align=\"left\" valign=\"top\">\n";
sec_0 += "	<script>\n";
sec_0 += "	<!--\n";
sec_0 += "	document.write(eval(\"leftNav(\"+upNav+\")\"));\n";
sec_0 += "	//-->\n";
sec_0 += "	</script></td>\n";
sec_0 += "	<!--:::leftNav Ends::://-->\n";
sec_0 += "	<td width=\"1%\" align=\"left\" valign=\"top\"><img src=\"" + daBaseURL + "/media/images/spacer.gif\" width=\"20\" height=\"10\"></td>\n";
sec_0 += "	<td width=\"98%\" align=\"left\" valign=\"top\"> \n";

var sec_1 = "";
sec_1 += "	</td>\n";
sec_1 += "	</tr>\n";
sec_1 += "	</table>\n";
sec_1 += "	<!--:::Middle Table Ends::://-->\n";
sec_1 += "</td>\n";
sec_1 += "</tr>\n";
sec_1 += "<tr>\n";
sec_1 += "<td><img src=\"" + daBaseURL + "/media/images/spacer.gif\" width=\"30\" height=\"50\" border=\"0\"></td>\n";
sec_1 += "</tr>\n";
sec_1 += "<tr>\n";
sec_1 += "<!--:::Footer Starts::://-->\n";
sec_1 += "<td>\n";
sec_1 += "<script>\n";
sec_1 += "<!--\n";
sec_1 += "document.write(docFtr());\n";
sec_1 += "//-->\n";
sec_1 += "</script></td>\n";
sec_1 += "<!--:::Footer Ends::://-->\n";
sec_1 += "</tr>\n";
sec_1 += "</table>\n";
sec_1 += "</body>\n";


}
/*
     FILE ARCHIVED ON 19:57:15 Jun 03, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:03:53 Feb 02, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.251
  load_resource: 137.628
  exclusion.robots: 0.267
  esindex: 0.012
  PetaboxLoader3.resolve: 27.941
  CDXLines.iter: 28.648 (3)
  RedisCDXSource: 3.001
  LoadShardBlock: 151.497 (3)
  PetaboxLoader3.datanode: 200.144 (4)
  captures_list: 188.427
*/