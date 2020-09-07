sap.ui.define([
		"sap/ui/model/json/JSONModel",
		"sap/ui/Device"
	], function (JSONModel, Device) {
		"use strict";

		return {
			createDeviceModel : function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode("OneWay");
				return oModel;
			},
			
			createSFSFModel :  function(){
				var url = this.getURL("/destinations/SFSF_ODATA_PROXY");
				var oModel = new sap.ui.model.odata.v2.ODataModel(url , {
					json: true,
					
					skipMetadataAnnotationParsing: true,
					useBatch: false/*,
					defaultOperationMode: "Auto",
					headers: {
						"X-Proxy-User-Mapping" : "P1940040258|athompson1"
					}*/
				});
				
				return oModel;
			},
			
			getURL: function(suffix){
				if((typeof(sap.ushell) !== "undefined")){
					return "/sap/fiori/talentsview" + suffix;
				}
				else{
					return suffix;
				}
			}
			
		};

	}
);