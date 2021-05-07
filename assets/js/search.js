jQuery(function() {
    window.idx = lunr(function () {
      this.field('id');
      this.field('title');
      this.field('content', { boost: 10 });
      this.field('author');
      this.field('url');
      this.field('tags');
    });

//    var base_url =  document.getElementById('base_url').getAttribute("value")
    window.data = $.getJSON('/search_data.json');
  
    window.data.then(function(loaded_data){
      $.each(loaded_data, function(index, value){
        window.idx.add(
          $.extend({ "id": index }, value)
        );
      });
    });
  
    $("#site_search").submit(function(event){
        event.preventDefault();
        var query = $("#search_box").val(); 
        var results = window.idx.search(query);
        display_search_results(results);
    });
  
    function display_search_results(results) {
      var $search_results = $("#search_results");

      window.data.then(function(loaded_data) {
        if (results.length) {
          $search_results.empty(); 
          var appendStringNews = '<details open><summary>News</summary>';
          var appendStringScientific = '<details><summary>Scientific Papers</summary>';
          var appendStringOpen = '<details><summary>Open Software</summary>';
          var appendStringConferences = '<details><summary>Conferences</summary>';
          var appendStringDemos = '<details><summary>Demos</summary>';
          var appendStringTutorials = '<details><summary>Tutorials</summary>';
          var appendClosing = '</details>'

          results.forEach(function(result) {
            var item = loaded_data[result.ref];
            var source = item.url.split('/');

            if (source[1] == 'news') {
                appendStringNews = appendStringNews + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
            if (source[1] == 'scientific-papers') {
                appendStringScientific = appendStringScientific + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
            if (source[1] == 'open-software') {
                appendStringOpen = appendStringOpen + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
            if (source[1] == 'conferences') {
                appendStringConferences = appendStringConferences + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
            if (source[1] == 'demos') {
                appendStringDemos = appendStringDemos + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
            if (source[1] == 'tutorials') {
                appendStringTutorials = appendStringTutorials + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '">' + item.title + '</a></span></article></div>'
            }
          });
          $search_results.append(appendStringNews,appendClosing,appendStringScientific,appendClosing,appendStringOpen,appendClosing,appendStringConferences,appendClosing,appendStringDemos,appendClosing,appendStringTutorials,appendClosing);
        } else {
          $search_results.html('<li>No results found.<br/>Please check spelling, spacing, etc....</li>');
        }
      });
    }
  });