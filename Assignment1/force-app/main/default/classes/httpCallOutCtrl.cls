public class httpCallOutCtrl {
    public static HttpResponse makeGetCallout() {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v28.0/sobjects/DatedConversionRate/');
        req.setBody('{ "IsoCode" : "CAD", "ConversionRate" : 1.2538748446, "StartDate" : "2018-01-02" },{ "IsoCode" : "CAD", "ConversionRate" : 1.2318805683, "StartDate" : "2018-02-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.2861720483, "StartDate" : "2018-03-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.2851803705, "StartDate" : "2018-04-03" }, { "IsoCode" : "CAD", "ConversionRate" : 1.2826684434, "StartDate" : "2018-05-02" },{ "IsoCode" : "CAD", "ConversionRate" : 1.297626189, "StartDate" : "2018-06-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3181544806, "StartDate" : "2018-07-02" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3022400821, "StartDate" : "2018-08-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3071754673, "StartDate" : "2018-09-03" }, { "IsoCode" : "CAD", "ConversionRate" : 1.2809753576, "StartDate" : "2018-10-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3081716844, "StartDate" : "2018-11-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3175961878, "StartDate" : "2018-12-03" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3641309116, "StartDate" : "2019-01-02" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3141835934, "StartDate" : "2019-02-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3152068875, "StartDate" : "2019-03-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3355286579, "StartDate" : "2019-04-01" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3435604709, "StartDate" : "2019-05-02" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3498435405, "StartDate" : "2019-06-03" }, { "IsoCode" : "CAD", "ConversionRate" : 1.3098951449, "StartDate" : "2019-07-01" }');
        req.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId());
        req.setHeader('Content-Type', 'application/json');
        req.setMethod('POST');
        HttpResponse res = h.send(req);
        return res;
    }
}