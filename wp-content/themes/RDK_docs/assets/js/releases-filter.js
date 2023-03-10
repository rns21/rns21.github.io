document.addEventListener('DOMContentLoaded', function () {
    if($('.container-fluid').hasClass('release-page')){
        rlsLeftnavScrll();
        let mainElements = document.querySelectorAll('#side-nav-menu ul.accordion > li.page_item a');
        mainElements.forEach(function(element){
            className = element.innerText.toLowerCase();
            if(element.innerText.toUpperCase() === 'AVAILABLE RELEASES' || element.innerText.toUpperCase() === 'RELEASE NOTES'){
                releasesFilter(element.parentElement,element.parentElement.querySelector('ul.children'),className);
            }
        })
        $releasesRightNav = document.getElementById('release-notes-right');
        if($releasesRightNav){
            $currentRelease = document.querySelector('#side-nav-menu li.current_page_item');
            let currentReleaseVal =  $currentRelease.childNodes[0].innerText;
            currentReleaseVal = currentReleaseVal.replace('_','-');
            let titleTextFrag = currentReleaseVal.split('-');
            let exactCurrent = titleTextFrag[titleTextFrag.length - 1];
            let filteryear = titleTextFrag[titleTextFrag.length - 1].substr(0, 4);
            releasesFilter($releasesRightNav,$releasesRightNav,className,filteryear);
            highlightExactCurrentNotes(exactCurrent);
            noResultsforNotes();
        }
    }
    dropdownAction();
    clearfilter();
});
/**
 * Set Data attribute for all menu childs
 * @param {Wrapper of the dropdown} menuParent 
 * @param {Refence of the dropdown} menuElement 
 * @param {Class name to be set} className 
 * @param {If filter is already set} preSelected 
 */
function releasesFilter(menuParent, menuElement,className, preSelected = '') {
    let filterOptions = [];
    let $releasesList = menuElement.querySelectorAll('li');
    $releasesList.forEach(function(element) {
        let anchor = element.querySelectorAll('a');
        anchor[0].innerText = anchor[0].innerText.replace('_','-');
        let titleTextFrag = anchor[0].innerText.split('-');
        let filteryear = titleTextFrag[titleTextFrag.length - 1].substr(0, 4);
        filterOptions.indexOf(filteryear) === -1 ? filterOptions.push(filteryear) : '';
        element.setAttribute('data-filter-year',filteryear)
    });
    if(preSelected === ''){
        createFilterDropdown(menuParent, filterOptions,className);
    }
    filterAction(menuElement, preSelected);
}
/**
 * Create and append Filter DOM
 * @param {parent wrapper} menuParent 
 * @param {filter year extracted from menu items} filterOptions 
 */
function createFilterDropdown(menuParent, filterOptions) {
    className = className.replace(' ','_');
    filterOptions = filterOptions.sort(function(a, b){return b - a});
    $filterWrapper = menuParent.querySelector('ul.children');
    $filterSelect = document.createElement('ul');
    $filterSelect.setAttribute('name','release-filter');
    $filterSelect.setAttribute('id','releases-filter-select');
    $filterSelect.classList.add(className);
    releaseDrpDwn = document.createElement('img');
    releaseDrpDwn.setAttribute('class','rls-drpdwn-img');
    releaseDrpDwn.setAttribute('src', '/wp-content/themes/RDK_docs/assets/images/releases/Dropdown.png')
    $selectedFilter = document.createElement('div');
    $selectedFilter.setAttribute('id','releases-slected-val');
    $selectedFilter.innerText = 'Filter by year';
    if($filterWrapper){
        $filterbundle =  document.createElement('div');
        $filterbundle.setAttribute('class','filterWrapper');
        $resetFilter =  document.createElement('span');
        $resetFilter.setAttribute('class','reset-filter');
        $filterbundle.insertAdjacentElement('afterbegin',$filterSelect);
        $filterWrapper.insertAdjacentElement('afterbegin',$filterbundle);
        $filterbundle.insertAdjacentElement('afterbegin',$resetFilter);
        $filterbundle.insertAdjacentElement('afterbegin',$selectedFilter);
        $selectedFilter.insertAdjacentElement('afterbegin',releaseDrpDwn);
    }
    filterOptions.forEach(function(filterOption) {
        let opt = document.createElement('li');
        opt.innerHTML = 'Release Year : ' + filterOption;
        opt.value = filterOption;
        $filterSelect.insertAdjacentElement('beforeend',opt);
    });
}

/**
 * Filter functionality on select or preselected.
 * @param {Filter Wrapper - bind to each filter} menuSelector 
 * @param {If filter is pre-set} preSelected 
 */
function filterAction(menuSelector, preSelected){
    let $releasesFilterSelect = $('ul#releases-filter-select');
    if($releasesFilterSelect){
        let alloptions = menuSelector.querySelectorAll('li.page_item');
        if(preSelected){
            alloptions.forEach(function(option) {
                optionDataValue = option.getAttribute('data-filter-year');
                if(preSelected == optionDataValue){
                    option.style.display = "block";
                } else {
                    option.remove();
                }
            })
        }
        $('ul#releases-filter-select').click(function(optionselected){
            let optionValue = optionselected.target.value;
            let alloptions = $(optionselected.target).parents('ul.current-open-nav').find('.current-open-inner > li');
            alloptions.each(function() {
                optionDataValue = $(this).attr('data-filter-year');
                if(optionValue == optionDataValue){
                    $(this).css('display','block'); 
                } else {
                    $(this).css('display','none'); 
                }
            })
            let releaseDrpDwn = '<img src="/wp-content/themes/RDK_docs/assets/images/releases/Dropdown.png" class="rls-drpdwn-img"/>';
            $(optionselected.target).parents('ul.current-open-nav').find('#releases-slected-val').html(releaseDrpDwn + optionselected.target.innerText);
            if(!$(optionselected.target).parents('ul.current-open-nav').find('span.reset-filter').hasClass('active')){
                $(optionselected.target).parents('ul.current-open-nav').find('span.reset-filter').addClass('active');
            }
        });
    }
    retainFilterSlection();  
}

/**
 * Highlights curent active node in right side Nav - Available release to Release notes and vice versa.
 * @param {Currently active node} exactNote 
 */
function highlightExactCurrentNotes(exactNote){
    let allNodes = document.querySelectorAll('#release-notes-right li');
    allNodes.forEach(function(node){
        if(node.childNodes[0].innerText.toUpperCase() === exactNote.toUpperCase()){
            node.classList.add('current_page_item');
        }
    })
}

/**
 * Releses page right nav - no results behaviour
 */
function noResultsforNotes(){
    let allNodes = document.querySelectorAll('#release-notes-right li');
    if(allNodes.length <= 0){
        document.getElementById('release-notes-right').remove();
    }
}

/**
 * Dropdown action on filter toggle.
 */
function dropdownAction(){
    $('ul#releases-filter-select').hide();
    $('.filterWrapper #releases-slected-val, .filterWrapper #releases-slected-val').click(function(){
        $(this).parents('.filterWrapper').find('ul#releases-filter-select').slideToggle();
    });
    $('.filterWrapper .reset-filter').click(function(){
        if(!$(this).hasClass('active')){
           $(this).parents('.filterWrapper').find('ul#releases-filter-select').slideToggle();
        }
    });
    $('ul#releases-filter-select li').click(function(){
        $(this).parents('.filterWrapper').find('ul#releases-filter-select').slideUp(500);
    });
}

/**
 * Retain filter selection after page-reload.
 */
function retainFilterSlection() {
    if($('.menu-list .filterWrapper ul#releases-filter-select li').length > 0){
        $('.menu-list .filterWrapper ul#releases-filter-select li').click(function() {
            let parent = $(this).parents('li.page_item').find('> a').text().trim();
            let value = $(this).text().trim().split(':')[1].trim();
            let parent_value = parent.replace(" ","_");
            parent_value = parent_value + '_filter';
            sessionStorage.setItem('release_filter', parent_value + ':' + value);
        });
    }
    let check_rls_filter = sessionStorage.getItem('release_filter');
    setTimeout(() => {
        if(check_rls_filter){
            let parent = check_rls_filter.split(":")[0];
            let value = check_rls_filter.split(":")[1];
            selector = parent === 'Available_Releases_filter' ? 'ul#releases-filter-select.available_releases li[value="' + value +'"]' : 'ul#releases-filter-select.release_notes li[value="' + value +'"]'
            $(selector).click();
        }
    }, 500);
}

/**
 * Clear Filter selection - on click of clear filter.
 */
function clearfilter() {
    $('.menu-list .filterWrapper span.reset-filter').click(function() {
        if($(this).hasClass('active')){
            $(this).parents('.filterWrapper').siblings('.current-open-inner').find('li').each(function() {$(this).show()});
            let check_rls_filter = sessionStorage.getItem('release_filter');
            if(check_rls_filter){ sessionStorage.removeItem('release_filter');}
            let releaseDrpDwn = '<img src="/wp-content/themes/RDK_docs/assets/images/releases/Dropdown.png" class="rls-drpdwn-img"/>';
            $(this).parents('.filterWrapper').find('#releases-slected-val').html(releaseDrpDwn + 'Filter by year');
            $(this).removeClass('active');
        }
    });
}

$(document).ready(function(){
    // If Current nav-item is not a page - prevent redirect and instead toggle the child menu
    $('.menu-list .icon-Dropdown1, .menu-list ul li.page_item_has_children a.prev-redirect').click(function(){
        $('ul#releases-filter-select').slideUp();
        if($('.container-fluid').hasClass('release-page')){
            rlsLeftnavScrll();
        }
    });
    // If the current page is not visible - scroll the nav item to a visible area.
    if(!$('.container-fluid').hasClass('release-page')){
        leftNavStayFocused();    
    }
    // Function for release-notes rightside nav - pullover nav
    if($('.container-fluid').hasClass('release-notes')){
        $('.right-nav-cont').addClass('release-right-nav');
        advancedScrollSpy();
        pullOverNav();
        showToolTip();
    }
    leftNavAdjust();
    avlblRlsToggle();
    /** Remove releases filter if navigated out of release page */
    let check_rls_filter = sessionStorage.getItem('release_filter');
    if(!$('.container-fluid').hasClass('release-page')){
        if(check_rls_filter){ sessionStorage.removeItem('release_filter'); check_rls_filter = '';}
    }
    /** Remove tooltip session if navigated out of release-notes - and re-appear  everyime he navigates back to a release notes page*/
    let check_rls_tooltip = sessionStorage.getItem('releaseTooltip');
    if(!$('.container-fluid').hasClass('release-notes')){
        if(check_rls_tooltip){ sessionStorage.removeItem('releaseTooltip'); check_rls_tooltip = '';}
    }
});

/**
 * Adjust left nav within the view-port height.
 */
function leftNavAdjust(){
    var scroll = $(window).scrollTop();
	topNavHgt = scroll === 0 ? $('.header-cont').height() : $('.header-container-level-one').height();
    let headHgt = $('#wpadminbar').length > 0 ? $('#wpadminbar').height() + topNavHgt : topNavHgt;
    if($(window).width() < 767){
        $('.nav-side-menu').css({ top: headHgt + 'px', 'max-height': 'calc(100vh - ' + headHgt + 'px)' });
    }
    else{ 
        $('.nav-side-menu').css({ top: headHgt + 'px', height: 'calc(100vh - ' + headHgt + 'px)' }); 
        $('.pullOutMenu').css({ top: (headHgt + 5) + 'px' });
    }
    $('.content-wrap').css({ 'min-height': '100vh' });
}

/**
 * Maintain current active eleent of left nav in focus
 */
function leftNavStayFocused() {
    if($('li.current_page_item').offset()){
        req_pos = $('li.current_page_item').offset().top;
        $('#side-nav-menu').animate({
            scrollTop: req_pos -  ($('header .header-cont').height() + 30)
        }, 1000);
    }
    
}

/**
 * maintain currently active release element in viewport.
 */
function rlsLeftnavScrll(){
    let otheElemheight = 0, currntNavheight = 0;
    setTimeout(() => {
        $('#side-nav-menu ul.accordion').find('> li').each(function(){
            if($(this).find('> ul').length > 0){
                if($(this).find('.current-open-nav li.page_item').parent().is( "div" )){
                    $(this).find('.current-open-nav li.page_item').unwrap();
                }
                if(!$(this).find('> ul').hasClass('show')){
                    if($(this).find('ul.show').hasClass('current-open-nav')){
                        $(this).find('ul.show').removeClass('current-open-nav');
                        $(this).find('ul.show').css({ 'max-height': 'auto', 'overflow-y': 'auto' });
                    }
                   otheElemheight += $(this).height();
                } else{
                    $(this).find('ul.show').addClass('current-open-nav');
                    $(this).find('ul.show li.page_item').wrapAll( "<div class='current-open-inner' />");
                    currntNavheight = $(this).find('ul.show').height();
                }
            } else{
                otheElemheight += $(this).height();
                $(this).css({ 'max-height': 'auto', 'overflow-y': 'auto' });
            }

        });
        let menuheight = $('.nav-side-menu').height();
        let maxOpenHht = menuheight - (otheElemheight + 130);
        let checkmax = otheElemheight + 100 + currntNavheight
        if(checkmax > menuheight){
            $('#side-nav-menu ul.accordion .current-open-nav .current-open-inner').css({ 'max-height': maxOpenHht, 'overflow-y': 'scroll' });
            if($('.current-open-inner li.current_page_item').offset()){
                req_pos = $('.current-open-inner li.current_page_item').offset().top;
                $('.current-open-inner').animate({
                    scrollTop: req_pos - 225
                }, 1000);
            }
        }
    }, 500);
}

/**
 * Show pull-over nav tool tip/
 */
function showToolTip() {
    if($(window).width() > 767){
        var checktolltip = sessionStorage.getItem('releaseTooltip');
        if(!checktolltip){
            $('body').prepend('<div class="filter-toolWrapper" style="display: none;"><div class="filter-tooltip-overlay"></div><div class="filter-text"><img src="/wp-content/themes/RDK_docs/assets/images/releases/direction_arrow.png"/><span>Pullout to navigate quickly accross content</span></div></div>');
            $(window).load(function(){
                $('.header-cont').addClass('filterNavShown');
                $('.filter-toolWrapper').fadeIn(200);
                var docViewTop = $(window).scrollTop();
                topNavHgt = docViewTop === 0 ? $('.header-cont').height() : $('.header-container-level-one').height();
                let headHgt = $('#wpadminbar').length > 0 ? $('#wpadminbar').height() + topNavHgt : topNavHgt;
                $('.filter-toolWrapper .filter-text').css({ top: (headHgt + 20) + 'px' });
                sessionStorage.setItem('releaseTooltip', true);
                $('.filter-toolWrapper .filter-tooltip-overlay').click(function(){
                    if($('.header-cont').hasClass('filterNavShown')){
                        $('.header-cont').removeClass('filterNavShown');
                        $('.filter-toolWrapper').hide();
                    }
                });
                setTimeout(() => {
                    if($('.header-cont').hasClass('filterNavShown')){
                        $('.header-cont').removeClass('filterNavShown');
                        $('.filter-toolWrapper').fadeOut(200);
                    }
                }, 2000);
            });
        }
    }
}

/**
 * Advanced scrollspy for rlease notes page.
 */
function advancedScrollSpy(){
    $('.rlsnts-srlspy li.sub-scroll-parent').each(function(){
        $(this).append('<span class="icon-Dropdown1"></span>');
        $(this).find('ul#sub-scroll-list').hide();
    });
    $('.rlsnts-srlspy li.sub-scroll-parent .icon-Dropdown1, .rlsnts-srlspy li.sub-scroll-parent a').click(function(e) {
        e.preventDefault();
        $(this).siblings('ul#sub-scroll-list').slideToggle();
        $(this).siblings('ul#sub-scroll-list').toggleClass('open');
        $(this).siblings('ul#sub-scroll-list').parents('li').toggleClass('open-parent');
        if($('#release-notes-right ul.avlbrls-sub-nav').length > 0 && $('#release-notes-right ul.avlbrls-sub-nav').hasClass('open')){
            $('#release-notes-right ul.avlbrls-sub-nav.open').slideUp(400);
            $('#release-notes-right ul.avlbrls-sub-nav.open').removeClass('open');
            $('div#release-notes-right.available_releases.open-parent').removeClass('open-parent');
            $('ul#sub-scroll-list.open').css({'max-height': 'none'});
        }
        let otheElemheight = 0, menuheight = 0;
        menuheight = $('.release-right-nav.shown .right-nav').innerHeight();
        setTimeout(() => {
            $('ul#sub-scroll-list').css({'max-height': 'none'});
            $(this).parents('.rlsnts-srlspy').find('li.scroll-elem:not(.open-parent)').each(function() {
                otheElemheight += $(this).height();
            })
            otheElemheight += $('div#release-notes-right').height();
            let maxOpenHht = menuheight - (otheElemheight + 150) ;
            $('ul#sub-scroll-list.open').css({'max-height': maxOpenHht});
        }, 400);
    });
}

/**
 * Show and hide pull over nav - release notes page
 */
function pullOverNav() {
    if($(window).width() > 767){
        $('.release-right-nav').before('<div class="pullOutMenu"><span class="icon-Dropdown1"></span></div>');
        $('div.pullOutMenu').click(function() {
            $(this).siblings('.release-right-nav').toggleClass('shown');
            $(this).toggleClass('shown');
        });

        $(window).scroll(function() {
            rightNavAdjust()
        });
        rightNavAdjust()
    }
}

/**
 * Maintain right side nav as sticky and within viewport height
 */
function rightNavAdjust() {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $('footer').offset().top;
    topNavHgt = docViewTop === 0 ? $('.header-cont').height() : $('.header-container-level-one').height();
    let headHgt = $('#wpadminbar').length > 0 ? $('#wpadminbar').height() + topNavHgt : topNavHgt;

    if((docViewBottom >= elemTop)){
        $('.release-right-nav').css({ top: 'auto', bottom: docViewBottom-elemTop });
    }else{
        $('.release-right-nav .right-nav').css({ height: 'calc(100vh - ' + headHgt + 'px)' });
        $('.release-right-nav').css({ top: headHgt + 'px', bottom: 'auto' });
    }

}

/**
 * Available Releases Toggle Function.
 * Close scroll-spy when avaiable release is opened - and vice versa - release notes right nav.
 */
function avlblRlsToggle() {
    $('#release-notes-right.available_releases').prepend('<span class="icon-Dropdown1"></span>');
    $('#release-notes-right.available_releases').addClass('open-parent');
    $('#release-notes-right.available_releases li.page_item').wrapAll('<ul class="avlbrls-sub-nav"/>');
    $('#release-notes-right.available_releases ul.avlbrls-sub-nav').addClass('open');
    $('div#release-notes-right.available_releases span').click(function() {
        $(this).siblings('.avlbrls-sub-nav').slideToggle();
        $(this).siblings('.avlbrls-sub-nav').toggleClass('open');
        $(this).parents('#release-notes-right.available_releases').toggleClass('open-parent');
        if($('ul#sub-scroll-list').length > 0 && $('ul#sub-scroll-list').hasClass('open')){
            $('ul#sub-scroll-list.open').slideUp(400);
            $('ul#sub-scroll-list.open').removeClass('open');
            $('ul#sub-scroll-list').css({'max-height': 'none'});
            $('.release-right-nav .rlsnts-srlspy li.sub-scroll-parent.open-parent').removeClass('open-parent');
        }
    });
}

/**
 * Function to scroll the menu items withing the content-box if text is getting hidden - currently not used.
 */
function menuHover() {
    $(".release-right-nav ul#sub-scroll-list li a").on({
        mouseenter: function () {
            var interval_val = $(this).outerWidth();
            $(this).animate({scrollLeft: interval_val}, 2000)
        },
        mouseleave: function () {
            $(this).animate({scrollLeft: 0}, 500)
        }
    });
}
