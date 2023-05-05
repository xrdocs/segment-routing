---
layout: path-tracing
permalink: /path-tracing-new
sitemap: true
date: null
excerpt:

feature_row_benefits: 
  - title: Per-hop interface-id
    image_path: images/new-home/Seamless-Deployment.svg
  - title: Per-hop Latency and Load
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
slider_quote: 
  - title: Goldman Sachs's Technology Fellow and Network Architect Mike Valentine present Path Tracing at NANOG85
    image_path: images/path-tracing/Goldman_Sachs.png
    url: 'https://www.segment-routing.net/path-tracing/2022-06-08-NANOG85-path-tracing/'
    btn_label: Watch presentation
    class: quote-slide
    button_class: plusQuoteSlides
  - title: "Ahmed Abdelsalam of Cisco demonstrates Path Tracing: Revealing the Unknowns about ECMP"
    image_path: images/path-tracing/P4-programming-language-logo.png
    url: 'https://www.segment-routing.net/demos/20220524-P4-PT-demo/'
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
    <div class="section-description white">
Path Tracing allows operators to deterministically detect ECMP paths. It is implemented in HW at linerate, in the normal forwarding pipeline and provides an Ultra-MTU-Efficiency. 
Path Tracing is coupled with an SDN analytical app that analyzes the Path Tracing data and computes key metrics for operators to monitor the health of their network.  
    </div>
      <a href="{{ 'path-tracing/pt-tutorial' | base_url }}" target="_blank">
        <button>Tutorial </button>
      </a>
      <a href="{{ 'path-tracing/pt-tutorial' | base_url }}" target="_blank">
        <button>Demo </button>
      </a>
  </div>
</div>


<div class="feature-keys-pt">
  <div class="container feature-keys-content">
    <h2 class="section-title white">IETF</h2>
    <div style="margin-bottom:10px; margin-top:10px;" class="section-description-pt-ietf white">
Path Tracing is being standardized by the IETF.
    </div>
      <a href="https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing/" target="_blank">
        <button>Path Tracing in SRv6 networks </button>
      </a>
      <a href="https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing-srmpls/" target="_blank">
        <button>Path Tracing in SR-MPLS networks </button>
      </a>
  </div>
</div>


<div class="feature-keys">
  <div class="container feature-keys-content">
    <h2 class="section-title white">Open-source softwares supporting Path Tracing</h2>
  </div>
</div>
<table style="margin-left: auto; margin-right: auto">
  <tr>
    <td><img src="images/open-software/linux.png" width="300"></td>
    <td><img src="images/open-software/vpp.png" width="300"></td>
    <td><img src="images/open-software/sonic.png" width="300"></td>
  </tr>
  <tr>
    <td><img src="images/open-software/p4.png" width="300"></td>
    <td><img src="images/open-software/tcpdump.jpeg" width="300"></td>
    <td><img src="images/open-software/wireshark.png" width="300" ></td>
  </tr>
  <tr>
      <td colspan="3"><img src="images/path-tracing/open-compute-project.png" width="300" ></td>
  </tr>
</table>


<div style="clear: both;"></div>

