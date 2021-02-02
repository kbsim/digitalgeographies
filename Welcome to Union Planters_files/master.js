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

//if in frames, get outta there
if (top.location != self.location) {
top.location = self.location
}

var the_message = "Welcome to the Union Planters Web Site!";
function disableRightClick(btnClick)
{
if (navigator.appName == "Netscape" && btnClick.which == 3) // check for netscape and right click
{ 
alert(the_message);
return false;
}
else if (navigator.appName =="Microsoft Internet Explorer" && event.button == 2) // for IE and Right Click
{
alert(the_message);
return false;
}
}
document.onmousedown = disableRightClick;


//-- Global Variables
//-- Search+Returns items from the QueryString or Pathname
function getSearchAsArray() {
var results = new Array()
var input = unescape(location.search.substring(1));
    
var srchArray ;
  if (input) {
  srchArray = input.split("&")	
  }
  //if we receive the query string and the required number
  //of parameters is OK, otherwise try to build the parameters 
  //from the pathname
  if (input && (srchArray.length>=3)) {
    srchArray = input.split("&")	
    var tempArray = new Array()
    
  for (i = 0; i < srchArray.length; i++) {
  tempArray = srchArray[i].split("=")	
  results[tempArray[0]] = tempArray[1]
  }
  } else {		
  var vpath ;
  var section_focus, the_item, submenu ;
  vpath = unescape(location.pathname) ;	
  srchArray = vpath.split("/") ;
  for (i = 2; i < srchArray.length; i++) {						
  //for debug reason
  //alert(srchArray[i]);
    	   if (i==2) {
    		section_focus = srchArray[i];
    		the_item = srchArray[i];					
    	    } else if (i==srchArray.length-1) {
    		submenu = srchArray[i];
    		submenu = submenu.split(".")[0];
    	    } else {
    		the_item +="/"+ srchArray[i];
    	    }
    	}	
    	results["section_focus"]=section_focus;
    	results["the_item"]=the_item;
    	results["submenu"]=submenu;
    }    
    return results
}

srchString = getSearchAsArray();



//-- Search+Returns items from the QueryString
/*function getSearchAsArray() {
var results = new Array()
var input = unescape(location.search.substring(1));

if (input) {
var srchArray = input.split("&")	
var tempArray = new Array()

for (i = 0; i < srchArray.length; i++) {
tempArray = srchArray[i].split("=")	
results[tempArray[0]] = tempArray[1]
}
}
return results
}
srchString = getSearchAsArray();
*/


//QueryString Items
var section_focus = unescape(srchString["section_focus"]);
var the_item = unescape(srchString["the_item"]);
var theSub = unescape(srchString["submenu"]);
var disImg = unescape(srchString["disImg"]);


//Browsers
var wBrwsr = navigator.appName;
var wVersn = parseFloat(navigator.appVersion);



//-- Main Navigation
function SiteIndx(the_item,section_focus,URL_for_main,submenu)  {
document.location.href = daBaseURL + "/menu/" + the_item + URL_for_main + "?" + "section_focus=" + section_focus + "&the_item=" + the_item + "&submenu=" + submenu;
}

//-- Creates TwoDimensional Arrays
function imgFunct(name,img){
this.name = name;
this.img = img;	
}


//-- Flash Detection --//

var requiredVersion = 5;
var useRedirect = false;

// System globals
var flash2Installed = false;    // boolean. true if flash 2 is installed
var flash3Installed = false;    // boolean. true if flash 3 is installed
var flash4Installed = false;    // boolean. true if flash 4 is installed
var flash5Installed = false;    // boolean. true if flash 5 is installed
var flash6Installed = false;    // boolean. true if flash 6 is installed
var maxVersion = 6;             // highest version we can actually detect
var actualVersion = 0;          // version the user really has
var hasRightVersion = false;    // boolean. true if it's safe to embed the flash movie in the page
var jsVersion = 1.0;            // the version of javascript supported



var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;    // true if we're on ie
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false; // true if we're on windows


jsVersion = 1.1;

if(isIE && isWin){
  document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
  document.write('on error resume next \n');
  document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
  document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
  document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
  document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');  
  document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');  
  document.write('</SCR' + 'IPT\> \n'); // break up end tag so it doesn't end our script
}




function detectFlash() {  
  if (navigator.plugins) {
    if (navigator.plugins["Shockwave Flash 2.0"]
        || navigator.plugins["Shockwave Flash"]) {

      var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
      var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;

      var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
     
      flash2Installed = flashVersion == 2;    
      flash3Installed = flashVersion == 3;
      flash4Installed = flashVersion == 4;
      flash5Installed = flashVersion == 5;
      flash6Installed = flashVersion >= 6;
    }
  }
  
  for (var i = 2; i <= maxVersion; i++) {  
    if (eval("flash" + i + "Installed") == true) actualVersion = i;
  }
  
  if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 3;  
  
  if (actualVersion >= requiredVersion) {
    if (useRedirect) {
      if(jsVersion > 1.0) {
        window.location.replace(flashPage);  
      } else {
        window.location = flashPage;
      }
    }
    
    hasRightVersion = true;                
  } else {  
    if (useRedirect) {
      if(jsVersion > 1.0) {
        window.location.replace((actualVersion >= 2) ? upgradePage : noFlashPage);
      } else {
        window.location = (actualVersion >= 2) ? upgradePage : noFlashPage;
      }
    }
  }
}


detectFlash();

//-- Flash Detection --//


// INDEX PAGE
// Shows swfs depending on screen size
function showFlash(){
var SWidth = screen.width;
var stmt_swf = "";

if (!useRedirect) { 
  if(hasRightVersion) { 

    if (SWidth > 800) {
    stmt_swf += "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"710\" height=\"250\" border=\"0\">"; 
    stmt_swf += "<param name=movie value=\""+daBaseURL+"/media/images/currentPromos/swfx107.swf\">";
    stmt_swf += "<param name=quality value=high>";
    stmt_swf += "<param name=menu value=false>";
    stmt_swf += "<embed src=\""+daBaseURL+"/media/images/currentPromos/swfx107.swf\" quality=high pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width=\"710\" height=\"250\" border=\"0\">";
    stmt_swf += "</embed>";
    stmt_swf += "</object>";
    } else {
    stmt_swf += "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"540\" height=\"165\" border=\"0\">"; 
    stmt_swf += "<param name=movie value=\""+daBaseURL+"/media/images/currentPromos/swfx86.swf\">";
    stmt_swf += "<param name=quality value=high>";
    stmt_swf += "<param name=menu value=false>";
    stmt_swf += "<embed src=\""+daBaseURL+"/media/images/currentPromos/swfx86.swf\" quality=high pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width=\"540\" height=\"165\">";
    stmt_swf += "</embed>";
    stmt_swf += "</object>";
    }
  
  } else {  
    
    if (SWidth > 800) {
    stmt_swf += "<a href=\"javascript:SiteIndx('currentPromos/promoFlash','personalbanking','/index.upb','')\">";
    stmt_swf += "<img src=\""+daBaseURL+"/media/images/currentPromos/noFlash_107.jpg\" width=\"710\" height=\"250\" border=\"0\">"   
    stmt_swf += "</a>";
    } else {
    stmt_swf += "<a href=\"javascript:SiteIndx('currentPromos/promoFlash','personalbanking','/index.upb','')\">";
    stmt_swf += "<img src=\""+daBaseURL+"/media/images/currentPromos/noFlash_86.jpg\" width=\"540\" height=\"165\" border=\"0\">"
    stmt_swf += "</a>";
    }
  
  }
}
return stmt_swf;
}




function logFunct(accLog) {
var daFrm = document.leftFrm;
var vldtd = true;

for(var i=0; i<daFrm.elements.length; i++){
if ((daFrm.elements[i].type == "text" || daFrm.elements[i].type == "password") && daFrm.elements[i].value == "") {
 alert ("Please fill out all fields")
 daFrm.elements[i].focus()
 vldtd = false;
 break;
} 
}

if (vldtd) {
if (accLog == "upibLog") {
newPage = "https://web.archive.org/web/20030603200606/https://secure.fundsxpress.com/piles/fxweb.pile/fx";  // /piles/fxweb.pile/fx - FX login
} else if  (accLog == "updateLog") {
newPage = "https://web.archive.org/web/20030603200606/https://update.upbna.com/update_pro/cgi-bin/dologin.cgi"; // dologin.cgi - UPDATE login
}  else if  (accLog == "upivLog") {
newPage = "https://web.archive.org/web/20030603200606/https://www41.fiibg.com/my/unionplanters/jsp/login";	// /my/unionplanters/jsp/login - UPInvesting login
} else if  (accLog == "upmrtLog") {
newPage = "https://web.archive.org/web/20030603200606/http://www.unionplanters.com/mortservice/sso.asp";	// cs_redirect.upb
} else if  (accLog == "uptrLog") {
newPage = "https://web.archive.org/web/20030603200606/http://www.wealthmanagement-wms.com/AddVantageWebAccess/logon/procLogon.asp";	// https://www.wealthmanagement-wms.com/addvantagewebaccess
}
daFrm.action = newPage;
daFrm.method = "POST"
daFrm.submit();
}
}





//Account Tables Index Page
/*var upib = "";
upib += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"0\" border=\"0\">";
upib += "<tr>";
upib += "<td colspan=\"2\" align=\"center\" valign=\"top\">";
upib += "<input type=\"button\" value=\"Log into Account\" onClick=\"document.location='https://web.archive.org/web/20030603200606/https://upib.unionplanters.com/upib'\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('currentPromos/promoOne','personalbanking','/index.upb','')\"></td>";
upib += "</tr>";
upib += "</table>";

var upbiz = "";
upbiz += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"0\" border=\"0\">";
upbiz += "<tr>";
upbiz += "<td colspan=\"2\" align=\"center\" valign=\"top\">";
upbiz += "<input type=\"button\" value=\"Log into Account\" onClick=\"document.location='https://web.archive.org/web/20030603200606/https://upibbiz.unionplanters.com/upib'\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('currentPromos/promoOne','personalbanking','/index.upb','')\"></td>";
upbiz += "</tr>";
upbiz += "</table>";


var updt = "";
updt += "<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\">";
updt += "<tr>";
updt += "<td width=\"50%\" class=\"Slctd\">Customer&nbsp;ID: </td>";
updt += "<td width=\"50%\" align=\"left\" valign=\"middle\"><input type=\"text\" name=\"CustId\" class=\"inptClass\"></td>";
updt += "</tr>";
updt += "<tr>";
updt += "<td class=\"Slctd\">Customer&nbsp;Password: </td>";
updt += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"CustPass\" class=\"inptClass\"><input type=\"hidden\" name=\"QueryString\" value=\"\"><input type=\"hidden\" name=\"NextCGIProgram\" value=\"welcome.cgi\"></td>";
updt += "</tr>";
updt += "<tr>";
updt += "<td class=\"Slctd\">User&nbsp;ID: </td>";
updt += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"UserId\" class=\"inptClass\"></td>";
updt += "</tr>";
updt += "<tr>";
updt += "<td class=\"Slctd\">User&nbsp;Password: </td>";
updt += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"UserPass\" class=\"inptClass\"></td>";
updt += "</tr>";
updt += "<tr>";
updt += "<td colspan=\"2\" align=\"left\" valign=\"middle\">";
updt += "<input type=\"button\" value=\"Log into Account\" onClick=\"logFunct('updateLog')\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/index.upb','')\">";
updt += "</td>";
updt += "</tr>";
updt += "</table>";


var upiv = "";
upiv += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"0\" border=\"0\">";
upiv += "<tr>";
upiv += "<td colspan=\"2\" align=\"center\" valign=\"top\">";
upiv += "<input type=\"button\" value=\"Log into Account\" onClick=\"document.location='https://web.archive.org/web/20030603200606/https://www.fiibg.com/my/unionplanters'\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('investments/UPInvesting','investments','/index.upb','')\">";
upiv += "</td>";  
upiv += "</tr>";
upiv += "</table>";


var upmt = "";
upmt += "<table width=\"100%\" height=\"100\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\">";
upmt += "<tr>";
upmt += "<td width=\"40%\" class=\"Slctd\">Loan&nbsp;Number: </td>";
upmt += "<td width=\"60%\" align=\"left\" valign=\"middle\"><input type=\"text\" name=\"InputLoanNumber\" class=\"inptClass\"></td>";
upmt += "</tr>";
upmt += "<tr>";
upmt += "<td class=\"Slctd\">Pin: </td>";
upmt += "<td align=\"right\" valign=\"middle\"><input type=\"password\" name=\"InputPin\" class=\"inptClass\"></td>";
upmt += "</tr>";
upmt += "<tr>";
upmt += "<td colspan=\"2\" align=\"center\" valign=\"middle\">";
upmt += "<input type=\"button\" value=\"Log into Account\" onClick=\"logFunct('upmrtLog')\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"document.location='https://web.archive.org/web/20030603200606/http://mortgage.upbna.com'\">";
upmt += "</td>";
upmt += "</tr>";
upmt += "</table>";


var upEmp = "";
upEmp += "<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\">";
upEmp += "<tr>";
upEmp += "<td colspan=\"2\" height=\"10\" align=\"center\" valign=\"top\"><img src=\"/media/images/spacer.gif\" width=\"5\" height=\"20\" border=\"0\"></td>";
upEmp += "</tr>";
upEmp += "<tr>";
upEmp += "<td colspan=\"2\" align=\"center\" valign=\"top\">";
upEmp += "<input type=\"button\" value=\"Log into Account\" onClick=\"document.location='https://web.archive.org/web/20030603200606/https://www.paycardsolutions.com/uppaycard'\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/index.upb','')\">";
upEmp += "</td>";
upEmp += "</tr>";
upEmp += "</table>";


var upEmpe = "";
upEmpe += "<table width=\"98%\" border=\"0\" cellspacing=\"1\" cellpadding=\"0\">";
upEmpe += "<tr>";
upEmpe += "<td colspan=\"2\" align=\"center\" valign=\"top\">";
upEmpe += "<input type=\"button\" value=\"Log into Account\" onClick=\"document.location='https://web.archive.org/web/20030603200606/https://www.onlinepaycard.com/uppaycard'\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/index.upb','')\">";
upEmpe += "</td>";
upEmpe += "</tr>";
upEmpe += "</table>";


var uptr = "";
uptr += "<table width=\"98%\" height=\"100\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
uptr += "<tr>";
uptr += "<td width=\"40%\" class=\"Slctd\">User ID: </td>";
uptr += "<td width=\"60%\" align=\"left\" valign=\"middle\"><input type=\"text\" name=\"txtUserID\" class=\"inptClass\"></td>";
uptr += "</tr>";
uptr += "<tr>";
uptr += "<td class=\"Slctd\">Password: </td>";
uptr += "<td align=\"right\" valign=\"middle\"><input type=\"password\" name=\"txtPassword\" class=\"inptClass\"></td>";
uptr += "</tr>";
uptr += "<tr>";
uptr += "<td colspan=\"2\" align=\"center\" valign=\"middle\">";
uptr += "<input type=\"button\" value=\"Log into Account\" onClick=\"logFunct('uptrLog')\">&nbsp;<input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('investments/UPTrustOnline','investments','/index.upb','')\">";
uptr += "</td>";
uptr += "</tr>";
uptr += "</table>";

var theImg = "<img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\">";
*/

//Change AccSelect Tables
function ChangeTxt() { 
var daFrm = document.leftFrm;
var slctOptn = daFrm.indxSlct;
var slctAcc = slctOptn.options[slctOptn.selectedIndex].value;
 
 if(slctAcc == "upib"){ 
 document.location = "https://web.archive.org/web/20030603200606/https://upib.unionplanters.com/upib" //""+daBaseURL+"/menu/personalbanking/UPIB/temp.upb?section_focus=personalbanking&the_item=personalbanking/UPIB&submenu=";
 }
 else if(slctAcc == "upbiz"){ 
document.location = "https://web.archive.org/web/20030603200606/https://upibbiz.unionplanters.com/upib" //""+daBaseURL+"/menu/businessbanking/UPBiz/temp.upb?section_focus=businessbanking&the_item=businessbanking/UPBiz&submenu=";
 }
 else if(slctAcc == "updt"){ 
 document.location = "https://web.archive.org/web/20030603200606/https://update.upbna.com/update_pro/cgi-bin/welcome.cgi";
 }
 else if(slctAcc == "upiv"){ 
 document.location = "https://web.archive.org/web/20030603200606/https://www31.fiibg.com/my/unionplanters";
 }
 else if(slctAcc == "upmt"){ 
 document.location = "https://web.archive.org/web/20030603200606/http://www.unionplanters.com/mortservice/sso.asp"; 
 }
 else if(slctAcc == "upEmp"){ 
 document.location = "https://web.archive.org/web/20030603200606/https://www.paycardsolutions.com/uppaycard";
 }
 else if(slctAcc == "upEmpe"){ 
 document.location = "https://web.archive.org/web/20030603200606/https://www.onlinepaycard.com/uppaycard";
 }
 else if(slctAcc == "uptr"){ 
 document.location = "https://web.archive.org/web/20030603200606/http://www.wealthmanagement-wms.com/AddVantageWebAccess/logon/procLogon.asp"; 
 }
}



//index page MouseOvers
function styleOver(cellBk,dv1,dv2)
{
document.getElementById(cellBk).style.backgroundColor= "#40668C";
document.getElementById(dv1).className= "indexTxtSlctd";
document.getElementById(dv2).className='indexTxtSlctd';
}


function styleOut(cellBk,dv1,dv2)
{
document.getElementById(cellBk).style.backgroundColor='#FFFFFF';
document.getElementById(dv1).className='doink';
document.getElementById(dv2).className='indexTxt';
}


function changeit(lyrOne,lyrTwo,lyrThr,lyrFr,sctn,txt){
var theTable ="";

if(document.layers){

theTable +="<table width=\"100%\" height=\"20\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgColor=\"40668C\">";
theTable +="<tr>";
theTable +="<td><img src=\"/media/images/sec_tri.gif\" width=\"10\" height=\"18\" border=\"0\"></td>";
theTable +="<td width=\"2%\"><img src=\"/media/images/spacer.gif\" width=\"5\" height=\"1\" border=\"0\"></td>";
theTable +="<td width=\"98%\" height=\"20\" class=\"topMenuB\">";
theTable +="<a href=\"javascript:SiteIndx('"+sctn+"','"+sctn+"','/index.upb','')\">"+ txt +"</a>";
theTable +="</td>";
theTable +="</tr>";
theTable +="</table>";

eval("document."+lyrOne+".document."+lyrTwo+".document."+lyrThr+".document."+lyrFr+".document.write(theTable)");
eval("document."+lyrOne+".document."+lyrTwo+".document."+lyrThr+".document."+lyrFr+".document.close()");
}
}


function changeitBk(lyrOne,lyrTwo,lyrThr,lyrFr,sctn,txt){
var theTable ="";

if(document.layers){
 theTable +="<table width=\"100%\" height=\"20\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
 theTable +="<tr>";
 theTable +="<td><img src=\"/media/images/sec_tri.gif\" width=\"10\" height=\"18\" border=\"0\"></td>";
 theTable +="<td width=\"2%\"><img src=\"/media/images/spacer.gif\" width=\"5\" height=\"1\"></td>";
 theTable +="<td width=\"98%\" height=\"20\" class=\"topMenu\">";
 theTable +="<a href=\"javascript:SiteIndx('"+sctn+"','"+sctn+"','/index.upb','')\">"+txt+"</a>";
 theTable +="</td>";
 theTable +="</tr>";
 theTable +="</table>"

eval("document."+lyrOne+".document."+lyrTwo+".document."+lyrThr+".document."+lyrFr+".document.write(theTable)");
eval("document."+lyrOne+".document."+lyrTwo+".document."+lyrThr+".document."+lyrFr+".document.close()");

}
}





//MouseOvers for NS4
//-- Corner Color Change --//
function crnImg(iImg,lImg) {
if (document.layers) {
document.layers[iImg].document.layers[lImg].bgColor='#42658C';
}
}

function crnImgBk(iImg,lImg) {
if (document.layers) {
document.layers[iImg].document.layers[lImg].bgColor='#FFFFFF';
}
}


//-- topNav MouseOvers--//
function lyrChng(lyrOne,lyrTwo,txt,link){
if (document.layers){
var lyrCntnt ="";

 lyrCntnt += "<table width=\"100%\" bgColor=\"#42658C\"  height=\"20\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
 lyrCntnt += "<tr>";
 lyrCntnt += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/sec_tri.gif\" width=\"10\" height=\"18\"></td>";
 lyrCntnt += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\"></td>";
 lyrCntnt += "<td align=\"left\" class=\"topMenuB\" onClick=\"javascript:SiteIndx('"+link+"','"+link+"','/index.upb','')\">";
 lyrCntnt += "<a href=\"javascript:SiteIndx('"+link+"','"+link+"','/index.upb','')\">"+txt+"</a>";
 lyrCntnt += "</td>";
 lyrCntnt += "<td width=\"1%\" bgColor=\"#37597F\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\" ></td>";
 lyrCntnt += "</tr>";
 lyrCntnt += "</table>";

eval("document."+ lyrOne +".document."+ lyrTwo +".document.write(lyrCntnt)");
eval("document."+ lyrOne +".document."+ lyrTwo +".document.close()");
}
}

function lyrChngBk(lyrOne,lyrTwo,txt){
if (document.layers){
var lyrCntnt ="";

lyrCntnt += "<table bgColor=\"#FFFFFF\" width=\"100%\" height=\"20\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
lyrCntnt += "<tr>";
lyrCntnt += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/sec_tri.gif\" width=\"10\" height=\"18\"></td>";
lyrCntnt += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\"></td>";
lyrCntnt += "<td align=\"left\" class=\"topMenu\">";
lyrCntnt += "<a href=\"\">"+txt+"</a>";
lyrCntnt += "</td>";
lyrCntnt += "<td width=\"1%\" bgColor=\"#37597F\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\" ></td>";
lyrCntnt += "</tr>";
lyrCntnt += "</table>";

eval("document."+ lyrOne +".document."+ lyrTwo +".document.write(lyrCntnt)");
eval("document."+ lyrOne +".document."+ lyrTwo +".document.close()");
}
}


function topNav()	{
var daArry = topNav.arguments;
var tpNavTbl = "";

tpNavTbl += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
tpNavTbl += "<tr>";
tpNavTbl += "<td background=\""+daBaseURL+"/media/images/doc_inside_bk.gif\" align=\"left\" valign=\"top\"><a href=\""+daBaseURL+"\"><img src=\""+daBaseURL+"/media/images/doc_inside_UPlogo.gif\" width=\"150\" height=\"55\" border=\"0\"></a></td>";
tpNavTbl += "<td background=\""+daBaseURL+"/media/images/doc_inside_bk.gif\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\"></td>";
tpNavTbl += "<td background=\""+daBaseURL+"/media/images/doc_inside_bk.gif\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\"></td>";
tpNavTbl += "<td background=\""+daBaseURL+"/media/images/doc_inside_bk.gif\" align=\"right\" valign=\"bottom\">";

 tpNavTbl += "<table  width=\"300\" height=\"30\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" background=\"\">";
 tpNavTbl += "<form name=\"topFrm\" method=\"get\" action=\""+daBaseURL+"/menu/search/index.upb\">";
 tpNavTbl += "<tr>";
 tpNavTbl += "<td width=\"10\"><img src=\""+daBaseURL+"/media/images/doc_srch.gif\" width=\"10\" height=\"30\"></td>";
 tpNavTbl += "<td width=\"50\" align=\"right\" class=\"srch\" bgcolor=\"#336699\"><p>Search:&nbsp;</p></td>";
 tpNavTbl += "<td width=\"130\" bgcolor=\"#336699\" align=\"center\"><input type=\"text\" size=\"12\" name=\"SearchString\" class=\"inptClass\"><input type=\"hidden\" name=\"Action\" value=\"Execute\"><input type=\"hidden\" name=\"section_focus\" value=\"upinformation\"><input type=\"hidden\" name=\"the_item\" value=\"upinformation\"></td>";
 tpNavTbl += "<td width=\"30\" bgcolor=\"#336699\"><input type=\"image\" src=\""+daBaseURL+"/media/images/doc_srch_go.gif\" width=\"26\" height=\"19\" border=\"0\" onClick=\"javascript:document.topFrm.action='"+daBaseURL+"/menu/search/index.upb';document.topFrm.submit();\"></td>";
 tpNavTbl += "<td width=\"5\" bgcolor=\"#336699\"><img src=\""+daBaseURL+"/media/images/contact.gif\" width=\"5\" height=\"30\"></td>";
 tpNavTbl += "<td width=\"75\" class=\"srch\" bgcolor=\"#336699\" align=\"center\"><a href=\"javascript:SiteIndx('contact','upinformation','/Index.upb','');\"><b>Contact us</b></a></td>";
 tpNavTbl += "</tr>";
 tpNavTbl += "</form>";
 tpNavTbl += "</table>";
/*
 //ionel- the original    
 tpNavTbl += "<table  width=\"300\" height=\"30\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" background=\"\">";
 tpNavTbl += "<form name=\"topFrm\">";
 tpNavTbl += "<tr>";
 tpNavTbl += "<td width=\"10\"><img src=\""+daBaseURL+"/media/images/doc_srch.gif\" width=\"10\" height=\"30\"></td>";
 tpNavTbl += "<td width=\"50\" align=\"right\" class=\"srch\" bgcolor=\"#336699\"><p>Search:&nbsp;</p></td>";
 tpNavTbl += "<td width=\"130\" bgcolor=\"#336699\" align=\"center\"><input type=\"text\" size=\"12\" name=\"srch\" class=\"inptClass\"></td>";
 tpNavTbl += "<td width=\"30\" bgcolor=\"#336699\"><input type=\"image\" src=\""+daBaseURL+"/media/images/doc_srch_go.gif\" width=\"26\" height=\"19\" border=\"0\" onClick=\"goFunct()\"></td>";
 tpNavTbl += "<td width=\"5\" bgcolor=\"#336699\"><img src=\""+daBaseURL+"/media/images/contact.gif\" width=\"5\" height=\"30\"></td>";
 tpNavTbl += "<td width=\"75\" class=\"srch\" bgcolor=\"#336699\" align=\"center\"><a href=\"javascript:SiteIndx('contact','upinformation','/Index.upb','');\"><b>Contact us</b></a></td>";
 tpNavTbl += "</tr>";
 tpNavTbl += "</form>";
 tpNavTbl += "</table>";
*/		
tpNavTbl += "</td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td height=\"1\" bgColor=\"#FFFFFF\" colspan=\"4\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\"></td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td bgColor=\"#6E8CA8\" colspan=\"4\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td align=\"left\" valign=\"top\"><img src=\""+daBaseURL+"/media/images/doc_inside_acc_login.gif\" width=\"150\" height=\"20\" border=\"0\"></td>"
if (section_focus == "personalbanking") {
tpNavTbl += "<td bgColor=\"#42658C\" align=\"left\" valign=\"top\">"
} else {
tpNavTbl += "<td bgColor=\"#FFFFFF\" align=\"left\" valign=\"top\">"
}
tpNavTbl += "<div id=\"imgCnr\"><ilayer name=\"i_cnr\" width=\"100%\"><layer name=\"l_cnr\" width=\"100%\"><img src=\""+daBaseURL+"/media/images/imgCnr.gif\" width=\"20\" height=\"20\" border=\"0\"></layer></ilayer></div></td>";
tpNavTbl += "<td width=\"98%\" align=\"left\" colspan=\"2\">";

 if (daArry.length > 0) {
 tpNavTbl += "<table width=\"100%\" height=\"20\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
 tpNavTbl += "<tr>";
 
 var daLinkTextPair
 var i = 0;
 while (i < daArry.length) {
 daLinkTextPair = daArry[i].split("|"); 
 
 if (daLinkTextPair[2] >= 1) {
	
	if(daLinkTextPair[4] == section_focus) {
	tpNavTbl += "<td width=\"21%\" height=\"20\" bgColor=\"#42658C\" align=\"left\" valign=\"top\" class=\"topMenuB\">";
	tpNavTbl += "<ilayer name=\"one\">";
	tpNavTbl += "<layer name=\"two\">";	

	} else if (daLinkTextPair[4].indexOf("personalbanking") != -1) {
	tpNavTbl += "<td width=\"21%\" height=\"20\" align=\"left\" valign=\"top\" class=\"topMenu\" onMouseOver=\"this.style.backgroundColor='#42658C';this.className='topMenuB';document.getElementById('imgCnr').style.backgroundColor='#42658C';\" onMouseOut=\"this.style.backgroundColor='#FFFFFF';this.className='topMenu';document.getElementById('imgCnr').style.backgroundColor='#FFFFFF';\" onClick=\""+daLinkTextPair[1]+"\">";
	tpNavTbl += "<ilayer name=\"i_"+i+"_lyr\">";
	tpNavTbl += "<layer name=\"l_"+i+"_lyr\" align=\"left\" valign=\"top\" onMouseOver=\"crnImg('i_cnr','l_cnr');lyrChng('i_"+i+"_lyr','l_"+i+"_lyr','"+daLinkTextPair[0]+"','"+daLinkTextPair[4]+"');\" onMouseOut=\"crnImgBk('i_cnr','l_cnr');lyrChngBk('i_"+i+"_lyr','l_"+i+"_lyr','"+daLinkTextPair[0]+"');\">";
 	
 	} else {
	tpNavTbl += "<td width=\"21%\" height=\"20\" align=\"left\" valign=\"top\" class=\"topMenu\" onMouseOver=\"this.style.backgroundColor='#42658C';this.className='topMenuB';\" onMouseOut=\"this.style.backgroundColor='#FFFFFF';this.className='topMenu';\" onClick=\""+daLinkTextPair[1]+"\">";
	tpNavTbl += "<ilayer name=\"i_"+i+"_lyr\">";
	tpNavTbl += "<layer name=\"l_"+i+"_lyr\" align=\"left\" valign=\"top\" onMouseOver=\"lyrChng('i_"+i+"_lyr','l_"+i+"_lyr','"+daLinkTextPair[0]+"','"+daLinkTextPair[4]+"');\" onMouseOut=\"lyrChngBk('i_"+i+"_lyr','l_"+i+"_lyr','"+daLinkTextPair[0]+"');\">";
	}

 	//Repeating Tables
 	tpNavTbl += "<table width=\"100%\" height=\"20\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	tpNavTbl += "<tr>";
	tpNavTbl += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/sec_tri.gif\" width=\"10\" height=\"18\"></td>";
	tpNavTbl += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"4\" height=\"4\"></td>";
	tpNavTbl += "<td align=\"left\">";
	tpNavTbl += "<a href=\""+daLinkTextPair[1]+"\">";
	tpNavTbl += daLinkTextPair[0];
	tpNavTbl += "</a>";
	tpNavTbl += "</td>";
	tpNavTbl += "<td width=\"1%\" bgColor=\"#37597F\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\" ></td>";
	tpNavTbl += "</tr>";
	tpNavTbl += "</table>";
		
	tpNavTbl += "</layer>";
	tpNavTbl += "</ilayer>";
	tpNavTbl += "</td>";
	}
	i++
	}
	tpNavTbl += "</tr>";
	tpNavTbl += "</table>";
 }
tpNavTbl += "</td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td bgColor=\"#08325F\" colspan=\"4\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td bgColor=\"#C9D0D8\" colspan=\"4\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
tpNavTbl += "</tr>";
tpNavTbl += "<tr>";
tpNavTbl += "<td bgColor=\"#E1EBF5\" colspan=\"4\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
tpNavTbl += "</tr>";
tpNavTbl += "</table>";

return tpNavTbl;
}




//Account Tables Menu Pages
var upib2 = "";
upib2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
upib2 += "<tr>";
upib2 += "<td class=\"Slctd\" bgColor=\"#003366\">Access ID: </td>";
upib2 += "</tr>";
upib2 += "<tr>";
upib2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"aid\" size=\"14\" class=\"inptClass\"></td>";
upib2 += "</tr>";
upib2 += "<tr>";
upib2 += "<td class=\"Slctd\" bgColor=\"#003366\">Passcode: </td>";
upib2 += "</tr>";
upib2 += "<tr>";
upib2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"passcode\" size=\"14\" class=\"inptClass\"></td>";
upib2 += "</tr>";
upib2 += "<tr>";
upib2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('upibLog')\"></td>";
upib2 += "</tr>";
upib2 += "<tr>";
upib2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('currentPromos/promoOne','personalbanking','/index.upb','')\"><input type=\"hidden\" name=\"gid\" value=\"UP\"></td>";
upib2 += "</tr>";
upib2 += "</table>";

var updt2 = "";
updt2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
updt2 += "<tr>";
updt2 += "<td class=\"Slctd\" bgColor=\"#003366\">Customer ID: </td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"CustId\" size=\"14\" class=\"inptClass\"></td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td class=\"Slctd\" bgColor=\"#003366\">Customer Password: </td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"CustPass\" size=\"14\" class=\"inptClass\"></td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td class=\"Slctd\" bgColor=\"#003366\">User ID: </td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"UserId\" size=\"14\" class=\"inptClass\"></td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td class=\"Slctd\" bgColor=\"#003366\">User Password: </td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"UserPass\" size=\"14\" class=\"inptClass\"><input type=\"hidden\" name=\"QueryString\" value=\"\"><input type=\"hidden\" name=\"NextCGIProgram\" value=\"welcome.cgi\"></td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('updateLog')\"></td>";
updt2 += "</tr>";
updt2 += "<tr>";
updt2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/index.upb','')\"></td>";
updt2 += "</tr>";
updt2 += "</table>";

var upiv2 = "";
upiv2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
/*upiv2 += "<tr>";
upiv2 += "<td class=\"Slctd\" bgColor=\"#003366\">User ID: </td>";
upiv2 += "</tr>";
upiv2 += "<tr>";
upiv2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"I_Username\" size=\"14\" class=\"inptClass\"></td>";
upiv2 += "</tr>";
upiv2 += "<tr>";
upiv2 += "<td class=\"Slctd\" bgColor=\"#003366\">Pin: </td>";
upiv2 += "</tr>";
upiv2 += "<tr>";
upiv2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"I_Password\" size=\"14\" class=\"inptClass\"></td>";
upiv2 += "</tr>";*/
upiv2 += "<tr>";
upiv2 += "<td align=\"center\" valign=\"middle\" class=\"inptClass\"><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('upivLog')\"></td>";
upiv2 += "</tr>";
upiv2 += "<tr>";
upiv2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('investments/UPInvesting','investments','/index.upb','')\"></td>";
upiv2 += "</tr>";
upiv2 += "</table>";

var upmt2 = "";
upmt2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
upmt2 += "<tr>";
upmt2 += "<td class=\"Slctd\" bgColor=\"#003366\">Loan Number: </td>";
upmt2 += "</tr>";
upmt2 += "<tr>";
upmt2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"InputLoanNumber\" size=\"14\" class=\"inptClass\"></td>";
upmt2 += "</tr>";
upmt2 += "<tr>";
upmt2 += "<td class=\"Slctd\" bgColor=\"#003366\">Pin: </td>";
upmt2 += "</tr>";
upmt2 += "<tr>";
upmt2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"InputPin\" size=\"14\" class=\"inptClass\"></td>";
upmt2 += "</tr>";
upmt2 += "<tr>";
upmt2 += "<td align=\"center\" valign=\"middle\" class=\"inptClass\"><input type=\"button\"value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('upmrtLog')\"></td>";
upmt2 += "</tr>";
upmt2 += "<tr>";
upmt2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"document.location.href = 'https://web.archive.org/web/20030603200606/http://mortgage.upbna.com'\"></td>";
upmt2 += "</tr>";
upmt2 += "</table>";

var uppc2 = "";
uppc2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
/*uppc2 += "<tr>";
uppc2 += "<td class=\"Slctd\" bgColor=\"#003366\">User ID: </td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"aid\" size=\"14\" class=\"inptClass\"></td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td class=\"Slctd\" bgColor=\"#003366\">Password: </td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"passcode\" size=\"14\" class=\"inptClass\"></td>";
uppc2 += "</tr>";*/
uppc2 += "<tr>";
uppc2 += "<td align=\"left\" valign=\"middle\" class=\"disclosure\"><input type=\"radio\" value=\"employer\" name=\"emp\">employer<br><input type=\"radio\" value=\"employer\" name=\"emp\">employee</td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('uppcLog')\"></td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/index.upb','')\"></td>";
uppc2 += "</tr>";
uppc2 += "</table>";

var uppcE = "";
uppcE += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
/*uppc2 += "<tr>";
uppc2 += "<td class=\"Slctd\" bgColor=\"#003366\">User ID: </td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"aid\" size=\"14\" class=\"inptClass\"></td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td class=\"Slctd\" bgColor=\"#003366\">Password: </td>";
uppc2 += "</tr>";
uppc2 += "<tr>";
uppc2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"passcode\" size=\"14\" class=\"inptClass\"></td>";
uppc2 += "</tr>";*/
uppcE += "<tr>";
uppcE += "<td align=\"left\" valign=\"middle\" class=\"disclosure\"><input type=\"radio\" value=\"employer\" name=\"emp\">employer<br><input type=\"radio\" value=\"employer\" name=\"emp\">employee</td>";
uppcE += "</tr>";
uppcE += "<tr>";
uppcE += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('uppcLog')\"></td>";
uppcE += "</tr>";
uppcE += "<tr>";
uppcE += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/index.upb','')\"></td>";
uppcE += "</tr>";
uppcE += "</table>";

var uptr2 = "";
uptr2 += "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"1\" border=\"0\" background=\"\">";
uptr2 += "<tr>";
uptr2 += "<td class=\"Slctd\" bgColor=\"#003366\">User ID: </td>";
uptr2 += "</tr>";
uptr2 += "<tr>";
uptr2 += "<td align=\"left\" valign=\"middle\"><input type=\"text\" name=\"txtUserID\" size=\"14\" class=\"inptClass\"></td>";
uptr2 += "</tr>";
uptr2 += "<tr>";
uptr2 += "<td class=\"Slctd\" bgColor=\"#003366\">Password: </td>";
uptr2 += "</tr>";
uptr2 += "<tr>";
uptr2 += "<td align=\"left\" valign=\"middle\"><input type=\"password\" name=\"txtPassword\" size=\"14\" class=\"inptClass\"></td>";
uptr2 += "</tr>";
uptr2 += "<tr>";
uptr2 += "<td align=\"center\" valign=\"middle\" ><input type=\"button\" value=\"Log into Account\" class=\"inptClass\" onClick=\"logFunct('uptrLog');\"></td>";
uptr2 += "</tr>";
uptr2 += "<tr>";
uptr2 += "<td align=\"center\" valign=\"middle\"><input type=\"button\" value=\"Learn More\" class=\"btnColr\" onClick=\"javascript:SiteIndx('investments/UPTrustOnline','investments','/index.upb','')\"></td>";
uptr2 += "</tr>";
uptr2 += "</table>";


var theImg = "<img src=\"img/spacer.gif\" width=\"1\" height=\"2\">";







/*

//Change AccSelect Tables
function changeAccnt() { 
var daFrm = document.leftFrm;
var slctOptn = daFrm.slctr;
var slctAcc = slctOptn.options[slctOptn.selectedIndex].value;
var newWin = "";

if (wBrwsr == "Microsoft Internet Explorer") {
 if(slctAcc == "upib"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://secure.fundsxpress.com/piles/fxweb.pile/fx?gid=UP" //document.all('accSlctd').innerHTML = upib2; 
 }
 else if(slctAcc == "updt"){ 
 document.all('accSlctd').innerHTML = updt2; 
 }
 else if(slctAcc == "upiv"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.fiibg.com/my/unionplanters" //document.all('accSlctd').innerHTML = upiv2; 
 }
 else if(slctAcc == "upmt"){ 
 document.all('accSlctd').innerHTML = upmt2; 
 }
 else if(slctAcc == "uppc"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.paycardsolutions.com/uppaycard"	 //document.all('accSlctd').innerHTML = uppc2; 
 }
 else if(slctAcc == "uppc2"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.onlinepaycard.com/uppaycard"//document.all('accSlctd').innerHTML = uppc2; 
 }
 else if(slctAcc == "uptr"){ 
 document.all('accSlctd').innerHTML = uptr2; 
 }
 else if(slctAcc == ""){ 
 document.all('accSlctd').innerHTML = theImg; 
 }

} else if((wBrwsr == "Netscape") && (wVersn >= 5)){

 if(slctAcc == "upib"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://secure.fundsxpress.com/piles/fxweb.pile/fx?gid=UP" //document.getElementById('accSlctd').innerHTML = upib2; 
 }
 else if(slctAcc == "updt"){ 
 document.getElementById('accSlctd').innerHTML = updt2; 
 }
 else if(slctAcc == "upiv"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.fiibg.com/my/unionplanters" // document.getElementById('accSlctd').innerHTML = upiv2; 
 }
 else if(slctAcc == "upmt"){ 
 document.getElementById('accSlctd').innerHTML = upmt2; 
 }
 else if(slctAcc == "uppc"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.paycardsolutions.com/uppaycard" //document.getElementById('accSlctd').innerHTML = uppc2; 
 }
 else if(slctAcc == "uppc2"){ 
 document.location.href = "https://web.archive.org/web/20030603200606/https://www.onlinepaycard.com/uppaycard" //document.getElementById('accSlctd').innerHTML = uppc2; 
 }
 else if(slctAcc == "uptr"){ 
 document.getElementById('accSlctd').innerHTML = uptr2; 
 }
 else if(slctAcc == ""){ 
 document.getElementById('accSlctd').innerHTML = theImg; 
 }

} else {

	if(slctAcc == "upib"){
	document.location = "https://web.archive.org/web/20030603200606/https://secure.fundsxpress.com/piles/fxweb.pile/fx?gid=UP" //document.location.href=""+daBaseURL+"/menu/personalbanking/UPIB/index.upb?section_focus=personalbanking&the_item=personalbanking/UPIB"	
	}
	else if (slctAcc == "updt"){
	document.location = ""+daBaseURL+"/menu/businessbanking/UPDATE/index.upb?section_focus=businessbanking&the_item=businessbanking/UPDATE"
	}
	else if (slctAcc == "upiv"){
	document.location = "https://web.archive.org/web/20030603200606/https://www.fiibg.com/my/unionplanters" //document.location.href = ""+daBaseURL+"/menu/investments/UPInvesting/index.upb?section_focus=investments&the_item=investments/UPInvesting"
	}
	else if (slctAcc == "upmt"){
	document.location = "https://web.archive.org/web/20030603200606/http://mortgage.upbna.com"
	}
	else if (slctAcc == "uppc"){
	 document.location = "https://web.archive.org/web/20030603200606/https://www.paycardsolutions.com/uppaycard" //document.location.href = ""+daBaseURL+"/menu/businessbanking/UPPayCard/index.upb?section_focus=businessbanking&the_item=businessbanking/UPPayCard"
  }
  else if (slctAcc == "uppc2"){
	document.location = "https://web.archive.org/web/20030603200606/https://www.onlinepaycard.com/uppaycard" //document.location.href = ""+daBaseURL+"/menu/businessbanking/UPPayCard/index.upb?section_focus=businessbanking&the_item=businessbanking/UPPayCard"
	}
	else if (slctAcc == "uptr"){
	document.location = ""+daBaseURL+"/menu/investments/UPTrustOnline/index.upb?section_focus=investments&the_item=investments/UPTrustOnline"
	}
}
}

*/






var upNavArr= new Array();
upNavArr[0] = new imgFunct("personalbanking","pb")
upNavArr[1] = new imgFunct("businessbanking","bb")
upNavArr[2] = new imgFunct("insurance","in")
upNavArr[3] = new imgFunct("investments","iv")
upNavArr[4] = new imgFunct("upinformation","up")
upNavArr[5] = new imgFunct("contact","ct")

var onlSrvcArr= new Array();
onlSrvcArr[0] = new imgFunct("personalbanking/UPIB",theImg)
onlSrvcArr[1] = new imgFunct("businessbanking/UPDATE",updt2)
onlSrvcArr[2] = new imgFunct("investments/UPInvesting",theImg)
onlSrvcArr[3] = new imgFunct("investments/discount",theImg)
onlSrvcArr[4] = new imgFunct("investments/full",theImg)
onlSrvcArr[5] = new imgFunct("personalbanking/mortgage",upmt2)
onlSrvcArr[6] = new imgFunct("businessbanking/UPPayCard",theImg)
onlSrvcArr[7] = new imgFunct("investments/UPTrustOnline",uptr2)


function leftNav() {
var daArry = leftNav.arguments;
var lftNvTbl = "";

lftNvTbl += "<table width=\"150\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgColor=\"#E2E8EF\"> ";


lftNvTbl += "<form name=\"leftFrm\">";
lftNvTbl += "<tr>";
lftNvTbl += "<td align=\"left\" valign=\"top\">";

	//Accounts Table
	lftNvTbl += "<table width=\"150\" border=\"0\" cellspacing=\"2\" cellpadding=\"1\">";
	lftNvTbl += "<tr>";
	lftNvTbl += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"5\" height=\"1\"></td>";
	lftNvTbl += "</tr>";
	lftNvTbl += "<tr>"; 
	lftNvTbl += "<td align=\"center\" valign=\"middle\">";
	lftNvTbl += "<select name=\"indxSlct\" onChange=\"ChangeTxt()\" style=\"width:100%\">";
	lftNvTbl += "<option selected>Log in to Account</option>";
	lftNvTbl += "<option value=\"upib\">Internet Banking</option>";
	lftNvTbl += "<option value=\"upbiz\">Internet Banking Biz</option>";
	lftNvTbl += "<option value=\"updt\">UPDATE</option>";
	lftNvTbl += "<option value=\"upiv\">UPInvesting</option>";
  lftNvTbl += "<option value=\"upmt\">UPMortgage</option>";
	lftNvTbl += "<option value=\"upEmp\">UPPayCard-Employer</option>";
	lftNvTbl += "<option value=\"upEmpe\">UPPayCard-Employee</option>";
	lftNvTbl += "<option value=\"uptr\">UPTrust Online</option>";
	lftNvTbl += "</select>";
	lftNvTbl += "</td>";
	lftNvTbl += "</tr>";
	lftNvTbl += "<tr>";
	lftNvTbl += "<td><div id=\"accSlctd\">";
	lftNvTbl +=  theImg;
	/*for (var k=0;k<onlSrvcArr.length;k++) {
	if (the_item == onlSrvcArr[k].name) {
	lftNvTbl += onlSrvcArr[k].img
	}
	}*/
	lftNvTbl += "</div></td>"
	lftNvTbl += "</tr>";
	lftNvTbl += "</table>";
		
lftNvTbl += "</td>";
lftNvTbl += "</tr>";

lftNvTbl += "<tr>"; 
lftNvTbl += "<td>";



	if (daArry.length > 0) {
	lftNvTbl+= "<table width=\"150\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";

	var daLinkTextPair
	var i = 0;
	while (i < daArry.length) {
	daLinkTextPair = daArry[i].split("|"); 

	for(var j=0;j<upNavArr.length;j++){
	 if ((section_focus == upNavArr[j].name) && (daLinkTextPair[3] == upNavArr[j].img))	{
		if (daLinkTextPair[2] >= 1)	{
		lftNvTbl += "<tr align=\"left\" valign=\"top\">";
		lftNvTbl += "<td bgColor=\"#B7BCC1\" colspan=\"2\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\"></td>";
		lftNvTbl += "</tr>";
		lftNvTbl += "<tr>";
		lftNvTbl += "<td background=\""+daBaseURL+"/media/images/lnv_Hdr_bk2.gif\" height=\"16\" colspan=\"2\" class=\"topMenuB\">";
		lftNvTbl += "<a href=\""+daLinkTextPair[1]+"\">&nbsp;&nbsp;&nbsp;"+daLinkTextPair[0]+"</a>";
		lftNvTbl += "</td>";
		lftNvTbl += "</tr>";
		
		lftNvTbl += "<tr align=\"left\" valign=\"top\">";
		lftNvTbl += "<td bgColor=\"#9CA7B2\" colspan=\"2\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\" border=\"0\"></td>";
		lftNvTbl += "</tr>";
		lftNvTbl += "<tr align=\"left\" valign=\"top\">"; 
		lftNvTbl += "<td colspan=\"2\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"5\"></td>";
		lftNvTbl += "</tr>";
		} else {
		lftNvTbl += "<tr>";
		lftNvTbl += "<td width=\"11\" align=\"center\" valign=\"middle\">";
			if (the_item == daLinkTextPair[4]) {
			lftNvTbl += "<img src=\""+daBaseURL+"/media/images/small_tri.gif\" width=\"6\" height=\"10\">";
			} else {
			lftNvTbl += "<img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"6\" height=\"10\" name=\""+daLinkTextPair[3]+i+"\">";
			}
			lftNvTbl += "</td>";
			lftNvTbl += "<td width='140' align='left' valign='middle' class='leftMenu'>";
			lftNvTbl += "<a href=\""+daLinkTextPair[1]+"\""
			if (the_item != daLinkTextPair[4]) { 
			lftNvTbl += "onMouseOut=\"document."+daLinkTextPair[3]+i+".src='"+daBaseURL+"/media/images/spacer.gif';\" onMouseOver=\"document."+daLinkTextPair[3]+i+".src='"+daBaseURL+"/media/images/small_tri.gif';\""
		}
		lftNvTbl += ">"+daLinkTextPair[0]+"</a></td>";
		lftNvTbl += "</tr>";
		}
	 }
	}
	i++
	}
	lftNvTbl += "</table>";
	}
lftNvTbl += "</td>";
lftNvTbl += "</tr>";
lftNvTbl += "<tr>";
lftNvTbl += "<td><img src=\""+daBaseURL+"/media/images/doc_inside_table_boot2.gif\" width=\"152\" height=\"16\"></td>";
lftNvTbl += "</tr>";
lftNvTbl += "</form>";
lftNvTbl += "</table>";

return lftNvTbl;
}



function docFtr() {
var ftrTbl = "";


	ftrTbl += "<table width=\"100%\" border=\"0\" cellspacing=\"5\" cellpadding=\"0\">";

	ftrTbl += "<tr>";
	ftrTbl += "<td bgcolor=\"#003366\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
	ftrTbl += "</tr>";
	ftrTbl += "<tr>";
	ftrTbl += "<td align=\"left\" valign=\"middle\" class=\"footer\">";
	
	 	ftrTbl += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
		ftrTbl += "<tr>";
		ftrTbl += "<td width=\"70%\" align=\"left\" valign=\"middle\" class=\"footer\">";
		
		if (the_item == "investments/leader") {
		ftrTbl += "<a href=\"javascript:SiteIndx('upinformation/terms','upinformation','/index.upb','');\">Terms of Use</a> | <a href=\"javascript:SiteIndx('contact','contact','/index.upb','');\">Customer Service</a>";
		} else {
		ftrTbl += "<a href=\"javascript:SiteIndx('upinformation/privacy','upinformation','/index.upb','');\">Privacy Policy</a> | <a href=\"javascript:SiteIndx('upinformation/terms','upinformation','/index.upb','');\">Terms of Use</a> | <a href=\"javascript:SiteIndx('contact','contact','/index.upb','');\">Customer Service</a>";
		}
		ftrTbl += "<br>";
		if (section_focus == "investments" || section_focus == "insurance" || the_item == "personalbanking/currency")	{
		ftrTbl += "Union Planters refers to Union Planters Corporation, Union Planters Bank, N.A. and any of their affiliates.<br>Copyright © 2003 Union Planters Bank, N.A.  All Rights Reserved.";
		} else {
		ftrTbl += "Union Planters refers to Union Planters Corporation, Union Planters Bank, N.A. and any of their affiliates.<br>Copyright © 2003 Union Planters Bank, N.A.  All Rights Reserved.  Member FDIC.";
		}
	
		ftrTbl += "</td>";
		ftrTbl += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"15\" height=\"5\"></td>";
		ftrTbl += "<td width=\"30%\" align=\"right\" valign=\"middle\">";
	
		ftrTbl += "<table width=\"290\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
		ftrTbl += "<tr align=\"left\" valign=\"middle\">";
		ftrTbl += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"20\" height=\"5\"></td>";
		ftrTbl += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/ehl_logo.gif\" width=\"161\" height=\"22\" border=\"0\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"5\" height=\"1\" border=\"0\"></td>";
		ftrTbl += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/duo_thawteSeal_218bit.gif\" width=\"69\" height=\"43\" border=\"0\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"2\" height=\"0\" border=\"0\"></td>";
		ftrTbl += "<td align=\"right\"><img src=\""+daBaseURL+"/media/images/duo_nyse.gif\" width=\"39\" height=\"43\" border=\"0\"></td>";
		ftrTbl += "</tr>";
		ftrTbl += "</table>";
	
	ftrTbl += "</td>";
	ftrTbl += "</tr>";
	ftrTbl += "</table>";
	
	ftrTbl += "</td>";
	ftrTbl += "</tr>";
	ftrTbl += "</table>";

return ftrTbl;
}






//-- Online Services Array Function 
var UPIBMenuArr = "";
UPIBMenuArr += "\"Log In|https://upib.unionplanters.com/upib|login\",";  //javascript:SiteIndx('personalbanking/UPIB','personalbanking','/temp.upb','')
UPIBMenuArr += "\"Enroll Today|https://upib.unionplanters.com/UPIB/Enrollment/AgreementAndDisclosure.htm|enroll\",";  //javascript:SiteIndx('personalbanking/UPIB','personalbanking','/temp.upb','')
UPIBMenuArr += "\"Quick Tour|javascript:popUpPic('https://web.archive.org/web/20030603200606/https://www.unionplanters.com/emails/UPIB/rtl/quickTour',750,520)|tour\",";
UPIBMenuArr += "\"FAQs|javascript:SiteIndx('personalbanking/UPIB','personalbanking','/faqs.upb','faqs')|faqs\",";
UPIBMenuArr += "\"Security|javascript:SiteIndx('personalbanking/UPIB','personalbanking','/security.upb','security')|security\",";
UPIBMenuArr += "\"Disclosures|javascript:SiteIndx('personalbanking/UPIB','personalbanking','/disclosures.upb','disclosure')|disclosure\",";
UPIBMenuArr += "\"Contact Us|javascript:SiteIndx('contact','upinformation','/Index.upb','contact','')|contact\"";

var UPIBizMenuArr = "";
UPIBizMenuArr += "\"Log In|https://upibbiz.unionplanters.com/upib|login\",";  //javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/temp.upb','')
UPIBizMenuArr += "\"Enroll Today|https://www.unionplanters.com/emails/upib/biz/enroll/AgreementAndDisclosure.upb|enroll\",";  //javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/temp.upb','')
UPIBizMenuArr += "\"Quick Tour|javascript:popUpPic('https://web.archive.org/web/20030603200606/https://www.unionplanters.com/emails/UPIB/biz/quickTour',750,585)|tour\",";
UPIBizMenuArr += "\"FAQs|javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/faqs.upb','faqs')|faqs\",";
UPIBizMenuArr += "\"Disclosures|javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/disclosures.upb','disclosure')|disclosure\",";
UPIBizMenuArr += "\"Security|javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/security.upb','security')|security\",";
UPIBizMenuArr += "\"Contact Us|javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/contact.upb','contact')|contact\"";

var UPDATEMenuArr = "";
UPDATEMenuArr += "\"Log In|https://update.upbna.com/update_pro/cgi-bin/welcome.cgi|login\",";
UPDATEMenuArr += "\"System Requirements|javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/system.upb','system')|system\",";
UPDATEMenuArr += "\"FAQs|javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/faqs.upb','faq')|faq\",";
UPDATEMenuArr += "\"Security Information|javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/security.upb','security')|security\",";
UPDATEMenuArr += "\"Contact Us|javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/contact.upb','contact')|contact\"";

var UPINVMenuArr = "";
UPINVMenuArr += "\"Log In|https://www.fiibg.com/my/unionplanters|demo\",";
UPINVMenuArr += "\"Demo|javascript:popUpPic('https://web.archive.org/web/20030603200606/https://demo.fiibg.com/my/unionplanters',750,500)|demo\",";
UPINVMenuArr += "\"FAQs|javascript:SiteIndx('investments/upinvesting','investments','/faqs.upb','faq')|faq\",";
UPINVMenuArr += "\"Sign up|javascript:SiteIndx('investments/upinvesting','investments','/signup.upb','signup')|signup\",";
UPINVMenuArr += "\"Full Service Brokerage|javascript:SiteIndx('investments/full','investments','/index.upb','full')|full\",";
UPINVMenuArr += "\"Discount Brokerage|javascript:SiteIndx('investments/discount','investments','/index.upb','discount')|discount\",";
UPINVMenuArr += "\"Funding your Brokerage Account|javascript:SiteIndx('investments/upinvesting','investments','/funding.upb','account')|account\",";
UPINVMenuArr += "\"Terms and Conditions|javascript:definitions();|terms\",";
UPINVMenuArr += "\"Educational Resources|javascript:SiteIndx('investments/upinvesting','investments','/resources.upb','resources')|resources\"";

var UPTRSTMenuArr = "";
UPTRSTMenuArr += "\"Quick Tour|javascript:popUpPic('UPTrustDemoTour/enter.asp',700,500)|quick\",";
UPTRSTMenuArr += "\"Apply|javascript:SiteIndx('investments/UPTrustOnline','investments','/apply.upb','apply')|apply\",";
UPTRSTMenuArr += "\"Terms and Conditions|javascript:SiteIndx('investments/UPTrustOnline','investments','/terms.upb','terms')|terms\",";
UPTRSTMenuArr += "\"System Requirements|javascript:SiteIndx('investments/UPTrustOnline','investments','/system.upb','system')|system\",";
UPTRSTMenuArr += "\"Contact Us|javascript:SiteIndx('investments/trust','investments','/contact.upb','contact')|contact\"";

var UPPCrdMenuArr = "";
UPPCrdMenuArr += "\"FAQ's|javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/faqs.upb','faq')|faq\",";
UPPCrdMenuArr += "\"Disclosure|javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/disclosure.upb','disclosure')|disclosure\",";
UPPCrdMenuArr += "\"Contact Us|javascript:popUpPic('contact.upb','200','200')|contact\"";

var edSouth = "";
edSouth += "\"Free Scholarship Search|regup.htm|regup\",";
edSouth += "\"Entrance Counseling|javascript:leave_alert('https://web.archive.org/web/20030603200606/http://www.mapping-your-future.org/oslec/')|0\",";
edSouth += "\"Exit Counseling|javascript:leave_alert('https://web.archive.org/web/20030603200606/http://www.mapping-your-future.org/oslc/');|0\",";
edSouth += "\"2.25% Interest Rate Reduction|whyup.htm|whyup\",";
edSouth += "\"Contact Us|email.htm|email\"";

function menuImageArr() {
var daArry = menuImageArr.arguments;
var thelstRow = daArry.length - 1;
var topCrn = "";
var botCrn = "";
var theRes = "";
 


if (daArry.length > 0) {
theRes += "<table width=\"110\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">" 

var daLinkTextPair
var i = 0;
while (i < daArry.length) {
daLinkTextPair = daArry[i].split("|"); 


if (i <= 0) {
theRes += "<tr>"
 if(theSub == daLinkTextPair[2]){
 theRes += "<td valign=\"top\" height=\"25\" bgColor=\"#DAEECF\" colspan=\"3\" class=\"topMenu\">";
 theRes += "<ilayer name=\"lyrOne\" width=\"100%\">";
 theRes += "<layer name=\"lyrtwo\" width=\"100%\" height=\"25\">"
 topCrn = "subCrTp_On.gif"
 } else {
 theRes += "<td valign=\"top\" height=\"25\" colspan=\"3\" class=\"topMenu\" onMouseOver=\"this.style.backgroundColor='#DEEFCE';document.crnTp.src='"+daBaseURL+"/media/images/subCrTp_On.gif';\" onMouseOut=\"this.style.backgroundColor='#FFFFFF';document.crnTp.src='"+daBaseURL+"/media/images/subCrTp_Of.gif';\">";
 theRes += "<ilayer name=\"lyrOne"+i+"\" width=\"100%\">";
 theRes += "<layer name=\"lyrtwo"+i+"\" width=\"100%\" height=\"25\" onMouseOver=\"MouseTop('lyrOne"+i+"','lyrtwo"+i+"','lyrThre','lyrFor',1);this.bgColor='#DEEFCE'\" onMouseOut=\"MouseTop('lyrOne"+i+"','lyrtwo"+i+"','lyrThre','lyrFor',0);this.bgColor='#FFFFFF'\">"	
 topCrn = "subCrTp_Of.gif"																																
 }
	
	theRes += "<table width=\"112\" height=\"25\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	theRes += "<tr>";
	theRes += "<td rowspan=\"2\">";
	theRes += "<ilayer name=\"lyrThre\">";
	theRes += "<layer name=\"lyrFor\">";
	theRes += "<img src=\""+daBaseURL+"/media/images/"+topCrn+"\" name=\"crnTp\" width=\"14\" height=\"26\" border=\"0\">";
	theRes += "</layer>";
	theRes += "</ilayer>";
	theRes += "</td>";
	theRes += "<td bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
	theRes += "<td rowspan=\"2\" width=\"1\" height=\"25\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"25\"></td>";
	theRes += "</tr>";
	theRes += "<tr>";
	theRes += "<td width=\"111\" height=\"25\" align=\"left\"><a href=\""+daLinkTextPair[1]+"\">"+daLinkTextPair[0]+"</a></td>";
	theRes += "</tr>";
	theRes += "</table>";
	
	theRes += "</layer>";
	theRes += "</ilayer>";
	theRes += "</td>";
	theRes += "</tr>";

} else if (i >= thelstRow){
theRes += "<tr>"
theRes += "<td colspan=\"3\" width=\"1\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>"
theRes += "</tr>"
theRes += "<tr>";
 if(theSub == daLinkTextPair[2]){
 theRes += "<td colspan=\"3\" bgColor=\"#DAEECF\" class=\"topMenu\">";
 theRes += "<ilayer name=\"lyrOne\" width=\"100%\">";
 theRes += "<layer name=\"lyrtwo\" width=\"100%\" height=\"25\">"
 botCrn = "subCrBt_On.gif";
 } else {
 theRes += "<td colspan=\"3\" class=\"topMenu\" onMouseOver=\"this.style.backgroundColor='#DAEECF';document.crnBp.src='"+daBaseURL+"/media/images/subCrBt_On.gif';\" onMouseOut=\"this.style.backgroundColor='#FFFFFF';document.crnBp.src='"+daBaseURL+"/media/images/subCrBt_Of.gif';\">";
 theRes += "<ilayer name=\"lyrOne"+i+"\" width=\"100%\">";
 theRes += "<layer name=\"lyrtwo"+i+"\" width=\"100%\" height=\"25\" onMouseOver=\"MouseBot('lyrOne"+i+"','lyrtwo"+i+"','lyrThre','lyrFor',1);this.bgColor='#DEEFCE'\" onMouseOut=\"MouseBot('lyrOne"+i+"','lyrtwo"+i+"','lyrThre','lyrFor',0);this.bgColor='#FFFFFF'\">"
 botCrn = "subCrBt_Of.gif";																																		
 }
theRes += "<table width=\"112\" height=\"25\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
theRes += "<tr>";
theRes += "<td width=\"1\" height=\"25\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>";
theRes += "<td width=\"13\" ><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"14\" height=\"1\" border=\"0\"></td>";
theRes += "<td width=\"111\" height=\"25\" align=\"left\"><a href=\""+daLinkTextPair[1]+"\">"+daLinkTextPair[0]+"</a></td>";
theRes += "<td rowspan=\"2\" width=\"14\" height=\"25\">";
theRes += "<ilayer name=\"lyrThre\">";
theRes += "<layer name=\"lyrFor\">";
theRes += "<img src=\""+daBaseURL+"/media/images/"+botCrn+"\" name=\"crnBp\" width=\"14\" height=\"26\" border=\"0\">";
theRes += "</layer>";
theRes += "</ilayer>";
theRes += "</td>";
theRes += "<tr>"
theRes += "<td colspan=\"3\" width=\"1\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>"
theRes += "</tr>"
theRes += "</tr>";
theRes += "</table>";

theRes += "</layer>";
theRes += "</ilayer>";
theRes += "</td>"
theRes += "</tr>"

} else {
theRes += "<tr>"
theRes += "<td colspan=\"3\" width=\"1\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"1\"></td>"
theRes += "</tr>"
theRes += "<tr>"
theRes += "<td width=\"1\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"20\"></td>"
 if(theSub == daLinkTextPair[2]){
 theRes += "<td height=\"25\" class=\"topMenu\" bgColor=\"#DAEECF\">"
 theRes += "<ilayer name=\"one\" width=\"100%\">";
 theRes += "<layer name=\"two\" width=\"100%\" height=\"25\">"
 } else {
 theRes += "<td height=\"25\" class=\"topMenu\" onMouseOver=\"this.style.backgroundColor='#DAEECF'\" onMouseOut=\"this.style.backgroundColor='#FFFFFF'\">"
 theRes += "<ilayer name=\"one"+i+"\" width=\"100%\">";
 theRes += "<layer name=\"two"+i+"\" width=\"100%\" height=\"25\" onMouseOver=\"this.bgColor='#DAEECF';\" onMouseOut=\"this.bgColor='#FFFFFF'\">"
 }
theRes += "<table width=\"110\" height=\"25\" cellspacing=\"0\" cellpadding=\"0\">";
theRes += "<tr>";
theRes += "<td><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"13\" height=\"20\" border=\"0\"></td>";
theRes += "<td width=\"111\" align=\"left\"><a href=\""+daLinkTextPair[1]+"\">"+daLinkTextPair[0]+"</a></td>";
theRes += "</tr>";
theRes += "</table>";
theRes += "</layer>";
theRes += "</ilayer>";
theRes += "</td>"
theRes += "<td width=\"1\" bgColor=\"#000000\"><img src=\""+daBaseURL+"/media/images/spacer.gif\" width=\"1\" height=\"20\"></td>"
theRes += "</tr>"
}
i++
}
theRes += "</table>"
}
return theRes;
}




//-- subNav MouseOvers NS4--//
function MouseTop(lyrOne,lyrTwo,lyrThre,lyrFor,mode) {
var lyrCntnt = "";

if (mode >= 1) {
lyrCntnt = "<img src=\""+daBaseURL+"/media/images/subCrTp_On.gif\" width=\"14\" height=\"26\">";
} else {
lyrCntnt = "<img src=\""+daBaseURL+"/media/images/subCrTp_Of.gif\" width=\"14\" height=\"26\">";
}

if (document.layers){
	eval("document."+ lyrOne +".document."+ lyrTwo +".document."+ lyrThre +".document."+ lyrFor +".document.write(lyrCntnt)");
	eval("document."+ lyrOne +".document."+ lyrTwo +".document."+ lyrThre +".document."+ lyrFor +".document.close()");		
}
}



function MouseBot(lyrOne,lyrTwo,lyrThre,lyrFor,mode) {
var lyrCntnt = "";

if (mode >= 1) {
lyrCntnt += "<img src=\""+daBaseURL+"/media/images/subCrBt_On.gif\" width=\"14\" height=\"26\">";
} else {
lyrCntnt += "<img src=\""+daBaseURL+"/media/images/subCrBt_Of.gif\" width=\"14\" height=\"26\">";
}

if (document.layers){
	eval("document."+ lyrOne +".document."+ lyrTwo +".document."+ lyrThre +".document."+ lyrFor +".document.write(lyrCntnt)");
	eval("document."+ lyrOne +".document."+ lyrTwo +".document."+ lyrThre +".document."+ lyrFor +".document.close()");		
}
}














function lvngDisc(theURL) {
 var theMsg = "You are about to leave the Union Planters Web Site. \n\nAny information past this point is not a direct \nrepresentation of Union Planters Bank\, N.A. \n_______________________________________\nClick \'OK\' to continue.";
alert(theMsg)

this.open(theURL, '_blank', config='toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes,directories=yes,status=yes,left=10,top=150');
}


var daPopUpWinThing
function PopUpWIN(theMapURL)	{
var da_win_left = 100
var da_win_hght = 365
 
if (parseInt(navigator.appVersion.charAt(0)) >= 4)
{
var da_scrn_wdth = screen.width
var da_scrn_hgth = screen.height
da_win_left = da_scrn_wdth/2-145
 da_win_top = da_scrn_hgth/2-183
}
 
da_win_hght = da_win_hght.toString();
var da_specs = "height=";
da_specs += da_win_hght;
da_specs += ",width=290,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=";
da_specs += da_win_left;
da_specs += ",top=" + da_win_top;
 
daPopUpWinThing = window.open(theMapURL, 'PU_wndw', config=da_specs);
}



function jumpPage()	{
var daFrm = document.form1
var dafld = daFrm.the_state.value
	
if (dafld != "") {
newPage = "contact.upb"
daFrm.action = newPage;
daFrm.method = "GET"
daFrm.submit();
}
}


function jumpPageContact()	{
var daFrm = document.form1
var dafld = daFrm.the_state.value
	
if (dafld != "") {
newPage = "index.upb"
daFrm.action = newPage;
daFrm.method = "GET"
daFrm.submit();
}
}

var thePopUpWin;

function popUpPic(thePage,theW,theH)
{
var da_win_left = 100
var da_win_top = 225
  
if (parseInt(navigator.appVersion.charAt(0)) >= 4)
{
var da_scrn_wdth = screen.width
var da_scrn_hgth = screen.height
var hlf_theW = theW/2
var hlf_theH = theH/2
da_win_left = da_scrn_wdth/2-hlf_theW
 da_win_top = da_scrn_hgth/2-hlf_theH
}
  
var the_specs = "height=" + theH + ",width=" + theW + ",toolbar=no,";
   the_specs += "menubar=no,scrollbars=yes,resizable=no,";
   the_specs += "location=no,directories=no,status=yes,left=";
   the_specs += da_win_left + ",top=" + da_win_top;
 
thePopUpWin = window.open(thePage, "the_Page", config=the_specs);
thePopUpWin.focus();
}


var thePopUpWin;

function popUpPic2(thePage,theW,theH)
{
var da_win_left = 100
var da_win_top = 225
  
if (parseInt(navigator.appVersion.charAt(0)) >= 4)
{
var da_scrn_wdth = screen.width
var da_scrn_hgth = screen.height
var hlf_theW = theW/2
var hlf_theH = theH/2
da_win_left = da_scrn_wdth/2-hlf_theW
 da_win_top = da_scrn_hgth/2-hlf_theH
}
  
var the_specs = "height=" + theH + ",width=" + theW + ",toolbar=no,";
   the_specs += "menubar=no,scrollbars=yes,resizable=yes,";
   the_specs += "location=no,directories=no,status=yes,left=";
   the_specs += da_win_left + ",top=" + da_win_top;
 
thePopUpWin = window.open(thePage, "the_Page", config=the_specs);
thePopUpWin.focus();
}



function definitions()
{
var the_content = "../terms_def/";
window.open(the_content, 'terms_def', config='height=300,width=270,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=300,top=150');
}function the_schedule() {
var the_schedule_var = "schedule.htm";
if (screen.width >= 1152)
{
window.open(the_schedule_var, 'the_schedule', config='height=275,width=250,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=870,top=210');
}
if (screen.width >= 951 && screen.width <= 1151)
{
window.open(the_schedule_var, 'the_schedule', config='height=275,width=250,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=740,top=190');
}
if (screen.width >= 701 && screen.width <= 950)
{
window.open(the_schedule_var, 'the_schedule', config='height=318,width=250,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=525,top=205');
}
if (screen.width <= 700)
{
window.open(the_schedule_var, 'the_schedule', config='height=250,width=200,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=410,top=141');
}
else {
window.open(the_schedule_var, 'the_schedule', config='height=250,width=200,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no,left=410,top=141');
}
}


function appScrpt(){

var daFrm = document.leftFrm;
var daFld = daFrm.appSlctr;
var daVal = daFld.options[daFld.selectedIndex].value;

if (daVal != "") {
this.location.href = daVal;	
}
}



//Begin site leave alert 
function leave_alert(the_url) {
var the_path = the_url;
var the_confirm = "You are about to leave the Union Planters website.";
the_confirm += "Any information, disclosures, or privacy statements ";
the_confirm += "outside the Union Planters Web site are not the ";
the_confirm += "responsibility of Union Planters.\n\n";
the_confirm += "If you wish to continue click the [OK] button, if not click the [Cancel] button.";

if (confirm(the_confirm))	{
window.open(the_path, 'new_window', config='height=400,width=600,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes,directories=yes,status=yes,left=50,top=150');}
else { }}


}
/*
     FILE ARCHIVED ON 20:06:06 Jun 03, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:03:54 Feb 02, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.252
  RedisCDXSource: 3.393
  PetaboxLoader3.resolve: 54.501 (2)
  exclusion.robots.policy: 0.234
  captures_list: 93.557
  LoadShardBlock: 64.209 (3)
  CDXLines.iter: 22.2 (3)
  load_resource: 1405.45
  esindex: 0.015
  PetaboxLoader3.datanode: 1410.148 (4)
*/