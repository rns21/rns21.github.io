/**
 * excutes when dom creates
 */
$(function() {
  listenScrollForInfiniteScroll();
  var currentSiteobj = sites.filter(e => e.blog_id == currentsite);
  sitelist = sites.filter(e => e.blog_id != currentsite);
  sitelist.unshift(currentSiteobj[0]);
  sites.forEach(e => {
    $("#platformFilterSelect").append(new Option(e.name, e.blog_id));
  });
  users.forEach(e => {
    $("#authorFilterSelect").append(new Option(e.name,e.id));
  });
  $( "#dateFilterSelect" ).selectmenu({ 
     change : function() {
     dateFilterChange();
    }
  });
  multiSelectCreation("#platformFilterSelect");
  multiSelectCreation("#typeFilterSelect");
  multiSelectCreation("#authorFilterSelect");
  triggerAutoComplete();
});
/**
 * function is used to open search container on clicking search container
 */
$("#searchIcon").click(() => {
  clearFilters();
  $("#searchContainter").show(250, "swing");
  $(".search-count").hide();
  $("#scorll").hide();
  $("#bodyBackgroundOverlay").show();
  $("body").addClass("avoid-scroll");
  $("#dataFilter").hide();
});
/**
 * function is used to close search container on clicking body overlay
 */
$("#bodyBackgroundOverlay").click(() => {
  $("#bodyBackgroundOverlay").hide();
  $("#searchContainter").hide(250, "swing");
  $("body").removeClass("avoid-scroll");
  $("#scroll").empty();
  $("#custom-search").val("");
  $("#datafetch").addClass("searchImg");
});
/**
 * clearFilterSearch is used in author filter
 */
function clearFilterSearch(){
  $('.ms-search input').val('');
  $('.ms-search input').keyup();
}
/**
 * autocomplete functionality of the search input
 */
function triggerAutoComplete() {
  $("#custom-search").autocomplete({
    source: function(request, response) {
      if(request.term.trim()){
      $.ajax({
        url: $("#custom-search").data("search-url"),
        type: "post",
        dataType: "json",
        data: { action: "auto_complete", keyword: request.term },
        success: function(autoCompleteRes) {
          autoCompleteRes.unshift(request.term);
          response(autoCompleteRes);
        }
      });
    }
    },
    focus: function(event, ui) {
      $("#custom-search").val(ui.item.label);
      return false;
    },
    select: function() {
      triggerSearch();
      return false;
    }
  });
}
/**
 * to trigger search on scroll end - (infinite scroll functionlity)
 */
function listenScrollForInfiniteScroll() {
  $("#scorll").on("scroll", function() {
    if ( $(this)[0].scrollHeight && $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight){
      
      /** commented for future use */
      // if(!$('#search-loader').length){
      //   $('#scorll').append('<div id="search-loader"class="d-flex justify-content-center loader"><div class="spinner-border text-primary" role="status"> <span class="sr-only">Loading...</span></div></div>');
      // }
      // setTimeout(() => {
         
      // }, 2000);
      triggerSearch(page_id);
     
    }
  });
}
/**
 * multiSelectCreation is used to create mutliselect checkboxes using multiselect plugins
 */
function multiSelectCreation(id) {
  $(id + "[multiple]").multiselect({
    texts: {
   placeholder    :$(id).attr('placeholder'),
   search         :'Search', 
   unselectAll    :'Unselect all',
    },
    searchOptions: {
      searchText   :true
     
    },
    search :(id==="#authorFilterSelect"),
    minHeight: 0,
    onLoad:function(){
      if(id==="#authorFilterSelect"){
        $('.ms-search input').after('<span onclick="clearFilterSearch()" class="cross"></span>')
      }
      $(".ms-options ul li label").append('<span class="checkbox"></span>');
    },         
    onOptionClick: function() {
      $("#scorll").scrollTop(0);
      triggerSearch();
    }
  });
}
/**
 * getSearchResults is used to get search results results from the server based on the user inputs
 */
function getSearchResults(sites, page = 1) {
  var siteslist = $("#platformFilterSelect").val() || sites;
  var authorlist = $("#authorFilterSelect").val() || alluser;
  if ($("#custom-search").val().trim()) {
    jQuery.ajax({
      url: $("#custom-search").data("search-url"),
      type: "post",
      data: {
        action: "data_fetch",
        keyword: $("#custom-search").val(),
        sites: siteslist,
        attachment: $("#typeFilterSelect").val(),
        post_date: $("#dateFilterSelect").val(),
        author_list: authorlist,
        page_id: page
      },
      success: function(data) {
        $("#scorll").show();
        if (data && String(data).indexOf("<div>") > -1) {
          $("#dataFilter").show();
          $("#datafetch").removeClass("searchImg");
          $(".search-count").show();
          if (page == 1) {
            $("#scorll").empty();
            $("#scorll").html(data);
          } else {
            $("#scorll").append(data);
          }
        } else if ( ($("#platformFilterSelect").val() ||
            $("#typeFilterSelect").val() || $("#authorFilterSelect").val() ||
            $("#dateFilterSelect").val()) && page == 1) {
          $(".search-count").hide();
          $("#datafetch").removeClass("searchImg");
          $("#scorll").html(
            '<p class="search-count no-match">No Search Result</p><div class="mt-0 searchNoImg"></div><div class="text-center mt-4 search-err-title">We couldn\'t find anything matching your search.</div><div class="text-center">Try a different search term or <a href="javascript:void(0)" onclick="clearFilters()"  id="clearFilter">clear your filters.</a></div>'
          );
        } else if (page == 1) {
          $(".search-count").hide();
          $("#datafetch").removeClass("searchImg");
          $("#scorll").html(
            '<div class="searchNoImg"></div><div class="text-center mt-4 search-err-title">Sorry, no result found.</div><div class="text-center">Try another search terms.</div>'
          );
          $("#dataFilter").hide();
        }
        /** commented for future use */
      //   $("#scorll").scrollTop(600);
      //  $("#search-loader").remove();
      }
    });
  } else {
    $(".search-count").hide();
    $("#datafetch").addClass("searchImg");
    $("#scorll").empty().hide();
    $("#dataFilter").hide();
  }
}
/**
 * function is used to trigger search when user clicks ENTER key.
 */
$("#custom-search").keypress(function(event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if($("#custom-search").val()){
    $(".search-input-container").css("box-shadow", "1px 2px 3px #00000014");
  }

  if (keycode == "13") {
    $("#custom-search").autocomplete("close");
      triggerSearch(); 
  
  }
});

/**
 * function is used to clear Search results when user removes all entered key word.
 */
$("#custom-search").keyup(function() {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if ((keycode == "8" || keycode == "46") && !$("#custom-search").val()) {
    getSearchResults(sitelist);
  }
});
/**
 * dateFilterChange is used to trigger search when date filter is applied
 */
function dateFilterChange() {
  $("#scorll").scrollTop(0);
  triggerSearch();
}
/**
 * clearFilters is used to clear the applied filter when no results found for the filters
 */
function clearFilters() {
   $("#platformFilterSelect" + "[multiple]").multiselect('reset' );
   $("#typeFilterSelect" + "[multiple]").multiselect('reset' );
   $("#authorFilterSelect" + "[multiple]").multiselect('reset' );
  $("#dateFilterSelect").val("");
  getSearchResults(sitelist);
}
/**
 * searchClear is used to clear the when close of the input search is pressed
 */
function searchClear(){
  $("#custom-search").val('');
  $(".search-input-container").css("box-shadow", "none");
  triggerSearch();
}
/**
 * triggerSearch is used to trigger the getSearchResults function
 */
function triggerSearch(pageId = "default") {
  if (pageId == "default") {
    if ($("#custom-search").val()) {
      getSearchResults(sitelist);
    } else {
      clearFilters();
    }
  } else {
    pageId = Number(pageId);
    pageId++;
    getSearchResults(sitelist, pageId);
  }
}
