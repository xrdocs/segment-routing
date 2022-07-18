---
published: true
breadnav: true
date: '2022-06-08 00:00 -0700'
title: 'NANOG85 Path Tracing'
author: Segment Routing Team
technology: 'SRMPLS, SRv6, PT'
excerpt: 'At NANOG85, June 2022, Mike Valentine (Goldman Sachs) presented "Path Tracing". Path Tracing is a new solution that reveals all the unknows about ECMP.'
header:
  teaser: 'images/2022-06-08-NANOG85-path-tracing-teaser.png'
---

At NANOG85, June 2022, Mike Valentine (Goldman Sachs) presented "Path Tracing".

ECMP is a key in today’s IP network. It provides both efficiency and resilience. However, the detecting and troubleshooting of these ECMP paths remains a big challenge that faces many operators. FIB corruption or FIB misconfiguration at any node is one among many issues that can happen and may lead packets to follow a non ECMP Path.

Path Tracing is a new solution that reveals all the unknows about ECMP. It allows operator to detect the currently available ECMP paths. They can also detect the ECMP Paths that were available at a given time in the past. Operators will be able also to know whether packets are following an ECMP Path or not. In addition, they can detect where packets are being drifted from the ECMP Path. Moreover, Path Tracing provides operators accurate end-to-end delay, per-hop delay, and the load of each interface that forwards the packet along the path.

The Path Tracing dataplane is optimized for HW linerate implementation in the base HW forwarding pipeline. It requires minimum packet header parsing and processing. As a result, it can be implemented using a minimum number of micro code instructions.

Path Tracing has also a rich ecosystem that includes several implementations in merchant silicon (Broadcom, Cisco, Marvell, others) and open source (Linux, VPP, P4, others).

The solution is currently being standardized in the SPRING WG at IETF ([draft-filsfils-spring-path-tracing](https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing/)).

In this presentation, we will review the path tracing solution and its ecosystem.

### Video

{% include video id="X0J2Gz57Lds" provider="youtube" %}

### Slides

{% include pdf link="/images/20220608_Valentine_Path_Tracing_v1.pdf" %}

