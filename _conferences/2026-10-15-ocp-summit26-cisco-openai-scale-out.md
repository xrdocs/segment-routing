---
published: true
breadnav: true
date: '2026-10-15 04:00'
title: 'OCP 2026 - OpenAI/Cisco: SRv6 Deployments in Scale-Out and Scale-Across Networks'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the OCP Global Summit 2026, Guohan Lu of OpenAI and Clarence Filsfils of Cisco presented SRv6 uSID deployments for scale-out AI backends, including MRC over static source routing in production at OpenAI.'
header:
  teaser: 'images/OCP-summit26/2026-10-15-cisco-openai-scale-out.jpg'
---
At the [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), **Guohan Lu** of OpenAI and **Clarence Filsfils** of Cisco Systems presented “SRv6 Deployments in Scale-Out and Scale-Across Networks.”

AI backend traffic is a small number of large, synchronized flows. Traditional ECMP has too little entropy, and a failed collective can stall an epoch of training. SRv6 uSID gives the NIC a deterministic path: the source encodes an ordered list of instructions in the IPv6 destination address, switches forward strictly on that list, and the destination NIC decapsulates. Both SRv6 uN and uA are supported, including in SONiC.

This is deployed in production at OpenAI. MRC over static SRv6 source routing is used to train frontier models, so jobs ride out network failures without waiting for control-plane convergence. The session includes a 75K-GPU production incident where a T1 stopped forwarding, MRC removed the path, and throughput recovered. It also looks ahead to scale-up requirements: ultra-low overhead, a single-header architecture, and native strict source routing.

&nbsp;
### Video

{% include video id="6R5ZnYFMNQs" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/OCP-summit26/SRv6-Deployments-in-Scale-Out-and-Scale-Across-Networks.pdf" %}
