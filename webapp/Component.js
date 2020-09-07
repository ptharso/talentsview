sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"talentsview/model/models",
		"talentsview/controller/ListSelector",
		"talentsview/controller/ErrorHandler"
	], function (UIComponent, Device, models, ListSelector, ErrorHandler) {		"use strict";

		return UIComponent.extend("talentsview.Component", { metadata : { manifest : "json"	},
			init : function () {
				this.setModel(models.createDeviceModel(), "device");
				this.setModel(models.createSFSFModel());
				this.oListSelector = new ListSelector();
				this._oErrorHandler = new ErrorHandler(this);
				UIComponent.prototype.init.apply(this, arguments);
				this.getRouter().initialize();
			},
			destroy : function () {
				this.oListSelector.destroy();
				this._oErrorHandler.destroy();
				UIComponent.prototype.destroy.apply(this, arguments);
			},
			getContentDensityClass : function() {
				if (this._sContentDensityClass === undefined) {
					// check whether FLP has already set the content density class; do nothing in this case
					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._sContentDensityClass = "";
					} else if (!Device.support.touch) { 
						this._sContentDensityClass = "sapUiSizeCompact";
					} else {
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			},
			onConfigChange: function() {
				var settings = this.getMetadata().getManifest()["sap.cloud.portal"].settings;
				if(settings){
					this.getAggregation("rootControl").$().css("height", settings.widgetHeight.value + "px");
				}
			}
		});
	}
);