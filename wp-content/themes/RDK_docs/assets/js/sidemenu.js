$(document).ready(function() {
    $('.menu-list ul').css('margin-left', '10px');
    $("li.page_item_has_children").each(function(i) {
        $(this).append('<span class="icon-Dropdown1"></span>');
    });
    preventRedirect();
    $('li.page_item_has_children span,li.page_item_has_children a.prev-redirect').click(function(e) {
        var $this = $(this);
        $this.parents()
        if ($this.parent().find("> ul").hasClass('show')) {
            $this.parent().find("> ul").removeClass('show');
            $this.parent().find("> ul").slideUp(600, 'linear');
        } else {
            $this.parent().siblings('li').find('ul').removeClass('show');
            $this.parent().siblings('li').find('ul').slideUp(600, 'linear');
            $this.parent().find('> ul').toggleClass('show');
            $this.parent().find('> ul').slideToggle(600, 'linear');
        }
    });
    $('li.current_page_ancestor > ul, li.current_page_item > ul').addClass('show');
    $('li.current_page_ancestor > ul, li.current_page_item > ul').slideToggle(700, 'linear');

    //for leftside icon placement
    $('ul.accordion > li').each(function() {
        navClassLst = $(this).attr('class');
        navClassArr = navClassLst.split(' ');
        for (var i = 0; i < navClassArr.length; i++) {
            if (navClassArr[i].indexOf('page-item-') != -1) {
                classSplit = navClassArr[i].split('-');
                thisPageID = classSplit[2];
                if ($("li[data-nav-page-id=" + thisPageID + "]").length > 0) {
                    imageClassName = $("li[data-nav-page-id=" + thisPageID + "]").text();
                    $('>a', this).append('<span class="left-nav-icon-position ' + imageClassName + '"></span>');
                    var imageClassSplit = imageClassName.split(';');
                    if (imageClassSplit.length > 1) {
                        for (i = 0; i < imageClassSplit.length; i++) {
                            $('>a', this).append('<img class="' + 'side_nav_icon' + '_' + i + '" src="' + imageClassSplit[i] + '">');
                        }
                    }
                }
            }
        }
    });
    $("#side-nav-menu ul.accordion  li a").addClass("ellipsis");
    /** isContentTooLong is  to check the content is toolong or not  */
    function isContentTooLong(menuEle) {
        return menuEle.offsetWidth < menuEle.scrollWidth;
    }
    /**  To add the toolip based on the content length  */
    Array.from(document.querySelectorAll(".ellipsis")).forEach(menuEle => {
        if (isContentTooLong(menuEle)) {
            menuEle.title = menuEle.innerText;
        }
    });

    // Add black shade to sidebar bg.
    $("#side-nav-menu").parent().addClass("bg-black");
});

// Mark elements in left nav which has prevent navigation filed enabled.
function preventRedirect() {
    $('ul.accordion li.page_item').each(function() {
        navClassLst = $(this).attr('class');
        navClassArr = navClassLst.split(' ');
        for (var i = 0; i < navClassArr.length; i++) {
            if (navClassArr[i].indexOf('page-item-') != -1) {
                classSplit = navClassArr[i].split('-');
                thisPageID = classSplit[2];
                if ($("li[data-prevrd-page-id=" + thisPageID + "]").length > 0) {
                    if ($("li[data-prevrd-page-id=" + thisPageID + "]").text().trim() === '1') {
                        $(this).find('> a').addClass('prev-redirect');
                        $(this).find('> a').attr('href', 'javascript:void(0)');
                    }
                }
            }
        }
    });
}