---
published: true
breadnav: true
date: '2026-04-29 05:00'
title: 'SONiC Workshop OCP EMEA 2026 – “Enabling Topology Visibility in BGP Fabrics with BGP-LS”'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'In the SONiC Workshop at OCP EMEA Summit 2026, Ahmed Abdelsalam of Cisco and Yijiao Qin of Alibaba presented a unified, standards-based approach to enabling full network topology visibility in SONiC eBGP fabrics using BGP-LS (BGP Link-State), now upstreamed in FRR'
header:
  teaser: 'https://img.youtube.com/vi/0a4DZZkBK4A/mqdefault.jpg'
---
In the [**SONiC Workshop at the OCP EMEA Summit 2026** (opencompute.org)](https://www.opencompute.org/events/past-events/2026-ocp-emea-summit), **Ahmed Abdelsalam** of Cisco Systems and **Yijiao Qin** of Alibaba presented a unified, standards-based approach to enabling full network topology visibility in SONiC eBGP fabrics using BGP-LS (BGP Link-State), now upstreamed in FRR.

Modern data center and fabric designs increasingly adopt BGP as the sole routing protocol to improve scalability and operational stability. However, this approach abstracts the underlying link and topology information, limiting the ability of controllers and automation systems to obtain a detailed network view comparable to traditional link-state protocols. This visibility gap is becoming increasingly critical as AI workloads drive the need for multi–data center "AI DCI" networks, where traffic engineering, latency-optimized path computation, disjoint backup paths, and fast reroute (LFA/TI-LFA) all depend on having an accurate, dynamic view of the topology.

In this session, Ahmed and Yijiao presented the design and implementation of BGP-LS (BGP Link-State) for BGP fabrics in FRR and its integration into SONiC. They walk through the architectural choices, implementation challenges, and interoperability considerations involved in enabling routers to advertise topology information without relying on a traditional IGP. They show how BGP-LS — historically associated with IGP environments — can be applied to hop-by-hop eBGP fabrics (as specified in the relevant IETF working group draft) to deliver the exact same node, link, and prefix NLRIs that controllers already consume from IGP domains, simply by enabling a new address family and peering with a route reflector or collector. The result is a unified, standards-based, multi-vendor topology solution that works for both IGP- and eBGP-based SONiC deployments, scales using existing BGP infrastructure, and has no data-plane impact.

The session also covers the upstreaming of the BGP-LS implementation in FRR and its integration into SONiC. Refer to these PRs:

- bgpd: Add support for BGP-LS (RFC 9552): [https://github.com/FRRouting/frr/pull/20470](https://github.com/FRRouting/frr/pull/20470)
- bgpd: Add support for BGP-LS for BGP fabric: [https://github.com/FRRouting/frr/pull/20726](https://github.com/FRRouting/frr/pull/20726)

&nbsp;
### Video

{% include video id="0a4DZZkBK4A" provider="youtube" %}

&nbsp;

### Slides

{% include pdf link="/images/2026-OCP-EMEA-SONiC-workshop-bgp-ls.pdf" %}

