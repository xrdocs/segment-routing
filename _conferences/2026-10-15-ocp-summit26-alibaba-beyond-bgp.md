---
published: true
breadnav: true
date: '2026-10-15 07:00'
title: 'OCP Global Summit 2026 – “Beyond Traditional BGP: Decoupling Route Distribution for Large-Scale AI Clusters at Alibaba”'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the OCP Global Summit 2026, Eddie Ruan and Dennis Cai of Alibaba presented HPN Pivot, decoupling infrastructure BGP from service-route distribution so AI clusters can scale without a routing-state explosion.'
header:
  teaser: 'images/OCP-summit26/2026-10-15-alibaba-beyond-bgp.jpg'
---
At the [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), **Eddie Ruan** and **Dennis Cai** of Alibaba presented “Beyond Traditional BGP: Decoupling Route Distribution for Large-Scale AI Clusters at Alibaba.”

Traditional BGP in a large AI Clos blows up routing state: with hundreds of spines and ToRs and tens of thousands of service routes, each ToR can be asked to learn tens of millions of service-route copies. Alibaba’s HPN Pivot architecture keeps infrastructure routes in BGP and offloads service-route distribution onto a small set of cluster-proximate virtual route reflectors (four instances per plane, automated by Pivot Manager), cutting massive eBGP peering down to a handful of sessions.

Reliability is the design constraint: an RR outage must not impact the AI cluster. The team describes placement across racks and network clusters, independent RR instances, and BGP Group GR so forwarding continues even if all RRs disappear at once. Work continues in the SONiC Routing working group.

&nbsp;
### Video

{% include video id="8in3TD9vW6g" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/OCP-summit26/Beyond-Traditional-BGP-Alibaba.pdf" %}
