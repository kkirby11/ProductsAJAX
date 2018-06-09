$(document).ready( function() {
    $.ajax({
      url: ' http://json-server.devpointlabs.com/api/v1/products/',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('#products');
      list.empty();
      products.forEach( function(char) {
        var li = '<li data-product-id="' + char.id + '">' + char.name + '</li>'
        list.append(li)
      });
    });
});