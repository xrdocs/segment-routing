---
layout: path-tracing
permalink: /path-tracing-new
sitemap: true
date: null
excerpt:

feature_row_benefits: 
  - title: Per hop interface-id
    image_path: images/new-home/Seamless-Deployment.svg
  - title: Latency and Load
    image_path: images/path-tracing/latency-icon.svg
  - title: Analytics
    image_path: images/path-tracing/analytics-icon.svg
feature_key: 
  - title: Detect blackholes
    excerpt: >-
      Path Tracing is capable of reporting if any paths in the network are blackholing the trafic. 
  - title: Detect wrong paths
    excerpt: >-
      With Path Tracing, check if there are any wrong paths in the forwarding that do not match the control plane. 
  - title: Detect ECMP paths with incoherent latency
    excerpt: >-
      Measure the latency of each ECMP path in your network and report any path with a non-coherent latency with respect to the others. 
  - title: Measure jitter on a per node/per interface basis
    excerpt: >-
      Path Tracing delivers, for the first time in history, accurate jitter measurements in the WAN!
  - title: Identify the trajectory and time taken for NFV processing
    excerpt: >-
      Path Tracing reports the trajectory, so the service chain exercised by the packets, and the time taken overall to execute that service chain.
slider_book:
    image_path: images/path-tracing/Goldman_Sachs.png
    title: Goldman Sachs's Technology Fellow and Network Architect Mike Valentine presents Path Tracing at NANOG85
    url: 'https://www.segment-routing.net/path-tracing/2022-06-08-NANOG85-path-tracing/'
    btn_label: Watch presentation
    class: book-slide
    button_class: plusBookSlides

published: true
---
{% include feature_row_pt id="feature_row_benefits" %}
<div style="clear: both;"></div>

<div class="feature-keys">
  <div class="container feature-keys-content">
    <h2 class="section-title white">Path Tracing Tutorial and Demo</h2>
    <div class="section-description white">
Path Tracing allows operators to deterministically detect ECMP paths. It is implemented in HW at linerate, in the normal forwarding pipeline and provides an Ultra-MTU-Efficiency. 
Path Tracing is coupled with an SDN analytical app that analyzes the Path Tracing data and computes key metrics for operators to monitor the health of their network.  
    </div>
    <div class="discover-tech">
    <div class="discover-tech-content-block">
      <div class="descover-tech-links">
        <a style="color:#0D274D" href="{{ 'path-tracing/pt-tutorial' | base_url }}" class="discover-tech-link-pt color">Tutorials <i class="fas fa-arrow-circle-right"><i><a>
        <a style="color:#0D274D" href="{{ 'path-tracing/pt-tutorial' | base_url }}" class="discover-tech-link-pt color">Tutorials <i class="fas fa-arrow-circle-right"><i><a>
      </div>
    </div>
</div>
  </div>
</div>

{% include feature_key id="feature_key" %}

{% include slider id="slider_book" %}

<div style="clear: both;"></div>

