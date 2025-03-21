sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/gri/masterdata/systemparams/test/integration/FirstJourney',
		'com/gri/masterdata/systemparams/test/integration/pages/SystemParamsList',
		'com/gri/masterdata/systemparams/test/integration/pages/SystemParamsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SystemParamsList, SystemParamsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/gri/masterdata/systemparams') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSystemParamsList: SystemParamsList,
					onTheSystemParamsObjectPage: SystemParamsObjectPage
                }
            },
            opaJourney.run
        );
    }
);