---
published: true
breadnav: true
date: '2024-10-18 00:00 -0700'
title: 'OCP SONiC Summit 2024: IP Measurements'
author: 'Cisco team'
technology: 'SRv6, IPM'
excerpt: 'At the OCP SONiC Summit 2024, Ahmed Abdelsalam of Cisco Systems presented “IP Measurements”'
header:
  teaser: 'https://img.youtube.com/vi/mOM_Bc9SaqQ/mqdefault.jpg'
---

At the OCP SONiC Summit 2024, co-located at OCP Global Summit, **Ahmed Abdelsalam** of Cisco Systems presented “IP Measurements.”

Applications experience/detect the network problem and then we troubleshoot. We repeatedly encounter this issue.

Why legacy network performance measurement solutions cannot measure the application experience?

The network fabric is built on top of IP. The nature of IP is ECMP. There are many ECMP paths between the fabric edges that connect our applications. Legacy solutions lack the scale required to measure all the ECMP paths. In addition, they rely on metrics such as min/max/average that don’t reflect the experience of each application.

The IP Measurements solution (IPM) is a network performance measurement solution applicable to any IP Fabric (SRv6/MPLS/VXLAN). It provides the scale required to monitor the network experience of all applications via the HW integration. IPM provides detailed insights into the application experience through accurate metrics (latency histograms). Additionally, it reduces CAPEX and OPEX via elimination of external probing appliances.

The SAI/SONiC implementation of IPM is available and currently in the process of upstreaming to the community SAI/SONiC.

In this presentation we review the IPM solution and provide an update on the SAI/SONIC support.


### Slides

{% include pdf link="/images/20241018-IPM-SONiC-OCP.pdf" %}

&nbsp;

### Video

{% include video id="mOM_Bc9SaqQ" provider="youtube" %}

