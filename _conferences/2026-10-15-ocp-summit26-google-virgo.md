---
published: true
breadnav: true
date: '2026-10-15 02:00'
title: 'OCP Global Summit 2026 – “Co-Designing AI Fabrics: Inside Google’s Virgo Network and the Campus-as-a-Computer”'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the OCP Global Summit 2026, Sunil Ahluwalia and JK Lee of Google presented Virgo, Google’s scale-out AI fabric, including SRv6 source routing for bare-metal customers running their own host stack.'
header:
  teaser: 'images/OCP-summit26/2026-10-15-google-virgo.jpg'
---
At the [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), **Sunil Ahluwalia** and **Jeongkeun “JK” Lee** of Google presented “Co-Designing AI Fabrics: Inside Google’s Virgo Network and the Campus-as-a-Computer.”

Virgo is Google’s dedicated accelerator-to-accelerator scale-out fabric for the AI era, sitting beside the Jupiter frontend network. The design treats the campus as a computer: two-layer, fully non-blocking, multi-plane switching that stays up through a single link or switch failure, with SERDES-level “skinny links” so one plane down still leaves (N−1)/N of the bandwidth.

On the routing side, Virgo combines packet-level load-balancing and switch-driven adaptive routing with **SRv6 source routing for bare-metal customers running their own host stack**. Host/fabric co-design is completed with congestion signaling (CSIG), high-speed switch telemetry, and Firefly microsecond clock sync—plus Google Falcon transport on NVIDIA networking. Next steps include scale-across long-haul RDMA backends and a call for multi-vendor protocol unification.

&nbsp;
### Video

{% include video id="wHoHzjxC04s" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/OCP-summit26/Google-Virgo-Campus-as-a-Computer.pdf" %}
