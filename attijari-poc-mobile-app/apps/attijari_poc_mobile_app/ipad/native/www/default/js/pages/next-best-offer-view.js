
/* JavaScript content from js/pages/next-best-offer-view.js in folder common */
$(document).on("pageshow",function () {
	$("#confirmationOffersPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#confirmationOffersPopup").popup ("open");
	
	setTimeout (
		function () {
			$("#confirmationOffersPopup").popup ("close");
		}, 
		3000
	);
});