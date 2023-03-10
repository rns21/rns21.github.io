

 /** function executes on dom loading 
  * creates custom data-tile attribute based on title attribute
  * creates new node for copy code block icon
  */
 $(function() {
  $('.EnlighterJSToolbar').append('<a class="copyCodeBlock" title="copy"></a>')
    $('.EnlighterJSToolbar a').attr("data-title", function() {
        return this.title;
      }).removeAttr('title');

      $('.copyCodeBlock').mouseleave(function(){
        $(this).attr("data-title","copy")
      })
  });
  /**
   * executes on click of toggle button on the code block 
   * changes the code block action images as per vd
   */
  $(document).on("click", ".EnlighterJSRawButton", function(e) {
    $(this).parent().children().toggleClass('clicked');

  })
  /**
   * executes on click of copy button on the code block 
   * copy the text in  the code block
   */
  $(document).on("click", ".copyCodeBlock", function(e) {
    var codeBlock = $($(this).parent()).parent()[0].children[1];
    var defaultStateOfCodeBlock = codeBlock.style.display;
    codeBlock.style.display= "block";
      var range = document.createRange();
        range.selectNodeContents(codeBlock);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
     if(document.execCommand("copy") && defaultStateOfCodeBlock == "none"){
      codeBlock.style.display = "none"
     }
     $('.copyCodeBlock').attr("data-title","copied");
    return false;
});