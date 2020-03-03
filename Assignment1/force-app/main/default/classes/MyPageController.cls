public with sharing class MyPageController {
 
    public String imageUrl {get; set;}
    public MyPageController() {

    ContentVersion[] cv = [select id from contentversion where contentdocumentid = '0696g000003o6SbAAI' and isLatest=true];
   
    imageUrl = '/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480&versionId=' + cv[0].id;
  }
}