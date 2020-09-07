sap.ui.define( [	], 

	function () {	"use strict";

		return {
			
		getMyTeamUserPhotos: function(usersOData, sfsfModel){
			var userIdsStr = "", user = null;
			for(var key in  usersOData){
				user = usersOData[key];
				userIdsStr += "'" + user.userId + "',";
			}
			userIdsStr = userIdsStr.substring(0, userIdsStr.length -1 );
			var oDeferred = $.Deferred();
			sfsfModel.read("/Photo",{
				urlParameters: {
					'$filter': "photoType eq 1 and userId in " + userIdsStr
				},
    			success: function(photoOData, response){
    				if(response.statusCode === 200){
    					
						for(key in  usersOData){
							user = usersOData[key];
							var currentUserID = user.userId;
							var photo = photoOData.results.find(function(currentPhoto){
						 		return currentPhoto.userId === currentUserID;
						 	});
						 	if(photo){
						 		user.photo = photo.photo;
						 	}
						}
						oDeferred.resolve(usersOData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		},
		loadUserTimeOff: function(oModel,userID){
			var oDeferred = $.Deferred();
			oModel.read("/EmployeeTime",{
				urlParameters: {
					'$filter': "userId eq '" + userID + "'"
				},
    			success: function(oData, response){
    				if(response.statusCode === 200){
    					oDeferred.resolve(oData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		},
		loadUserGoals1: function(oModel,userID){
			var oDeferred = $.Deferred();
			oModel.read("/Goal_1",{
				urlParameters: {
					'$filter': "userId eq '" + userID + "'",
					'$expand': "targets,tasks"
				},
    			success: function(oData, response){
    				if(response.statusCode === 200){
    					oDeferred.resolve(oData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		},
		loadUserBadges: function(oModel,userID){
			var oDeferred = $.Deferred();
			oModel.read("/UserBadges",{
				urlParameters: {
					'$filter': "userId eq '" + userID + "'"
				},
    			success: function(oData, response){
    				if(response.statusCode === 200){
    					oDeferred.resolve(oData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		},
		loadBadgeTemplates: function(oModel){
			var oDeferred = $.Deferred();
			oModel.read("/BadgeTemplates",{
    			success: function(oData, response){
    				if(response.statusCode === 200){
    					oDeferred.resolve(oData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		},
		createBadget: function(oModel, targetEmployeeId, commentText, selectedBadgeID){
			var oDeferred = $.Deferred();
			var newEntity = {
				"badgeInstanceId": -1, 
				 "userId": targetEmployeeId,
				 "badgeId":selectedBadgeID,
				 "comment": commentText,
				 "creatorUserID":"nnnn"
			};
			oModel.create("/UserBadges", 
                newEntity, {  
                async : false,  
    			success: function(oData, response){
    				if(response.statusCode === 200){
    					oDeferred.resolve(oData);
    				}
    			},
    			error: function(error){
    				oDeferred.reject(error);
    			}
			});
			return oDeferred.promise();
		}
	};
});