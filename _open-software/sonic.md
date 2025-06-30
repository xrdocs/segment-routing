---
position: 20
published: true
breadnav: true
date: '2025-06-30 09:00 -0700'
title: SAI/SONiC
app: false
header:
  teaser: images/open-software/sonic.png
excerpt: >-
  SRv6 has been a key feature in SONiC for many years—mature, widely deployed, and supported by a rich ecosystem. Cisco, Microsoft, Alibaba, and other SONiC ecosystem partners have collaborated on the SRv6 uSID implementation in SONiC/SAI. Discover the latest status and advancements of SRv6 uSID in SONiC.
---

SRv6 has been a key feature in SONiC for many years—mature, widely deployed, and supported by a rich ecosystem.

Cisco, Microsoft, Alibaba, and other SONiC ecosystem partners have collaborated on the SRv6 uSID implementation in SONiC/SAI.

The following slides provides the status of SRv6 support in SONiC/SAI/FRR.

{% include pdf link="/images/20250630-SRv6-uSID-SONiC-FRR.pdf" %}

<br />

# Demo: SRv6 uSID in SONiC with Cisco Silicon One
SRv6 uSID is fully supported and interoperable across Cisco IOS-XR and SONiC Network OS with FRR.
The Cisco Silicon One SAI adaptor supports SRv6 uSID. Therefore, any Cisco 8000 device or Silicon One based whitebox running SONiC supports SRv6 uSID.
In this demo Ahmed Abdelsalam (Cisco) showcases the full stack SRv6 uSID solution with SONiC and Cisco Silicon One. This full-stack demo encompasses the a Cisco 8000 (Silicon One Q200), the Switch Abstraction Interface (SAI) adaptor, the SONiC network OS, and the FRRouting stack with BGP control-plane to deliver an L3VPN service.
<br />Watch the demo here: [Demo: SRv6 uSID in SONiC with Cisco Silicon One]({{ '/demos/20230602-demo-srv6-usid-in-sonic-with-cisco-silicon-one' | relative_url }}).

# Blog: Building a SONiC DC Fabric with SRv6 uSID
In this blog Bruce McDougall (Cisco) documents his experience building a SONiC DC Fabric based on SRv6 uSID. This is a virtualized 12-node multi-tenant BGP-based data center fabric. To help you get started, all the config files and images are available for download.
The decoupled architecture of SONiC, combined with SRv6 uSID, offers operational simplicity, unified forwarding, and cost-effectiveness for network deployments.
<br />Click here to read the blog: [Building an SRv6 uSID Data Center Fabric with SONiC]({{ '/blogs/srv6-usid-on-sonic' | relative_url }}).

