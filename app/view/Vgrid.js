Ext.define('AM.view.Vgrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.vgrid',
    store:'Sgrid', 
    title: 'История займов по заемщику', 
    tbar: [
                    { xtype: 'tbseparator' },
                   {
                     xtype: 'button',
                     style:'background-color:#E5E5E5',                    
                     text : 'Выдать займ'
                   },
                   { xtype: 'tbspacer' },
                     { xtype: 'tbseparator' },
                   {
                     xtype: 'button',
                     text : 'Просмотр займа',
                     style:'background-color:#E5E5E5',
                   },
                   { xtype: 'tbspacer' },
                     { xtype: 'tbseparator' },
                    {
                     xtype: 'button',
                     text : 'Информация',
                     style:'background-color:#E5E5E5',
                   }    
                 
          ],



    initComponent: function() {


        this.columns = [
            {header: 'Дата',  dataIndex: 'date', flex: 1},
            {header: 'Срок', dataIndex: 'limit', flex: 1},
            {header: 'Дата пог.',  dataIndex: 'date_final',flex: 1},
            {header: 'Тело займа', dataIndex: 'body_p', flex: 1},
            {header: '%',  dataIndex: 'proc',  flex: 1},
            {header: 'Сумма +%', dataIndex: 'sum', flex: 1},
            {header: 'Статус',  dataIndex: 'status',  flex: 1},
            
            
            {
    xtype: 'actioncolumn',
    //align: 'center',
    items: [
        
                     {
						iconCls: 'icon-printer',
						tooltip: 'Печать',
			

                     },
      
        {
            getClass: function(value,meta,record,rowIx,colIx, store) {
				
                  var st = record.get('status')
				 if (st != 'погашен')
				   {
				   return 'icon-next';
				    }

            }
    
        },     
        {
            getClass: function(value,meta,record,rowIx,colIx, store) {
				
				var st = record.get('status');
				 if (st != 'погашен')
				   {
				      return 'icon-delete';
				      
				    }
            }
          
        }
       
  
  
  
    ]
}
            
            
            
        ];

        this.callParent(arguments);
    }
});
