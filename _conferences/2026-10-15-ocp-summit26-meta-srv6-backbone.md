---
published: true
breadnav: true
date: '2026-10-15 03:00'
title: 'OCP Global Summit 2026 – “SRv6 powered backbone networks”'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the OCP Global Summit 2026, Jasmeet Bagga and Andrey Golovanov of Meta presented how Meta is deploying SRv6 traffic engineering on regional backbone rings, after running MPLS SR-TE at scale.'
header:
  teaser: 'images/OCP-summit26/2026-10-15-meta-srv6-backbone.jpg'
---
At the [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), **Jasmeet Bagga** and **Andrey Golovanov** of Meta presented “SRv6 powered backbone networks.”

Meta is building regional backbone (RBB) rings that share compute and storage inside a latency envelope, turning copies of data into additional compute and moving the difference onto the network. Those rings run DC-class, shallow-buffer platforms over 800G-ZR+ spans up to 650 km, with ECN (GLIDE) making the long-haul shallow-buffer design viable.

Meta already runs MPLS SR-TE at scale and still chose SRv6: Olympic QoS needs six traffic classes, and IPv6 Traffic Class provides the bits that their MPLS encoding cannot. The data plane uses a compact uSID list—one IPv6 destination address, six slots, one mySID entry per adjacency rather than per path. A per-plane controller programs FBOSS/SAI every 30 seconds. First RBB sites with SRv6 TE are in production on SAI with Cisco Silicon One, with a call to evolve SAI for FRR and class-based forwarding.

&nbsp;
### Video

{% include video id="FlAk9ApT0F4" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/OCP-summit26/Srv6-powered-backbone-networks.pdf" %}
