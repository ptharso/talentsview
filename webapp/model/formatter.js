sap.ui.define([
	], function () {
		"use strict";
		
		jQuery.sap.require("sap.ui.core.format.DateFormat");

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			 
			 checkPercentValue: function(sValue){
			 	return ""+sValue;
			 },
			 
			 formatGoalDoneState: function(sValue){
				if(sValue === "green"){
					return sap.ui.core.ValueState.Success;
				}else if(sValue === "yellow"){
					return sap.ui.core.ValueState.Warning;
				}else if(sValue === "red"){
					return sap.ui.core.ValueState.Error;
				}else{
					return sap.ui.core.ValueState.None;
				}
			 },
			 
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			
			formatImage: function(sValue){
				if(sValue){
					return "data:image/jpg;base64," + sValue;
				}
				else{
					return sValue;
				}
			},
			
			formatEmloyeeName: function(firstName, lastName, empID){
				if(!firstName)
					return "";
				else
					return firstName + " " + lastName + " " + "(" +empID+ ")";
			},
			
			formatEmptyText: function(sValue){
				if(sValue){
					return sValue.replace(/\s+/g,'');
				}
				else{
					return "-";
				}
			},
			
			formatAddress: function(add1, add2, city, zipCode, country){
				var address = "";
				address += (add1 ? add1 : "");
				address += (add2 ? "\n" + add2 : "");
				address += (city ? "\n" + city : "");
				address += (zipCode ? ", " + zipCode : "");
				address += (country ? "\n" + country : "");
				return address;
			},
			
			formatMaritalStatus: function(married){
				return (married ? "Married" : "Single");
			},
			
			formatDate : function(value){
				if (value) {
					var date = new Date(value);
					var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM.dd.yyyy"}); 
					return oDateFormat.format( date );
				} else {
					return value;
				}
			}
		};

	}
);