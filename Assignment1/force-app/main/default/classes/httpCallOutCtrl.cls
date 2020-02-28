public class httpCallOutCtrl {
    public static HttpResponse makeGetCallout() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2019-07-01&base=USD&symbols=CAD');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            Map<String, Object> records = (Map<String, Object>) results.get('rates');
            for(String record : records.keySet()){
                System.debug(record + ': ' + records.get(record));
            }
        }
        return response;
    }
}