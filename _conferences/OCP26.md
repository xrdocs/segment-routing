---
published: true
breadnav: true
hidden: true
date: '2026-10-15 08:00'
title: 'Highlights of SRv6 at OCP Global Summit, October 2026'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'The OCP Global Summit 2026 in San Jose put SRv6 at the center of AI networking: Meta regional backbones, OpenAI and Cisco scale-out deployments, Alibaba DCI/WAN traffic engineering, Clustermapper path diagnosis, Alibaba’s BGP scale-out, and Google Virgo.'
header:
  teaser: 'images/OCP-summit26/OCP26-thumbnail.jpg'
---
<style>
.indent {
    padding-left: 2em;
}
.notice {
    margin: 2em 0 !important;
    padding: 1em;
    background-color: #f2f3f3;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(189,193,196,0.25);
}
</style>

The [**OCP Global Summit 2026** (opencompute.org)](https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/recorded-content/), 12–15 October 2026 in San Jose, put SRv6 at the center of how hyperscalers build AI scale-out, scale-across, and backbone networks. Meta, OpenAI, Cisco, Alibaba, and Google shared production deployments and open-ecosystem work spanning FBOSS/SAI, SONiC, and host-driven source routing.

This page highlights the SRv6 sessions from the summit.

<br />

### Highlighted presentations:

<div markdown="1">
#### [Meta: SRv6 powered backbone networks](/conferences/2026-10-15-ocp-summit26-meta-srv6-backbone)
_**Jasmeet Bagga** and **Andrey Golovanov**, Meta_
{: .indent}
Meta is deploying SRv6 traffic engineering on regional backbone rings that share compute and storage inside a latency envelope. The team already runs MPLS SR-TE at scale and still chose SRv6—IPv6 Traffic Class carries the six Olympic QoS classes their MPLS encoding cannot. Compact uSID lists, one mySID entry per adjacency, and a per-plane FBOSS/SAI controller take the design from shallow-buffer 800G-ZR+ spans into production on Cisco Silicon One.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Cisco and OpenAI: SRv6 Deployments in Scale-Out and Scale-Across Networks](/conferences/2026-10-15-ocp-summit26-cisco-openai-scale-out)
_**Clarence Filsfils**, Cisco Fellow, and **Guohan Lu**, OpenAI_
{: .indent}
Clarence Filsfils and Guohan Lu show how SRv6 uSID replaces ECMP in AI backends: the NIC encodes a deterministic path, switches forward strictly on the list, and MRC over static SRv6 lets training jobs ride out failures. Coverage includes Microsoft Fairwater’s multi-plane fabric (up to 524,288 GPUs), a 75K-GPU OpenAI production incident, SONiC uN/uA support, and scale-up requirements for native strict source routing.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Alibaba and Cisco: SRv6 Traffic Engineering in AI DCI/WAN](/conferences/2026-10-15-ocp-summit26-alibaba-cisco-te)
_**Yuanchao Su**, Alibaba Cloud, and **Clarence Filsfils**, Cisco Fellow_
{: .indent}
AI workloads now span clusters over a regional network, where capacity is scarce and latency matters. Yuanchao Su and Clarence Filsfils present SRv6 as the end-to-end TE fabric from DC through DCI/WAN, reusing the mature SONiC SRv6 stack on DC-class hardware. The talk compares host-based and aggregation-node steering and walks through Alibaba’s ultra-scale eCore deployment for AI scale-across.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [OpenAI: Clustermapper — deterministic path diagnosis using SRv6](/conferences/2026-10-15-ocp-summit26-openai-clustermapper)
_**Ryder Lewis** and **Guohan Lu**, OpenAI_
{: .indent}
Once an AI backend uses SRv6 for strict source routing, the same path identifiers can diagnose the fabric. Ryder Lewis and Guohan Lu present Clustermapper, OpenAI’s tool for deterministic path testing, and call on switch/ASIC vendors, SONiC contributors, and operators to qualify SRv6 steering and make path testing part of fabric acceptance.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Alibaba: Beyond Traditional BGP](/conferences/2026-10-15-ocp-summit26-alibaba-beyond-bgp)
_**Eddie Ruan** and **Dennis Cai**, Alibaba_
{: .indent}
Traditional BGP in a large AI Clos explodes routing state. Eddie Ruan and Dennis Cai present HPN Pivot: infrastructure routes stay in BGP, service routes are distributed by a small set of cluster-proximate virtual route reflectors, and BGP Group GR keeps forwarding up even if every RR disappears. The work continues in the SONiC Routing working group.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Google: Virgo — campus-as-a-computer, with SRv6 for bare-metal](/conferences/2026-10-15-ocp-summit26-google-virgo)
_**Sunil Ahluwalia** and **Jeongkeun “JK” Lee**, Google_
{: .indent}
Virgo is Google’s dedicated accelerator-to-accelerator scale-out fabric beside Jupiter. Sunil Ahluwalia and JK Lee describe a two-layer, multi-plane design that treats the campus as a computer. Routing combines adaptive switching with **SRv6 source routing for bare-metal customers running their own host stack**, plus congestion signaling, high-speed telemetry, and Falcon transport.
{: .indent}
</div>
{: .notice}
