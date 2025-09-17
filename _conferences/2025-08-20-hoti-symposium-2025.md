---
published: true
breadnav: true
date: '2025-08-20 01:00'
title: 'Evolving Interconnect Fabric and SDN in the Cloud to Meet the Needs of AI'
author: Cisco
technology: 'SRv6'
excerpt: 'At the HOTI Symposium, Deepak Bansal (CVP and GM at Microsoft) explores how AI is transforming every industry and driving unprecedented demands on cloud infrastructure, particularly in networking. SRv6 is one of the key technologies required for the new backend network strategies.'
header:
  teaser: 'images/2025-08-20-hoti-symposium-2025-thumbnail.png'
---
At the IEEE Hot Interconnects (HOTI) Symposium in August 2025, Deepak Bansal, CVP and GM of Azure Networking at Microsoft, presented "Evolving Interconnect Fabric and SDN in the Cloud to Meet the Needs of AI."

Deepak Bansal's keynote explores how AI is transforming every industry and driving unprecedented demands on cloud infrastructure, particularly in networking. He explains that AI applications require extremely high bandwidth, ultra-low latency, and robust security—needs that far exceed previous workloads such as video. To meet these demands, Microsoft is innovating across multiple layers:

Physical Infrastructure: Introduction of new technologies like holocore fiber, which uses air/vacuum instead of glass to transmit light, enabling up to 47% faster data transmission and improved security. This technology is being deployed both in wide-area networks (WAN) and inside data centers to handle massive east-west traffic between GPU, compute, and storage clusters.
- **Data Center Networks**: The rise of GPU clusters for AI has shifted traffic patterns, requiring new backend network strategies. AI training generates synchronized data bursts, demanding high reliability and advanced traffic engineering techniques (e.g., packet spray, SRv6, high-frequency telemetry) to manage large, fat flows and quickly detect and recover from failures.
- **Software-Defined Networking (SDN) and Open Source**: Innovations are delivered through SONiC, an open-source "Linux of networking", with features such as packet trimming and advanced telemetry to support AI workloads at scale.
DPUs and Smart Switches: Data Processing Units (DPUs) accelerate network services such as secure storage access, achieving terabit-scale throughput. Embedding DPUs in switches (smart switches) increases programmability and network service capabilities beyond traditional hardware.
- **Application Networking**: AI workloads, often deployed over Kubernetes clusters, benefit from Azure Managed CNI, an enhanced, high-performance networking stack based on eBPF/Cilium. It offers advanced security, observability (e.g., with Retina), and support for massive scale and multi-cluster operations.
- **Security**: New approaches to securing AI workloads include network security perimeters and Private Link, ensuring that sensitive data and storage are not inadvertently exposed.
- **Global Scale and Automation**: Microsoft's global network and automated infrastructure management are essential for supporting distributed, worldwide AI workloads, rapid scaling, and defect-free deployments.
- **Continuous Innovation**: The talk concludes by emphasizing the ongoing need for innovation in networking and infrastructure to keep pace with AI’s evolving requirements, with Microsoft making significant investments in this space.

Overall, the session highlights that cutting-edge networking infrastructure is foundational for the future of AI-powered applications.


&nbsp;

### Video

{% include video id="vuo6KfdRRZw" provider="youtube" %}

&nbsp;

### Key SRv6 highlights

<img src="{{ 'images/20250820-HOTI-screenshot1.png' | relative_url }}">

&nbsp;

<img src="{{ 'images/20250820-HOTI-screenshot2.png' | relative_url }}">
