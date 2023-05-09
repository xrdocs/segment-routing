---
order: 20
published: true
breadnav: true
date: '2022-05-09 14:00 +0200'
title: 'Path Tracing Analytics Demo'
author: 'Segment Routing Team'
excerpt: 'Cisco Segment Routing Team presents a demo of Path Tracing Analytics.'
---    
Path Tracing is coupled with an SDN analytical tool : Path Tracing Analytics. The tool analyzes the Path Tracing data, correlates it with routing information, and computes key metrics for operators to monitor the health of their network.

In this tutorial, we provide a demo of the first app of Path Tracing Analytics : ECMP Analytics.

ECMP Analytics compares the control plane information and the forwarding plane information of the network to detect backholing paths, unexpected forwarding paths and ECMP paths with incoherent latency. 

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HlxWCliVUOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Slides

{% capture "pdf-link" %}/images/path-tracing/pta-ecmp-demo-rev1b.pdf{% endcapture %}
<script src="{{ 'assets/js/pdfobject.min.js' | relative_url }}"></script>
<div class="fitvidsignore" id="pdf"></div>
<script>PDFObject.embed(" {{ pdf-link | relative_url }} ", "#pdf", {height: "21.5em", width: "31.3em"});</script>