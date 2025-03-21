sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.gri.masterdata.systemparams',
            componentId: 'SystemParamsList',
            contextPath: '/SystemParams'
        },
        CustomPageDefinitions
    );
});