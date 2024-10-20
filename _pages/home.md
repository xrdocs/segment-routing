---
layout: homepage
permalink: /
sitemap: true
date: null
excerpt: The application steers its packets through an ordered list of instructions and realizes end-to-end policy without creating any per-flow state in the network.

feature_row_benefits: 
  - title: Simple
    image_path: images/new-home/Simplicity-Icon.svg
    excerpt: >-
      Segment Routing provides complete control over the forwarding paths by combining simple network instructions. It does not require any additional protocol. Indeed in some cases it removes unnecessary protocols simplifying your network.
  - title: Scalable
    image_path: images/new-home/Scalable.svg
    excerpt: >-
      Segment routing does not require any path signaling. Hence, per-flow state only needs to be maintained at the ingress node of the SR domain increasing your network flexibility while reducing cost.
  - title: Seamless deployment
    image_path: images/new-home/Seamless-Deployment.svg
    excerpt: >-
      Segment Routing runs natively on an MPLS or IPv6 data plane. A simple software upgrade will enable your hardware to run it. Also, Segment Routing can coexist with your existing LDP network, making the migration painless.
feature_key: 
  - title: Simplify your network
    excerpt: >-
      Removing protocols and making network operations easier means Segment Routing is your fast track to network simplification.
  - title: Make the network more robust
    excerpt: >-
      With Segment Routing, your network is more resilient. Whenever and wherever a node or a link fails in the network, connectivity is restored in under 50 milliseconds!
  - title: Squeeze more out of your network
    excerpt: >-
      Hyperscale cloud providers have learned that by dynamically rerouting traffic, they can reach an overall capacity utilization of 80 percent or more.
  - title: Release innovation
    excerpt: >-
      Segment Routing powers two vital network services:low-latency and disjointness.
  - title: Offer new levels of customer satisfaction
    excerpt: >-
      With an efficient network structure, you have a strong foundation on which to offer a best-in-class end-user experience.
slider_quote: 
  - title: Bell Canada’s Technical Fellow Daniel Voyer
    image_path: images/new-home/Bell-Canada-logo.png
    excerpt: >-
      “Segment Routing is fundamental for today’s reality, which requires on-demand services as well as exponential bandwidth growth. Streamlining the IP protocols stack in order to provide a simplified service assurance support model for day-to-day is the key benefit.”
    class: quote-slide
    button_class: plusQuoteSlides
  - title: Orange Group’s Stephane Litkowski
    image_path: images/new-home/Orange-logo.png
    excerpt: >-
      “Micro-loops have always been a pain for networks by breaking fast-reroute or creating micro-congestions. Now, thanks to the Segment Routing building blocks, we have the technology to easily build loop free paths in the network in a simple way.”
    class: quote-slide
    button_class: plusQuoteSlides
  - title: Microsoft’s Senior Software Engineer Paul Mattes
    image_path: images/new-home/Microsoft-logo.png
    excerpt: >-
      “It gives us network independence, we don’t need to write our proprietary agent for every box we want to buy, we get to use standard IGP to set up our connectivity instead of having to do that ourselves. Segment Routing lets you program only the edge. We don’t have the problem of tunnel setup synchronization; the network configures itself.”
    class: quote-slide
    button_class: plusQuoteSlides
  - title: SoftBank Corp’s Senior Vice President, Keiichi Makizono
    image_path: images/new-home/SoftBank-logo.png
    excerpt: >-
      “SoftBank keeps focusing on improving service quality and enhancing the reliability and agility of networks while reducing costs. Cisco’s advanced network technologies and support have allowed us to establish the next-generation mobile IP core network platform that meets the bandwidth demand.”
    class: quote-slide
    button_class: plusQuoteSlides
  - title: Alibaba Group’s Chief Network Architect Dennis Cai
    image_path: images/new-home/Alibaba-Group-logo.png
    excerpt: >-
      “Segment Routing architecture brings us many benefits – first, it can be easily deployed in our existing network infrastructure; second, the ability to have fine-grain control over how the network transports applications while being stateless meets our elasticity requirements. It helps us to deliver a better end-user experience.”
    class: quote-slide
    button_class: plusQuoteSlides
slider_book:
  - image_path: images/sr-book-part1.jpg  
    title: Available on Amazon as paperback or Kindle editions.
    excerpt: >-
     Part I by Clarence Filsfils, Kris Michielsen and Ketan Talaulikar walks the reader through the journey that led to the invention Segment Routing. Besides describing the SR functionalities, it also describes the intuition behind the key concepts and explains why it was designed this way.
    url: 'https://www.amazon.com/dp/B01I58LSUO'
    btn_label: Buy Part I
    class: book-slide
    button_class: plusBookSlides
  - image_path: images/sr-book-part2.jpg  
    title: Available on Amazon as paperback or Kindle editions.
    excerpt: >-
     Part II by Clarence Filsfils, Kris Michielsen, François Clad and Daniel Voyer explains how Segment Routing has changed the game of Traffic Engineering in Service Provider and Enterprise networks by finding the right balance between distributed intelligence and centralized control.
    url: 'https://www.amazon.com/dp/B07N13RDM9'
    btn_label: Buy Part II
    class: book-slide
    button_class: plusBookSlides
  - image_path: images/sr-book-part3.jpg
    title: Available on Amazon as Kindle edition, paperback edition coming soon!
    excerpt: >-
     Part III by Clarence Filsfils, Ahmed Abdelsalam, Pablo Camarillo, Francois Clad and Kris Michielsen explains how Segment Routing over IPv6 dataplane (SRv6) emerges as the key enabler of a new era of networking. Integrating the Segment Routing functionalities with the native capabilities of IPv6 to create a self-sufficient solution. This powerful synergy unlocks possibilities for increased network efficiency, enhanced control, and greater versatility, which are critical in modern networking environments.
    url: 'https://www.amazon.com/dp/B0D6GWWRWH'
    btn_label: Buy Part III
    class: book-slide
    button_class: plusBookSlides

published: true
---
<div class="home-notice">
  <div class="container">
      <h4>Explore the state of SRv6 and how it enhances all Segment Routing MPLS capabilities.</h4>
      <a href="{{ 'srv6-status' | relative_url }}" target="_blank">
        <button >State of SRv6</button>
      </a>
  </div>
</div>

{% include feature_row id="feature_row_benefits" %}
<div style="clear: both;"></div>

<div class="feature-keys">
  <div class="container feature-keys-content">
    <h2 class="section-title white">Segment Routing will boost your business in 5 key ways</h2>
    <div class="section-description white">
      Segment Routing emerged as a new technology in 2013 and has made a huge impact with service providers, hyper-scale web providers and large enterprises. As a key enabler for the transformation all networks must go through in the future, it’s no wonder that adoption is growing exponentially. But what will it actually do for your business?
    </div>
  </div>
</div>

{% include feature_key id="feature_key" %}

{% include slider id="slider_quote" %}

<div class="discover-tech">
  <div class="discover-tech-image-srv6">
    <img class="tech-image" src="{{site.baseurl}}/images/new-home/SRv6_transparent.png">
  </div>
  <div class="discover-tech-content">
    <div class="discover-tech-content-block">
      <h2 class="features-title">Discover <span class="discover-tech-span">SRv6</span></h2>
      <div class="descover-tech-links">
        <a href="{{ 'srv6-demos' | relative_url }}" class="discover-tech-link">Demos <i class="fas fa-arrow-circle-right"></i></a>
        <a href="{{ 'srv6-tutorials' | relative_url }}" class="discover-tech-link">Tutorials <i class="fas fa-arrow-circle-right"></i></a>
        <a href="{{ 'srv6-news' | relative_url }}" class="discover-tech-link">News <i class="fas fa-arrow-circle-right"></i></a>
      </div>
    </div>
  </div>
</div>
<div class="discover-tech">
  <div class="discover-tech-image-srmpls">
    <img class="tech-image" src="{{site.baseurl}}/images/new-home/SR_MPLS_transparent.png">
  </div>
  <div class="discover-tech-content left">
    <div class="discover-tech-content-block">
      <h2 class="features-title">Discover <span class="discover-tech-span">SR MPLS</span></h2>
      <div class="descover-tech-links">
        <a href="{{ 'srmpls-demos' | relative_url }}" class="discover-tech-link">Demos <i class="fas fa-arrow-circle-right"></i></a>
        <a href="{{ 'srmpls-tutorials' | relative_url }}" class="discover-tech-link">Tutorials <i class="fas fa-arrow-circle-right"></i></a>
        <a href="{{ 'srmpls-news' | relative_url }}" class="discover-tech-link">News <i class="fas fa-arrow-circle-right"></i></a>
      </div>
    </div>
  </div>

</div>
<div style="clear: both;"></div>

{% include slider id="slider_book" %}

