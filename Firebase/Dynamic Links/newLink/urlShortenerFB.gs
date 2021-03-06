function URLShortener() {
  var body = {
    "dynamicLinkInfo": {
      "domainUriPrefix": "https://example.page.link",
      "link": "https://example.com/?utm_source=email&utm_medium=mobile&utm_content=1234567890"
    },
    "suffix": {
      "option": "SHORT"
    }
  };
  var key = 'XXXXXXXXXXXXXXXXXXXXXXX'
  var url = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + key;
  var options = {
    'method': 'POST',
    "contentType": "application/json",
    'payload': JSON.stringify(body),
  };
  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  var obj = data["shortLink"];
  Logger.log(obj)
}
