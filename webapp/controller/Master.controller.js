/*global history */
sap.ui.define([
		"talentsview/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/GroupHeaderListItem",
		"sap/ui/Device",
		"talentsview/model/formatter",
		"talentsview/model/grouper",
		"talentsview/model/GroupSortState",
		"talentsview/controller/Utilities"
	], function (BaseController, JSONModel, Filter, FilterOperator, GroupHeaderListItem, Device, formatter, grouper, GroupSortState, Utils) {
		"use strict";

		return BaseController.extend("talentsview.controller.Master", {

			formatter: formatter,
			
			/* =========================================================== */
			/* My methods                                           */
			/* =========================================================== */
			
		
			getUserPhotos: function(oEvent){
				var usersOData = this.getView().getModel().oData;
				var component = this.getOwnerComponent();
				var sfsfModel = component.getModel();
				
				Utils.getMyTeamUserPhotos(usersOData, sfsfModel).then(function(oData){
					var view = this.getView();
					var oModel = view.getModel();
					oModel.updateBindings();
				}.bind(this));
			},
			
			getSiteService: function(){
				try{
					return sap.ushell.Container.getService("SiteService");
				}catch(err){
					return null;
				}
			},
			
			getURLParsingService: function(){
				try{
					return sap.ushell.Container.getService("URLParsing");
				}catch(err){
					return null;
				}
			},
			onInit : function () {
				var oList = this.byId("list"),
				oViewModel = this._createViewModel();
				this._oGroupSortState = new GroupSortState(oViewModel, grouper.groupUnitNumber(this.getResourceBundle()));
				this._oList = oList;
				this._oListFilterState = {
					aFilter : [],
					aSearch : []
				};
				this.setModel(oViewModel, "masterView");
				this.getView().addEventDelegate({
					onBeforeFirstShow: function () {
						this.getOwnerComponent().oListSelector.setBoundMasterList(oList);
					}.bind(this)
				});
				this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
				this.getRouter().attachBypassed(this.onBypassed, this);
				oList.attachEventOnce("updateFinished", this.getUserPhotos.bind(this) );
			},
			
			onAfterRendering: function() {
				var siteService = this.getSiteService();
				if (siteService) {
					var siteSettingsObj = siteService.getSiteSettings();
					if(siteSettingsObj && siteSettingsObj.siteType === "FreeStyle"){
						var page = this.getView().byId("page");
						page._oNavButton.setVisible(false);
					}
				}
			},
			onUpdateFinished : function (oEvent) {
				// update the master list object counter after new data is loaded
				this._updateListItemCount(oEvent.getParameter("total"));
				// hide pull to refresh if necessary
				this.byId("pullToRefresh").hide();
			},
			onSearch : function (oEvent) {
				if (oEvent.getParameters().refreshButtonPressed) {
					this.onRefresh();
					return;
				}
				var sQuery = oEvent.getParameter("query");
				if (sQuery) {
					this._oListFilterState.aSearch = [new Filter("firstName", FilterOperator.Contains, sQuery)];
				} else {
					this._oListFilterState.aSearch = [];
				}
				this._applyFilterSearch();
			},
			onRefresh : function () {
				this._oList.getBinding("items").refresh();
			},
			onSort : function (oEvent) {
				var sKey = oEvent.getSource().getSelectedItem().getKey(),
					aSorters = this._oGroupSortState.sort(sKey);

				this._applyGroupSort(aSorters);
			},
			onGroup : function (oEvent) {
				var sKey = oEvent.getSource().getSelectedItem().getKey(),
					aSorters = this._oGroupSortState.group(sKey);

				this._applyGroupSort(aSorters);
			},
			onOpenViewSettings : function () {
				if (!this._oViewSettingsDialog) {
					this._oViewSettingsDialog = sap.ui.xmlfragment("talentsview.view.ViewSettingsDialog", this);
					this.getView().addDependent(this._oViewSettingsDialog);
					// forward compact/cozy style into Dialog
					this._oViewSettingsDialog.addStyleClass(this.getOwnerComponent().getContentDensityClass());
				}
				this._oViewSettingsDialog.open();
			},
			onConfirmViewSettingsDialog : function (oEvent) {
				var aFilterItems = oEvent.getParameters().filterItems,
					aFilters = [],
					aCaptions = [];
				aFilterItems.forEach(function (oItem) {
					switch (oItem.getKey()) {
						case "Filter1" :
							aFilters.push(new Filter("bonusTarget", FilterOperator.LE, 10000));
							break;
						case "Filter2" :
							aFilters.push(new Filter("bonusTarget", FilterOperator.GT, 10000));
							break;
						case "Filter3" :
							aFilters.push(new Filter("gender", FilterOperator.EQ, "M"));
							break;
						case "Filter4" :
							aFilters.push(new Filter("gender", FilterOperator.EQ, "F"));
							break;
						default :
							break;
					}
					aCaptions.push(oItem.getText());
				});
				this._oListFilterState.aFilter = aFilters;
				this._updateFilterBar(aCaptions.join(", "));
				this._applyFilterSearch();
			},
			onSelectionChange : function (oEvent) {
				// get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
				this._showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
			},
			onBypassed : function () {
				this._oList.removeSelections(true);
			},
			createGroupHeader : function (oGroup) {
				return new GroupHeaderListItem({
					title : oGroup.text,
					upperCase : false
				});
			},
			onNavBack : function() {
				history.go(-1);
			},
			_createViewModel : function() {
				return new JSONModel({
					isFilterBarVisible: false,
					filterBarLabel: "",
					delay: 0,
					title: this.getResourceBundle().getText("masterTitleCount", [0]),
					noDataText: this.getResourceBundle().getText("masterListNoDataText"),
					sortBy: "firstName",
					groupBy: "None"
				});
			},
			_onMasterMatched :  function() {
				this.getOwnerComponent().oListSelector.oWhenListLoadingIsDone.then(
					function (mParams) {
						if (mParams.list.getMode() === "None") {
							return;
						}
						var sObjectId = mParams.firstListitem.getBindingContext().getProperty("userId");
						var urlParsingService = this.getURLParsingService();
						if(urlParsingService ){
							var navData = urlParsingService.parseShellHash(window.location.hash);
							if(navData && navData.appSpecificRoute && navData.appSpecificRoute.lastIndexOf("/") > 0){
								sObjectId = navData.appSpecificRoute.substring(navData.appSpecificRoute.lastIndexOf("/") + 1);
							}
						}
						this.getRouter().navTo("object", {objectId : sObjectId}, true);
					}.bind(this),
					function (mParams) {
						if (mParams.error) {
							return;
						}
						this.getRouter().getTargets().display("detailNoObjectsAvailable");
					}.bind(this)
				);
			},
			_showDetail : function (oItem) {
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("object", {
					objectId : oItem.getBindingContext().getProperty("userId")
				}, bReplace);
			},
			_updateListItemCount : function (iTotalItems) {
				var sTitle;
				// only update the counter if the length is final
				if (this._oList.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("masterTitleCount", [iTotalItems]);
					this.getModel("masterView").setProperty("/title", sTitle);
				}
			},
			_applyFilterSearch : function () {
				var aFilters = this._oListFilterState.aSearch.concat(this._oListFilterState.aFilter),
					oViewModel = this.getModel("masterView");
				this._oList.getBinding("items").filter(aFilters, "Control");
				if (aFilters.length !== 0) {
					oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("masterListNoDataWithFilterOrSearchText"));
				} else if (this._oListFilterState.aSearch.length > 0) {
					oViewModel.setProperty("/noDataText", this.getResourceBundle().getText("masterListNoDataText"));
				}
			},
			_applyGroupSort : function (aSorters) {
				this._oList.getBinding("items").sort(aSorters);
			},
			_updateFilterBar : function (sFilterBarText) {
				var oViewModel = this.getModel("masterView");
				oViewModel.setProperty("/isFilterBarVisible", (this._oListFilterState.aFilter.length > 0));
				oViewModel.setProperty("/filterBarLabel", this.getResourceBundle().getText("masterFilterBarText", [sFilterBarText]));
			}
		});
	}
);