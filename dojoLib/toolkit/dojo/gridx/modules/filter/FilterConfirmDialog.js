define([
	"dojo/_base/declare",
	"dojo/string",
	"dijit/Dialog",
	"dojo/text!../../templates/FilterConfirmDialog.html"
], function(declare, string, Dialog, template){

/*=====
	return declare([], {
	});
=====*/

	return declare(Dialog, {
		cssClass: 'gridxFilterConfirmDialog',
		autofocus: false,
		postCreate: function(){
			this.inherited(arguments);
			this.set('content', string.substitute(template, this._nls));
			var arr = dijit.findWidgets(this.domNode);
			this.btnClear = arr[0];
			this.btnCancel = arr[1];
			this.connect(this.btnCancel, 'onClick', 'hide');
			this.connect(this.btnClear, 'onClick', 'onExecute');
			this.connect(this, 'show', function(){
				this.btnCancel.focus();
			});
		},
		onExecute: function(){
			this.execute();
		},
		execute: function(){}
	});
});
