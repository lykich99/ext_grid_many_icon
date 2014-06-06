Ext.define('AM.view.Vwindows', {
    extend: 'Ext.window.Window',
    alias: 'widget.wvindows',
    width: 300,
    height: 110,
    title: 'Form',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                
                xtype: 'form',
                id:'wf',
                items: [
                
                      {
                        
                         margins:    '10 10 10 10',
                         padding:    '10 10 10 10',
                         xtype: 'textfield',
                         name : 'name',
                         fieldLabel: 'Name'
                     }
                    
                    
                    

                ]
                
                
                
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            }

        ];

        this.callParent(arguments);
    }
});
