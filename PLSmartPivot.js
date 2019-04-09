define(["jquery",
		"text!./css/PLSmartPivot.css"		
		], 
	function(e,t) {'use strict';
	return e("<style>").html(t).appendTo("head"),{
		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 10,
					qHeight : 1000
				}]
			},			
		},
		definition : {
			type : "items",
			component : "accordion",
			items : {
				dimensions : {
					uses : "dimensions",
					min : 1,
					max : 2
				},
				measures : {
					uses : "measures",
					min : 1,
					max : 9
				},
				sorting : {
					uses : "sorting"
				},
				
				settings : {
					uses : "settings",
					items : {
						Pagination: {
							type: "items",
							label: "Pagination",
							items: {
								MaxPaginationLoops: {
								ref: "maxloops",
								type: "number",
								component: "dropdown",
								label: "Max Pagination Loops",
								options: 
									[ {
										value: 1,
										label: "10k cells"
									}, {
										value: 2,
										label: "20k cells"
									}, {
										value: 3,
										label: "30k cells"
									}, {
										value: 4,
										label: "40k cells"
									}, {
										value: 5,
										label: "50k cells"
									}, {
										value: 6,
										label: "60k cells"
									}, {
										value: 7,
										label: "70k cells"
									}, {
										value: 8,
										label: "80k cells"
									}, {
										value: 9,
										label: "90k cells"
									}, {
										value: 10,
										label: "100k cells"
									}],
								  defaultValue: 2,
							        },
								ErrorMessage : {
									ref : "errormessage",
									label : "Default error message",
									type : "string",
									defaultValue : "Ups! It seems you asked for too many data. Please filter more to see the whole picture.",
								},
							},
						},
						Header: {
							type: "items",
							label: "Header Format",
							items: {
								Align:{
									ref: "HeaderAlign",
									translation: "Header Alignment",
									type: "number",
									component: "buttongroup",
									options: [ {
										value: 1,
										label: "Left"
									}, {
										value: 2,
										label: "Center"
									}, { 
										value: 3,
										label: "Right"
									}],
									defaultValue: 2,								
								},
								headercolors: {
								  ref: "HeaderColorSchema",
								  type: "string",
								  component: "dropdown",
								  label: "BackGround Header Color",
								  options: 
									[ {
										value: "Clean",
										label: "Clean"
									}, {
										value: "Soft",
										label: "Soft"
									}, {
										value: "Dark",
										label: "Dark"
									}, {
										value: "Night",
										label: "Night"
									}, {
										value: "Blue",
										label: "Blue"
									}, {
										value: "Orange",
										label: "Orange"
									}, {
										value: "Red",
										label: "Red"
									}, {
										value: "Green",
										label: "Green"
									}, {
										value: "Violete",
										label: "Violete"
									}, {
										value: "Custom",
										label: "Custom"
									}
																		
									],
								  defaultValue: "Night",
							        },
								HeaderTextColor: {
								  ref: "HeaderTextColorSchema",
								  type: "string",
								  component: "dropdown",
								  label: "Text Header Color",
								  options: 
									[ {
										value: "Black",
										label: "Black"
									}, {
										value: "DimGray",
										label: "DimGray"
									}, {
										value: "ForestGreen",
										label: "ForestGreen"
									}, {
										value: "Gainsboro",
										label: "Gainsboro"
									}, {
										value: "Indigo",
										label: "Indigo"
									}, {
										value: "Navy",
										label: "Navy"
									}, {
										value: "rgb(224,167,75)",
										label: "Orange"
									}, {
										value: "Purple",
										label: "Purple"																		
									}, {
										value: "WhiteSmoke",
										label: "WhiteSmoke"
									}, {
										value: "White",
										label: "White"
									}, {
										value: "YellowGreen",
										label: "YellowGreen"
									}	
									],
								  defaultValue: "WhiteSmoke",
							        },		
								HeaderFontSize:{
									ref: "lettersizeheader",
									translation: "Font Size",
									type: "number",
									component: "buttongroup",
									options: [ {
										value: 1,
										label: "Small"
									}, {
										value: 2,
										label: "Medium"
									//}, { 
									//	value: 3,
									//	label: "Large"
									}],
									defaultValue: 2								
								},
								ApplyFootTags : {
									ref : "applyfoottags",
									type : "boolean",
									component : "switch",
									label : "Apply foot tags to Concepts",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false
								}
							}
						},
						Formatted: {
							type: "items",
							label: "Table Format",
							items: {
								IndentBool : {
									ref : "indentbool",
									type : "boolean",
									label : "Indent",
									defaultValue : true								
								},
								CollapseBool : {
									ref : "collapsebool",
									type : "boolean",
									label : "Allow to Collapse",
									defaultValue : true								
								},
								SeparatorColumns : {
									ref : "separatorcols",
									type : "boolean",
									label : "Separator Columns",
									defaultValue : false									
								},								
								CustomFileBool : {
									ref : "customfilebool",
									type : "boolean",
									label : "Include External File",
									defaultValue : false								
								},
								CustomFile : {
									ref : "customfile",
									label : "Name of CSV file (; separated)",
									type : "string",
									defaultValue : "",
									show : function(data) {
										return data.customfilebool;
									}
								},								
								colors: {
								  ref: "ColorSchema",
								  type: "string",
								  component: "dropdown",
								  label: "BackGround Style",
								  options: 
									[ {
										value: "Clean",
										label: "Clean"
									}, {
										value: "Soft",
										label: "Soft"
									}, {
										value: "Dark",
										label: "Dark"
									}, {
										value: "Night",
										label: "Night"
									}, {
										value: "Blue",
										label: "Blue"
									}, {
										value: "Orange",
										label: "Orange"
									}, {
										value: "Red",
										label: "Red"
									}, {
										value: "Green",
										label: "Green"
									}, {
										value: "Violete",
										label: "Violete"
									}, {
										value: "Custom",
										label: "Custom"
									}
																		
									],
								  defaultValue: "Clean",
								  show : function(data) {
										return data.customfilebool == false;
									}
							        },
								BodyTextColor: {
								  ref: "BodyTextColorSchema",
								  type: "string",
								  component: "dropdown",
								  label: "Text Body Color",
								  options: 
									[ {
										value: "Black",
										label: "Black"
									}, {
										value: "DimGray",
										label: "DimGray"
									}, {
										value: "ForestGreen",
										label: "ForestGreen"
									}, {
										value: "Gainsboro",
										label: "Gainsboro"
									}, {
										value: "Indigo",
										label: "Indigo"
									}, {
										value: "Navy",
										label: "Navy"
									}, {
										value: "Purple",
										label: "Purple"																		
									}, {
										value: "WhiteSmoke",
										label: "WhiteSmoke"
									}, {
										value: "White",
										label: "White"
									}, {
										value: "YellowGreen",
										label: "YellowGreen"
									}	
									],
								  defaultValue: "Black",
								  show : function(data) {
										return data.customfilebool == false;
									}
							        },																	
								FontFamily: {
								  ref: "FontFamily",
								  type: "string",
								  component: "dropdown",
								  label: "FontFamily",
								  options: 
									[ {
										value: "Arial",
										label: "Arial"
									}, {
										value: "Calibri",
										label: "Calibri"
									}, {
										value: "Comic Sans MS",
										label: "Comic Sans MS"
									}, {
										value: "MS Sans Serif",
										label: "MS Sans Serif"
									}, {
										value: "QlikView Sans,sans-serif",
										label: "QlikView Sans,sans-serif"
									}, {
										value: "Tahoma",
										label: "Tahoma"
									}, {
										value: "Verdana",
										label: "Verdana"
									}
									
									
									],
								  defaultValue: "QlikView Sans,sans-serif"								  
							        },
								DataFontSize:{
									ref: "lettersize",
									translation: "Font Size",
									type: "number",
									component: "buttongroup",
									options: [ {
										value: 1,
										label: "Small"
									}, {
										value: 2,
										label: "Medium"
									//}, { 
									//	value: 3,
									//	label: "Large"
									}],
									defaultValue: 2								
								},
								ConceptsAlignment:{
									ref: "concalign",
									translation: "Text Alignment",
									type: "string",
									component: "buttongroup",
									options: [ {
										value: "left",
										label: "left"
									}, {
										value: "center",
										label: "center"									
									}, {
										value: "right",
										label: "right"									
									}],
									defaultValue: "left"							
								},
								ColumnWidthSlider: {
									type: "number",
									component: "slider",
									label: "Column Width",
									ref: "columnwidthslider",
									min: 1,
									max: 3,
									step: 1,
									defaultValue: 2
								},	
								SymbolForNulls : {
									ref : "symbolfornulls",
									label : "Symbol for Nulls",
									type : "string",
									defaultValue : " "									
								},
								AllowExportXLS : {
									ref : "allowexportxls",
									type : "boolean",
									component : "switch",
									label : "Allow export to Excel",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: true
								},														
								FilterOnCellClick: {
									ref: "filteroncellclick",
									type: "boolean",
									component: "switch",
									label: "Filter data when cell clicked",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: true
								}
							}
						},
						ConceptSemaphores: {
							type: "items",
							label: "Concept Semaphores",
							items: {
								AllConcepts:{
									ref : "allsemaphores",
									type : "boolean",
									component : "switch",
									label : "All concepts affected",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: true								
								},
								ConceptsAffected1:{
									ref: "conceptsemaphore1",
									translation: "Concept 1",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected2:{
									ref: "conceptsemaphore2",
									translation: "Concept 2",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected3:{
									ref: "conceptsemaphore3",
									translation: "Concept 3",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected4:{
									ref: "conceptsemaphore4",
									translation: "Concept 4",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected5:{
									ref: "conceptsemaphore5",
									translation: "Concept 5",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected6:{
									ref: "conceptsemaphore6",
									translation: "Concept 6",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected7:{
									ref: "conceptsemaphore7",
									translation: "Concept 7",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected8:{
									ref: "conceptsemaphore8",
									translation: "Concept 8",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected9:{
									ref: "conceptsemaphore9",
									translation: "Concept 9",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
								ConceptsAffected10:{
									ref: "conceptsemaphore10",
									translation: "Concept 10",
									type: "string",
									defaultValue: "",
									show : function(data) {
										return data.allsemaphores == false;
									}	
								},
							}
						},
						MetricSemaphores: {
							type: "items",
							label: "Metric Semaphores",
							items: {
								AllMetrics:{
									ref : "allmetrics",
									type : "boolean",
									component : "switch",
									label : "All metrics affected",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								MetricsAffected:{
									ref: "metricssemaphore",
									translation: "Metrics affected (1,2,4,...)",
									type: "string",
									defaultValue: "0",
									show : function(data) {
										return data.allmetrics == false;
									}	
								},
								MetricStatus1: {
									ref: "metricsstatus1",
									translation: "Critic is less than",
									type: "number",
									defaultValue: -0.1	
								},
								ColorStatus1: {
									ref: "colorstatus1",
									label: "Critic Color Fill",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 7,  
										color: "#f93f17"  
									}  
								},
								ColorStatus1Text: {
									ref: "colorstatus1text",
									label: "Critic Color Text",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 10,  
										color: "#ffffff"  
									}  
								},								
								MetricStatus2: {
									ref: "metricsstatus2",
									translation: "Medium is less than",
									type: "number",
									defaultValue: 0	
								},
								ColorStatus2: {
									ref: "colorstatus2",
									label: "Medium Color Fill",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 8,  
										color: "#ffcf02"  
									}  
								},
								ColorStatus2Text: {
									ref: "colorstatus2text",
									label: "Medium Color Text",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 11,  
										color: "#000000"  
									}  
								},
								ColorStatus3: {
									ref: "colorstatus3",
									label: "Success Color Fill",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 9,  
										color: "#276e27"  
									}  
								},
								ColorStatus3Text: {
									ref: "colorstatus3text",
									label: "Success Color Text",
									type: "object",  
									component: "color-picker",  
									defaultValue: {  
										index: 10,  
										color: "#ffffff"  
									}  
								},
								
							}
						},
						ColorLibrary: {
							type: "items",
							label: "Primary Colors Library",
							items: {
								ColLibClean:{
									ref: "collibclean",
									translation: "Clean",
									type: "string",
									defaultValue: "#ffffff",
								},
								ColLibSoft:{
									ref: "collibsoft",
									translation: "Soft",
									type: "string",
									defaultValue: "#efefef",									
								},
								ColLibDark:{
									ref: "collibdark",
									translation: "Dark",
									type: "string",
									defaultValue: "#c4c4c4",									
								},
								ColLibNight:{
									ref: "collibnight",
									translation: "Night",
									type: "string",
									defaultValue: "#808080",									
								},
								ColLibRed:{
									ref: "collibred",
									translation: "Red",
									type: "string",
									defaultValue: "#d58b94",									
								},
								ColLibOrange:{
									ref: "colliborange",
									translation: "Orange",
									type: "string",
									defaultValue: "#fd6600",									
								},
								ColLibViolete:{
									ref: "collibviolete",
									translation: "Violete",
									type: "string",
									defaultValue: "#ccc0ff",	
								},
								ColLibBlue:{
									ref: "collibblue",
									translation: "Blue",
									type: "string",
									defaultValue: "#4575b4",									
								},
								ColLibGreen:{
									ref: "collibgreen",
									translation: "Green",
									type: "string",
									defaultValue: "#7bb51c",									
								},
								ColLibCustom : {
									ref : "collibcustom",
									label : "Custom",
									type : "string",
									defaultValue : "#ffcccc",									
								},
							}
						},
						PijamaColorLibrary: {
							type: "items",
							label: "Pijama Colors Library",
							items: {
								ColLibCleanP:{
									ref: "collibcleanp",
									translation: "Clean",
									type: "string",
									defaultValue: "#ffffff",
								},
								ColLibSoftP:{
									ref: "collibsoftp",
									translation: "Soft",
									type: "string",
									defaultValue: "#ffffff",									
								},
								ColLibDarkP:{
									ref: "collibdarkp",
									translation: "Dark",
									type: "string",
									defaultValue: "#efefef",									
								},
								ColLibNightP:{
									ref: "collibnightp",
									translation: "Night",
									type: "string",
									defaultValue: "#c4c4c4",									
								},
								ColLibRedP:{
									ref: "collibredp",
									translation: "Red",
									type: "string",
									defaultValue: "#ffcccc",									
								},
								ColLibOrangeP:{
									ref: "colliborangep",
									translation: "Orange",
									type: "string",
									defaultValue: "#ffcc66",									
								},
								ColLibVioleteP:{
									ref: "collibvioletep",
									translation: "Violete",
									type: "string",
									defaultValue: "#e6e6ff",	
								},
								ColLibBlueP:{
									ref: "collibbluep",
									translation: "Blue",
									type: "string",
									defaultValue: "#b3d9ff",									
								},
								ColLibGreenP:{
									ref: "collibgreenp",
									translation: "Green",
									type: "string",
									defaultValue: "#98fb98",									
								},
								ColLibCustomP: {
									ref : "collibcustomp",
									label : "Custom",
									type : "string",
									defaultValue : "#ffffff",									
								},
							}
						}
					}
				}
			}
		},
		snapshot : {
			canTakeSnapshot : true
		},
		controller:[
			"$scope",
			"$timeout",
			function(e,t){}
		],
		paint : function(t,a) {
			var isIE = /*@cc_on!@*/false || !!document.documentMode;
			var isChrome = window.chrome;//!!window.chrome && !!window.chrome.webstore;
			var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
			var isFirefox = typeof InstallTrigger !== 'undefined';

			var vIconMinus = false;
			var vIconPlus = false;
			
			var sufixCells = "";
			var sufixWrap = "";
			switch (this.backendApi.model.layout.columnwidthslider) {
				case 1:
				sufixCells += '-s';
				break;
				case 2:
				sufixCells += '';
				break;
				case 3:
				sufixCells += '-l';
				break;
				default:
				sufixCells += '';
				break;					
			}
			
			var dim_count = this.backendApi.model.layout.qHyperCube.qDimensionInfo.length;			
			var measure_count = this.backendApi.model.layout.qHyperCube.qMeasureInfo.length;	
			
			var myTitle = "";
			var mySubTitle = "";
			var myFootNote = "";
			var myFootNoteAux = "";
			if(this.backendApi.model.layout.title.length > 0){
				myTitle += '<p style="font-size:15px"><b>';
				var vTitAux = this.backendApi.model.layout.title;
				myTitle += vTitAux.split(' ').join('&nbsp;');
				myTitle += '</b></p>';
			}
			if(this.backendApi.model.layout.subtitle.length > 0){
				mySubTitle += '<p style="font-size:11px">';
				var vSubTitAux = this.backendApi.model.layout.subtitle;
				mySubTitle += vSubTitAux.split(' ').join('&nbsp;');
				mySubTitle += '</p>';
			}
			if(this.backendApi.model.layout.footnote.length > 0){
				myFootNote += '<p style="font-size:11px"><i>Note:</i>';
				var vFootAux = this.backendApi.model.layout.footnote;
				myFootNoteAux = vFootAux;
				myFootNote += vFootAux.split(' ').join('&nbsp;');
				myFootNote += '</p>';
			}
			
			var vNumberFormat = "";
			
			var vMaxLoops = this.backendApi.model.layout.maxloops;
			var vErrorMessage = this.backendApi.model.layout.errormessage;
			
			var vSeparatorCols = this.backendApi.model.layout.separatorcols;
			if (dim_count == 1) {
				vSeparatorCols = false;
			}
			
			var vCustomFileBool = this.backendApi.model.layout.customfilebool;			
			var vCustomFile = this.backendApi.model.layout.customfile;
			
			var vPadding = this.backendApi.model.layout.indentbool;
			var vCollapse = this.backendApi.model.layout.collapsebool;
			var vPaddingText = "";
			
			var vGlobalComas = 0;
			var vGlobalComas2 = 0;
			var vGlobalComment = 0;
			var vGlobalCommentColor = "";
			var vGlobalFontSize = 0;
			var vOKCustom = 0;
			var vComas = 0;
			var vMedium = false;
			
			var vPaginationLoop = 0;
			
			var vHeaderAlign = this.backendApi.model.layout.HeaderAlign;
						
			var vColLibClean = this.backendApi.model.layout.collibclean;
			var vColLibSoft = this.backendApi.model.layout.collibsoft;
			var vColLibDark = this.backendApi.model.layout.collibdark;
			var vColLibNight = this.backendApi.model.layout.collibnight;
			var vColLibRed = this.backendApi.model.layout.collibred;
			var vColLibOrange = this.backendApi.model.layout.colliborange;
			var vColLibBlue = this.backendApi.model.layout.collibblue;
			var vColLibGreen = this.backendApi.model.layout.collibgreen;
			var vColLibViolete = this.backendApi.model.layout.collibviolete;
			var vColLibCustom = this.backendApi.model.layout.collibcustom;
			
			var vColLibCleanP = this.backendApi.model.layout.collibcleanp;
			var vColLibSoftP = this.backendApi.model.layout.collibsoftp;
			var vColLibDarkP = this.backendApi.model.layout.collibdarkp;
			var vColLibNightP = this.backendApi.model.layout.collibnightp;
			var vColLibRedP = this.backendApi.model.layout.collibredp;
			var vColLibOrangeP = this.backendApi.model.layout.colliborangep;
			var vColLibBlueP = this.backendApi.model.layout.collibbluep;
			var vColLibGreenP = this.backendApi.model.layout.collibgreenp;
			var vColLibVioleteP = this.backendApi.model.layout.collibvioletep;
			var vColLibCustomP = this.backendApi.model.layout.collibcustomp;
			
			var vDynamicColorHeader = 'vColLib' + this.backendApi.model.layout.HeaderColorSchema;
			var vDynamicColorBody = 'vColLib' + this.backendApi.model.layout.ColorSchema;
			var vDynamicColorBodyP = 'vColLib' + this.backendApi.model.layout.ColorSchema + 'P';
			
			var vHeaderColorSchema = eval(vDynamicColorHeader);			
			var vColorSchema = eval(vDynamicColorBody);
			var vColorSchemaP = eval(vDynamicColorBodyP);
			
			var vExportToExcel = this.backendApi.model.layout.allowexportxls;
			
			var vFontFamily = this.backendApi.model.layout.FontFamily;
			var vFontSize = "";
			
			var vColorText = this.backendApi.model.layout.BodyTextColorSchema;
			var vDivide = 1;
			var nMeasAux = 0;			
			
			var vHeaderColorText = this.backendApi.model.layout.HeaderTextColorSchema;
			
			var vHeaderAlignText = "";
			switch (vHeaderAlign)
			{
				case 1:
				vHeaderAlignText = 'left';
				break;
				case 2:
				vHeaderAlignText = 'center';
				break;
				case 3:
				vHeaderAlignText = 'right';
				break;
			}
			
			var vLetterSize = 0;
			var vLetterSizeHeader = 0;
			var vApplyFootTags = this.backendApi.model.layout.applyfoottags;

			switch (this.backendApi.model.layout.lettersizeheader)
			{
				case 1:
				vLetterSizeHeader = -2;
				break;
				case 2:
				vLetterSizeHeader = 0;
				break;
				case 3:
				vLetterSizeHeader = 2;
				break;
			}
			switch (this.backendApi.model.layout.lettersize)
			{
				case 1:
				vLetterSize = -2;
				break;
				case 2:
				vLetterSize = -1;
				break;
				case 3:
				vLetterSize = 2;
				break;
			}
			var vTextAlign = this.backendApi.model.layout.concalign;
			
			var vIndent = "";
			
			var vSymbolForNulls = this.backendApi.model.layout.symbolfornulls;
			var vRemoveRows = new Array();
			var vAllSemaphores = this.backendApi.model.layout.allsemaphores;			
			var ConceptsAffectedMatrix = new Array(10);
			if (vAllSemaphores == false) {				
				ConceptsAffectedMatrix[0] = this.backendApi.model.layout.conceptsemaphore1;
				ConceptsAffectedMatrix[1] = this.backendApi.model.layout.conceptsemaphore2;
				ConceptsAffectedMatrix[2] = this.backendApi.model.layout.conceptsemaphore3;
				ConceptsAffectedMatrix[3] = this.backendApi.model.layout.conceptsemaphore4;
				ConceptsAffectedMatrix[4] = this.backendApi.model.layout.conceptsemaphore5;
				ConceptsAffectedMatrix[5] = this.backendApi.model.layout.conceptsemaphore6;
				ConceptsAffectedMatrix[6] = this.backendApi.model.layout.conceptsemaphore7;
				ConceptsAffectedMatrix[7] = this.backendApi.model.layout.conceptsemaphore8;
				ConceptsAffectedMatrix[8] = this.backendApi.model.layout.conceptsemaphore9;
				ConceptsAffectedMatrix[9] = this.backendApi.model.layout.conceptsemaphore10;
			}
			
			var vAllMetrics = this.backendApi.model.layout.allmetrics;
			var MetricsAffectedMatrix = JSON.parse("[" + this.backendApi.model.layout.metricssemaphore + "]");				
						
			var vColorMetric1 = this.backendApi.model.layout.colorstatus1.color;
			var vColorMetric2 = this.backendApi.model.layout.colorstatus2.color;
			var vColorMetric3 = this.backendApi.model.layout.colorstatus3.color;
			var vColorMetric1Text = this.backendApi.model.layout.colorstatus1text.color;
			var vColorMetric2Text = this.backendApi.model.layout.colorstatus2text.color;
			var vColorMetric3Text = this.backendApi.model.layout.colorstatus3text.color;
			var vColorSemaphore = '';
			var vColorSemaphoreText = '';						
			
			var vCritic = this.backendApi.model.layout.metricsstatus1;
			var vMMedium = this.backendApi.model.layout.metricsstatus2;
			
			var vBoldFlag = "";
			var vDimName = "";
			var CustomArray = new Array();
			var CustomArrayBasic = new Array();
			var CustomParents = new Array();	
			var CustomParents2	= new Array();
			var CustomParents2L	= new Array();
			var ArrayOff = new Array();
			var vNumAccounts = 0;
			var vNumCustomHeaders = 0;
			var headers = new Array();				
			
			var ConceptMatrix = new Array();
			var ConceptMatrixFirst = new Array();
			var ConceptMatrixRowElem = new Array();
			var ConceptMatrixSecond = new Array();
			var ConceptMatrixColElem = new Array();
			var ConceptMatrixColElemTable = new Array();
			var ConceptMatrixPivot = new Array();
			var ArrayGetSelectedCount = new Array();
			var ConceptMatrixFirstClean = new Array();
			
			var vColumnText = "";
			var vColumnNum = "";
			var vPercent = false;
			var vMaskNum = 0;
			var html2 = "";
			var StyleTags = "";
			var	StyleTags1 = "";
			var	StyleTags2 = "";
			var	StyleTags3 = "";
			var	StyleTags4 = "";
			var	StyleTags5 = "";
			var	StyleTags6 = "";
			var	StyleTags7 = "";
			var	StyleTags8 = "";
			var	StyleTags9 = "";
			
			var vNumDims = 0;
			var vNumMeasures = 0;
			var vNumMeasures2 = 0;//sirve para multiplicar num medidas por num elementos de la 2ª dimensión
			var SecondHeaderLength = 0;//sirve para determinar cuántos elementos hay en la 2ª dimensión
			var vNumMeasuresCheckLevels = 2;
			var vNumCols = 0;
			var MeasuresFormat = new Array();
			var LabelsArray = new Array();
			var ExtraLabelsArray = new Array();
			var vExtraLabel = "";
			var vMoreButtonCode = "";
			var vExcelButtonCode = "";	
			
			var self = this, lastrow = 0, morebutton = false;
			var f = "";
			
			var nRows = this.backendApi.getRowCount();
			
			f += "<div class='header-wrapper'> <table class='header'><tr>";
			
			
			//render titles
			e.each(this.backendApi.getDimensionInfos(),function(e,t){			
				ArrayGetSelectedCount.push(t.qStateCounts.qSelected); 
				vDimName = t.qFallbackTitle;
				if (vNumDims == 0) {
					LabelsArray.push(vDimName);
				}
				vNumDims++;
				if (dim_count == 1) {
					
					if(vExportToExcel) {		
						vExcelButtonCode = '<input class = "icon-xls" type = "image" src="/Extensions/PLSmartPivot/img/Excel.png">';
					}else{
						vExcelButtonCode = "";					 
					}
					
					f += '<th class="fdim-cells" style="cursor:default;color:' + vHeaderColorText + ';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (17 + vLetterSizeHeader) + 'px;height:70px;width:230px;vertical-align:middle;text-align:' + vHeaderAlignText + '">' + vExcelButtonCode + t.qFallbackTitle + '</th>';
			
				}
			});
			e.each(this.backendApi.getMeasureInfos(),function(e,t) {
				
				vDimName = t.qFallbackTitle;
				LabelsArray.push(vDimName);
				var mfor = "";
				
				if(t.qNumFormat.qType == 'U' || t.qNumFormat.qFmt == '##############'){					
					mfor = '#.##0'; //in case of undefined
				}else{
					if(t.qNumFormat.qType == 'R'){
						mfor = t.qNumFormat.qFmt;
						mfor = mfor.replace(/(|)/gi,'');						
					}else{
						mfor = t.qNumFormat.qFmt;						
					}
				}
				
				MeasuresFormat.push(mfor);				
				
				switch (mfor.substr(mfor.length - 1))
				{
					case 'm':
					vExtraLabel = ' (M)';
					ExtraLabelsArray.push(' (M)');
					break;
					case 'M':
					vExtraLabel = ' (M)';
					ExtraLabelsArray.push(' (M)');
					break;
					case 'k':
					vExtraLabel = ' (k)';
					ExtraLabelsArray.push(' (k)');
					break;
					case 'K':
					vExtraLabel = ' (k)';
					ExtraLabelsArray.push(' (k)');
					break;
					default:
					vExtraLabel = "";
					ExtraLabelsArray.push('');
					break;
				}
				vNumMeasures++;
				vNumMeasuresCheckLevels++;
				if (dim_count == 1) {
					if (((t.qFallbackTitle + vExtraLabel).length > 11 && vLetterSizeHeader == 0) ||
					    ((t.qFallbackTitle + vExtraLabel).length > 12 && vLetterSizeHeader == -2)) {
						sufixWrap = '70';
					}else{
						sufixWrap = 'Empty';
					}
					f += '<th class="grid-cells2' + sufixCells + '" style="cursor:default' + ';color:' + vHeaderColorText +';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (15 + vLetterSizeHeader) + 'px;height:70px;vertical-align:middle;text-align:' + vHeaderAlignText + '"><span class = "wrapclass' + sufixWrap + '" style="font-family:' + vFontFamily + '">' + t.qFallbackTitle + vExtraLabel + '</span></th>';
				}
			});
									
			var vColumnTextUpper = "";
			
			//order the info in particular arrays						
			this.backendApi.eachDataRow(function(t, a) { 
				lastrow = t;
				
				var vColumn = 0;
				var vColumnP = 0;
				
				
				var vColumnNumber = 0;
				
				var vStartsRight = 0;
				
				var vBoldNumber = 0;
				var vTagText = "";
				//var vComment = 0;
				
				var dim = a[0];
				
				var vNumMeasuresPlus = vNumMeasures + 1;
				var vNumMeasuresPlus2 = vNumMeasures + 2;
				
				ConceptMatrix[t] = new Array();
				ConceptMatrix[t][0] = a[0].qText;
			
				ConceptMatrixFirst[t] = a[0].qText;
				ConceptMatrixRowElem[t] = a[0].qElemNumber;				
				var nMeasures = 0;			
				if (vNumDims == 1) {					
					for(nMeasures = 1;nMeasures <= vNumMeasures;nMeasures++){						
						ConceptMatrix[t][nMeasures] = a[nMeasures].qNum;						
					}
				}else{
					ConceptMatrix[t][1] = a[1].qText;
					ConceptMatrixColElem[t] = a[1].qElemNumber;
					ConceptMatrixSecond[t] = a[1].qText;
					// set the hipercube in a plain array without pivoting
					for(nMeasures = 2;nMeasures <= vNumMeasuresPlus;nMeasures++){
						ConceptMatrix[t][nMeasures] = a[nMeasures].qNum;							
					}
				}				
			});
			if(nRows > (lastrow + 1) && nRows <= (vMaxLoops * 1000)) {
				vPaginationLoop++;
				var requestPage = [{
				qTop : lastrow + 1,
				qLeft : 0,
				qWidth : 10, //should be # of columns
				qHeight : Math.min(1000, nRows - lastrow)
				}];
				
				this.backendApi.getData(requestPage).then(function(dataPages) {
					self.paint(t);
				});
			};
			
			if (nRows >= (vMaxLoops * 1000)) {
				alert(vErrorMessage);
			}
			ConceptMatrixFirstClean = ConceptMatrixFirst.filter(onlyUnique);
			// particular headers in case you have more than 1 dimension
			if (vNumDims == 2) {
				//new array with unique values for 2nd dim
				
				var SecondHeader = ConceptMatrixSecond.filter(onlyUnique);//second dimension concepts
				ConceptMatrixRowElem = ConceptMatrixRowElem.filter(onlyUnique);//first dimension concepts
				ConceptMatrixColElem = ConceptMatrixColElem.filter(onlyUnique);//dimension code for further selections
				var eo = ConceptMatrixColElem.length;
				var vLoopColsMeasures = 1;
				ConceptMatrixColElemTable[0] = ConceptMatrixColElem[0];
				for(var xx = 0;xx < eo;xx++){
					if (vSeparatorCols && xx > 0) {
					
						ConceptMatrixColElemTable[vLoopColsMeasures] = ConceptMatrixColElem[xx];
						vLoopColsMeasures++;
					}
					
					for(var xxx = 0;xxx < vNumMeasures;xxx++){
						ConceptMatrixColElemTable[vLoopColsMeasures] = ConceptMatrixColElem[xx];
						vLoopColsMeasures++;						
					}					
				}
				
				
				SecondHeaderLength = SecondHeader.length;
				vNumMeasures2 = vNumMeasures * SecondHeaderLength;
				
				if(measure_count>1){
					
					if(vExportToExcel) {		
						vExcelButtonCode = '<input class = "icon-xls" type = "image" src="/Extensions/PLSmartPivot/img/Excel.png">';						
					}else{
						vExcelButtonCode = "";					 
					}					
					
					f += '<th class="fdim-cells" rowspan="2" padding-left="20px" style="cursor:default;color:' + vHeaderColorText +';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (16 + vLetterSizeHeader) + 'px;height:80px;width:230px;vertical-align:middle;text-align:' + vHeaderAlignText + '">' + vExcelButtonCode +LabelsArray[0] + '</th>';
				
					for (var nSecond=0;nSecond<SecondHeaderLength;nSecond++){//second dimension header
						if(vSeparatorCols && nSecond > 0){						
							f += '<th class = "empty" style="color:white' + ';font-family:' + vFontFamily + ';font-size:' + (13 + vLetterSizeHeader) + 'px">' + '*' + '</th>';
						}
						
						f += '<th class="grid-cells2' + sufixCells + '" colspan="' + measure_count + '"; style="color:' + vHeaderColorText +';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (14 + vLetterSizeHeader) + 'px;height:45px;vertical-align:middle;text-align:' + vHeaderAlignText + '">' + SecondHeader[nSecond] + '</th>';
					}
					f += "</tr>";
										
					f += "<tr>";
					for (var nSecond2=0;nSecond2<SecondHeaderLength;nSecond2++){//metrics label header
						if(vSeparatorCols && nSecond2 > 0){
							f += '<th class = "empty" style="color:white' + ';font-family:' + vFontFamily + ';font-size:' + (12 + vLetterSize) + 'px">' + '*' + '</th>';
						}
						for (var nMeas=1;nMeas<=measure_count;nMeas++){
							nMeasAux = nMeas - 1;
							if (MeasuresFormat[nMeasAux].substring(MeasuresFormat[nMeasAux].length - 1) == '%') {
								f += '<th class="grid-cells2-small' + sufixCells + '" style="cursor:default' + ';color:' + vHeaderColorText +';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (13 + vLetterSizeHeader) + 'px;height:25px;vertical-align:middle;text-align:' + vHeaderAlignText + '"><span class = "wrapclass25">' + LabelsArray[nMeas] + ExtraLabelsArray[nMeas - 1] + '</span></th>';
							}else{
								f += '<th class="grid-cells2' + sufixCells + '" style="cursor:default' + ';color:' + vHeaderColorText +';font-family:' + vFontFamily + ';background-color:' + vHeaderColorSchema + ';font-size:' + (14 + vLetterSizeHeader) + 'px;height:25px;vertical-align:middle;text-align:' + vHeaderAlignText + '"><span class = "wrapclass25">' + LabelsArray[nMeas] + ExtraLabelsArray[nMeas - 1] + '</span></th>';
							}
						}
					}
				}else{
					
					if(vExportToExcel) {		
						vExcelButtonCode = '<input class = "icon-xls" type = "image" src="/Extensions/PLSmartPivot/img/Excel.png">';						
					}else{
						vExcelButtonCode = "";					 
					}
					
					f += '<th class="fdim-cells" style="cursor:default;color:' + vHeaderColorText +';background-color:' + vHeaderColorSchema + ';font-family:' + vFontFamily + ';font-size:' + (16 + vLetterSizeHeader) + 'px;height:70px;width:230px;vertical-align:middle;text-align:' + vHeaderAlignText + '">' + vExcelButtonCode +LabelsArray[0] + ExtraLabelsArray[0] + '</th>';
					
					for (var nSecond=0;nSecond<SecondHeaderLength;nSecond++){
						if(vSeparatorCols && nSecond > 0){
							f += '<th class = "empty" style="color:white' + ';font-family:' + vFontFamily + ';font-size:' + (12 + vLetterSize) + 'px">' + '*' + '</th>';
						}
						if ((SecondHeader[nSecond].length > 11 && vLetterSizeHeader == 0) ||
						   (SecondHeader[nSecond].length > 12 && vLetterSizeHeader == -2)) {
							sufixWrap = '70';
						}else{
							sufixWrap = 'Empty';
						}
						f += '<th class="grid-cells2' + sufixCells + '" style="color:' + vHeaderColorText +';background-color:' + vHeaderColorSchema + ';font-family:' + vFontFamily + ';font-size:' + (14 + vLetterSizeHeader) + 'px;height:70px' + ';vertical-align:middle;text-align:' + vHeaderAlignText + '"><span class = "wrapclass' + sufixWrap + '" style="font-family:' + vFontFamily + '">' + SecondHeader[nSecond] + '</span></th>';
					}
				}
				
				// in this loop I load the final pivot matrix
				var ConceptPos = 0;
				var nMeas3 = 0;
				var vHeaderIndex = 0;
				var MeasurePos = 0;
				for (var nPivotElems = 0;nPivotElems <= lastrow;nPivotElems++){
					ConceptMatrixPivot[nPivotElems] = new Array();
					ConceptPos = ConceptMatrixFirstClean.indexOf(ConceptMatrix[nPivotElems][0]);
					ConceptMatrixPivot[ConceptPos][0] = ConceptMatrix[nPivotElems][0];
					
					for (var nMeas2=1;nMeas2<=measure_count;nMeas2++){
					     nMeas3 = nMeas2 + 1;
					     vHeaderIndex = (SecondHeader.indexOf(ConceptMatrix[nPivotElems][1]) + 1);
					     MeasurePos = (vHeaderIndex * measure_count) + (nMeas2 - measure_count);
					     ConceptMatrixPivot[ConceptPos][MeasurePos] = ConceptMatrix[nPivotElems][nMeas3];					     
					}
				}
				
			}
			f += "</tr>";
			f += "</table></div>";
			f += "<div class='row-wrapper' " + "style=text-align:" + vTextAlign + "><table >";			
			
			if (vCustomFileBool && vCustomFile.length > 4) {	
				ReadCustomSchema();
			}else{
				PaintTheNumbers();
				RenderData();
			}
			//This function opens a csv file that contains the parameters for the custom mode
			//this will prevent consuming to many dimensions, as there allowed only 10 columns between
			//dimensions and metrics
			function ReadCustomSchema() {							
				var Url   = "/Extensions/PLSmartPivot/csv/" + vCustomFile;
				var Items = $.get(Url).then(function(response){
											
						var allTextLines = response.split(/\r\n|\n/);
			    		headers = allTextLines[0].split(';');
			    		vNumCustomHeaders = headers.length;
			    		var rightcount = 0;
			    		for (var i=0; i<allTextLines.length; i++) {												
						    
						    var data = allTextLines[i].split(';');
						    //just write lines that matches with the dimension						    
						    if(ConceptMatrixFirstClean.indexOf(data[0])>=0 || i == 0){
						    	CustomArray[rightcount] = new Array(headers.length);    
								CustomParents[rightcount] = data[1];
								if (data.length == headers.length) {

						            for (var j=0; j<headers.length; j++) {										
										CustomArrayBasic[rightcount] = data[0];
						                CustomArray[rightcount][j] = data[j];
						            }					    
						        }
						        rightcount++;
						    }					
						}
						var vNumAccounts = CustomParents.length;
						CustomParents = CustomParents.filter(onlyUnique);
						
						var vNumAccountsClean = CustomParents.length;
						
						for(var cp2 = 0;cp2<vNumAccountsClean;cp2++){
							CustomParents2[cp2] = new Array();							
							var nncp2 = 0;
							for(var cp3 = 0;cp3 < vNumAccounts;cp3++){
								if(CustomArray[cp3][1] == CustomParents[cp2]){
									CustomParents2[cp2][nncp2] = CustomArray[cp3][0];
									nncp2++;
									CustomParents2L[cp2] = nncp2;
								}
							}
						}
						
						PaintTheNumbers();
						RenderData();											    	
			  		});		
					
				return Items;
			};
			
			//Paint the numbers
			function PaintTheNumbers(){
		
			if (vNumDims == 1) {
				//apply the custom style
				for (var nmrows = 0;nmrows <= lastrow;nmrows++) {
					//vComment = 0;			
					vColumnText = ConceptMatrix[nmrows][0];
					vGlobalComment = 0;
					vGlobalCommentColor = "";
					if (vColumnText != '-') {
						
					StyleTags = "";
					StyleTags1 = "";
					StyleTags2 = "";
					StyleTags3 = "";
					StyleTags4 = "";
					StyleTags5 = "";
					StyleTags6 = "";
					StyleTags7 = "";
					StyleTags8 = "";
					StyleTags9 = "";
					
					if (vCustomFileBool) {
					
						vComas = 0;
						vMedium = false;
						vGlobalComas = 0;
						vGlobalComas2 = 0;
						vGlobalFontSize = 0;
						var aach = 0;
						var vCustomAttribute = '';
						StyleTags = "";
						StyleTags1 = "";
						StyleTags2 = "";
						StyleTags3 = "";
						StyleTags4 = "";
						StyleTags5 = "";
						StyleTags6 = "";
						StyleTags7 = "";
						StyleTags8 = "";
						StyleTags9 = "";
					
						for(aach = 1;aach < vNumCustomHeaders;aach++){ // for each custom attribute allocated in the external csv
							if (CustomArrayBasic.indexOf(vColumnText) < 0) {
								vCustomAttribute == 'none';
							}else{
								vCustomAttribute = CustomArray[CustomArrayBasic.indexOf(vColumnText)][aach]; //CustomArrayBasic se ha rellenado con los atributos de look al principio de la ejecución del código
								var myJSON = JSON.stringify(CustomArray[CustomArrayBasic.indexOf(vColumnText)]);
								if(myJSON.indexOf('<comment>') != -1){
									vGlobalComment = 1;
								}
							}
							var vEvalHeader = headers[aach].toUpperCase();
							
							switch (vEvalHeader)
							{
								case 'BOLD':
								ApplyBold(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'COMMENT':								
								ApplyComment(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'FONTSTYLE':
								ApplyFontStyle(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'BACKGROUND':
								ApplyBackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'LETTERCOLOR':								
								ApplyFontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'SIZE':
								ApplyFontSize(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'ALIGN':
								ApplyAlignment(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP1BACKGROUND':
								ApplyExp1BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP1LETTERCOLOR':
								ApplyExp1FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP2BACKGROUND':
								ApplyExp2BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP2LETTERCOLOR':
								ApplyExp2FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP3BACKGROUND':
								ApplyExp3BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP3LETTERCOLOR':
								ApplyExp3FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP4BACKGROUND':
								ApplyExp4BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP4LETTERCOLOR':
								ApplyExp4FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP5BACKGROUND':
								ApplyExp5BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP5LETTERCOLOR':
								ApplyExp5FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP6BACKGROUND':
								ApplyExp6BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP6LETTERCOLOR':
								ApplyExp6FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP7BACKGROUND':
								ApplyExp7BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP7LETTERCOLOR':
								ApplyExp7FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP8BACKGROUND':
								ApplyExp8BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP8LETTERCOLOR':
								ApplyExp8FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP9BACKGROUND':
								ApplyExp9BackgroundColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP9LETTERCOLOR':
								ApplyExp9FontColor(vCustomAttribute,vComas);
								vComas += vGlobalComas;
								break;
							
								default:
								
								break;
							}
							
																					
						}
						if (vGlobalFontSize == 0) {
							if (vComas >0) {
								StyleTags += ';font-size:' + (14 + vLetterSize)+ 'px';
							}else{
								StyleTags += 'font-size:' + (14 + vLetterSize)+ 'px';
							}								
							vFontSize = ';font-size:' + (14 + vLetterSize) + 'px';
							vGlobalFontSize = 1;
						}
						
						// after this the row styles are configured
					
					}else{
						ApplyStandardAttributes(nmrows);
						vFontSize = ';font-size:' + (14 + vLetterSize) + 'px';
					}
					
					if ((vPadding && vGlobalComas2 == 0) || vCollapse) {
						var vIndentPX = 0;
						if(vCollapse){
							vIndentPX = 10;
						}
						if(vPadding && vGlobalComas2 == 0){
							vIndentPX = vIndentPX + 15;
						}						
						vPaddingText = '<span style="padding-left:' + vIndentPX + 'px;font-family:' + vFontFamily + '"></span>';
					}else{
						vPaddingText = "";
					}
					
					var vCollapseCode = '';
					if(vCollapse && CustomParents.indexOf(vColumnText) >= 0){
						vCollapseCode = '<input class = "icon-minus" type = "image" src="/Extensions/PLSmartPivot/img/minus.png">';
					}
					
					if(vApplyFootTags){
						var indexOfFootTag = myFootNoteAux.indexOf(vColumnText + '(');
						
						if(indexOfFootTag >= 0){
							vColumnText = myFootNoteAux.substring(indexOfFootTag,indexOfFootTag + 3 + vColumnText.length);							
						}
					}
					f += '<tr><td class="fdim-cells" style ="font-family:' + vFontFamily + ';' + StyleTags + ';width:230px">' + vCollapseCode + vPaddingText + vColumnText + '</td>';//';' + StyleTags + ;width:230px
					if (vGlobalComment == 1) {
						if (vGlobalCommentColor == "") {
							vGlobalCommentColor = 'white';
						}
						if (vComas >0) {
							StyleTags += ';color:' + vGlobalCommentColor;
						}else{
							StyleTags += 'color:' + vGlobalCommentColor;
						}							
					}
					for(var nMeasures2 = 1;nMeasures2 <= vNumMeasures;nMeasures2++){
						if (vColumnText.substring(0, 1) == '%') {
							vColumnNum = ApplyPreMask('0,00%', ConceptMatrix[nmrows][nMeasures2]);
							vSpecialF = '0,00%';
						}else{
							
							switch (MeasuresFormat[nMeasures2 - 1].substr(MeasuresFormat[nMeasures2 - 1].length - 1))
							{
								case 'k':
								vDivide = 1000;
								break;
								
								case 'K':
								vDivide = 1000;
								break;
							
								case 'm':
								vDivide = 1000000;
								break;
							
								case 'M':
								vDivide = 1000000;
								break;
							
								default:
								vDivide = 1;
								break;	
							}
							var vSpecialF = MeasuresFormat[nMeasures2 - 1].replace(/k|K|m|M/gi,'');
							if(!isNaN(ConceptMatrix[nmrows][nMeasures2])){
								vMaskNum = ConceptMatrix[nmrows][nMeasures2];
								if(vSpecialF.substring(vSpecialF.length - 1) == '%'){
									vMaskNum = vMaskNum * 100;								
								}
								switch (vSpecialF)
								{
								       case '#.##0':
								       vColumnNum = addSeparators ((vMaskNum / vDivide), '.', ',', 0);
								       break;
							       
								       case '#,##0':
								       vColumnNum = addSeparators ((vMaskNum / vDivide), ',', '.', 0);
								       break;
							       
								       default:
								       vColumnNum = ApplyPreMask(vSpecialF, (vMaskNum / vDivide));
								       break;
								}
							}else{
								vColumnNum = vSymbolForNulls;
							}
														
						}
						if (vGlobalComment ==  1) {
							vColumnNum = ".";
						}
						// apply the semaphore styles where needed
						if ((vAllSemaphores || ConceptsAffectedMatrix.indexOf(vColumnText) >= 0) && (vAllMetrics || MetricsAffectedMatrix.indexOf(nMeasures2)>=0) && !isNaN(ConceptMatrix[nmrows][nMeasures2]) && vGlobalComment == 0) {
							if (ConceptMatrix[nmrows][nMeasures2] < vCritic) {
								vColorSemaphore = vColorMetric1;
								vColorSemaphoreText = vColorMetric1Text;
							}else{
								if (ConceptMatrix[nmrows][nMeasures2] < vMMedium) {
									vColorSemaphore = vColorMetric2;
									vColorSemaphoreText = vColorMetric2Text;
								}else{
									vColorSemaphore = vColorMetric3;
									vColorSemaphoreText = vColorMetric3Text;
								}
							}
							//aquí mismito es donde aplico los styletags de las measures
							//tengo que crear nuevas columnas en el template para añadir black y color de measures							
							f += '<td  class="grid-cells' + sufixCells + '" style ="font-family:' + vFontFamily + vFontSize + ';color:' + vColorSemaphoreText + ';background-color:' + vColorSemaphore + ';text-align:right;padding-left:4px">' + vColumnNum + '</td>';
						}else{
							var styleName = 'StyleTags' + nMeasures2;							
							f += '<td  class="grid-cells' + sufixCells + '" style ="font-family:' + vFontFamily + vFontSize + ';' + eval(styleName) + ';text-align:right;padding-left:4px">' + vColumnNum + '</td>';
						}						
					}
					}
					f += '</tr>';									
				}
			}else{
				
				var nPivotRows = ConceptMatrixFirstClean.length;
				for (var nmrows2 = 0;nmrows2 < nPivotRows;nmrows2++) {
					
					vColumnText = ConceptMatrixPivot[nmrows2][0];// the descriptive account text
					vGlobalComment = 0;
					vGlobalCommentColor = "";
					if (vColumnText != '-') {
					StyleTags = "";	
					if (vCustomFileBool) {
						
						vComas = 0;
						vMedium = false;
						
						vGlobalComas = 0;
						vGlobalComas2 = 0;
						vGlobalFontSize = 0;
						var aach2 = 0;
						var vCustomAttribute2 = '';
						StyleTags = "";
						StyleTags1 = "";
						StyleTags2 = "";
						StyleTags3 = "";
						StyleTags4 = "";
						StyleTags5 = "";
						StyleTags6 = "";
						StyleTags7 = "";
						StyleTags8 = "";
						StyleTags9 = "";
						
						for(aach2 = 1;aach2 < vNumCustomHeaders;aach2++){ // for each attribute allocated in the external csv
							
							if (CustomArrayBasic.indexOf(vColumnText) < 0) {
								vCustomAttribute2 == 'none';
							}else{
								vCustomAttribute2 = CustomArray[CustomArrayBasic.indexOf(vColumnText)][aach2]; //CustomArrayBasic has been filled with the custom attribute at the begining of the code	
								var myJSON = JSON.stringify(CustomArray[CustomArrayBasic.indexOf(vColumnText)]);
								if(myJSON.indexOf('<comment>') != -1){
									vGlobalComment = 1;				
								}
							}																					
							var vEvalHeader2 = headers[aach2].toUpperCase();
							
							switch (vEvalHeader2)
							{
								case 'BOLD':
								ApplyBold(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'COMMENT':
								ApplyComment(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'FONTSTYLE':
								ApplyFontStyle(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'BACKGROUND':
								ApplyBackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'LETTERCOLOR':
								ApplyFontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'SIZE':
								ApplyFontSize(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'ALIGN':
								ApplyAlignment(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP1BACKGROUND':
								ApplyExp1BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP1LETTERCOLOR':
								ApplyExp1FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP2BACKGROUND':
								ApplyExp2BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP2LETTERCOLOR':
								ApplyExp2FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP3BACKGROUND':
								ApplyExp3BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP3LETTERCOLOR':
								ApplyExp3FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP4BACKGROUND':
								ApplyExp4BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP4LETTERCOLOR':
								ApplyExp4FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP5BACKGROUND':
								ApplyExp5BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP5LETTERCOLOR':
								ApplyExp5FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP6BACKGROUND':
								ApplyExp6BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP6LETTERCOLOR':
								ApplyExp6FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP7BACKGROUND':
								ApplyExp7BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP7LETTERCOLOR':
								ApplyExp7FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP8BACKGROUND':
								ApplyExp8BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP8LETTERCOLOR':
								ApplyExp8FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP9BACKGROUND':
								ApplyExp9BackgroundColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;

								case 'EXP9LETTERCOLOR':
								ApplyExp9FontColor(vCustomAttribute2,vComas);
								vComas += vGlobalComas;
								break;
							
								default:
								
								break;
							}			
						}
						if (vGlobalFontSize == 0) {
							if (vComas > 0) {
								StyleTags += ';font-size:' + (14 + vLetterSize)+ 'px';
							}else{
								StyleTags += 'font-size:' + (14 + vLetterSize)+ 'px';
							}								
							vFontSize = ';font-size:' + (14 + vLetterSize) + 'px';
							vGlobalFontSize = 1;
						}
						
						// custom styles configured
					
					}else{
						ApplyStandardAttributes(nmrows2);
						vFontSize = ';font-size:' + (14 + vLetterSize) + 'px';
					}
					
					if ((vPadding && vGlobalComas2 == 0) || vCollapse) {
						var vIndentPX = 0;
						if(vCollapse){
							vIndentPX = 10;
						}
						if(vPadding && vGlobalComas2 == 0){
							vIndentPX = vIndentPX + 15;
						}
						vPaddingText = '<span style="padding-left:' + vIndentPX + 'px;font-family:' + vFontFamily + '"></span>';
					}else{
						vPaddingText = "";
					}
					var vCollapseCode = '';
					if(vCollapse && CustomParents.indexOf(vColumnText) >= 0){
						vCollapseCode = '<input class = "icon-minus" type = "image" src="/Extensions/PLSmartPivot/img/minus.png">';
					}
				
					f += '<tr><td class="fdim-cells" style ="font-family:' + vFontFamily + ';' + StyleTags + ';width:230px">' + vCollapseCode + vPaddingText + vColumnText + '</td>';
					//f += '<tr><td class="fdim-cells" style ="font-family:' + vFontFamily + ';' + StyleTags + ';width:230px">' + vPaddingText + vColumnText + '</td>';
					if (vGlobalComment == 1) {
						if (vGlobalCommentColor == "") {
							vGlobalCommentColor = 'white';
						}
						if (vComas >0) {
							StyleTags += ';color:' + vGlobalCommentColor;
						}else{
							StyleTags += 'color:' + vGlobalCommentColor;
						}							
					}
					var nMeasure7 = 0;
					var nMeasure72 = -1;
					var nMeasure72Semaphore = 0;
					
					for(var nMeasures22 = 1;nMeasures22 <= vNumMeasures2;nMeasures22++){						
						nMeasAux = nMeasure72Semaphore;
						nMeasure7++;
						nMeasure72++;
						
						if (vColumnText.substring(0, 1) == '%') {
							vColumnNum = ApplyPreMask('0,00%', ConceptMatrixPivot[nmrows2][nMeasures22]);
							var vSpecialF = '0,00%';
						}else{
							switch (MeasuresFormat[nMeasure72].substr(MeasuresFormat[nMeasure72].length - 1))
							{
								case 'k':
								vDivide = 1000;
								break;
								
								case 'K':
								vDivide = 1000;
								break;
							
								case 'm':
								vDivide = 1000000;
								break;
							
								case 'M':
								vDivide = 1000000;
								break;
							
								default:
								vDivide = 1;
								break;	
							}
							var vSpecialF = MeasuresFormat[nMeasure72].replace(/k|K|m|M/gi,'');
							if(!isNaN(ConceptMatrixPivot[nmrows2][nMeasures22])){
								vMaskNum = ConceptMatrixPivot[nmrows2][nMeasures22];
								if(vSpecialF.substring(vSpecialF.length - 1) == '%'){
									vMaskNum = vMaskNum * 100;								
								}
							 
								switch (vSpecialF)
								{
								       case '#.##0':
								       vColumnNum = addSeparators ((vMaskNum / vDivide), '.', ',', 0);
								       break;
								       case '#,##0':
								       vColumnNum = addSeparators ((vMaskNum / vDivide), ',', '.', 0);
								       break;
								       default:
								       vColumnNum = ApplyPreMask(vSpecialF, (vMaskNum / vDivide));
								       break;
								}
							}else{
								vColumnNum = vSymbolForNulls;
							}
							
						}
						
						if(vSeparatorCols && nMeasure7 == (measure_count+1)){
							f += '<th class = "empty" style="color:white' + ';font-family:' + vFontFamily + ';font-size:' + (12 + vLetterSize) + 'px">' + '*' + '</th>';
							nMeasure7 = 1;
							
						}
						if(nMeasure72 == (measure_count - 1)){
							nMeasure72 = -1;
							nMeasure72Semaphore = measure_count;
						}else{
							nMeasure72Semaphore = nMeasure72 + 1;
						}
						
						// apply the semaphores where needed
						if (vGlobalComment ==  1) {
							vColumnNum = ".";
						}
						if ((vAllSemaphores || ConceptsAffectedMatrix.indexOf(vColumnText) >= 0) && (vAllMetrics || MetricsAffectedMatrix.indexOf(nMeasure72Semaphore)>=0) && !isNaN(ConceptMatrixPivot[nmrows2][nMeasures22]) && vGlobalComment == 0) {
							if (ConceptMatrixPivot[nmrows2][nMeasures22] < vCritic) {
								vColorSemaphore = vColorMetric1;
								vColorSemaphoreText = vColorMetric1Text;
							}else{
								if (ConceptMatrixPivot[nmrows2][nMeasures22] < vMMedium) {
									vColorSemaphore = vColorMetric2;
									vColorSemaphoreText = vColorMetric2Text;
								}else{
									vColorSemaphore = vColorMetric3;
									vColorSemaphoreText = vColorMetric3Text;
								}
							}
							
							if (vSpecialF.substring(vSpecialF.length - 1) == '%' && vNumMeasures > 1) {
								f += '<td class="grid-cells-small' + sufixCells + '" style ="font-family:' + vFontFamily + vFontSize + ';color:' + vColorSemaphoreText + ';background-color:' + vColorSemaphore + ';text-align:right;padding-left:4px">' + vColumnNum + '</td>';
							}else{
								f += '<td class="grid-cells' + sufixCells + '" style ="font-family:' + vFontFamily + vFontSize + ';color:' + vColorSemaphoreText + ';background-color:' + vColorSemaphore + ';text-align:right;padding-left:4px">' + vColumnNum + '</td>';
							}
						}else{
							
							var styleName = 'StyleTags' + nMeasure7;							
							//f += '<td  class="grid-cells' + sufixCells + '" style ="font-family:' + vFontFamily + vFontSize + ';' + eval(styleName) + ';text-align:right;padding-left:4px">' + vColumnNum + '</td>';
							if (vSpecialF.substring(vSpecialF.length - 1) == '%' && vNumMeasures > 1) {
								f += '<td class="grid-cells-small' + sufixCells + '" style ="font-family:' + vFontFamily + ';' + eval(styleName) + ';text-align:right;padding-right:4px">' + vColumnNum + '</td>';
							}else{
								f += '<td class="grid-cells' + sufixCells + '" style ="font-family:' + vFontFamily + ';' + eval(styleName) + ';text-align:right;padding-right:4px">' + vColumnNum + '</td>';
							}
						}
						
						
					}
					f += '</tr>';									
				}
				}
			}
			}	
			//render data
			function RenderData(){
			var nMerge = 0;
			if (measure_count == 0) {
				nMerge = 1
			}else{
				if (vSeparatorCols) {
					nMerge = (measure_count + 2);
					
				}else{
					nMerge = (measure_count + 1);
				}
			}
			f += '</table>';
			
			f += "</div>";
			
			// freeze header and first column
			var x="<div id = 'kpi-table-id' class='kpi-table'>";
			x+=f,
			x+="</div>",
			x+="<div id = 'data-table-id' class='data-table'>",
			x+=f,
			x+="</div>",
			
			t.html(x),
			         
			e(".data-table .row-wrapper").on("scroll",function(){
			    e(".kpi-table .row-wrapper").scrollTop(e(this).scrollTop()),
			    e(this).scrollTop()>50?(
	                        angular.element(document.querySelector(".data-table .row-wrapper")).css("top","0"),angular.element(document.querySelector(".kpi-table .row-wrapper")).css("top","0")
	                        ):(
	                        angular.element(document.querySelector(".data-table .row-wrapper")).css("top","97px"),//97px
	                        angular.element(document.querySelector(".kpi-table .row-wrapper")).css("top","97px")//97px
                                )
		        }
		        ),
			
			//on hover popup with cell value, only in headers
			e(".header-wrapper th").hover(function (){
				
			    e(".tooltip").delay(500).show(0);	
			    e(".header-wrapper th").children(".tooltip").remove(); 
                  
			    //var element = e(this);
			    var element = e(this);
			    var offset = element.offset();
			    var toolTip = e("<div class='tooltip'></div>");

			    toolTip.css(
			        {
			            top : offset.top,
			            left : offset.left
			        });
                  
			    toolTip.text(element.text());
			    e(".header-wrapper th").append(toolTip);
			    
			},function () {
    				e(".tooltip").delay(0).hide(0);				
			 }			  
			),
			
			//allow making selections inside the table
			e(".data-table td").on("click",function(){
				
				if (self.backendApi.model.layout.filteroncellclick == false)					
					return;
			
				var indextr = e(this).parent().parent().children().index(e(this).parent()); //identifica la row
				var indextd = e(this).parent().children().index(e(this)); //identifica la col
				
				var SelectRow = 0;
				var SelectCol = 0;
										 
				SelectRow = ConceptMatrixRowElem[(indextr)];						
				
														
				// este if verifica primero si hay selecciones hechas en la dimensión, si las hay
				// las reselecciona para poder borrar antes de poder seleccionar lo que quiero
				// no es viable pedirle que seleccione a la vez elementos de 2 selecciones, se queda
				// colgado el menú de confirm, por eso uso este sistema, que sí funciona.
				// it can cause issues like error messages and wrong selections if there are null values
				// and the check allow null values is active
				if(vNumDims > 1 && indextd > 0){
					if (ArrayGetSelectedCount[1] > 0) {
						
						var SelectB = JSON.parse(JSON.stringify(ConceptMatrixColElemTable));	
						self.backendApi.selectValues(1,SelectB,false);
						e(this).toggleClass("selected");					
					}
					SelectCol = ConceptMatrixColElemTable[(indextd)];
					self.backendApi.selectValues(1,[SelectCol],false);
					e(this).toggleClass("selected");						
				}
				
				if (indextd > 0 && ArrayGetSelectedCount[0] > 0) {					
					var SelectA = JSON.parse(JSON.stringify(ConceptMatrixRowElem));
					self.backendApi.selectValues(0,SelectA,false);
					e(this).toggleClass("selected");
				}
				
				if (indextd > 0) {					
					self.backendApi.selectValues(0,[SelectRow],false);
					e(this).toggleClass("selected");
				}
		        }),
			//allow selections through the header of the second dimension
			e(".header-wrapper th").on("click",function(){
				
				var indextd = e(this).parent().children().index(e(this)); //identifica la col
				
				var SelectCol = 0;
										 
				if(vNumDims > 1 && indextd > 0){
					/*if (ArrayGetSelectedCount[1] > 0) {						
						var SelectB = JSON.parse(JSON.stringify(ConceptMatrixColElem));
						self.backendApi.selectValues(1,SelectB,true);
						e(this).toggleClass("selected");
					}*/
					if (vSeparatorCols) {
						SelectCol = ConceptMatrixColElem[(Math.round(indextd/2) - 1)];
					}else{
						SelectCol = ConceptMatrixColElem[(Math.round(indextd) - 1)];
					}
					
					self.backendApi.selectValues(1,[SelectCol],false);
					e(this).toggleClass("selected");
				}
			}),
			//allow selections in desc dimension cells
			e(".kpi-table td").on("click",function(){	
				if (self.backendApi.model.layout.filteroncellclick == false)					
					return;
				var indextr = e(this).parent().parent().children().index(e(this).parent()); //identifica la row	
				var SelectRow = 0;
				SelectRow = ConceptMatrixRowElem[(indextr)];				
				if(!vIconPlus && !vIconMinus){										
					self.backendApi.selectValues(0,[SelectRow],false);
					e(this).toggleClass("selected");
				}else{
					if(vIconMinus){
						var myRowP = e(this).children()[0];
					
						var testMinus = myRowP.src;
						if(testMinus.indexOf('minus.png') >= 0){
							
							myRowP.src = myRowP.src.replace('minus','plus');
							
							var indexParent = CustomParents.indexOf(e(this)[0].innerText);
							
							ArrayOff = [];
							loadChildsOff(indexParent);
																			
							for (var vOff = 0;vOff < ArrayOff.length;vOff++){
								var myRowC1 = e(this).parent().parent().children()[ArrayOff[vOff]];
								var myRowC2 = e(".data-table td").parent().parent().children()[ArrayOff[vOff]];							
								myRowC1.hidden = true;
								myRowC2.hidden = true;
							}
														
						}else{
							
							myRowP.src = myRowP.src.replace('plus','minus');

							var indexParent = CustomParents.indexOf(e(this)[0].innerText);
							ArrayOff = [];
							loadChildsOff(indexParent);
							
							for (var vOff = 0;vOff < ArrayOff.length;vOff++){
								var myRowC1 = e(this).parent().parent().children()[ArrayOff[vOff]];
								var myRowC2 = e(".data-table td").parent().parent().children()[ArrayOff[vOff]];							
								myRowC1.hidden = false;
								myRowC2.hidden = false;																								
							}
							var ArrayOff2 = ArrayOff;

							for (var vOff = 0;vOff < ArrayOff2.length;vOff++){
							
								var myRowPM = e(".kpi-table td").parent().parent().children()[ArrayOff2[vOff]];
								
								var testPlus = myRowPM.innerHTML;

								if(testPlus.indexOf('plus.png') >= 0){
									var indexParentPlus = CustomParents.indexOf(myRowPM.innerText);
									ArrayOff = [];
									loadChildsOff(indexParentPlus);
									
									for (var vOff2 = 0;vOff2 < ArrayOff.length;vOff2++){
										var myRowC21 = e(this).parent().parent().children()[ArrayOff[vOff2]];
										var myRowC22 = e(".data-table td").parent().parent().children()[ArrayOff[vOff2]];							
										myRowC21.hidden = true;
										myRowC22.hidden = true;
									}
								}
							}
														
						}
						vIconMinus = false;
					}										
				}				
			}),
			e(".icon-minus").on("click",function(){				
				vIconMinus = true;
			}),
			
			e(".icon-xls").on("click",function(){	
				e(".header-wrapper th").children(".tooltip").remove();// remove some popup effects when exporting
				e(".header-wrapper th").children(".icon-xls").remove();// remove the xls icon when exporting
				
				if (isChrome || isSafari) {
					var $clonedDiv = e('.data-table').clone(true);//.kpi-table a secas exporta la 1ªcol
					var vEncodeHead = '<html><head><meta charset="UTF-8"></head>';
					var vEncodeFoot = '<br>';
				
					vEncodeHead += myTitle + mySubTitle;
					var vEncode = encodeURIComponent($clonedDiv.html());
					vEncodeFoot += myFootNote;
					var vDecode = vEncodeHead + vEncode + vEncodeFoot + '</html>';
					
					$clonedDiv.find("tr.header");
					vDecode = vDecode.split('%3E.%3C').join('%3E%3C');
					window.open('data:application/vnd.ms-excel,' + vDecode);
					e.preventDefault();
				}
				if (isIE){
					var a='<html><head><meta charset="UTF-8"></head>';
					a += myTitle + mySubTitle + myFootNote;
					a += f;
					a = a.split('>.<').join('><')
					a += '</html>';
					
					var w = window.open();
					w.document.open();
					w.document.write(a);
					w.document.close();
					w.document.execCommand('SaveAs', true, "Analysis.xls" || "c:\TMP")
					w.close();					
				}
				
				if (isFirefox) {
					var $clonedDiv = e('.data-table').clone(true);//.kpi-table a secas exporta la 1ªcol				
					var vEncodeHead = '<html><head><meta charset="UTF-8"></head>';
					vEncodeHead += myTitle + mySubTitle + myFootNote;
					var vEncode = encodeURIComponent($clonedDiv.html());
					var vDecode = vEncodeHead + vEncode + '</html>';
					
					$clonedDiv.find("tr.header");
					vDecode = vDecode.split('>.<').join('><');
					window.open('data:application/vnd.ms-excel,' +vDecode);
					e.preventDefault();
				}
		        }),
			
		        // freeze first column
			e(".qv-object-content-container").on("scroll",function(t){
				e(".kpi-table").css("left",Math.round(t.target.scrollLeft)+"px")
				}),
			e(".kpi-table .row-wrapper tr").each(function(){
			    e(this).find("th:not(.fdim-cells)").remove(),
			    e(this).find("td:not(.fdim-cells)").remove()
			    }),
			e(".kpi-table .header-wrapper tr").each(function(){
			    e(this).find("th:not(.fdim-cells)").remove()
			    });
			}
			
			// PYJAMAS
			function ApplyStandardAttributes(strow){
				if (strow / 2 == Math.round(strow / 2)) {
					StyleTags += 'background-color:' + vColorSchema + ';color:' + vColorText;
				}else{
					StyleTags += 'background-color:' + vColorSchemaP + ';color:' + vColorText;
				}
				StyleTags += ';font-size:' + (14 + vLetterSize)+ 'px';
			};
			// transform the custom styles in html code
			
			function ApplyBold(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<bold>':
					StyleTags  += vPuntoComa + 'font-weight:bold';
					StyleTags1 += vPuntoComa + 'font-weight:bold';
					StyleTags2 += vPuntoComa + 'font-weight:bold';
					StyleTags3 += vPuntoComa + 'font-weight:bold';
					StyleTags4 += vPuntoComa + 'font-weight:bold';
					StyleTags5 += vPuntoComa + 'font-weight:bold';
					StyleTags6 += vPuntoComa + 'font-weight:bold';
					StyleTags7 += vPuntoComa + 'font-weight:bold';
					StyleTags8 += vPuntoComa + 'font-weight:bold';
					StyleTags9 += vPuntoComa + 'font-weight:bold';
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					break;
				
					default:
					StyleTags += '';
					break;
				}
			}
			function ApplyComment(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<comment>':
					vGlobalComment = 1;
					break;
				
					default:
					StyleTags += '';
					StyleTags1 += '';
					StyleTags2 += '';
					StyleTags3 += '';
					StyleTags4 += '';
					StyleTags5 += '';
					StyleTags6 += '';
					StyleTags7 += '';
					StyleTags8 += '';
					StyleTags9 += '';
					break;
				}
			}
			function ApplyFontStyle(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<italic>':
					StyleTags += vPuntoComa + 'font-style:italic';
					StyleTags1 += vPuntoComa + 'font-style:italic';
					StyleTags2 += vPuntoComa + 'font-style:italic';
					StyleTags3 += vPuntoComa + 'font-style:italic';
					StyleTags4 += vPuntoComa + 'font-style:italic';
					StyleTags5 += vPuntoComa + 'font-style:italic';
					StyleTags6 += vPuntoComa + 'font-style:italic';
					StyleTags7 += vPuntoComa + 'font-style:italic';
					StyleTags8 += vPuntoComa + 'font-style:italic';
					StyleTags9 += vPuntoComa + 'font-style:italic';
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					break;
				
					case '<oblique>':
					StyleTags += vPuntoComa + 'font-style:oblique';
					StyleTags1 += vPuntoComa + 'font-style:oblique';
					StyleTags2 += vPuntoComa + 'font-style:oblique';
					StyleTags3 += vPuntoComa + 'font-style:oblique';
					StyleTags4 += vPuntoComa + 'font-style:oblique';
					StyleTags5 += vPuntoComa + 'font-style:oblique';
					StyleTags6 += vPuntoComa + 'font-style:oblique';
					StyleTags7 += vPuntoComa + 'font-style:oblique';
					StyleTags8 += vPuntoComa + 'font-style:oblique';
					StyleTags9 += vPuntoComa + 'font-style:oblique';
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					break;
				
					default:
					StyleTags += '';
					break;
				}
			}
			function ApplyBackgroundColor(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<dark>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibDark;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibDark;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibDark;
					break;
				
					case '<night>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibNight;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibNight;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibNight;
					break;
						
					case '<soft>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibSoft;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibSoft;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibSoft;
					break;
						
					case '<red>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibRed;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibRed;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibRed;
					break;
						
					case '<orange>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibOrange;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibOrange;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibOrange;
					break;
						
					case '<violete>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibViolete;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibViolete;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibViolete;
					break;
				
					case '<blue>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibBlue;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibBlue;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibBlue;
					break;
				
					case '<green>':
					StyleTags += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags1 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags2 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags3 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags4 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags5 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags6 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags7 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags8 += vPuntoComa + 'background-color:' + vColLibGreen;
					StyleTags9 += vPuntoComa + 'background-color:' + vColLibGreen;
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalCommentColor = vColLibGreen;
					break;
				
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags1 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags2 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags3 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags4 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags5 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags6 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags7 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags8 += vPuntoComa + 'background-color:' + vCustomAttributes;
							StyleTags9 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;
							vGlobalComas2 = 1;
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyFontColor(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags += vPuntoComa + 'color:white';
						StyleTags1 += vPuntoComa + 'color:white';
						StyleTags2 += vPuntoComa + 'color:white';
						StyleTags3 += vPuntoComa + 'color:white';
						StyleTags4 += vPuntoComa + 'color:white';
						StyleTags5 += vPuntoComa + 'color:white';
						StyleTags6 += vPuntoComa + 'color:white';
						StyleTags7 += vPuntoComa + 'color:white';
						StyleTags8 += vPuntoComa + 'color:white';
						StyleTags9 += vPuntoComa + 'color:white';
						vGlobalComas = 1;
						//vGlobalComas2 = 1;						
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags += vPuntoComa + 'color:black';
						StyleTags1 += vPuntoComa + 'color:black';
						StyleTags2 += vPuntoComa + 'color:black';
						StyleTags3 += vPuntoComa + 'color:black';
						StyleTags4 += vPuntoComa + 'color:black';
						StyleTags5 += vPuntoComa + 'color:black';
						StyleTags6 += vPuntoComa + 'color:black';
						StyleTags7 += vPuntoComa + 'color:black';
						StyleTags8 += vPuntoComa + 'color:black';
						StyleTags9 += vPuntoComa + 'color:black';
						vGlobalComas = 1;
						//vGlobalComas2 = 1;												
					}
					break;
					
					default:
					if(vCustomAttributes && vGlobalComment == 0){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags1 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags2 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags3 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags4 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags5 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags6 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags7 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags8 += vPuntoComa + 'color:' + vCustomAttributes;
							StyleTags9 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;
							//vGlobalComas2 = 1;												
						}
					}else{
						if(vGlobalComment == 1){
							StyleTags1 += vPuntoComa + 'color:transparent';
							StyleTags2 += vPuntoComa + 'color:transparent';
							StyleTags3 += vPuntoComa + 'color:transparent';
							StyleTags4 += vPuntoComa + 'color:transparent';
							StyleTags5 += vPuntoComa + 'color:transparent';
							StyleTags6 += vPuntoComa + 'color:transparent';
							StyleTags7 += vPuntoComa + 'color:transparent';
							StyleTags8 += vPuntoComa + 'color:transparent';
							StyleTags9 += vPuntoComa + 'color:transparent';
							vGlobalComas = 1;
						}
					}			
					break;
				}
			}
			function ApplyFontSize(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<large>':
					StyleTags += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags1 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags2 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags3 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags4 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags5 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags6 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags7 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags8 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					StyleTags9 += vPuntoComa + 'font-size:' + (15 + vLetterSize) + 'px';
					vFontSize = ';font-size:' + (15 + vLetterSize) + 'px';
					vGlobalComas = 1;
					vGlobalComas2 = 1;
					vGlobalFontSize = 1;
					break;
						
					case '<medium>':
					StyleTags += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags1 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags2 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags3 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags4 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags5 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags6 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags7 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags8 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					StyleTags9 += vPuntoComa + 'font-size:' + (14 + vLetterSize)+ 'px';
					vFontSize = ';font-size:' + (14 + vLetterSize) + 'px';
					vGlobalComas = 1;
					vMedium == true;
					vGlobalFontSize = 1;
					break;
							
					case '<small>':
					StyleTags += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags1 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags2 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags3 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags4 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags5 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags6 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags7 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags8 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					StyleTags9 += vPuntoComa + 'font-size:' + (13 + vLetterSize)+ 'px';
					vFontSize = ';font-size:' + (13 + vLetterSize) + 'px';
					vGlobalComas = 1;
					//vGlobalComas2 = 1;
					vGlobalFontSize = 1;
					break;
				
					default:
					StyleTags += '';	
					break;
				}
			}
			function ApplyAlignment(vCustomAttributes,vCustomComas){
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<center>':
					StyleTags += vPuntoComa + 'text-align:center';
					StyleTags1 += vPuntoComa + 'text-align:center';
					StyleTags2 += vPuntoComa + 'text-align:center';
					StyleTags3 += vPuntoComa + 'text-align:center';
					StyleTags4 += vPuntoComa + 'text-align:center';
					StyleTags5 += vPuntoComa + 'text-align:center';
					StyleTags6 += vPuntoComa + 'text-align:center';
					StyleTags7 += vPuntoComa + 'text-align:center';
					StyleTags8 += vPuntoComa + 'text-align:center';
					StyleTags9 += vPuntoComa + 'text-align:center';
					vGlobalComas = 1;
					//vGlobalComas2 = 1;
					break;
				
					default:
					StyleTags += '';
					break;
				}
			}
			function ApplyExp1BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags1 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp2BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags2 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp3BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags3 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp4BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags4 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp5BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags5 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp6BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags6 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp7BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags7 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp8BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags8 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp9BackgroundColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{					
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags9 += vPuntoComa + 'background-color:' + vCustomAttributes;
							vGlobalComas = 1;						
							vGlobalCommentColor = vCustomAttributes;						
						}
					}
					break;
				}				
			}
			function ApplyExp1FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags1 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags1 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags1 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}
					}			
					break;
				}
			}
			function ApplyExp2FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags2 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags2 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags2 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}
					}			
					break;
				}
			}
			function ApplyExp3FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags3 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags3 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags3 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			function ApplyExp4FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags4 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags4 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags4 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			function ApplyExp5FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags5 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags5 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags5 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			function ApplyExp6FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags6 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags6 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags6 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}
					}				
					break;
				}
			}
			function ApplyExp7FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags7 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags7 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags7 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			function ApplyExp8FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags8 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags8 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags8 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			function ApplyExp9FontColor(vCustomAttributes,vCustomComas){				
				var vPuntoComa = '';
				if (vCustomComas>0) {
					vPuntoComa = ';';
				}
				switch (vCustomAttributes)
				{
					case '<white>':
					if (vGlobalComment == 0) {
						StyleTags9 += vPuntoComa + 'color:white';
						vGlobalComas = 1;										
					}										
					break;
					case '<black>':
					if (vGlobalComment == 0) {
						StyleTags9 += vPuntoComa + 'color:black';
						vGlobalComas = 1;																		
					}
					break;
					default:
					if(vCustomAttributes){
						if (vCustomAttributes.substring(0, 1) == '#' || vCustomAttributes.substring(0, 3).toUpperCase() == 'RGB') {
							StyleTags9 += vPuntoComa + 'color:' + vCustomAttributes;
							vGlobalComas = 1;																		
						}	
					}			
					break;
				}
			}
			
			
			
			function ApplyPreMask(mask, value){
				if (mask.indexOf(';') >= 0) {
					if (value >=0) {
						switch (mask.substring(0, mask.indexOf(';')))
						{
							case '#.##0':
							return (addSeparators (value, '.', ',', 0));
							break;
							case '#,##0':
							return (addSeparators (value, ',', '.', 0));
							break;
							case '+#.##0':
							return (addSeparators (value, '.', ',', 0));
							break;
							case '+#,##0':
							return (addSeparators (value, ',', '.', 0));
							break;
							default:
							return(ApplyMask(mask.substring(0, mask.indexOf(';')),value));
							break;
						}						
					}else{
						var vMyValue = value * -1;
						var vMyMask = mask.substring(mask.indexOf(';') + 1,mask.length);
						vMyMask = vMyMask.replace('(','');
						vMyMask = vMyMask.replace(')','');
						switch (vMyMask)
						{
							case '#.##0':
							return ('(' + addSeparators (vMyValue, '.', ',', 0) + ')');
							break;
							case '#,##0':
							return ('(' + addSeparators (vMyValue, ',', '.', 0) + ')');
							break;
							case '-#.##0':
							return ('(' + addSeparators (vMyValue, '.', ',', 0) + ')');
							break;
							case '-#,##0':
							return ('(' + addSeparators (vMyValue, ',', '.', 0) + ')');
							break;
							default:
							return('(' + ApplyMask(vMyMask,vMyValue) + ')');
							break;
						}
					}					
				}else{
					return(ApplyMask( mask, value ));
				}
			};
			function ApplyMask( mask, value ) {
				
				'use strict';
				if ( !mask || isNaN( +value ) ) {
					return value; // return as it is.
				}

				var isNegative, result, decimal, group, posLeadZero, posTrailZero, posSeparator,
					part, szSep, integer,

					// find prefix/suffix
					len = mask.length,
					start = mask.search( /[0-9\-\+#]/ ),
					prefix = start > 0 ? mask.substring( 0, start ) : '',
					// reverse string: not an ideal method if there are surrogate pairs
					str = mask.split( '' ).reverse().join( '' ),
					end = str.search( /[0-9\-\+#]/ ),
					offset = len - end,
					substr = mask.substring( offset, offset + 1 ),
					indx = offset + ( ( substr === '.' || ( substr === ',' )) ? 1 : 0 ),
					suffix = end > 0 ? mask.substring( indx, len ) : '';
	
				// mask with prefix & suffix removed
				mask = mask.substring( start, indx );

				// convert any string to number according to formation sign.
				value = mask.charAt( 0 ) === '-' ? -value : +value;
				isNegative = value < 0 ? value = -value : 0; // process only abs(), and turn on flag.

				// search for separator for grp & decimal, anything not digit, not +/- sign, not #.
				result = mask.match( /[^\d\-\+#]/g );
				decimal = ( result && result[ result.length - 1 ] ) || '.'; // treat the right most symbol as decimal
				group = ( result && result[ 1 ] && result[ 0 ] ) || ',';  // treat the left most symbol as group separator

				// split the decimal for the format string if any.
				mask = mask.split( decimal );
				// Fix the decimal first, toFixed will auto fill trailing zero.
				value = value.toFixed( mask[ 1 ] && mask[ 1 ].length );
				value = +( value ) + ''; // convert number to string to trim off *all* trailing decimal zero(es)

				// fill back any trailing zero according to format
				posTrailZero = mask[ 1 ] && mask[ 1 ].lastIndexOf( '0' ); // look for last zero in format
				part = value.split( '.' );
				// integer will get !part[1]
				if ( !part[ 1 ] || ( part[ 1 ] && part[ 1 ].length <= posTrailZero ) ) {
					value = ( +value ).toFixed( posTrailZero + 1 );
				}
				szSep = mask[ 0 ].split( group ); // look for separator
				mask[ 0 ] = szSep.join( '' ); // join back without separator for counting the pos of any leading 0.
	
				posLeadZero = mask[ 0 ] && mask[ 0 ].indexOf( '0' );
				if ( posLeadZero > -1 ) {
					while ( part[ 0 ].length < ( mask[ 0 ].length - posLeadZero ) ) {
						part[ 0 ] = '0' + part[ 0 ];
					}
				} else if ( +part[ 0 ] === 0 ) {
					part[ 0 ] = '';
				}

				value = value.split( '.' );
				value[ 0 ] = part[ 0 ];

				// process the first group separator from decimal (.) only, the rest ignore.
				// get the length of the last slice of split result.
				posSeparator = ( szSep[ 1 ] && szSep[ szSep.length - 1 ].length );
				if ( posSeparator ) {
					integer = value[ 0 ];
					str = '';
					offset = integer.length % posSeparator;
					len = integer.length;
					for ( indx = 0; indx < len; indx++ ) {
						str += integer.charAt( indx ); // ie6 only support charAt for sz.
						// -posSeparator so that won't trail separator on full length
						//jshint -W018 
						if ( !( ( indx - offset + 1 ) % posSeparator ) && indx < len - posSeparator ) {
							str += group;
						}
					}
					value[ 0 ] = str;
				}
				value[ 1 ] = ( mask[ 1 ] && value[ 1 ] ) ? decimal + value[ 1 ] : '';

				// remove negative sign if result is zero
				result = value.join( '' );
				if ( result === '0' || result === '' ) {
					// remove negative sign if result is zero
					isNegative = false;
				}

				// put back any negation, combine integer and fraction, and add back prefix & suffix
				return prefix + ( ( isNegative ? '-' : '' ) + result ) + suffix;
			};						
			
			function loadChildsOff(indexParent){//aqui
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff2(indexParent2);
					}
				}
			};
			
			function loadChildsOff2(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff3(indexParent2);
					}
				}
			};

			function loadChildsOff3(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff4(indexParent2);
					}
				}
			};

			function loadChildsOff4(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff5(indexParent2);
					}
				}
			};

			function loadChildsOff5(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff6(indexParent2);
					}
				}
			};

			function loadChildsOff6(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff7(indexParent2);
					}
				}
			};

			function loadChildsOff7(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff8(indexParent2);
					}
				}
			};

			function loadChildsOff8(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff9(indexParent2);
					}
				}
			};

			function loadChildsOff9(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff10(indexParent2);
					}
				}
			};

			function loadChildsOff10(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff11(indexParent2);
					}
				}
			};

			function loadChildsOff11(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff12(indexParent2);
					}
				}
			};

			function loadChildsOff12(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff13(indexParent2);
					}
				}
			};

			function loadChildsOff13(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff14(indexParent2);
					}
				}
			};

			function loadChildsOff14(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff15(indexParent2);
					}
				}
			};

			function loadChildsOff15(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff16(indexParent2);
					}
				}
			};

			function loadChildsOff16(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff17(indexParent2);
					}
				}
			};

			function loadChildsOff17(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff18(indexParent2);
					}
				}
			};

			function loadChildsOff18(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff19(indexParent2);
					}
				}
			};

			function loadChildsOff19(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}
				for (var anr2 = 0;anr2 < CustomParents2L[indexParent];anr2++){
					var indexParent2 = CustomParents.indexOf(CustomParents2[indexParent][anr2]);
					if(indexParent2 >= 0){
						loadChildsOff20(indexParent2);
					}
				}
			};

			function loadChildsOff20(indexParent){
				for (var anr = 0;anr < CustomParents2L[indexParent];anr++){
					ArrayOff.push(CustomArrayBasic.indexOf(CustomParents2[indexParent][anr]) - 1);
				}				
			};

			function onlyUnique(value, index, self)	{ 
				return self.indexOf(value) === index;
			};
			function addSeparators (nStr, thousandsSep, decimalSep, numDecimals) {
				var rgx, x, x1, x2;
				nStr = nStr.toFixed(numDecimals);
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? decimalSep + x[1] : '';
				rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
				  x1 = x1.replace(rgx, '$1' + thousandsSep + '$2');
				}
				return x1 + x2;
			};			
		}
	};
});

