jQuery(document).ready(($) => {
    toggleThreadedReplies();
    showReplyButtons();
    showMoreButton(1);
    replyPermaLink();
});

/**
 * Hide threaded reply and toggle on click
 */
function toggleThreadedReplies() {
    $('ul.forums.bbp-replies li.bbp-body > ul > li').each(function(){
        if($(this).find('.bbp-threaded-replies').length > 0) {
            $(this).find('> .bbp-threaded-replies').hide();
            var replyCount = $(this).find('.bbp-threaded-replies li').length;
            createViewReplyDOM(replyCount, $(this));
            $(this).find('.bbp-threaded-replies .view-reply-icon').addClass('open');
        }
    });
    toggleRepliesAction();
}

/**
 * Create View Replies DOM
 * @param {Number of replies} replyCount 
 * @param {current object} $this 
 */
function createViewReplyDOM(replyCount,$this) {
    $this.find('.reply-parent').each(function(){
        if($(this).siblings('.bbp-threaded-replies').length > 0 && $(this).find('.bbp-reply-content .reply-footer .viewReplyWrapper').length == 0) {
            $(this).find('.bbp-reply-content .reply-footer').append('<span class="delimiter"> | </span><div class="viewReplyWrapper"></div>');
            $(this).find('.bbp-reply-content .reply-footer .viewReplyWrapper').append('<span class="icon-Dropdown1 view-reply-icon"></span>');
            $(this).find('.bbp-reply-content .reply-footer .reply-date-wrapper').removeClass('col-6').addClass('col-3');
        }
    })
    $this.find('> .reply-parent .bbp-reply-content .reply-footer .viewReplyWrapper').prepend('<span class="view-reply-text">View Replies ('+replyCount+')</span>');
}

/**
 * Toggle action on click of replies
 */
function toggleRepliesAction() {
    $('ul.forums.bbp-replies li.bbp-body .reply-footer .viewReplyWrapper span').click(function(){
        $(this).toggleClass('open');
        $(this).closest('.reply-parent').siblings('.bbp-threaded-replies').slideToggle();
    })
}

/**
 * Show reply and edit buttons
 * Show Submit and Clear button
 */
function showReplyButtons(){
    $('body.topic .bbp-reply-form .bbp-form .bbp-submit-wrapper').hide();
    $('body.topic .bbp-reply-form .bbp-form .bbp-the-content-wrapper .wp-editor-container textarea').attr("rows","5");
    $('body.topic .bbp-reply-form .bbp-form .bbp-the-content-wrapper .wp-editor-container textarea').click(function() {
        $(this).parents('.bbp-form').find('.bbp-submit-wrapper').slideDown(500);
    });
    $('body.topic .bbp-reply-form .bbp-form .bbp-submit-wrapper a').click(function() {
         $(this).parents('.bbp-form').find('.bbp-the-content-wrapper .wp-editor-container textarea').val("");
    });
    $('body.topic .bbp-reply-form .bbp-form .bbp-the-content-wrapper .wp-editor-container textarea').bind('input propertychange', function() {
        if($(this).val() !== '') {
            $(this).parents('.bbp-form').find('.bbp-submit-wrapper a').show();
        }
        else{
            $(this).parents('.bbp-form').find('.bbp-submit-wrapper a').hide();
        }
    });
}

/**
 * Modify reply admin link on sort complete
 */
function replaceReplyLink() {
    $('body.topic #bbpress-forums ul.forums.bbp-replies li.bbp-body .reply-footer .admin-links .bbp-admin-links .bbp-reply-to-link').each(function() {
        var tLink = $(this).attr("href");
        var cLink = window.location.origin + window.location.pathname + '?' + tLink.split('?')[1];
        $(this).attr('href',cLink);
    });
}

/**
 * Split content and show more - COUNT : 5
 */
function showMoreButton(curentPageCount) {
    var pageElemCount = 5;
    $('body.topic #bbpress-forums ul.forums.bbp-replies li.bbp-body > ul > li').each(function(index) {
        if(index >= (curentPageCount * pageElemCount)){
            $(this).hide();
            if($(this).parents('li.bbp-body').find('.bbp-show-more').length > 0){
                $(this).parents('li.bbp-body').find('.bbp-show-more').attr('data-curent-page', curentPageCount);
            } else{
                $(this).parents('li.bbp-body').append('<div class="bbp-show-more show-more-button" data-curent-page="'+curentPageCount+'">Show More</div>');
            }
        } else {
            $(this).show();
            if($(this).parents('li.bbp-body').find('.bbp-show-more').length > 0){
                $(this).parents('li.bbp-body').find('.bbp-show-more').remove();
            }
        }
    });
    showMoreButtonClick();
}

/**
 * On Clicl of show more
 */
function showMoreButtonClick() {
    $('body.topic #bbpress-forums ul.forums.bbp-replies li.bbp-body .bbp-show-more').click(function() {
        curentPageCount = parseInt($(this).attr('data-curent-page'));
        curentPageCount++;
        showMoreButton(curentPageCount);
    });
}

/**
 * Copy reply link to clipboard on click of permalink
 */
function replyPermaLink() {
    $('body.topic #bbpress-forums div.bbp-reply-content .bbp-reply-permalink').click(function(e) {
        e.preventDefault();
        var permalinkVal = $(this).attr('href');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(permalinkVal).select();
        document.execCommand("copy");
        $temp.remove();
        alert(permalinkVal + '\nCopied to clipboard!')
    });
}