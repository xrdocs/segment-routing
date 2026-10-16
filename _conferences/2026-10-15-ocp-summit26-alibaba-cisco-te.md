---
published: true
breadnav: true
date: '2026-10-15 05:00'
title: 'OCP 2026 - Alibaba/Cisco: SRv6 Traffic Engineering in AI DCI/WAN for AI Traffic'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the OCP Global Summit 2026, Yuanchao Su of Alibaba Cloud and Clarence Filsfils of Cisco presented SRv6 traffic engineering for AI DCI/WAN, extending the SONiC SRv6 stack from the AI DC across the interconnect.'
header:
  teaser: 'images/OCP-summit26/2026-10-15-alibaba-cisco-te.jpg'
---
At the [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), **Yuanchao Su** of Alibaba Cloud and **Clarence Filsfils** of Cisco Systems presented “Traffic Engineering in AI DCI/WAN for AI Traffic.”

AI workloads now span clusters scattered over a regional network. Power limits, scarce capacity, asymmetric topology, and tight latency make traffic engineering mandatory on the DCI/WAN—not optional. SRv6 is a natural fit: the same rich, mature SRv6 stack already deployed in SONiC AI DCs extends end-to-end from DC to DC through the interconnect, on DC-class hardware.

The session compares steering models—classify-and-steer at the aggregation node with no SRv6 on the host, versus host-selected SID lists—and walks through Alibaba’s ultra-scale AI DCI/WAN deployment in production, including dedicated eCores for AI scale-across, peering, finance, and public cloud on a unified SONiC + SRv6 pizza-box architecture.

&nbsp;
### Video

{% include video id="hkVpXFM0FAw" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/OCP-summit26/Traffic-Engineering-in-AI-DCI-WAN-for-AI-Traffic.pdf" %}
