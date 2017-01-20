---
layout: homepage
permalink: /
sitemap: true
date: null
excerpt: The application steers its packets through an ordered list of instructions and realizes end-to-end policy without creating any per-flow state in the network.

feature_row_benefits:
  - title: Simple
    image_path: images/home/icon-simplicity.png
    excerpt: >-
      Segment Routing provides complete control over the forwarding paths by combining simple network instructions. It does not require any additional protocol. Indeed in some cases it removes unnecessary protocols simplifying your network.
  - title: Scalable
    image_path: images/home/icon-scalability.png
    excerpt: >-
      Segment routing does not require any path signaling. Hence, per-flow state only needs to be maintained at the ingress node of the SR domain increasing your network flexibility while reducing cost.
  - title: Seamless deployment
    image_path: images/home/icon-integration.png
    excerpt: >-
      Segment Routing runs natively on an MPLS or IPv6 data plane. A simple software upgrade will enable your hardware to run it. Also, Segment Routing can coexist with your existing LDP network, making the migration painless.

feature_row_te:
  - image_path: images/home/te.png
    title: 'Traffic Engineering'
    excerpt: >-
      Segment Routing can be used to steer traffic along any arbitrary path in the network. This allows operators to enforce low-latency and / or disjoint paths, regardless of the normal forwarding paths.


      SR achieves this without any additional signaling or midpoint fabric-state!

feature_row_e2e:
  - image_path: images/home/end2end.png
    title: 'Unified Forwarding Plane'
    excerpt: >-
      Segment Routing is capable of creating cross-domain policies. This way you can take advantage of the path-expressivity while keeping your DC, Metro and WAN domains independent.

feature_row_odn:
  - image_path: images/home/odn.png
    title: 'On-Demand Next Hop'
    excerpt: >-
      Segment Routing PCE (Path Computation Engine) provides reachability and inter-domain end-to-end optimized path computation. 


      Any router, upon request, can get a inter-domain path expressed uniquely as a list of segments. There is no need for BGP route injection. This architecture is scalable since the node will only get the exact path it needs.

feature_row_frr:
  - image_path: images/home/ti-lfa.png
    title: 'Failure Protection'
    excerpt: >-
      The Segment Routing-based fast-reroute solution, TI-LFA, can provide per-destination sub-50msec protection upon any single link, node or SRLG failure regardless the topology. The traffic is rerouted straight to the post-convergence path, hence avoiding any intermediate flap via an intermediate path. The primary and backup path computation is completely automatic by the IGP.
    url: /tutorials/2016-09-27-topology-independent-lfa-ti-lfa/
    btn_class: btn--large

feature_row_np:
  - image_path: images/home/netprog.png
    title: 'Network Programming'
    excerpt: >-
      The IPv6 flavor of Segment Routing allows user-defined functions to be associated with segments. By leveraging the IPv6 SID format and the dedicated Segment Routing Extension Header, these functions may implement any computable behavior allowing for Network Function Virtualization.

feature_row_book:
  - image_path: images/sr-book-amazon.jpg
    image_width: 150px
    title: 'Segment Routing, Part 1'
    excerpt: >-
      Check out <b>Segment Routing Part I</b> on Amazon as paperback or Kindle edition,
      by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar.
    url: 'https://amzn.com/B01I58LSUO'
    btn_label: Check out the Segment Routing book!
    btn_class: btn--large

published: true
---

{% include feature_row id="feature_row_benefits" %}

{% include feature_row id="feature_row_te" type="right" %}

{% include feature_row id="feature_row_e2e" type="left" %}

{% include feature_row id="feature_row_odn" type="right" %}

{% include feature_row id="feature_row_frr" type="left" %}

{% include feature_row id="feature_row_np" type="right" %}

{% include feature_row id="feature_row_book" type="left" %}
