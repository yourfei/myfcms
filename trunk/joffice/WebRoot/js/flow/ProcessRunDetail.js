var ProcessRunDetail=function(d,a,c,b){this.runId=d;this.defId=a;this.piId=c;this.name=b;return this.setup();};ProcessRunDetail.prototype.setup=function(){var d=this.piId;var a=this.defId;var c=new Ext.Panel({title:"流程示意图",width:500,autoScroll:true,height:800,split:true,collapsible:true,region:"west",margin:"5 5 5 5",html:'<img src="'+__ctxPath+"/jbpmImage?piId="+d+"&defId="+a+"&rand="+Math.random()+'"/>'});var e=this.getRightPanel(this.piId,this.runId);var f=new Ext.Toolbar({height:28,items:[{text:"刷新",iconCls:"btn-refresh",handler:function(){c.body.update('<img src="'+__ctxPath+"/jbpmImage?piId="+d+"&defId="+a+"&rand="+Math.random()+'"/>');e.doAutoLoad();}}]});var b=new Ext.Panel({id:"ProcessRunDetail"+this.runId,title:"流程详细－"+this.name,iconCls:"menu-flowEnd",layout:"border",tbar:f,autoScroll:true,items:[c,e]});return b;};ProcessRunDetail.prototype.getRightPanel=function(c,b){var a=new Ext.Panel({title:"流程审批信息",region:"center",width:400,autoScroll:true,autoLoad:{url:__ctxPath+"/flow/processRunDetail.do?piId="+c+"&runId="+b}});return a;};