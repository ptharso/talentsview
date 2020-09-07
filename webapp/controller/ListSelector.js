sap.ui.define([
		"sap/ui/base/Object"
	], function (BaseObject) {
		"use strict";

		return BaseObject.extend("talentsview.model.ListSelector", {

			constructor : function () {
				this._oWhenListHasBeenSet = new Promise(function (fnResolveListHasBeenSet) {
					this._fnResolveListHasBeenSet = fnResolveListHasBeenSet;
				}.bind(this));
				this.oWhenListLoadingIsDone = new Promise(function (fnResolve, fnReject) {
					this._oWhenListHasBeenSet
						.then(function (oList) {
							oList.getBinding("items").attachEvent("dataReceived",
								function (oData) {
									if (!oData.getParameter("data")) {
										fnReject({
											list : oList,
											error : true
										});
									}
									var oFirstListItem = oList.getItems()[0];
									if (oFirstListItem) {
										fnResolve({
											list : oList,
											firstListitem : oFirstListItem
										});
									} else {
										fnReject({
											list : oList,
											error : false
										});
									}
								}
							);
						});
				}.bind(this));
			},
			setBoundMasterList : function (oList) {
				this._oList = oList;
				this._fnResolveListHasBeenSet(oList);
			},
			selectAListItem : function (sBindingPath) {
				this.oWhenListLoadingIsDone.then(
					function () {
						var oList = this._oList,
							oSelectedItem;
						if (oList.getMode() === "None") {
							return;
						}
						oSelectedItem = oList.getSelectedItem();
						if (oSelectedItem && oSelectedItem.getBindingContext().getPath() === sBindingPath) {
							return;
						}
						oList.getItems().some(function (oItem) {
							if (oItem.getBindingContext() && oItem.getBindingContext().getPath() === sBindingPath) {
								oList.setSelectedItem(oItem);
								return true;
							}
						});
					}.bind(this),
					function () {
						jQuery.sap.log.warning("Could not select the list item with the path" + sBindingPath + " because the list encountered an error or had no items");
					}
				);
			},
			attachListSelectionChange : function (fnFunction, oListener) {
				this._oWhenListHasBeenSet.then(function () {
					this._oList.attachSelectionChange(fnFunction, oListener);
				}.bind(this));
				return this;
			},
			detachListSelectionChange : function (fnFunction, oListener) {
				this._oWhenListHasBeenSet.then(function () {
					this._oList.detachSelectionChange(fnFunction, oListener);
				}.bind(this));
				return this;
			},
			clearMasterListSelection : function () {
				//use promise to make sure that 'this._oList' is available
				this._oWhenListHasBeenSet.then(function () {
					this._oList.removeSelections(true);
				}.bind(this));
			}

		});

	}
);