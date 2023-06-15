---
layout: path-tracing
permalink: /path-tracing
sitemap: true
date: null
excerpt:

feature_row_benefits: 
  - title: Per-hop Interface-id
    image_path: images/new-home/Seamless-Deployment.svg
  - title: Per-hop Latency and Load
    image_path: images/path-tracing/latency-icon.svg
  - title: Analytics
    image_path: images/path-tracing/analytics-icon.svg
feature_key: 
  - title: Detect blackholes
    excerpt: >-
      Path Tracing is capable of reporting if any paths in the network are blackholing trafic. 
  - title: Detect corruptions
    excerpt: >-
      Path Tracing detects if there's any unexpected forwarding path that doesn't match the control plane. 
  - title: Detect ECMP paths with incoherent latency
    excerpt: >-
      Measure the latency of each ECMP path in your network and report any path with a non-coherent latency with respect to the others. 
  - title: Measure jitter on a per-interface/queue basis
    excerpt: >-
      Path Tracing delivers, for the first time in history, accurate jitter measurements in the live WAN!
  - title: Identify the trajectory and time taken for NFV processing
    excerpt: >-
      Path Tracing reports the trajectory (proof of transit) and the time taken overall to execute that service chain.
slider_book:
    image_path: images/path-tracing/Goldman_Sachs.png
    title: Goldman Sachs's Technology Fellow and Network Architect Mike Valentine presents Path Tracing at NANOG85
    url: 'path-tracing/2022-06-08-NANOG85-path-tracing/'
    btn_label: Watch presentation
    class: book-slide
    button_class: plusBookSlides
slider_quote: 
  - title: Goldman Sachs's Technology Fellow and Network Architect Mike Valentine present Path Tracing at NANOG85
    image_path: images/path-tracing/Goldman_Sachs.png
    url: 'path-tracing/2022-06-08-NANOG85-path-tracing/'
    btn_label: Watch presentation
    class: quote-slide
    button_class: plusQuoteSlides
  - title: "Ahmed Abdelsalam of Cisco demonstrates Path Tracing: Revealing the Unknowns about ECMP"
    image_path: images/path-tracing/P4-programming-language-logo.png
    url: 'demos/20220524-P4-PT-demo/'
    btn_label: Watch presentation
    class: quote-slide
    button_class: plusQuoteSlides

published: true
---
{% include feature_row_pt id="feature_row_benefits" %}
{% include slider id="slider_quote" %}
{% include feature_key id="feature_key" %}


<div style="clear: both;"></div>

<div class="feature-keys">
  <div class="container feature-keys-content">
    <h2 class="section-title white">Path Tracing Tutorial and Demo</h2>
    <div class="section-description white" style="margin-bottom:15px;">
Path Tracing allows operators to deterministically monitor ECMP paths. It is implemented in HW at linerate, in the normal forwarding pipeline to report accurate data. 
Path Tracing is coupled with an SDN analytical app that analyzes the Path Tracing data, correlates it with routing information, and computes key metrics for operators to monitor the health of their network.  
    </div>
      <a href="{{ 'path-tracing/pt-tutorial' | relative_url }}">
        <button>Tutorial </button>
      </a>
      <a href="{{ 'path-tracing/pt-demo-ecmp' | relative_url }}">
        <button>Demo </button>
      </a>
  </div>
</div>


<div style="margin: 40px">
  <div class="container feature-keys-content">
    <h2 class="section-title blue">IETF</h2>
    <div style="margin-bottom:30px; margin-top:30px; color:#676767" class="section-description-pt-ietf">
Path Tracing is being standardized by the IETF.
    </div>
      <a href="https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing/">
        <button>PT in SRv6 networks </button>
      </a>
      <a href="https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing-srmpls/">
        <button>PT in SR-MPLS networks </button>
      </a>
  </div>
</div>

{% assign background_image = 'images/new-design/SR-Background-Image-2.png' | relative_url %}
<div class="hero-block" style="background-image: url('{{ background_image }}');">
  <div class="container">
    <h1 class="large-hero-title">Open-source softwares supporting Path Tracing</h1>
  </div>
</div>
{% comment %} This table should have a responsive alternative: flexbox? grid? {% endcomment %}
<table style="margin-left: auto; margin-right: auto">
  <tr>
    <td><img src="{{ 'images/open-software/linux.png' | relative_url }}" width="300"></td>
    <td><img src="{{ 'images/open-software/vpp.png' | relative_url }}" width="300"></td>
    <td><img src="{{ 'images/open-software/sonic.png' | relative_url }}" width="300"></td>
  </tr>
  <tr>
    <td><img src="{{ 'images/open-software/p4.png' | relative_url }}" width="300"></td>
    <td><img src="{{ 'images/open-software/tcpdump.jpeg' | relative_url }}" width="300"></td>
    <td><img src="{{ 'images/open-software/wireshark.png' | relative_url }}" width="300" ></td>
  </tr>
</table>


<div style="clear: both;"></div>

