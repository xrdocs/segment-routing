---
published: true
breadnav: true
date: '2026-02-02 00:00 -0700'
title: 'NANOG96: AI Backend - Deploying SRv6 uSID for Deterministic Load Balancing'
author: 'Cisco team'
technology: 'SRv6'
excerpt: >-
  At NANOG96, Rita Hui (Microsoft) and Pablo Camarillo (Cisco) revealed how Microsoft is leveraging SRv6 uSID to overcome the limitations of traditional ECMP in massive AI training clusters. This session details the production deployment of SRv6 over SONiC to achieve deterministic load balancing for high-scale AI workloads.
header:
  teaser: '/images/20260202-NANOG.jpeg'
---

As AI training clusters scale to encompass thousands of GPUs, the backend network is facing unprecedented stress tests. The synchronized nature of AI workloads generates massive, bursty elephant flows that often break traditional data center designs. In these environments, standard ECMP hashing frequently results in collisions and congestion, directly impacting job completion times.

At **NANOG 96**, **Rita Hui (Microsoft)** and **Pablo Camarillo (Cisco)** took the stage to address these challenges in their session, "**AI Backend: Deploying SRv6 uSID and SONiC for Deterministic Load Balancing.**"

**Moving Beyond ECMP with SRv6**

The presentation provided a deep dive into the fragility of traditional ECMP for AI workloads. In standard designs, hash collisions often cause multiple elephant flows to compete for the same link while parallel paths sit idle. 
The proposed workarounds, leveraging **probabilistic EV-based (Entropy Value) approaches**, fall short. The team demonstrated how **SRv6 offers a deterministic path placement solution** through strict source routing. By explicitly programming paths at the source, they ensure conflict-free traffic distribution, effectively solving the congestion issues inherent in hash-based forwarding.

**Key Highlights from the Session:**

* Traffic Characterization: A detailed analysis of large-scale AI training jobs and the all-to-all communication patterns that drive them. The speakers highlighted how these workloads generate highly synchronized traffic bursts at the end of each iteration. As thousands of GPUs transmit simultaneously at NIC line rate, this behavior creates intense, instantaneous pressure on network buffers.
* Load-Balancing Alternatives & Multipathing: The speakers provided a comprehensive overview of backend load balancing strategies, comparing NIC-based approaches versus switch-based techniques. The session highlighted the limitations of these methods for AI traffic and made the case for deterministic multipathing. They explained how this approach uses SRv6 to gain precise control over traffic paths, eliminating the randomness of the probabilistic EV-based approaches.
* SRv6 uSID & SONiC: Insights into the real-world implementation of SRv6 uSID within the SONiC network operating system.
* Production Operations: Moving beyond theory, Microsoft shared operational data on deploying this architecture in one of the world’s largest AI infrastructures.

### Slides

{% include pdf link="/images/202602-NANOG96-SRv6-AI-Backend.pdf" %}

&nbsp;

### Video

{% include video id="yB-_4lkSsEs" provider="youtube" %}