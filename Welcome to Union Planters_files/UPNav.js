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

var upNav = "";
//Personal Banking
upNav += "\"Personal&nbsp;Banking&nbsp;|javascript:SiteIndx('personalbanking','personalbanking','/index.upb','')|1|pb|personalbanking\",";
upNav += "\"Checking|javascript:SiteIndx('personalbanking/checking','personalbanking','/index.upb','')|0|pb|personalbanking/checking\",";
upNav += "\"Credit Cards|javascript:SiteIndx('personalbanking/credit','personalbanking','/index.upb','')|0|pb|personalbanking/credit\",";
upNav += "\"Currency Exchange|javascript:SiteIndx('personalbanking/currency','personalbanking','/index.upb','')|0|pb|personalbanking/currency\",";
upNav += "\"Internet Banking|javascript:SiteIndx('personalbanking/UPIB','personalbanking','/index.upb','')|0|pb|personalbanking/UPIB\",";
upNav += "\"IRAs|javascript:SiteIndx('personalbanking/ira','personalbanking','/index.upb','')|0|pb|personalbanking/ira\",";
upNav += "\"Loans|javascript:SiteIndx('personalbanking/loans','personalbanking','/index.upb','')|0|pb|personalbanking/loans\",";
upNav += "\"Mortgages|http://mortgage.upbna.com/|0|pb|personalbanking/mortgage\",";
upNav += "\"Retirement Planning|javascript:SiteIndx('currentPromos/promoFlash','personalbanking','/index.upb','')|0|pb|personalbanking/retirement\",";
upNav += "\"Savings & CDs|javascript:SiteIndx('personalbanking/savings','personalbanking','/index.upb','')|0|pb|personalbanking/savings\",";

//Business Banking
upNav += "\"Business&nbsp;Banking&nbsp;|javascript:SiteIndx('businessbanking','businessbanking','/index.upb','')|1|bb|businessbanking\",";
upNav += "\"Cash Management|javascript:SiteIndx('businessbanking/cash','businessbanking','/index.upb','')|0|bb|businessbanking/cash\",";
upNav += "\"Credit Cards|javascript:SiteIndx('businessbanking/credit','businessbanking','/index.upb','')|0|bb|businessbanking/credit\",";
upNav += "\"Deposit Services|javascript:SiteIndx('businessbanking/deposit','businessbanking','/index.upb','')|0|bb|businessbanking/deposit\",";
upNav += "\"Equipment Leasing|javascript:SiteIndx('businessbanking/leasing','businessbanking','/index.upb','')|0|bb|businessbanking/leasing\",";
upNav += "\"Insurance|javascript:SiteIndx('insurance/business','insurance','/index.upb','')|0|bb|insurance/business\",";
upNav += "\"International|javascript:SiteIndx('businessbanking/international','businessbanking','/index.upb','')|0|bb|businessbanking/international\",";
upNav += "\"Internet Banking|javascript:SiteIndx('businessbanking/UPBiz','businessbanking','/index.upb','')|0|bb|businessbanking/UPBiz\",";
upNav += "\"Loans & Credit|javascript:SiteIndx('businessbanking/loans','businessbanking','/index.upb','')|0|bb|businessbanking/loans\",";
upNav += "\"Merchant Services|javascript:SiteIndx('businessbanking/merchant','businessbanking','/index.upb','')|0|bb|businessbanking/merchant\",";
upNav += "\"Specialty Lending|javascript:SiteIndx('businessbanking/lending','businessbanking','/index.upb','')|0|bb|businessbanking/lending\",";
upNav += "\"Strategic Outsourcing|javascript:javascript:lvngDisc('https://web.archive.org/web/20030603193912/http://www.soi.net')|0|bb|businessbanking/outsourcing\",";
upNav += "\"Capital Factors|javascript:javascript:lvngDisc('https://web.archive.org/web/20030603193912/http://www.capitalfactors.com')|0|bb|businessbanking/capital\",";
upNav += "\"UPDATE|javascript:SiteIndx('businessbanking/UPDATE','businessbanking','/index.upb','')|0|bb|businessbanking/UPDATE\",";
upNav += "\"UPPayCard|javascript:SiteIndx('businessbanking/UPPayCard','businessbanking','/index.upb','')|0|bb|businessbanking/UPPayCard\",";
//Insurance
upNav += "\"Insurance&nbsp;|javascript:SiteIndx('insurance','insurance','/index.upb','')|1|in|insurance\",";
upNav += "\"Auto Insurance|javascript:SiteIndx('insurance/auto','insurance','/index.upb','')|0|in|insurance/auto\",";
upNav += "\"Business Insurance|javascript:SiteIndx('insurance/business','insurance','/index.upb','')|0|in|insurance/business\",";
upNav += "\"Homeowners Insurance|javascript:SiteIndx('insurance/home','insurance','/index.upb','')|0|in|insurance/home\",";
upNav += "\"Life Insurance|javascript:SiteIndx('insurance/life','insurance','/index.upb','')|0|in|insurance/life\",";
//Investments
upNav += "\"Investments&nbsp;|javascript:SiteIndx('investments','investments','/index.upb','')|1|iv|investments\",";
upNav += "\"Discount Brokerage|javascript:SiteIndx('investments/discount','investments','/index.upb','')|0|iv|investments/discount\",";
upNav += "\"Full Service Brokerage|javascript:SiteIndx('investments/full','investments','/index.upb','')|0|iv|investments/full\",";
upNav += "\"UP Investment Advisors|javascript:SiteIndx('investments/advisors','investments','/index.upb','')|0|iv|investments/advisors\",";
upNav += "\"LEADER Mutual Funds|javascript:SiteIndx('investments/leader','investments','/index.upb','')|0|iv|investments/leader\",";
upNav += "\"Market Reports|javascript:SiteIndx('investments/market','investments','/index.upb','')|0|iv|investments/market\",";
upNav += "\"Tax Deferred Annuities|javascript:SiteIndx('investments/tax','investments','/index.upb','')|0|iv|investments/tax\",";
upNav += "\"Trust & Investments|javascript:SiteIndx('investments/trust','investments','/index.upb','')|0|iv|investments/trust\",";
//UPInformation
upNav += "\"UPInformation&nbsp;|javascript:SiteIndx('upinformation','upinformation','/index.upb','')|1|up|upinformation\",";
upNav += "\"ATM/Branch Locator|javascript:SiteIndx('upinformation/locator','upinformation','/index.upb','')|0|up|upinformation/locator\",";
upNav += "\"Career Opportunities|javascript:SiteIndx('upinformation/career','upinformation','/index.upb','')|0|up|upinformation/career\",";
upNav += "\"Corporate Overview|http://www.corporate-ir.net/ireye/ir_site.zhtml?ticker=UPC&script=100|0|up|upinformation/corporate\",";
upNav += "\"For Your Protection|javascript:SiteIndx('upinformation/protection','upinformation','/index.upb','')|0|up|upinformation/protection\",";
upNav += "\"Investor Relations|javascript:SiteIndx('upinformation/investor','upinformation','/index.upb','')|0|up|upinformation/investor\",";
upNav += "\"News|http://www.corporate-ir.net/ireye/ir_site.zhtml?ticker=UPC&script=400|0|up|upinformation/news\",";
upNav += "\"Calculators|javascript:SiteIndx('upinformation/calculators','upinformation','/index.upb','')|0|up|upinformation/calculators\",";
upNav += "\"Privacy Statement|javascript:SiteIndx('upinformation/privacy','upinformation','/index.upb','')|0|up|upinformation/privacy\",";
upNav += "\"Terms & Conditions|javascript:SiteIndx('upinformation/terms','upinformation','/index.upb','')|0|up|upinformation/terms\"";
//Contact Information
//upNav += "\"Contact|javascript:SiteIndx('contact','contact','/index.upb','')|-1|ct|contact\",";
//upNav += "\"Search|javascript:SiteIndx('search','search','/index.upb','')|-1|sc|search\"";

}
/*
     FILE ARCHIVED ON 19:39:12 Jun 03, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:03:54 Feb 02, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.21
  esindex: 0.016
  PetaboxLoader3.datanode: 1739.278 (4)
  RedisCDXSource: 2.31
  LoadShardBlock: 42.471 (3)
  exclusion.robots.policy: 0.194
  CDXLines.iter: 24.548 (3)
  captures_list: 73.897
  load_resource: 1745.207
  PetaboxLoader3.resolve: 34.107
*/