---
order: 10
published: true
breadnav: true
date: '2022-05-09 14:00 +0200'
title: 'Path Tracing Introduction'
author: 'Ahmed Abdelsalam, Cisco'
excerpt: 'Path Tracing allows operator to deterministically detect ECMP paths. It is implemented in HW at linerate in the normal forwarding pipeline and provides an Ultra-MTU-Efficiency.'
---
ECMP is a key in today’s IP network. It provides both efficiency and resilience. 
Between any two nodes in the network, we are going to have several ECMP Paths. 
However, the detecting and troubleshooting of these ECMP paths remains a big challenge many operators face.
A FIB corruption or FIB misconfiguration at any node is one among many issues that can happen and may lead packets to follow a non ECMP Path. 

Path Tracing reveals all the unknowns about ECMP. It allows operators to detect the currently available ECMP paths and the ECMP Paths that were available at a given time in the past.

With Path Tracing, the operator will be able to know whether the packets are following an ECMP Path or not. They can also detect where the packet are being drifted from the ECMP Paths. 

Path Tracing achieves all of this by collecting only 3 bytes of data from each hop on the packet path. 

Path Tracing is implemented at linerate in the HW forwarding pipeline. It provides the most accurate information about the packet path. 
We never offload packet processing to CPU or NPU co-processors because they won’t record the actual packet experience.

Cisco is shipping Path Tracing in calendar year 2022 across the portfolio. Some operators are already testing Path Tracing in their lab. 

In this tutorial, we provide an introduction to the Path Tracing Solution. 

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdSfa2N08AA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Slides

{% capture "pdf-link" %}/images/path-tracing/pt-demo-rev1a.pdf{% endcapture %}
<script src="{{ 'assets/js/pdfobject.min.js' | relative_url }}"></script>
<div class="fitvidsignore" id="pdf"></div>
<script>PDFObject.embed(" {{ pdf-link | relative_url }} ", "#pdf", {height: "21.5em", width: "31.3em"});</script>
