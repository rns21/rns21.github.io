$(document).ready(function() {
    wrapNoteBlock();
    initializeLB();
    tableWrap();
    callTableLB();
    callImageLB();
    $('p').each(function() {
        if($(this).html() === '&nbsp;'){
            $(this).remove();
        }
    });
    /* hide roadmap  */
    if($( "p:contains('Features Roadmap')").length > 0 ){
        $( "p:contains('Features Roadmap')" ).hide();
    }
})

/**
 * Initialize custom lightbox.
 */
function initializeLB() {
    $('body').prepend('<div class="lgtBox-overlay"></div><span class="lightbx-close">X</span><div class="lgtBox-content"></div>');
    $('body .lgtBox-content, body .lgtBox-overlay, body .lightbx-close').hide();
}

/**
 * Display Custom Lightbox on Call.
 */
function callLB(className) {
    $('body .lgtBox-overlay').fadeIn(400);
    $('body .lgtBox-content').fadeIn(500);
    $('body .lightbx-close').fadeIn(500);
    $('body .lightbx-close, body .lgtBox-overlay').click(function(){
        $('body .lgtBox-overlay').fadeOut(500);
        $('body .lgtBox-content').fadeOut(400);
        $('body .lightbx-close').fadeOut(400);
        $('body .lgtBox-content').html('');
        $('body .lgtBox-content').removeClass(className);
    });
}

/**
 * Identify and wrap Table
 */
function tableWrap() { 
    $('.Page-content table').each(function(){
        if(!$(this).parent().hasClass('table-wrap')) {
            $(this).wrap('<div class="table-wrap "/>');
        }
        $(this).parents('.table-wrap').prepend('<span class="magnify-table"></span>');
        $(this).addClass('table-scroll');
        if($(this).find('thead').length == 0) {
            $(this).find('tr:first-child').addClass('table-header');
        }
    });
}

/**
 * Call Custom lightbox fot table
 */
function callTableLB() {
    $('.Page-content .table-wrap .magnify-table').click(function() {
        $(this).siblings('table').clone().appendTo('body .lgtBox-content');
        callLB('table-wrap');
        $('body .lgtBox-content').addClass('table-wrap show');
    })
}

/**
 * Intialize and call Magnific pop-up jQuery plugin for image lightbox 
 *      -  galllery enable to cluster images in a page
 */
function callImageLB() {
    $('.Page-content p img,.Page-content .wp-gliffy-image img,.wp-block-image img').each(function(){
        if(!$(this).parents('.Page-content').hasClass('forum-content')){
            $(this).before('<a class="lightboxcaller-image" href="' + $(this).attr('src') + '"/>');
        }
    });
    // Magnific pop-up call
    $('.lightboxcaller-image').magnificPopup({type:'image',gallery:{enabled:true}});
}

/**
 * Wrap and format notes
 */
function wrapNoteBlock() {
    $('em').each(function(){
        var noteText = $(this).text().trim().toUpperCase();
        if(noteText.indexOf("NOTE:") != -1 ) {
            $(this).wrap('<div class="wp-block-simple-note-info"/>');
        }
    });
}