---
published: true
breadnav: true
date: '2026-07-13 00:00 -0700'
title: 'Netdev 0x1A — SRv6 in Linux: AI backends, Provider Deployments, L2 services and Eco-systems updates'
author: 'Stefano Salsano, Ahmed Abdelsalam, Carmine Scarpitta, Ferenc Fejes, Andrea Mayer'
technology: 'SRv6'
excerpt: 'The SRv6 workshop at Netdev 0x1A, July 2026, Rome, Italy — THE Technical Conference on Linux Networking, covers three directions that directly impact the kernel datapath — source-routed AI backends, L2 services beyond VXLAN, and provider-grade SRv6 deployment with service protection — plus a short ecosystem update.'
header:
  teaser: 'images/open-software/linux.png'
---
<style>
p {
    margin-top: 0px;
}
</style>

At [Netdev 0x1A — THE Technical Conference on Linux Networking (13–16 July 2026, Rome, Italy) (netdevconf.info)](https://netdevconf.info/0x1A/), Stefano Salsano (University of Rome Tor Vergata), Ahmed Abdelsalam (Cisco), Carmine Scarpitta (Cisco), Ferenc Fejes (Ericsson), and Andrea Mayer (University of Rome Tor Vergata) presented the [Netdev 0x1A SRv6 workshop (github.io)](https://netgroup.github.io/netdev-0x1A-srv6-workshop/).

Segment Routing over IPv6 (SRv6, RFC 8986) lets an application or operator encode a packet-processing program directly in the IPv6 header. SRv6 has been supported in the Linux kernel since release 4.10, and a rich open-source ecosystem (FRR, SONiC, Cilium, VPP) has grown on top of it.

Following the SRv6 workshops at Netdev 0x16 (Lisbon 2022) and 0x19 (Zagreb 2025), this edition covers three directions that directly impact the kernel datapath — source-routed AI backends, L2 services beyond VXLAN, and provider-grade SRv6 deployment with service protection — plus a short ecosystem update.

<br />
#### Source-routed AI backends
ECMP spreading gives little control over how flows map onto a fabric you own completely. SRv6 moves path placement to the host and the NIC: deterministic, congestion-aware, and reacting to failures without waiting for control-plane convergence. In Linux: per-packet segment-list selection in seg6/seg6local, eBPF/XDP and NIC offload at line rate. Underpins the industry MRC protocol (main-track talk).

#### L2 services beyond VXLAN
RFC 8986 defines the L2 endpoint behaviors (End.DX2, End.DT2U, End.DT2M) and RFC 9252 the EVPN overlay over SRv6. Kernel L2 support still stops at the End.DX2 cross-connect. A recent netdev RFC series adds End.DT2U and the sr6 Ethernet pseudowire device — the path to multipoint services, EVPN-over-SRv6 in FRR, and replacing VXLAN in cloud orchestrators.

#### Providers & service protection
End-to-end provider-style design on GNU/Linux + FRRouting: addressing, per-service VRF, SID allocation, BGP/IS-IS, TE, with an SR-MPLS coexistence comparison. Lookup-level observability with tablesnoop, and Redundancy Protection (R-SID, draft-ietf-spring-sr-redundancy-protection, XDPFRER for SRv6).

<br />

### Video

{% include video id="VWlH9D7FSCU" provider="youtube" %}

<br />

### Slides

{% include pdf link="/images/2026-07-13-netdev-0x1A-SRv6-Update.pdf" id="netdev-0x1A-SRv6-Update-pdf" %}
<br />
{% include pdf link="/images/2026-07-13-netdev-0x1A-SRv6-uSID-SONiC.pdf" id="netdev-0x1A-SRv6-uSID-SONiC-pdf" %}
<br />
{% include pdf link="/images/2026-07-13-netdev-0x1A-SRv6-uSID-FRR-extended.pdf" id="netdev-0x1A-SRv6-uSID-FRR-extended-pdf" %}
<br />
{% include pdf link="/images/2026-07-13-netdev-0x1A-workshop-intro.pdf" id="netdev-0x1A-workshop-intro-pdf" %}
<br />
{% include pdf link="/images/2026-07-13-netdev-0x1A-srv6-ai-backend.pdf" id="netdev-0x1A-srv6-ai-backend-pdf" %}
<br />
{% include pdf link="/images/2026-07-13-netdev-0x1A-srv6-l2-services.pdf" id="netdev-0x1A-srv6-l2-services-pdf" %}


