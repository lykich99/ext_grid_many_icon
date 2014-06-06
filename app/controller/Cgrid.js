Ext.define('AM.controller.Cgrid', {
    extend: 'Ext.app.Controller',
      views: ['Vgrid','Vwindows'],
      stores:['Sgrid'],
      models: ['Mgrid'],

    
      init: function() {
        
        
        
        
        this.control(
            {
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'vgrid actioncolumn': {
        		click:this.onAction
        	},
        	'vgrid button': {
        	        click: function(grid)
        	              { 
							 var view = Ext.widget('wvindows');
							 			  
						   }
        	        
        	        
        	        },
            'wvindows button[action=save]': {
                                
    
                                click: function(button)
        	              { 
							var f = Ext.ComponentQuery.query('#wf')[0];
					 		
								  f.submit({
                                          url: 'scripts/file.php',
                                          success: function(res, req) {
                                                    
                                                }
                                            });
												  
						   }
             
		      }
       
        });
    },
  


      onAction: function(view,cell,row,col,e){
    	
        var m = e.getTarget().className.match(/\bicon-(\w+)\b/);
        view.getSelectionModel().select;
        var rec = this.getSgridStore().getAt(row);
        
        if(m){
            switch(m[1]){
                case 'printer':
						 var myWin = window;
						 myWin.open('http://www.yahoo.com');
                    break;
                case 'next':
                	     alert("Will be next!!!");
                	     
                	     
                    break;    
                case 'delete':
                	 Ext.Msg.confirm('Remove Record', 'Вы действительно хотите удалить данную запись ?', function (button) {
                        if (button == 'yes') {
											   var grid  = Ext.ComponentQuery.query('vgrid')[0];
											   val = grid.getSelectionModel().selected.items[0];
											   var gstor = grid.getStore();
											   gstor.removeAt(row);
                                            }
                        
                        
                        });
       
															     
                	    
                    break;
            }
        }
    },





    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    
    
    
    
});
