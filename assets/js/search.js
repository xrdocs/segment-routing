jQuery(function() {
    window.idx = lunr(function () {
      this.field('id');
      this.field('title');
      this.field('content', { boost: 10 });
      this.field('author');
      this.field('url');
      this.field('tags');
      this.field('eurl');
      this.field('source-url');
      this.field('doi');
      this.field('link');
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
      var $hero = $(".hero-block");

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
              if(item.eurl) {
                appendStringNews = appendStringNews + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.eurl +'" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringNews = appendStringNews + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.source-url +'" target="_blank">' + item.title + '</a></span></article></div>'
              }
                
            }
            if (source[1] == 'scientific-papers') {
              if(item.doi) {
                appendStringScientific = appendStringScientific + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="https://doi.org/'+ item.doi + '" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringScientific = appendStringScientific + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.eurl + '" target="_blank">' + item.title + '</a></span></article></div>'
              }
            }
            if (source[1] == 'open-software') {
              if(item.link){
                appendStringOpen = appendStringOpen + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringOpen = appendStringOpen + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '" target="_blank">' + item.title + '</a></span></article></div>'
              }
            }
            if (source[1] == 'conferences') {
              if(item.link){
                appendStringConferences = appendStringConferences + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringConferences = appendStringConferences + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '" target="_blank">' + item.title + '</a></span></article></div>'
              }
            }
            if (source[1] == 'demos') {
              if(item.link){
                appendStringDemos = appendStringDemos + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringDemos = appendStringDemos + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '" target="_blank">' + item.title + '</a></span></article></div>'
              }
            }
            if (source[1] == 'tutorials') {
              if(item.link){
                appendStringTutorials = appendStringTutorials + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></span></article></div>'
              } else {
                appendStringTutorials = appendStringTutorials + '<div class="accordion-item" <article><span class="underline-on-hover"><a href="'+ item.url + '" target="_blank">' + item.title + '</a></span></article></div>'
              }
            }
          });
          $hero.remove();
          var headings = [appendStringNews, appendStringScientific, appendStringOpen, appendStringConferences, appendStringDemos, appendStringTutorials]
          headings.forEach(item => {
            console.log(item)
            console.log(item.length)
            if(item.length > 46) {
              $search_results.append(item, appendClosing)
            }
            $search_results.append();
          });
        } else {
          $hero.remove();
          $search_results.html('<li>No results found.<br/>Please check spelling, spacing, etc....</li>');
        }
      });
    }
  });