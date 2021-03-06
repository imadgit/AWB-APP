
/* JavaScript content from js/pages/mortgage-terms.js in folder common */
$('.counter').text(counter).show();
function envoyerDossier() {
		confirmDialog("Envoyer la Demande?", function() {
			NouveauCreditImmobilier=AnnulerInit;
			loadPage("next-best-offer-view.html");
		});
	}

	$(".image").on("click", function() {
		sourcePage.title = "Mortgage Terms";
		sourcePage.url = "mortgage-terms-view.html";
		loadPage("ask-expert-view.html");
	});

function confirmDialog(text, callback) {
	var popupDialogId = 'popupDialog';
	$(
			'<div data-role="popup" id="'
					+ popupDialogId
					+ '" data-confirmed="no" data-transition="pop" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:500px;"> \
	                    <div data-role="header" data-theme="a">\
	                        <h1>Confirmation:</h1>\
	                    </div>\
	                    <div role="main" class="ui-content" align="center" style="background-color: white;">\
	                        <h3 style="color:black;margin-bottom: 55px;font-weight: normal;" class="ui-title">'
					+ text
					+ '<div class="ui-grid-a ui-responsive" id="button-div">'
					+ '<div class="ui-block-a"><a href="#" class="btn-submit optionConfirm" data-rel="back" >Oui</a></div>'
					+ '<div class="ui-block-b"><a href="#" class="btn-back optionCancel" data-rel="back" data-transition="flow">Non</a></div>'
					+ '</div>' + '</div>').appendTo($.mobile.pageContainer);
	var popupDialogObj = $('#' + popupDialogId);
	popupDialogObj.trigger('create');
	popupDialogObj
			.popup({
				afterclose : function(event, ui) {
					popupDialogObj.find(".optionConfirm").first().off('click');
					var isConfirmed = popupDialogObj.attr('data-confirmed') === 'yes' ? true
							: false;
					$(event.target).remove();
					if (isConfirmed && callback) {
						callback();
					}
				}
			});
	popupDialogObj.popup('open');
	popupDialogObj.find(".optionConfirm").first().on('click', function() {
		popupDialogObj.attr('data-confirmed', 'yes');
	});
}

/**
 * Function that computes the loan details
 */
function loan() {

	var cn = document.getElementById("pageContent").getElementsByTagName(
			"input");

	var select = document.getElementById("mortgage_term");
	var mValue = select.options[select.selectedIndex].value;
	var select2 = document.getElementById("interesType");
	var mValue2 = select2.options[select2.selectedIndex].value;

	var terms = 0;
	if (mValue == 0) {
		terms = 5;
	} else if (mValue == 1) {
		terms = 10;
	} else if (mValue == 2) {
		terms = 15;
	} else if (mValue == 3) {
		terms = 20;
	} else if (mValue == 4) {
		terms = 25;
	} else if (mValue == 5) {
		terms = 30;
	} else if (mValue == 6) {
		terms = 35;
	} else if (mValue == 7) {
		terms = 40;
	} else {
		terms = 0;
	}

	var interest = 0;
	if (mValue2 == 0) {
		interest = parseFloat("0.01");
	} else if (mValue2 == 1) {
		interest = parseFloat("0.02");
	} else if (mValue2 == 2) {
		interest = parseFloat("0.03");
	} else if (mValue2 == 3) {
		interest = parseFloat("0.04");
	} else if (mValue2 == 4) {
		interest = parseFloat("0.05");
	} else if (mValue2 == 5) {
		interest = parseFloat("0.06");
	} else if (mValue2 == 6) {
		interest = parseFloat("0.07");
	} else if (mValue2 == 7) {
		interest = parseFloat("0.08");
	} else if (mValue2 == 8) {
		interest = parseFloat("0.09");
	} else if (mValue2 == 9) {
		interest = parseFloat("0.10");
	} else {
		interest = 0;
	}

	if (cn[0].value != "") {

		var a = cn[0].value;
		var b = interest;
		var c = terms;
		var n = c * 12;
		var r = b / (12); // (12 * 100)
		var p = (a * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
		var prin = Math.round(p * 100) / 100;
		cn[3].value = prin + " MAD";
		cn[2].value = dateProcessing(terms);
		cn[1].value = todayDate();
		for (var i = 0; i < n; i++) {
			var z = a * r * 1;
			var q = Math.round(z * 100) / 100;
			var t = p - z;
			var w = Math.round(t * 100) / 100;
			var e = a - t;
			var l = Math.round(e * 100) / 100;
			a = e;
		}

	} else {
		cn[3].value = "";
	}
}

function dateProcessing(terms) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0.
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}
	var newYear = yyyy + terms;
	today = mm + '/' + dd + '/' + newYear;
	return today;
}

function todayDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0.
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}
	today = mm + '/' + dd + '/' + yyyy;
	return today;

}

//les fonctions de verification des champs

function updateTips( t ) {
	var tips = $( ".validateTips" );
	tips.text(t);
	$("#InfoPlusProperty").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#InfoPlusProperty").popup ("open");
	
	setTimeout (
		function () {
			$("#InfoPlusProperty").popup ("close");
		}, 
		5000
	);
}

function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      updateTips( "Le champs " + n + " doit avoir entre " + min + " et " + max + " caractères." );
      return false;
    } else {
      return true;
    }
  }

function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ))) {
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }

function VerifierEnvoyer(){
	
	var interesType=$("#interesType").val();
	var mortgage_term=$("#mortgage_term").val();
	var loanAmount=$("#loanAmount");
	var orgDate=$("#orgDate");
	var payOffDate=$("#payOffDate");
	var monthlyPay=$("#monthlyPay");
	
	
	var valid = true;
		
		
	if(valid){
		MTermsInfoTmp();
		envoyerDossier();
	}
}

/* Initialisation / restitution des champs du formulaire */

$("#initCredit").on("load",function(){
	setTimeout (InitialiserMTerms(),500);
});

function InitialiserMTerms(){
	//alert("init");
	$('#interesType option[value='+NouveauCreditImmobilier.DetailCredit.TauxInteret+']').attr('selected','selected');
	$('#mortgage_term option[value='+NouveauCreditImmobilier.DetailCredit.DureePret+']').attr('selected','selected');
	$("#loanAmount").val(NouveauCreditImmobilier.DetailCredit.MontantPret);
	//$("#orgDate").val(NouveauCreditImmobilier.DetailCredit.DateOrg);
	//$("#payOffDate").val(NouveauCreditImmobilier.DetailCredit.Echeance);
	//$("#monthlyPay").val(NouveauCreditImmobilier.DetailCredit.Mensualite);
	loan();
}

function MTermsInfoTmp(){
	// 
	NouveauCreditImmobilier.DetailCredit.TauxInteret=$("#interesType").val();
	NouveauCreditImmobilier.DetailCredit.DureePret=$("#mortgage_term").val();
	NouveauCreditImmobilier.DetailCredit.MontantPret=$("#loanAmount").val();
	NouveauCreditImmobilier.DetailCredit.DateOrg=$("#orgDate").val();
	NouveauCreditImmobilier.DetailCredit.Echeance=$("#payOffDate").val();
	NouveauCreditImmobilier.DetailCredit.Mensualite=$("#monthlyPay").val();
	//alert(JSON.stringify(NouveauCreditImmobilier.DetailCredit));
}