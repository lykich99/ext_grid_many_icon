Ext.define('AM.store.Sgrid', {
    extend: 'Ext.data.Store',    
    model: 'AM.model.Mgrid',
    
    data  : [
                { date: '14.01.2012',limit:'60 дней',date_final:'13.04.2012',body_p:'90 000.00',proc:'7',sum:'108 000.00',status:'погашен'},
                { date: '13.02.2012',limit:'10 дней',date_final:'18.04.2012',body_p:'70 000.00',proc:'10',sum:'84 000.00',status:'выдан'}
                
            ]
    
});
