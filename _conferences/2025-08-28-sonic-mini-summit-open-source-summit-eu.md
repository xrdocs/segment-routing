---
published: true
breadnav: true
date: '2025-08-28 01:00'
title: 'SRv6 in SONiC: Deterministic Path Placement in AI Backends'
author: Cisco
technology: 'SRv6'
excerpt: 'SRv6 enables deterministic path placement in AI backends by providing precise, congestion-aware routing for RoCEv2 traffic. Integrated into SONiC and supported by leading tech partners, this approach ensures reliable, high-performance communication in hyperscale AI clusters, overcoming traditional network bottlenecks.'
header:
  teaser: 'https://img.youtube.com/vi/cF63x8_SJg0/mqdefault.jpg'
---
At the SONiC Mini Summit at Open Source Summit Europe, August 2025, Ahmed Abdelsalam from Cisco Systems and Changrong Wu from Microsoft presented "SRv6 in SONiC: Deterministic Path Placement in AI Backends."

Hyperscale AI training clusters rely on massive GPU-to-GPU data exchanges, where synchronization delays caused due to congestion delays and packet loss impact model convergence time and operational costs.

These workloads generate large, predictable flows that require ultra-low latency, high bandwidth, and precise congestion control. Traditional networking approaches, such as ECMP-based per-flow load balancing, suffer from poor entropy due to the limited number of RoCEv2 flows, leading to fabric hotspots, congestion, and slow reconvergence after failures.

SRv6 provides the ability to steer in the fabric, allowing deterministic path placement of ROCEv2 traffic through the fabric. This ensures predictable performance, fine-grained traffic control, and real-time adaptation to congestion in a stateless manner.

SRv6 has been a key feature in SONiC for many years, supported through collaboration among various SONiC Ecosystem partners. Recently, Alibaba, Cisco, Microsoft, and Nvidia have worked closely to further enhance SRv6 for AI backend use-cases.

This presentation delves into how SRv6 powers the AI backend and how SONiC delivers full-featured SRv6 support.

&nbsp;

### Video

{% include video id="cF63x8_SJg0" provider="youtube" %}
