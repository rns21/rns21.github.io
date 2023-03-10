


$(document).ready(function(){   

    var position = $(window).scrollTop(); 
  /**check browser */
  var isIE = false;
  var ua = window.navigator.userAgent;
  if( ua.indexOf('MSIE ') > 0 ||  ua.indexOf('Trident/') > 0){
    $('body').addClass('ie-style');
    isIE = true;
  }
    // should start at 0
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    if(isIE){
      var elementTop = $('.page-footer').offset().top;
      var elementBottom = elementTop + $('.page-footer').outerHeight();
  
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
  
      if( elementBottom > viewportTop && elementTop < viewportBottom){
        $('.ie-style').addClass('footer-view');
      }
      else{
        $('.ie-style').removeClass('footer-view');
        
      }
    }
    else{
      /** IE cannot find this function is in another file */
      leftNavAdjust();
    }

        if(scroll === 0) {
            $('#headerLevelTwo').show();
            $('#side-nav-menu,.right-nav').addClass('is-top');
            $('#main-content,.right-content').addClass('is-top');
            $('.go-top').hide();
        }else{
            $('#headerLevelTwo').hide();
            $('#side-nav-menu,.right-nav').removeClass('is-top');
            $('#main-content,.right-content').removeClass('is-top');
            $('.go-top').show();
        } 
        position = scroll;
    	/*var selector = "h2,h3"*/
        var selector = "h2";
    	$(selector).each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 150) {
                var id = $(this).attr('id');
                $('.right-nav a').parent().removeClass('active');
                $('.right-nav a[href=\"#'+ id +'\"]').parent().addClass('active');
        if ($('.right-nav a[href="#' + id + '"]').parents(".sub-scroll-parent")) {
          $('.right-nav a[href="#' + id + '"]').parents(".sub-scroll-parent").addClass("active");
        }
      }
        });
    });
   
  $('.mobile-menu').click(function() {
        $('.header-menu-level-one').toggle();
        $('.mobile-menu').toggleClass('open');
    });
  $(".login-btn, .mob-login-btn, .forum-reply-login").click(function () {
        let loginLink = $(this).attr("data-link");
        let action = loginLink + 'wp-login.php?redirect=' + window.location.href;
        $('#loginform').attr('action', action);
    });

    /** hide go to top on load */
    $('.go-top').hide();
    setSideScrolls();

    if($(window).width() < 1200){
        let headerLevelTwo = $(".header-nav-level-two").clone();
        $(".header-nav-level-one .active-link").parent().append(headerLevelTwo);
    }
    /**  Scroll to particular content on click on right side content  */
    function setScrollAnimation(){
    $(".right-nav ul li:not(.sub-scroll-parent) a[href^='#']").on("click", function (e) {
            e.preventDefault();
            var hash = this.hash;
            if((this.hash.indexOf('.') !== -1)){
                hash = this.hash.replace('.','\\\\.');
            }

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 120
              }, 300);
         
         });
    }

    /** Set active class to first section in the right side heading */
    function setActiveClass(){
        $('#scroll-list li:first').addClass('active');
    }

    /** add right side content and set Ids for each heading  */
    function setSideScrolls() {
        var id = 1,
            h3count = 0,
            sub_id;
        let pageUrlSplit = window.location.href.split('/');
        var h2len = $('h2').length;
        $('h2,h3').each(function() {
      var scrollText = $(this).text().trim();
      /** To remove unwanted space and numbers in scroll spy link */
      scrollText = scrollText.replace(/^[0-9. ]*/, '').trim();
      if (scrollText !== '') {
                if ($(this)[0].tagName === 'H2' && $(this).parents('#comments').length === 0) {
                    $(this).attr("id", "side-scroll-" + id);
          	    $('#scroll-list').append('<li class="scroll-elem scroll-elem-' + id + '"><a href=\"#side-scroll-' + id + '\">' + scrollText + '</a></li>');
                    id++;
                    h3count = 0;
        } else if (h2len <= 1 && $(this)[0].tagName === 'H3' && !($('.container-fluid').hasClass('release-notes')) && $(this).parents('#comments').length === 0) {
                    $(this).attr("id", "side-scroll-" + id);
         	    $('#scroll-list').append('<li class="scroll-elem scroll-elem-' + id + '"><a href=\"#side-scroll-' + id + '\">' + scrollText + '</a></li>');
                    id++;
                    //h3count = 0;
        } else if ($(this)[0].tagName === 'H3' && $('.container-fluid').hasClass('release-notes') && $(this).parents('#comments').length === 0) {
                    $(this).attr("id", "side-scroll-" + id);
                    if (h3count === 0) {
                        sub_id = id - 1;
                        $('.scroll-elem-' + sub_id).addClass('sub-scroll-parent');
                        $('.scroll-elem-' + sub_id).append('<ul id="sub-scroll-list" class="sub-scroll-' + sub_id + '" ></ul>');
                    }
          	    $('.sub-scroll-' + sub_id).append('<li class="scroll-elem-' + id + '"><a href=\"#side-scroll-' + id + '\">' + scrollText + '</a></li>');
                    id++;
                    h3count++;
                }
            }
        });
        if ($('li.scroll-elem').length <= 1 && !($('.container-fluid').hasClass('release-page'))) {
            $('.right-nav-cont').remove();
        }
        setScrollAnimation();
        setActiveClass();
    };
    
    /** add active menu to sub menu */
    $('#headerLevelOne li a').each(function(){
        if(window.location.href.includes($(this)[0].href)){
            $(this).addClass('active-link');
        }
    });
    /** Open external links in new tab */
  $( '#main-content a' ).each(function() {
    if( location.hostname !== this.hostname ) {
        $(this).attr('target','_blank');
    }
  });
    /** Show logout dropdown on clicking username */
    $("#userName").on("click", function() {
        $( "#logout" ).slideToggle("slow");
        $(this).toggleClass('open')
    });
/** hide logout dropdown when logout popup opens */
  $("#logout").on("click", function () {
    $("#logout").slideToggle("slow");
    $("#userName").toggleClass("open");
  });
    /** Scroll to top with animation */
     $("#go-to-top").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $( window ).resize(function() {
        if($(window).width() > 1200){
            $('.header-menu-level-one').show();
        }
        else{
            $('.header-menu-level-one').hide();
        }
      });
  setEmptyPTag();
  setEmptyListTag();
  });
/** add class to empty p tag elements */
function setEmptyPTag() {
  $('p').each(function () {
    if($(this).attr('class') == undefined && $(this).text().trim() == '' && $(this).find('img').length == 0){
      $(this).addClass('empty-p');
    }
  });
}

/** add class to empty li tag elements to hide list style */
function setEmptyListTag() {
  $('li').each(function () {
    if($(this).attr('class') == undefined && $(this).text().trim() == ''){
      $(this).addClass('empty-li');
    }
  });
}