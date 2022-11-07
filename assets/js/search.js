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
      this.field('pdf2txt');
    });

    var base_url =  document.getElementById('base_url').getAttribute("value")
    window.data = $.getJSON( base_url + '/search_data.json');
  
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
  
    // run search at pageshow if there is a query, keeping query when user comes back
    window.addEventListener('pageshow', function(event) {
        var curr_query =  document.getElementById('search_box').value;
        if (curr_query !== "") {
            var results = window.idx.search(curr_query);
            display_search_results(results);
        }
    });

    function get_dom_name(url) {
        // remove whitespace
        url = url.trim();
        // if URL contains base_url, it's an internal link
        if (url.search(base_url) >= 0) {
            return "";
        }
        // if URL does not start with "http(s):", it's an internal link
        if (url.search(/^https?:\/\//) < 0) {
            return ""
        }
	// remove any leading http:// or https://
        url = url.replace(/^https?:\/\//, "");
        // split on '/'
        let url_arr = url.split("/");
        // take first entry
        let dom_name = url_arr[0]
        // split on '.'
        let dom_name_arr = dom_name.split(".");
        // take last two entries
        dom_name_arr = dom_name_arr.slice(dom_name_arr.length - 2);
        // join two entries
        return dom_name_arr.join(".");
    }

    function is_pdf_file(url) {
        // indicate if URL is a PDF file
	    return false;
        return url.trim().toLowerCase().endsWith(".pdf");
    }

    function fix_rel_url(url) {
	if (typeof(url) !== "string") {
	    console.log("Error: fix_rel_url received non-string argument ", url);
	    return "https://www.segment-routing.net"
	}
        // if url is relative, the base url must be added
        if (url.startsWith("/")) {
		return base_url + url;
	}
        return url;
    }

    function display_search_results(results) {
      var $search_results = $("#search_results");
      var $hero = $(".hero-block");

      window.data.then(function(loaded_data) {
        if (results.length) {
          $search_results.empty(); 
          var appendStringNews = '<details open><summary>News</summary>';
          var appendStringScientific = '<details open><summary>Scientific Papers</summary>'; /* length=50 */
          var appendStringOpen = '<details open><summary>Open Software</summary>';
          var appendStringConferences = '<details open><summary>Conferences</summary>';
          var appendStringDemos = '<details open><summary>Demos</summary>';
          var appendStringTutorials = '<details open><summary>Tutorials</summary>';
          var appendStringIETF = '<details open><summary>IETF</summary>';
          var appendClosing = '</details>'
          let maxInitialStringLength = 50;

          let rank = 0;
          results.forEach(function(result) {
            //console.log(result);
            let score = result.score;
            rank += 1;
            let ranking = '<!-- rank/score=' + rank + '/' + score + ' -->'
            var item = loaded_data[result.ref];
            var source = item.url.split('/');
            let date_string = "";
            if (item.date) {
                let date = new Date(item.date);
                date_string = '<div class="date">';
                date_string = date_string + date.toLocaleString('default', { month: 'long',day:'numeric', year:'numeric'});
                date_string = date_string + '</div>';
            }

            if (source[1] == 'news') {
              let url = "";
              if (item.eurl) {
                  url = item.eurl;
              } else if (item.source-url) {
                  url = item.source-url;
              } else {
		  url = item.url
	      }
              url = fix_rel_url(url);

              let dom_name = get_dom_name(url);
              if (dom_name.length > 0) {
                  dom_name = " (<i>" + dom_name + "</i>)";
              }
              appendStringNews = appendStringNews + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a class="file-type" href="'+ url +'">' + item.title + dom_name + '</a></span></article>' + date_string + '</div>'
            }

            if (source[1] == 'scientific-papers') {
              if(item.doi) {
		      url = "https://doi.org/" + item.doi;
	      } else {
		      url = item.eurl;
	      }
              url = fix_rel_url(url);
              let dom_name = get_dom_name(url);
              if (dom_name.length > 0) {
                  dom_name = " (<i>" + dom_name + "</i>)";
              }
              appendStringScientific = appendStringScientific + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a class="file-type" href="'+ url + '">' + item.title + dom_name + '</a></span></article></div>'
            }

            if (source[1] == 'open-software') {
              if(item.link){
		      url = item.link;
	      } else {
		      url = item.url;
	      }
              url = fix_rel_url(url);
              appendStringOpen = appendStringOpen + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a href="'+ url + '">' + item.title + '</a></span></article></div>'
            }

            if (source[1] == 'conferences') {
              if(item.link){
		      url = item.link;
	      } else {
		      url = item.url;
	      }
              url = fix_rel_url(url);
              appendStringConferences = appendStringConferences + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a href="'+ url + '">' + item.title + '</a></span></article>' + date_string + '</div>'
            }

            if (source[1] == 'demos') {
              if(item.link){
		      url = item.link;
	      } else {
		      url = item.url;
	      }
              url = fix_rel_url(url);
              appendStringDemos = appendStringDemos + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a href="'+ url + '">' + item.title + '</a></span></article></div>'
            }

            if (source[1] == 'tutorials') {
              if(item.link){
		      url = item.link;
	      } else {
		      url = item.url;
	      }
              url = fix_rel_url(url);
              appendStringTutorials = appendStringTutorials + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a href="'+ url + '">' + item.title + '</a></span></article></div>'
            }

            if (source.length > 2 && source[2] == 'datatracker.ietf.org') {
              url = fix_rel_url(item.url);
	      status = item.link;
              let dom_name = get_dom_name(url);
              if (dom_name.length > 0) {
                  dom_name = " (<i>" + dom_name + "</i>)";
              }
	      if (status.length > 0) {
	          status = "<div class=\"rfc-status\">" + status + "</div>";
	      }
              appendStringIETF = appendStringIETF + '<div class="accordion-item">' + ranking + '<article><span class="underline-on-hover"><a href="'+ url + '">' + item.title + dom_name + '</a></span></article>' + status + '</div>'
            }
          });
          $hero.remove();
          var headings = [appendStringNews, appendStringScientific, appendStringOpen, appendStringConferences, appendStringDemos, appendStringTutorials, appendStringIETF]
          headings.forEach(item => {
            //console.log(item)
            //console.log(item.length)
            if(item.length > maxInitialStringLength) {
              $search_results.append(item, appendClosing)
            }
            $search_results.append();
          });
        } else {
          $hero.remove();
          $search_results.html('<p>No results found.<br/>Please check spelling, spacing, etc...</p>');
        }
      });
    }
  });
