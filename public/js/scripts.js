var hidWidth;
var scrollBarWidths = 40;  

function widthOfList(){
  var itemsWidth = 0;
  $('ul.list li').each(function(){
    var itemWidth = $(this).outerWidth();
    itemsWidth+=itemWidth;
  });
  return itemsWidth;
};

function getLeftPosi(){
  return $('ul.list').position().left;
};

function widthOfHidden(){
  return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};

function reAdjust(){
  if (($('.wrapper').outerWidth()) < widthOfList()) {
    $('.scroller-right').show();
  }else {
    $('.scroller-right').hide();
  }
    
  if (getLeftPosi()<0) {
    $('.scroller-left').show();
  }else{
    $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
  	$('.scroller-left').hide();
  }
}

//reAdjust();

$(window).on('resize',function(e){  
  	reAdjust();
});

var srCnt = 0;
var rhalfHid = "";
$(document).on("click", ".scroller-rights", function () {
//$('.scroller-right').click(function() {
  $('.scroller-lefts').fadeIn('slow');
  $('.scroller-rights').fadeOut('slow');
  if(srCnt == 0){
	rhalfHid = widthOfHidden()/3;	
	srCnt++;
  }
  $('ul.list').animate({left:"+="+rhalfHid+"px"},'slow',function(){
	if(widthOfHidden() < 0){
		$('.scroller-rights').show();
	}
  });
});

var slCnt = 0;
var lhalfHid = "";
$(document).on("click", ".scroller-left", function () {
//$('.scroller-left').click(function() {
	$('.scroller-right').fadeIn('slow');
	$('.scroller-left').fadeOut('slow');
	if(slCnt == 0){
		lhalfHid = getLeftPosi()/3;
		slCnt++;
	}
  	$('ul.list').animate({left:"-="+lhalfHid+"px"},'slow',function(){
		if(getLeftPosi() < 0){
			$('.scroller-left').show();
		}
  	});
});

/* Tabs Hidden List */
$(document).on("click", ".listIc", function(e){
	e.stopPropagation();
	$(".lst").toggle();
});

$(document).on("click", ".lst", function(e){
	e.stopPropagation();
});

$(document).on("click", function(e){
	$(".lst").hide();
});

function hidnTabs(){
	var sd = $("ul#mainTabs li").find("a");
	var lnk="";
	$("#lst").empty();                                           
	$(sd).each(function(){
		lnk ='<a href="'+$(this).attr('href')+'" class="hitab" data-toggle="tab">'+$(this).text()+'</a>';
		$("#lst").append(lnk);
		//console.log($(this).length);								
	});
}

$(document).on("click", ".hitab", function(){
	var bb = $(this).attr('href'); // tab text
	var position = $(bb+"aa").offset(); // tab position
	var btnW = $(bb+"aa").width();   // tab width
	var wrpW = $("#wrapperW").width();  // wraper width
	var pLeft = position.left;               // tab scroll left position
	var tLeft = pLeft-wrpW;
	var fLeft = pLeft-130;
	var ulLeft = $("#mainTabs").offset();
	var ulRslt = ulLeft.left;
	console.log(pLeft+"...pLeft..."+wrpW+"...wrpW..."+tLeft+"...tLeft..."+fLeft+"...fLeft");
	$(".tabCust > div").removeClass('active in');
    $("#mainTabs li").removeClass('active');
	$(bb+"aa").trigger("click");
	$(bb+"aa").closest('li').addClass('active');    
	$(bb).addClass('tab-pane fade active in');
	if(ulRslt>30){
		$('.scroller-left').fadeIn('slow');
	}
	if(pLeft>wrpW){
		$('.list').animate({left:"-="+tLeft+"px"},'slow');
	}
	if(pLeft<0){
		$('.list').animate({left:"0px"},'slow');
	}
	if(pLeft<200){
		$('.list').animate({left:"0px"},'slow');
	}
});

/* Menu Expand */
$(document).on("click", "#menu li.mm-active a", function () {
	$(".bm-menu-wrap").css("display","table");
	tabWdth();
});

/* Menu Minimize */
function menuMin(){
	var winWdth = $(window).width();
	if(winWdth <= 1250){
		$(".bm-menu-wrap").css("display","inherit");
		$("ul#menu li.mm-active a").click();
		//$("ul#menu li").removeClass("mm-active");
		tabWdth();
	}
}

/* Home tab visibility*/
$(document).on("click", ".bm-burger-button", function () {
	menuMin();
	dbrdWidth();
});

$(document).on("click", ".bm-cross-button", function () {
	menuMin();
	dbrdWidth();
});

function dbrdWidth(){
	var bodyPos = $("body").css("overflow-x");
	//console.log($("body").css("overflow-x"));
	if(bodyPos == "visible"){
		$("#page-main .tabCust").addClass("htShrink");
		setTimeout(function(){ tabWdth(); }, 100);
	}else{
		$("#page-main .tabCust").removeClass("htShrink");
		$("#page-main").removeAttr("style");
		$(".colDiv").removeAttr('style');
	}
}

/* Main Tab width */
$(function(){
	tabWdth();
	menHgt();
	msgHgt();	
});

$( window ).resize(function() {
	setTimeout(function(){ tabWdth(); menHgt(); msgHgt(); }, 500);
});

function tabWdth(){
	var bodyPos = $("body").css("overflow-x");
	var tabWth = $(window).width();
	var menWdth = $(".bm-menu-wrap").width()+5;
	//console.log(menWdth+"...menWdth");
	var finTabWth = tabWth - menWdth;
	//console.log(finTabWth+"...finTabWth..."+bodyPos+"...bodyPos");
	if(bodyPos == "visible"){
		//$("#page-main").css("transform","translate3d(0px, 0px, 0px)");
		$("#page-main").css("width", tabWth+"px");
	}else{
		//$("#page-main").css("transform","translate3d("+menWdth+"px, 0px, 0px)");
		$("#page-main").css("width", finTabWth+"px");
	}
	//$("#page-main").css("width", finTabWth+"px");
	$("#page-main").css("transform","translate3d(0px, 0px, 0px)");
	$(".colDiv").css("width", finTabWth-235+"px");
	//$(".colDiv1").css("width", finTabWth+"px");
}

/* Menu height */
function menHgt(){
	var tabWth = $(window).width();
	var tabHgt = $(window).height();
	var menHgt = $(".bm-menu-wrap").height();
	//console.log("tabHgt..."+tabHgt+"...menHgt..."+menHgt);
	var mFinHgt = tabHgt - 90;
	$(".bm-menu").css("height", mFinHgt+"px");
}

/* InBox Height */
function msgHgt(){
	var tabWth = $(window).width();
	var tabHgt = $(window).height();
	var dbrdHgt = $("#home .dashBoardLeft").height();
	var insHgt = $("#home .dashBoardLeft .col-sm-4").height();
	var msgFinHgt = (dbrdHgt - insHgt) - 40;
	//console.log("insHgt..."+insHgt+"...dbrdHgt..."+dbrdHgt);
	if(tabWth > 1200){
		$(".mailbox-scroll").css("height", msgFinHgt+"px");
	}else{
		$(".mailbox-scroll").css("height", "auto");
	}
}

/*Nav tab Close btn code*/
var clsTab = [];
$(document).on("click", ".close-tab", function () {
	var tabContentId = $(this).parent().attr("href");
	var tabContentId1 = tabContentId.split("#")
	$(this).parent().parent().remove(); //remove li of tab
	
	var tabLeng = $("div.tabMain > div").length;
	for(var i=0; i<=tabLeng-tabLeng; i++){
		clsTab.push(tabContentId1[1]);
	}
	
	$(".tab-content div#"+tabContentId1[1]+"").remove(); //remove respective tab content	
	//reAdjust();
});

var clsTab1 = [];
$(document).on("click", ".close-tab1", function () {
	var tabContentId = $(this).parent().parent().parent().parent().attr("href");
	var tabContentId1 = tabContentId.split("#");
	$(this).parent().parent().parent().parent().parent().remove(); //remove li of tab
		
	var tabLeng1 = $("div.tabCust > div").length;
	for(var j=0; j<=tabLeng1-tabLeng1; j++){
		clsTab1.push(tabContentId1[1]);
	}
	
	$(".tab-content div#"+tabContentId1[1]+"").remove(); //remove respective tab content
	reAdjust();
});

/*Loan Information Script*/
function loanNbr(m){
	//alert(123);
	$("#loanInf").removeClass("col-sm-12");
	$("#loanInf").addClass("col-sm-2 loanInfr");
	$("#loanDet").css("display","block");	
	
}

$(document).ready(function() {
				
	$("#arrowLeft").click(function(event){
		event.stopPropagation();
		$("#optShow").toggle();
	});
	
	$("#optShow").click(function(event){
		event.stopPropagation();
	});
	
	$(document).click(function(event){
		if (!$(event.target).is('#arrowLeft')){
			event.stopPropagation();
			$('#optShow').hide();
		}
	});
		
});

/*footer popover code*/
$(document).ready(function(){
    $("[data-toggle=popover]").each(function(i, obj) {

		$(this).popover({
			html: true,
			content: function() {
				var id = $(this).attr('id')
				return $('#popover-content-' + id).html();
			}
		});

	});
});

/*loan Information bar*/
$(document).on("click", "#contLeft", function () {
	var getProp = $(".searchListHolder").css("width");
	var winWdth = $(window).width();
	var menWdth = $(".bm-menu-wrap").width()+5;
	var contWdth = $(".contntHide").width();
	var bodyPos = $("body").css("overflow-x");
	var finWdth = "";
	//console.log(bodyPos+"...bodyPos..."+menWdth+"...menWdth..."+getProp+"...getProp");
	if(getProp=="220px"){
		$(".contentBodyOvrHid").css({"margin-left":"10px", "-webkit-transition":"0s", "-moz-transition":"0s", "transition":"0s"});
		$(".searchListHolder").css({"transform":"translate3d(-100%, 0px, 0px)", "width":"0px", "-webkit-transition":"0.5s", "-moz-transition":"0.5s", "transition":"0.5s"});		
		$("#contLeft i").removeClass("fa fa-angle-left");
		$("#contLeft i").addClass("fa fa-angle-right");		
		$(".loanGrid").css("width", "1300px");
		if(bodyPos == "hidden"){
			var tmWdth = menWdth + contWdth;
			finWdth = winWdth - tmWdth;
			$('.colDiv').css("width", finWdth+"px");
		}
	}else{
		$(".contentBodyOvrHid").css({"margin-left":"235px", "-webkit-transition":"1s", "-moz-transition":"1s", "transition":"1s"});
		$(".searchListHolder").css({"transform":"translate3d(0px, 0px, 0px)", "width":"220px", "-webkit-transition":"0.2s", "-moz-transition":"0.2s", "transition":"0.2s", "left": "0px"});
		$("#contLeft i").removeClass("fa fa-angle-right");
		$("#contLeft i").addClass("fa fa-angle-left");	
		$(".contntHide").removeClass("lft-98");
		$(".contentBodyOvrHid").css("left", "auto")
		$(".contentBodyOvrHid").css("display", "block");	
		$(".loanGrid").css("width", "1300px");
		if(bodyPos == "hidden"){
			var tmWdth1 = menWdth + contWdth + 220;
			finWdth = winWdth - tmWdth1;
			$('.colDiv').css("width", finWdth+"px");
		}
	}
});
$(document).on("click", "#contRight", function(){
	var getProp = $(".searchListHolder").css("width");
	$(".searchListHolder").css({"width":"98%", "left": "20px", "transform":"translate3d(0px, 0px, 0px)"});
	$(".contntHide").addClass("lft-98");
	$(".contentBodyOvrHid").css("display", "none");
	$("#contLeft i").removeClass("fa fa-angle-right");
	$("#contLeft i").addClass("fa fa-angle-left");	
	$(".loanGrid").css("width", "100%");
});

/*click tabs*/
$(document).on("click", "td.loanNbr > a", function(){
	var loNum = $(this).text();
	$("a[href$='"+ loNum +"']").click();
});


$(document).on("click", "input[name=showFunOpt1]", function () {
	//alert("RadioVal...."+$(this).val());
	if($(this).val() == "rtn"){
		$("#showRet2").removeClass("hide");
		$("#woDates1").addClass("hide");
	}else if($(this).val() == "wo"){
		$("#woDates1").removeClass("hide");
		$("#showRet2").addClass("hide");
	}else if($(this).val() == "pd")
	{
		$("#showRet2").addClass("hide");
		$("#woDates1").addClass("hide");
	}
});

$(document).on("click", ".fontChange", function(evnt){
	$(this).stopPropagation(evnt);
});


$(document).on("change", "select[name=iPayFreq]", function () {
	//alert("OptionVal...."+$(this).val());
	if($(this).val() == "MON"){
		$("#monthly").removeClass("hide");
		$("#semiMonthly").addClass("hide");
		$("#weekly").addClass("hide");
		$("#biWeekly").addClass("hide");
	}else if($(this).val() == "BIM"){
		$("#monthly").addClass("hide");
		$("#semiMonthly").removeClass("hide");
		$("#weekly").addClass("hide");
		$("#biWeekly").addClass("hide");
	}else if($(this).val() == "WKY"){
		$("#monthly").addClass("hide");
		$("#semiMonthly").addClass("hide");
		$("#weekly").removeClass("hide");
		$("#biWeekly").addClass("hide");
	}else if($(this).val() == "BIW"){
		$("#monthly").addClass("hide");
		$("#semiMonthly").addClass("hide");
		$("#weekly").addClass("hide");
		$("#biWeekly").removeClass("hide");
	}else{
		$("#monthly").addClass("hide");
		$("#semiMonthly").addClass("hide");
		$("#weekly").addClass("hide");
		$("#biWeekly").addClass("hide");
	}
});

$(document).ready(function(){
	$('.ssnFormat').keyup(function() {		
        var val = this.value.replace(/\D/g, '');
        val = val.replace(/^(\d{3})/, '$1-');
        val = val.replace(/-(\d{2})/, '-$1-');
        val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
        this.value = val;
    });
});

$(document).ready(function(){
	$("#chatIcon").on("click", function(){
			$("#chatContainer").css("display", "block");
			$(this).css("display", "none");
	});
});
$(document).ready(function(){
	$(".fa-times").on("click", function(){
			$("#chatIcon").css("display", "block");
			$("#chatContainer").css("display", "none");
	});
});

function zIndClick(str){
	/*console.log("str..."+str);
	$(".footer-btn").removeAttr("style");
		
	var visDiv = "";
	var hght = 20;
	var zind = 10;
	var visArr = ["edit-phone-pop", "edit-bank-myAccnt", "edit-inc-pop", "popover-content-myAccnt", "edit-addr"];
	//console.log(visArr.length+"...visArrLen");
	for(z=0; z<visArr.length; z++){
		visDiv = $("#"+visArr[z]).is(":visible");
		if(visDiv == true){
			var finHgt = hght+40;
			console.log(visArr[z]+"...visArr"+[z]+"...finHgt..."+finHgt);
			$("#"+visArr[z]).css({"z-index":""+zind+"","bottom": ""+finHgt+"px"});
			hght = finHgt;
			zind--;
		}
	}
	//console.log(visDiv+"...visDiv...height..."+hght);*/

	$(".footer-btn").css("z-index","0");
	$("#"+str).css("z-index","999");
}

/* Loading */
function showLoad(){
	$(".loading").css("display", "block");
}

/* Scroll Top*/
$(document).on("click", "button, a", function(){
	setTimeout(function(){
		$(".collectionSubContainer").animate({scrollTop: $(".collectionSubContainer").offset().top=0});
		$(".tabMain .tab-pane").animate({scrollTop: $(".tabMain .tab-pane").offset().top=0});
	}, 500);	
});

$(document).on("change", "select[name=safeIntTran]", function () {
	//alert("OptionVal...."+$(this).val());
	if($(this).val() == "Drawer To Safe"){
		$("#safeIntTranDiv").removeClass("hide");
	}else if($(this).val() == "Safe To Drawer"){
		$("#safeIntTranDiv").addClass("hide");
	}
});

$(document).on("change", "select[name=safeToTran]", function () {
	//alert("OptionVal...."+$(this).val());
	if($(this).val() == "Sending"){
		$("#receivingID").addClass("hide");
		$("#receivingID2").removeClass("hide");
		$("#receivingID3").removeClass("hide");
		$("#pendingID").addClass('hide');
		$("#pendingID1").addClass('hide');
		$("#pendingID3").removeClass('hide');
	}else if($(this).val() == "Receving"){
		$("#receivingID").removeClass("hide");
		$("#receivingID2").addClass("hide");
		$("#receivingID3").removeClass("hide");
		$("#pendingID").addClass('hide');
		$("#pendingID1").addClass('hide');
		$("#pendingID3").removeClass('hide');
	}
	else if($(this).val() == "Pending"){
		$("#receivingID").addClass("hide");
		$("#receivingID2").addClass("hide");
		$("#receivingID3").addClass("hide");
		$("#pendingID").removeClass('hide');
		$("#pendingID1").removeClass('hide');
		$("#pendingID3").addClass('hide');
		
	}
});




$(document).on("click", "input[name=loanscan]", function () {
	if($(this).val() == "SN"){
		$("#custDoc").removeClass("hide");
		$("#custUploadDoc").addClass("hide");
	}else if($(this).val() == "UP"){
		$("#custDoc").addClass("hide");
		$("#custUploadDoc").removeClass("hide");
	}
});