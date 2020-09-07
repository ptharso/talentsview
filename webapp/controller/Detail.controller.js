sap.ui.define([
		"talentsview/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		'sap/m/GroupHeaderListItem',
		"talentsview/model/formatter",
		"talentsview/controller/Utilities", "sap/m/MessageToast"
	], function (BaseController, JSONModel, GroupHeaderListItem, formatter, Utils, MessageToast) {		"use strict";

		return BaseController.extend("talentsview.controller.Detail", {

			formatter: formatter,
			
		onSite: function(oEvent){
			window.open("http://www.microsapiens.com");
		},

	onAfterRendering: function () {
	    google.load("visualization", "1", {packages: ["corechart"]});		//#E5F0FA;
	    google.charts.load("visualization", "1", {packages: ["treemap"  ]});
      //google.charts.setOnLoadCallback(this.drawChart.bind(this));
    },
	drawChart: function() { 
					
		var idioma    = window.navigator.language.substring(0,2); if( idioma != "pt") {
			
			this.getView().byId("mapa").setProperty("src", "./img/ajude.jpg");
			
			var geral = "Plasticity, Equilibrium, Duality";
			var appln = "Natural Talent Analysis";
			var appti = "Type of Intelligence";
			var appbc = "Business  Ability - Attitude, Amplitude, Coverage";
			var apppo = "Cognitive Ability - Production, Management, Vision";
			var appbl = "Abstract-Management, Concrete-Technical";
			var appam = "Relational amplitude";
			var appfo = "Focus of action";
			var aries = "Audacious, Leadership, Affirmation, Initiative";
			var libra = "Equality, Arts, Reconciliation, Balance";
			var sagit = "Optimism, Adventure, Motivation, Freedom";
			var gemeo = "Business, Smart, Adaptive, Versatile";
			var leaoo = "Governance, Distinction, Nobility, Luxury";
			var aquar = "Humanism, Innovation, Method, Daring";
			var cance = "Advice, Advertising, Household, Conservative";
			var capri = "Organization, Labor, Responsible, Control";
			var peixe = "Dedicated, Religion, Musical, Care";
			var virge = "Detail, Efficient, Practical, Analyze, Health";
			var escor = "Dynamic, Profound, Investigation, Tenacious";
			var touro = "Prudent, Financial, Builder, Arts";
			var decid = "Resolution, Decision, Induction";
			var criar = "Intelligence, Creativity, Solution";
			var apren = "Learning, Love, Wisdom";
			var globa = "Global, Universal, Inclusive";
			var socia = "Social, Business, Public";
			var grupa = "Group, Familial, Sectoral";
			var pesso = "Individual, Personal, Exclusive";
			var plano = "Plane, Capital, Justice, Objectives, People";
			var infor = "Information, News, Communication, Network";
			var centr = "Managerial, Mastermind, Operational, Center";
			var servi = "Studies, Analyzes, Jobs, Services";
			var obras = "Works, Product, Research, Objects, Things";
			var intui = "Strategy, Perception, Intuitive";
			var anali = "Analytical, Minutiae, Rational";
			var agira = "Execution, Active, Emocional";
			var lefty = "Concrete, LeftBrain, Technician";
			var right = "Abstract, RightBrain, Managerial";
			
			var t0 = "Abstract, Manager, Theorical, Macro  "; var t1 = "Concrete, Technician, Pratical, Micro  "; var t2 = "Vision";		
			var t3 = "Strategy, Decisive, Manager, Order  "; var t4 = "Analytic, Rational, Apprentice, Do  "; 	var t5 = "Managerial, Emocional";
			var t6 = "Technology"; 	var t7 = "Patrimony";	var t8 = "Service"; 	var t9 = "Managerial"; 	 var t10 = "Capital";

			var msa = 'Decide', 	msb = 'Solve', 		msc = 'Learn',
				msd = 'Personal', 	mse = 'Familial', 	msf = 'Social', 	msg = 'Global',
				msh = 'Capital', 	msi = 'Land', 		msj = 'Work', 		msk = 'Management', 	msl = 'Technology';

		}else{
			
			this.getView().byId("mapa").setProperty("src", "./img/ajuda.jpg");			
			
			var geral = "Plasticidade,Equilibrio,Dualidade";
			var appln = "Analise Talento Natural";
			var appti = "Tipo de Inteligencia";
			var appbc = "Habilidade Negocial - Atitude, Amplitude, Abrangencia";
			var apppo = "Habilidade Cognitiva - Gerenciamento, Producao, Visão";
			var appbl = "Abstrato-Gerencial, Concreto-Tecnico";
			var appam = "Amplitude relacional";
			var appfo = "Foco de atuacao";
			var aries = "Audacioso,Lideranca,Afirmacao,Iniciativa";
			var libra = "Igualdade,Artes,Conciliacao,Equilibrio";
			var sagit = "Otimismo,Aventura,Motivacao,Liberdade";
			var gemeo = "Negocios,Astucia,Adaptacao,Versatil";
			var leaoo = "Governanca,Distincao,Nobreza,Luxo";
			var aquar = "Humanismo,Inovacao,Metodo,Ousadia";
			var cance = "Assessoria,Publicidade,Lar,Conservador";
			var capri = "Organizacao,Labor,Responsavel,Controle";
			var peixe = "Dedicado,Religiao,Musical,Cuidados";
			var virge = "Detalhe,Eficiente,Pratico,Analise,Saude";
			var escor = "Dinamico,Profundo,Investigacao,Tenaz";
			var touro = "Prudente,Financeiro,Construtor,Artes";
			var decid = "Vontade,Decisao,Inducao";
			var criar = "Inteligencia,Criatividade,Solucao";
			var apren = "Aprendizado,Amor,Sabedoria";
			var globa = "Global,Universal,Inclusivo"; 
			var socia = "Social,Empresarial,Publico";
			var grupa = "Grupal,Familial,Setorial";
			var pesso = "Individual,Pessoal,Exclusivo";
			var plano = "Plano,Capital,Justica,Objetivos,Pessoas";
			var infor = "Informacoes,Noticias,Comunicacao,Rede";
			var centr = "Gerencial,Maestria,Operacional,Centro";
			var servi = "Estudos,Analises,Trabalhos,Servicos";
			var obras = "Obra,Produto,Pesquisa,Objetos,Coisas";
			var intui = "Estrategia,Percepcao,Intuitivo";
			var anali = "Analitico,Minucias,Racional";
			var agira = "Execucao,Operacional,Emocional";
			var lefty = "Concreto,LeftBrain,Tecnico";
			var right = "Abstrato,RightBrain,Gerencial";
			
			var t0 = "Abstrato, Gerencial, Teorico, Macro "; var t1 = "Concreto, Tecnico, Pratico, Micro ";	var t2 = "Visao";		
			var t3 = "Estrategia, Decisivo, Gerencia, Mandar ";	var t4 = "Analise, Racional, Aprendiz, Fazer ";	var t5 = "Gerencial, Emocional";
			var t6 = "Tecnologia";	var t7 = "Patrimonio";	var t8 = "Servico";	var t9 = "Gestao";	var t10 = "Capital";

			var msa='Decidir',	msb='Resolver',	msc='Aprender',
				msd='Pessoal',	mse='Familial',	msf='Social',		msg='Global',
				msh='Capital',	msi='Terra',	msj='Trabalho',		msk='Gestão',	msl='Tecnologia';

		} 
	
	var data, chart, y=[], opcoes, fw=1, fh=1;
	var cor = [ '#000000','#7030A0','#AC74D5','#0071C1','#01B0F1','#00AF50','#92D246','#FEFF99','#FFFE00','#FFDA65','#FFC000','#Fe0000','#C70004'];
	
	y = this.onCalculo(); if( y === null ){ this.getView().byId("graph").setProperty("visible", false);  return; }
	
	var l='', a=y[24], b=y[25], c=y[26], d=y[27], e=y[28];  //alert( "parametros :" + a + ":" + b + ":" + c + ":" + d + ":" + e );
	var place = Math.round( y[29]/0.9 ).toString();	 
	var negoc = ' '; if( (a+c+d)/(b+e) > 1 ) negoc='Adm'; if( (b+e)/(a+c+d) > 1 ) negoc='Prd';
	var	nome  = this.byId("natal").getProperty("text").replace(/\s+/g,''); //MessageToast.show( 'Grafico ' + nome );
	
	if( nome != '' && nome != '-')
		{   

			var lista3 = [['','',{role: 'style'},{role: 'annotation'}],['',y[ 0],cor[ 1],aries],['',y[ 6],cor[2],libra],['',y[ 8],cor[ 3],sagit],['',y[ 2],cor[ 4],gemeo],['',y[ 4],cor[ 5],leaoo],['',y[10],cor[6],aquar],['',0,cor[0],''],['',y[3],cor[7],cance],['',y[9],cor[8],capri],['',y[11],cor[9],peixe],['',y[5],cor[10],virge],['',y[7],cor[11],escor],['',y[1],cor[12],touro] ]; 
			data = google.visualization.arrayToDataTable(lista3);
			opcoes = { width:415*fw, height: 300*fh, title: apppo+':'+place+' (%)', chartArea: {width:'98%'}, bar: {groupWidth: "45%"}, legend:{position: 'none'}, hAxis:{format:'##', viewWindow:{min:-1,max:75}} };
			chart = new google.visualization.BarChart( this.byId("pyzza").getDomRef() ); chart.draw(data, opcoes);

			var lista4 = [['','',{role: 'style'},{role: 'annotation'}],['',y[12],cor[11],decid],['',y[13],cor[4],criar],['',y[14],cor[5],apren],['',0,cor[0],''],['',y[15],cor[11],globa],['',y[17],cor[4],socia],['',y[18],cor[5],grupa],['',y[16],cor[0],pesso],['',0,cor[0],''],['',y[19],cor[11],plano],['',y[22],cor[4],infor],['',y[21],cor[8],centr],['',y[23],cor[5],servi],['',y[20],cor[0],obras] ]; 
			data = google.visualization.arrayToDataTable(lista4);	
			opcoes = { width:415*fw, height: 300*fh, title: appbc+' (%) ' + negoc, chartArea: {width:'98%'}, bar: {groupWidth: "47%"}, legend:{position: 'none'}, hAxis:{format:'##', viewWindow:{min:-1,max:75}} };
			chart = new google.visualization.BarChart( this.byId("abran").getDomRef() ); chart.draw(data, opcoes);

			var l='Orientação', x = y[27], z = y[25], a = x*z, b = x*(100-z), c=(100-x)*z, d=(100-x)*(100-z);
			var lista5 = [['Element','', { role: 'style' }],['G Adm',b,cor[3]],['G Prd',d,cor[12]],['F Adm',a,cor[3]],['F Prd',c,cor[12]],] ;
			data = google.visualization.arrayToDataTable(lista5);	
			opcoes = { title:l, width:180*fw, height: 130*fh, bar: {groupWidth: '70%'}, legend:{ position:'none', maxLines: 1 }, hAxis:{format:'##'}, chartArea: { width: '96%' } };
			chart = new google.visualization.ColumnChart( this.byId("graf0").getDomRef() ); chart.draw(data, opcoes); 
			
			l='Amplitude', a=y[16]^2, b=y[18]^2, c=y[17]^2, d=y[15]^2;	
			var lista7 = [['Element','', { role: 'style' }],[msg,d,cor[11]],[msf,c,cor[4]],[mse,b,cor[5]],[msd,a,cor[0]],] ;
			data = google.visualization.arrayToDataTable(lista7);	
			opcoes = { title:l, width:180*fw, height: 130*fh, bar: {groupWidth: '70%'}, legend:{ position:'none', maxLines: 1 }, hAxis:{format:'##'}, chartArea: { width: '96%' } };
			chart = new google.visualization.ColumnChart( this.byId("graf1").getDomRef() ); chart.draw(data, opcoes); 

			l='Atitude', a=y[12]^2, b=y[13]^2, c=y[14]^2 ; 
			var lista6 = [['Element','', { role: 'style' }],[msa,a,cor[11]],[msb,b,cor[4]],[msc,c,cor[5]],] ;			
			data = google.visualization.arrayToDataTable(lista6);	
			opcoes = { title:l, width:160*fw, height: 130*fh, bar: {groupWidth: '65%'}, legend:{ position:'none', maxLines: 1 }, hAxis:{format:'##'}, chartArea: { width: '96%' } };
			chart = new google.visualization.ColumnChart( this.byId("graf2").getDomRef() ); chart.draw(data, opcoes); 

			l='Abrangencia', a=y[19]^2, b=y[22]^2, c=y[21]^2, d=y[23]^2, e=y[20]^2 ;
			var lista8 = [['Element','', { role: 'style' }],[msh,a,cor[11]],[msl,b,cor[4]],[msk,c,cor[8]],[msj,d,cor[5]],[msi,e,cor[0]],] ;
			data = google.visualization.arrayToDataTable(lista8);	
			opcoes = { title:l, width:330*fw, height: 130*fh, bar: {groupWidth: '55%'}, legend:{ position:'none', maxLines: 1 }, hAxis:{format:'##'}, chartArea: { width: '96%' } };
			chart = new google.visualization.ColumnChart( this.byId("graf3").getDomRef() ); chart.draw(data, opcoes); 
		}
	},
	
	onCalculo: function() { 
				
		var nome, local=[], valor=[], map=['Clinton,0,5,2,7,7,5,7,5,3,7,5'];
		nome  = this.byId("natal").getProperty("text").replace(/\s+/g,'');	//MessageToast.show( 'Calculo ' + nome );
		if( nome==='-'){ nome = map[0]; return null; }else{ nome = 'Nome,0,' + nome }
		
		valor = nome.split(","); 
		if(valor[1]>0){ valor = map[valor[1]/1].split(","); } 
		local[0]=0; local[1]=0; 
		for (var i=2; i<12; i++){local[i] = valor[i]; if(!( local[i]>0 & local[i]<13) ){ return null;}};
		
		var index = [ 
			  [	4,			4,			4,		  4,		4,			4,		  4,		4,			4,			4,			4,			4			], 
			  [	4,			4,			4,		  4,		4,			4,		  4,		4,			4,			4,			4,			4			], 
			  [	3,			4,			4,		  4,		2,			4,		  0,		4,			4,			4,			1,			4			], 		
			  [	4,			3,			4,		  2,		4,			4,		  4,		0,			4,			1,			4,			4			], 		
			  [	2,			4,			4,		  0,		4,			4,		  1,		4,			4,			3,			4,			4			], 
			  [	4,			4,			4,		  4,		4,			0,		  4,		1,			4,			4,			4,			3			], 		
			  [	4,			4,			2,		  4,		0,			2,		  4,		4,			1,			4,			3,			4			], 
			  [	4,			4,			1,		  3,		4,			4,		  4,		4,			2,			0,			4,			4			], 
			  [	0,			4,			4,		  1,		4,			4,		  3,		4,			4,			2,			4,			4			], 
			  [	4,			0,			4,		  4,		1,			4,		  4,		3,			4,			4,			2,			4			], 		
			  [	4,			4,			4,		  4,		3,			1,		  4,		4,			4,			4,			0,			2			], 
			  [	4,			1,			4,		  4,		0,			4,		  4,		2,			4,			4,			3,			4			], 
			  [	3,		    2.85,	 3.25,	   2.00,	 1.75,		 1.50,	   1.25,	 2.75,		 2.50,		 1.00,		 0.75,		 0.50			], 
			  [ 1,			2,			6,		  4,		0,			0,		  0,		0,			0,			0,	    	0,	    	0 	    	], 
			  [	5,			6,			7,		  4,		3,			7,		  6,	   12,			8,			9,		   10,		   11			], 
			  ["Coerencia","Regencia","Essencia","Apetite","Guerreiro","Afetivo","Astucia","Incentivo","Restritor","Criativo","Visionario","Captador"	]  
		]; 
	
		var espectros = [], geral, parcial, qmaxi, fator,soma,s,p, f=1.33;
		geral = 0; qmaxi = 0; 
		local[1] = local[index[14][local[2]-1]-1]; 
		if ( local[3] == local[1] || local[3] == local[2]){ local[0] = local[3]; index[12][0] = index[12][3]; }else{ local[0] = 0; index[12][0] = index[12][11]; }
		for( s=0 ; s<12 ; s++ ){ 
			espectros[s] = 0.0;
			for( p=0 ; p<12 ; p++ ){ 
				parcial  = Number( index[12][p] + index[13][index[s][p]] ); 
				if(local[p] == s+1) { espectros[s] = espectros[s] + parcial; }//this.write( local[s]+ ": "+ parcial.toFixed(2) + " " ); 
			}
			if(espectros[s] > 30) { espectros[s] = espectros[s]-1; }
			geral = geral + espectros[s]; 
			//this.write(" " + local[s]  +"->"+ index[15][s] +"->"+ espectros[s].toFixed(2)+"<br>");
		}
	
		espectros[12]	= espectros[0]+espectros[3]+espectros[6]+espectros[ 9]; 			
		espectros[13]	= espectros[1]+espectros[4]+espectros[7]+espectros[10];
		espectros[15]	= espectros[0]+espectros[4]+espectros[8]; 			
		espectros[16]	= espectros[1]+espectros[5]+espectros[9]; 			
		espectros[17]	= espectros[2]+espectros[6]+espectros[10]; 			
		espectros[19]	= espectros[0]+espectros[6]; 
		espectros[20]	= espectros[1]+espectros[7]; 
		espectros[21]	= espectros[3]+espectros[4]+espectros[9]+espectros[10]; 			
		espectros[22]	= espectros[2]+espectros[11]; 			
		espectros[24]	= espectros[0]+espectros[1]+espectros[6]+espectros[ 7]; 			
		espectros[25]	= espectros[2]+espectros[5]+espectros[8]+espectros[11];
		espectros[27]	= espectros[0]+espectros[4]+espectros[8]+espectros[ 2]+espectros[6]+espectros[10];
		
		for( var i=0 ; i<29 ; i++ ){ espectros[i] = Math.round(espectros[i]*100/geral);	}
		
		espectros[14]	= Math.round(100 - espectros[12]- espectros[13]);
		soma 			= espectros[12] + espectros[13] + espectros[14];
		espectros[12]	= 100*espectros[12]/soma;
		espectros[13]	= 100*espectros[13]/soma;		
		espectros[14]	= Math.round(100 - espectros[12]- espectros[13]);
		
		espectros[18]	= Math.round(100 - espectros[15]-espectros[16]-espectros[17]);
		soma 			= espectros[15] + espectros[16] + espectros[17] + espectros[18];
		espectros[15]	= 100*espectros[15]/soma;
		espectros[16]	= 100*espectros[16]/soma;
		espectros[17]	= 100*espectros[17]/soma;
		espectros[18]	= Math.round(100 - espectros[15]-espectros[16]-espectros[17]);
		
		espectros[23]	= Math.round(100 - espectros[19]-espectros[20]-espectros[21]-espectros[22]);			
		soma 			= espectros[19] + espectros[20] + espectros[21] + espectros[22] + espectros[23];
		espectros[19]	= 100*espectros[19]/soma;
		espectros[20]	= 100*espectros[20]/soma;
		espectros[21]	= 100*espectros[21]/soma;
		espectros[22]	= 100*espectros[22]/soma;
		espectros[23]	= Math.round(100 - espectros[19]-espectros[20]-espectros[21]-espectros[22]);			
	
		espectros[26]	= Math.round(100 - espectros[24]-espectros[25]);
		soma 			= espectros[26] + espectros[25]*f + espectros[24];
		espectros[24]	= 100*espectros[24]/soma;
		espectros[25]	= 100*espectros[25]/soma;
		espectros[26]	= Math.round(100 - espectros[24]-espectros[25]);
		
		espectros[28]	= Math.round(100 - espectros[27]);
		
		for( var i=0 ; i<29 ; i++ ){ 
			if(espectros[i]<0){espectros[i]=0;}
			if(i<12		   ){ fator =  33/10.0; }
			if(i>11 && i<15){ fator =  33/33.0; }
			if(i>14 && i<19){ fator =  33/25.0; }
			if(i>18 && i<24){ fator =  33/20.0; }
			if(i>23 && i<27){ fator =  33/33.0; }
			if(i>23 && i<29){ fator =  33/50.0; }
			qmaxi = qmaxi + Math.round(Math.pow(espectros[i]*fator,2));  
		}
		espectros[29] 	= 10*Math.round(10*(77500-qmaxi)/40000); if(espectros[29] > 100) { espectros[29] = 100; }
		if( espectros[29] > 90 ) { espectros[29] = 90; }
		if( espectros[29] < 10 ) { espectros[29] = 10; }
		
		soma = espectros[27] + espectros[28];
		espectros[27]	= 100*espectros[27]/soma;	
		espectros[28]	= Math.round(100 - espectros[27]);
		
		for( i=0 ; i<24 ; i++ ){espectros[i] = Math.round(espectros[i]); if(espectros[i]>50){ espectros[i]=50; } }
		//MessageToast.show( 'Calculo Final' );
		return espectros;
	},
			onInit : function () {
				var oViewModel = new JSONModel({
					busy : false,
					delay : 0,
					lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading")
				});
				this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
				this.setModel(oViewModel, "detailView");
				this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
			},
			onDirectReportItemPress: function(oEvent){
				// var oListItem = oEvent.getParameter("listItem");
				// var oBindingContext = oListItem.getBindingContext();
				//this.doNavigate("1462210606937_S1", oBindingContext);
			},
			doNavigate: function(sRouteName, oBindingContext) {
				var that = this;
				var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
				var oModel = (oBindingContext) ? oBindingContext.getModel() : null;
				var entityNameSet;
				if (sPath !== null && sPath !== "") {
					if (sPath.substring(0, 1) === "/") {
						sPath = sPath.substring(1);
					}
					entityNameSet = sPath.split("(")[0];
				}
				var navigationPropertyName;
				var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;
				if (entityNameSet !== null) {
					navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
				}
				if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
					if (navigationPropertyName === "") {
						this.oRouter.navTo(sRouteName, {
							context: sPath,
							masterContext: sMasterContext
						}, false);
					} else {
						oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
							that.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						});
					}
				} else {
					this.oRouter.navTo(sRouteName);
				}
			},
			getGroupHeader: function (oGroup){
				if(oGroup.key){
					oGroup.key = oGroup.key.replace(/_/g, " ");
				}
				return new GroupHeaderListItem( {
					title: oGroup.key,
					upperCase: false
				} );
			},
			onListUpdateFinished : function (oEvent) {
				var sTitle,
					iTotalItems = oEvent.getParameter("total"),
					oViewModel = this.getModel("detailView");
				// only update the counter if the length is final
				if (this.byId("lineItemsList").getBinding("items").isLengthFinal()) {
					if (iTotalItems) {
						sTitle = this.getResourceBundle().getText("detailLineItemTableHeadingCount", [iTotalItems]);
					} else {
						//Display 'Line Items' instead of 'Line items (0)'
						sTitle = this.getResourceBundle().getText("detailLineItemTableHeading");
					}
					oViewModel.setProperty("/lineItemListTitle", sTitle);
				}
			},
			onNavBack : function() {
				var sPreviousHash = History.getInstance().getPreviousHash();

				if (sPreviousHash !== undefined) {
					history.go(-1);
				} else {
					this.getRouter().navTo("master", {}, true);
				}
			},
			_onObjectMatched : function (oEvent) {
				var sObjectId =  oEvent.getParameter("arguments").objectId;
				this.getModel().metadataLoaded().then( function() {
					var sUserObjectPath = this.getModel().createKey("User", {
						userId :  sObjectId
					});

					this._bindView("/" + sUserObjectPath);
				}.bind(this));
				this.getView().byId("graph").setProperty("visible", true);
			},
			_bindView : function (sUserObjectPath) {
				var oViewModel = this.getModel("detailView");
				oViewModel.setProperty("/busy", false);
				this.getView().bindElement({
					path : sUserObjectPath,
					parameters: {
					    expand: 'directReports'
					},
					events: {
						change : this._onBindingChange.bind(this),
						dataRequested : function () {
							oViewModel.setProperty("/busy", true);
						},
						dataReceived: function () {
							oViewModel.setProperty("/busy", false);
						}
					}
				});
			},
			_onBindingChange : function () {
				var oView = this.getView(),
					oElementBinding = oView.getElementBinding();
				if (!oElementBinding.getBoundContext()) {
					this.getRouter().getTargets().display("detailObjectNotFound");
					this.getOwnerComponent().oListSelector.clearMasterListSelection();
					return;
				}
				var sUserPath = oElementBinding.getPath();
				var oModel = oView.getModel(); //this.getOwnerComponent().getModel();
				var oUserObject = oModel.getObject(sUserPath);
				var userId = oUserObject.userId; // context.getProperty("userId");
				this.getOwnerComponent().oListSelector.selectAListItem(sUserPath);
				google.charts.setOnLoadCallback(this.drawChart.bind(this)); //this.drawChart();
			},

			_onMetadataLoaded : function () {
				var iOriginalViewBusyDelay = this.getView().getBusyIndicatorDelay(),
					oViewModel = this.getModel("detailView");
					oViewModel.setProperty("/delay", 0);
					oViewModel.setProperty("/lineItemTableDelay", 0);
				oViewModel.setProperty("/busy", true);
				oViewModel.setProperty("/delay", iOriginalViewBusyDelay);
			}
		});
	}
);