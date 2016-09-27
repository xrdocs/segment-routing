---
layout: splash
title: "Segment Routing"
permalink: /
sitemap: true
date:
header:
  overlay_color: "#5e616c"
  overlay_image: sr-background.png
  cta_label: "<i class='fa fa-step-forward'></i> Get Started!"
  cta_url: "/tutorials/"
  caption: 
excerpt: '<br><q><b>The de-facto SDN network architecture</b></q><br/><br/><q><b> Enables End-to-End SLA from DC to metro to backbone at scale </b> </q><br/><br/><q><b>Enables applications to use the network in innovative ways</b></q><br/><br><a href="https://www.linkedin.com/groups/8266623" class="btn btn--linkedin" title="{{ site.data.ui-text[site.locale].share_on_label }} LinkedIn"><i class="fa fa-fw fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a><br/>'
feature_row1:
  - image_path: tutorial-board.jpg
    alt: "fully responsive"
    title: "Tutorials"
    excerpt: "Demo Videos, quick snapshot presentations to get you going!"
    url: "{{ base_path }}/tutorials/"
    btn_label: "Learn More"
  - image_path: conference-icon.jpg
    alt: "fully responsive"
    title: "Conferences and events"
    excerpt: "Latest updates from Conferences and events as we highlight Segment Routing solutions and use cases"
    url: "{{ base_path }}/conferences/"
    btn_label: "Learn More"
  - image_path: ietf_logo.jpg
    alt: "fully responsive"
    title: "IETF"
    excerpt: "Immerse yourself in the latest Segment Routing Drafts and RFCs"
    url: "{{ base_path }}/ietf/"
    btn_label: "Learn More"


intro:
  - excerpt: '**Follow us on Twitter!** &nbsp;{::nomarkdown}<a href="https://twitter.com/segmentrouting" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @segmentrouting</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");</script>{:/nomarkdown}'
  
feature_row2:
  - image_path: sr-book-amazon.jpg
    alt: "fully responsive"
    title: <a href="https://amzn.com/B01I58LSUO">Segment Routing, Part 1</a>
    excerpt: 'Check out <b>Segment Routing, Part I</b>, exclusively on Amazon and Kindle by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar '
    url: "https://amzn.com/B01I58LSUO"
    btn_label: "Check out the Segment Routing book!"
    btn_class: "btn--inverse"  

feature_row3:
  - image_path: https://img.youtube.com/vi/CDtoPGCZu3Y/0.jpg
    alt: "fully responsive"
    title: SR is the de-facto SDN network architecture
    excerpt: 'Watch Paul Mattes’ analysis of SR benefits for SWAN, presented at TechField day June, 2016.'
    url: "https://www.youtube.com/embed/CDtoPGCZu3Y"

---

{% include feature_row id="intro" type="center" %}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" type="left" %}

<div class="feature__wrapper">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-teaser"> 
        <iframe width="400" height="280" class="fitvidsignore" src="https://www.youtube.com/embed/CDtoPGCZu3Y" frameborder="0" allowfullscreen></iframe>
       </div>
       <div class="archive__item-body">
         <h2 class="archive__item-title">SR is the de-facto SDN network architecture</h2>
       <div class="archive__item-excerpt">
         <p>Watch Paul Mattes’ analysis of SR benefits for SWAN, presented at TechField day June, 2016.</p>
       </div>
      </div>
    </div>
  </div>
</div>
