
/* JavaScript content from js/pages/notifications-center-view.js in folder common */
var listItemId = "listItemId-0";
var pic = "";
var title = "";
var extract = "";
var currentAllNotifications = 0;
$('.counter').text(counter).show();
$('.count').text(counter).show();

$("#unread-notifications").addClass($.mobile.activeBtnClass);
fillList(counter,NotReadNotification, false, false);

$("#unread-notifications").on("click", function() {
	fillList(counter,NotReadNotification, false, false);
});

$("#all-notifications").on("click", function() {
	fillList(Object.keys(AllNotification).length,AllNotification, false, true);
});

function fillList(count,list, append, all) {

	if (!$(this).hasClass($.mobile.activeBtnClass)) {

		var content = "";
		$(".notifications-list").html("");

		for (i = 0; i < count; i++) {

			pic = list[i].pic;
			title = list[i].title;
			extract = list[i].extract;


			content += '<li>';
			content += '<a class="notification-item-a" id=' + listItemId
			+ ' data-transition="slide">';
			content += '<div class="ui-li-thumb"' + pic + '></div>';
			content += '<div class="ui-li-text">';
			content += '<h3 style="font-weight: normal;">' + title + '</h3>';
			content += '<p class="notification-core">' + extract + '</p>';
			content += '</div>';
			content += '</a>';
			content += '</li>';

			if (all) {
				currentAllNotifications++;
				listItemId = "listItemId-" + currentAllNotifications;
			} else {
				listItemId = "listItemId-" + (i + 1);
			}
		}

		if (all) {
			$(".load-more").css("display", "block");
		} else {
			$(".load-more").css("display", "none");
		}

		if (!append) {
			$(".notifications-list").html(content);
		} else {
			$(".notifications-list").append(content);
		}

		if ($(".notifications-list").hasClass("ui-listview")) {
			$(".notifications-list").listview("refresh");
		} else {
			$(".notifications-list").listview();
		}
	}

	$(".notifications-list a.notification-item-a")
	.on(
			"click",
			function(event) {
				cls = $(this).attr("id");
				cls = cls.split("-");
				cls = parseInt(cls[1]);
				if (cls % 4 == 0) {
					expertNotification.pic = "../images/mehdi.jpg";
					expertNotification.title = "[Client : M. Bendriss Mehdi] : Eligibilité de crédit";
					expertNotification.status = "Rejeté";
					expertNotification.date = "19/10/2014";
					expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc";
					expertNotification.content += " pour un Crédit Immobilier d\'une valeur de 600.000 dhs. Au vu de sa situation financière, nous sommes navré de devoir refuser cette demande.";
					expertNotification.content += "</br>Pour rappel voici les 7 conditions à remplir chez une personne pour se voir éligible : ";
					expertNotification.content += "</br><ul><li>I) la demande de garanties </li><li>II) Les taux</li><li>III)  L’apport personnel</li><li>IV) 30% des revenus, une barre à ne pas (trop…) dépasser</li><li>V) La durée d’emprunt</li><li>VI) Les autres élements</li><li>VII) Consultations de fichiers auprès de la Banque</li>";
				} else if (cls % 4 == 1) {
					expertNotification.pic = "../images/ayoub.jpg";
					expertNotification.title = "[Client : M. Naciri Ayoub] : Rachat de crédit";
					expertNotification.status = "En cours...";
					expertNotification.date = "15/10/2014";
					expertNotification.content = "Bonjour, Nous avons examiné méticuleusement la demande de Monsieur Ayoub Ingénieur informatique à IBM Maroc voulant racheter ses crédits";
					expertNotification.content += " Nous nous devons de demander de plus amples informations concernant sa situation... </br></br> A savoir : </br> - son activité bancaire des 3 dernière années dans son ancienne banque.";
					expertNotification.content += "</br>- ses 8 dernières fiches de paie.</br>- Ainsi qu'une copie de son contrat de travail";

				} else if (cls % 4 == 2) {
					expertNotification.pic = "../images/souhail.jpg";
					expertNotification.title = "[Client : M. Guennouni Souhail] : Eligibilité de crédit";
					expertNotification.status = "Accepté";
					expertNotification.date = "13/10/2014";
					expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc";
					expertNotification.content += " pour un Crédit Immobilier d\'une valeur d'1 Million de dhs. Au vu de sa situation financière, nous nous réjouissons de le lui accorder.";
				} else if (cls % 4 == 3) {
					expertNotification.pic = "../images/cristian.jpg";
					expertNotification.title = "[Client : M. Carstoiu Cristian] : Crédit pour étranger";
					expertNotification.status = "En cours...";
					expertNotification.date = "08/10/2014";
					expertNotification.content = "Bonjour, Nous avons bien reçu votre demande concernant un emprunt pour investissement sur le sol marocain de Monsieur Carstoiu Représentant ";
					expertNotification.content += " commercial à IBM Dubaï, nous vous avouons ne pas avoir de réponse concrète à ce sujet...</br>";
					expertNotification.content += "D'un autre cöté et afin d'encourager les investissements étrangers sur notre sol Merci de lui présenter notre produit : \"Foreign Investments\", en attendant la réponse du Siège. ";
				}
				if ($("#unread-notifications").hasClass(
						$.mobile.activeBtnClass)) {
					counter -= 1;
					NotReadNotification.splice(cls, 1);
				}
				loadPage("notification-content-view.html");
			});
}

$(".load-more").on("click", function() {
	fillList(10,AllNotification, true, true);
});