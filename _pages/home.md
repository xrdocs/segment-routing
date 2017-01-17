---
layout: splash
title: Segment Routing
permalink: /
sitemap: true
date: null
header:
  overlay_color: '#02344f'
  overlay_image: images/home/hero.jpg
  cta_label: <i class='fa fa-step-forward'></i> Get Started!
  cta_url: /tutorials/
  vid_label: <i class='fa fa-play-circle-o'></i> Watch Video
  vid_url: https://www.youtube.com/watch?v=pDIRXLajRXo
  caption: null
excerpt: The application steers its packets through an ordered list of instructions and realizes end-to-end policy without creating any per-flow state in the network.
#The instantiation of the source routing paradigm. Enables packet steering through an ordered list of arbitrary instructions.

feature_row_benefits:
  - title: Simple
    image_path: images/home/icon-simplicity.png
    excerpt: >-
      Segment Routing provides complete control over the forwarding paths by combining simple network instructions, and without requiring any path signaling.
  - title: Scalable
    image_path: images/home/icon-scalability.png
    excerpt: >-
      Per-flow state only needs to be maintained at the ingress node to the SR domain. Segment Routing leverages the shortest paths computed by the routing protocol.
  - title: Seamless integration
    image_path: images/home/icon-integration.png
    excerpt: >-
      Segment Routing only relies on extensions for IS-IS, OSPF and BGP. It runs natively on an MPLS data plane and leverages the Routing Extension Headers for IPv6.

feature_row_te:
  - image_path: images/home/te.png
    title: 'Traffic Engineering'
    excerpt: >-
      Segment Routing can be used to steer traffic along any arbitrary path in the network. This allows operators to enforce low-latency and / or disjoint paths, regardless of the normal forwarding paths (IGP shortest path or BGP best paths) and without any signaling protocol.

feature_row_frr:
  - image_path: images/home/ti-lfa.png
    title: 'Failure Protection'
    excerpt: >-
      The Segment Routing-based fast-reroute solution, TI-LFA, can provide sub-50msec protection upon any single link, node or SRLG failure. The traffic is rerouted straight to the post-convergence path, hence avoiding any intermediate flap via an alternate path.
    url: /tutorials/2016-09-27-topology-independent-lfa-ti-lfa/

feature_row_np:
  - image_path: images/home/netprog.png
    title: 'Network Programming'
    excerpt: >-
      The IPv6 flavor of Segment Routing allows user-defined functions to be associated with segment. By leveraging the IPv6 SID format and the dedicated Segment Routing Extension Header, these functions may implement any computable behavior.

feature_row_book:
  - image_path: images/sr-book-amazon.jpg
    title: 'Segment Routing, Part 1'
    excerpt: >-
      Check out <b>Segment Routing, Part I</b>, exclusively on Amazon Kindle
      by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar
    url: 'https://amzn.com/B01I58LSUO'
    btn_label: Check out the Segment Routing book!

published: true
---

{% include feature_row id="feature_row_benefits" %}

{% include feature_row id="feature_row_te" type="right" %}

{% include feature_row id="feature_row_frr" type="right" %}

{% include feature_row id="feature_row_np" type="right" %}

{% include feature_row id="feature_row_book" type="left" %}
