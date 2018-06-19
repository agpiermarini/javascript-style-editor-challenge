$(document).ready(function(){
  $("#style_editor").on("click", function(event) {
    event.preventDefault();
    var formData    = $( this ).serializeArray();
    var cssSelector = formData[0].value;
    var cssProperty = formData[1].value;
    var cssValue    = formData[2].value;

    $(cssSelector).css(cssProperty, cssValue);
  });
});
