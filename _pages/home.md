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
      Segment Routing is capable of creating inter-domain policies. This way you can take advantage of the path-expressivity while keeping your DC, Metro and WAN domains independent.

feature_row_odn:
  - image_path: images/home/odn.png
    title: 'On-Demand Next Hop'
    excerpt: >-
      An edge router upon service configuration automatically request to the Segment Routing PCE an inter-domain path to the remote service endpoint. The path can either be for simple best effort inter-domain reachability or for reachability with SLA contract. 


      The path is expressed uniquely as a list of segments. There is no need for BGP route injection. This architecture is scalable since the node will only get the exact path it needs.

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
  - image_path: images/sr-book-combined.png
    image_width: 300px
    title: 'Segment Routing, Part 1'
    excerpt: >-
      Check out <b>Segment Routing Part I</b> on Amazon as paperback or Kindle edition,
      by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar.
    url: 'https://amzn.com/B07N6H54VP'
    btn_label: Check out the Segment Routing book!
    btn_class: btn--large

published: true
---
<div class="notice" style="padding: 30px 30px 10px; background-color:Beige">
      <h1 style="font-size: 1.8em;" align="center"><b>Latest news:      </b><a href="{{ '/updates-20191029-srv6-state/' | base_url }}" style="color: #3b5998;" align="center">  SRv6 status update</a></h1>
</div>

{% include feature_row id="feature_row_benefits" %}
{% include feature_row id="feature_row_te" type="right" %}
{% include feature_row id="feature_row_e2e" type="left" %}
{% include feature_row id="feature_row_odn" type="right" %}
{% include feature_row id="feature_row_frr" type="left" %}
{% include feature_row id="feature_row_np" type="right" %}

<div class="feature__wrapper">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <img src="{{ 'images/sr-book-part1.jpg' | relative_url }}" alt="SR book part I" style="width:calc(50% - 3px); max-width:200px; margin-right:6px;"><img src="{{ 'images/sr-book-part2.jpg' | relative_url }}" alt="SR book part II" style="width:calc(50% - 3px); max-width:200px;">
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Segment Routing book series</h2>
        <div class="archive__item-excerpt">
          <p>Part I by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar walks the reader through the journey that led to the invention Segment Routing. Besides describing the SR functionalities, it also describes the intuition behind the key concepts and explains why it was designed this way.</p>
          <p>Part II by Clarence Filsfils, Kris Michielsen, Fran&ccedil;ois Clad and Daniel Voyer explains how Segment Routing has changed the game of Traffic Engineering in Service Provider and Enterprise networks by finding the right balance between distributed intelligence and centralized control.</p>
          <p>Check out the <b>Segment Routing books</b> on Amazon as paperback or Kindle editions.</p>
        </div>
        <p>
          <a href="https://amzn.com/B01I58LSUO" class="btn btn--large">Part I</a>
          <a href="https://amzn.com/B07N13RDM9" class="btn btn--large">Part II &mdash; Traffic Engineering</a>
        </p>
      </div>
    </div>
  </div>
</div>
