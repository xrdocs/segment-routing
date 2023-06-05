---
position: 3
published: true
breadnav: true
date: '2022-11-08 08:52 -0700'
title: SAI/SONiC
app: false
header:
  teaser: images/open-software/sonic.png
excerpt: >-
  Cisco, among other ecosystem partners, has collaborated in the development of the SRv6 uSID implementation in SONiC/SAI.
  Find out how to leverage this platform in your network architecture.
---

##	SAI
The Switch Abstraction Interface (SAI) is an abstraction layer to program any silicon, regardless of its vendor. The community has worked on a standard API that models SRv6 uSID configuration on a router.
SRv6 uSID is fully supported in SAI since June 2021 in [SAI release 1.9 (github.com)](https://github.com/opencomputeproject/SAI/blob/master/doc/SAI-IPv6-Segment-Routing-Update.md). [SAI release 1.12 (github.com)](https://github.com/opencomputeproject/SAI/blob/master/doc/SAI-IPv6-Segment-Routing-VPN.md) provides several scale enhancements for SRv6 VPN and SRv6 Policy.
You can find more details on the latest status of SRv6 uSID support in SAI at the [SAI official GitHub repository (github.com)](https://github.com/opencomputeproject/SAI/tree/master/doc).
Cisco Silicon One ASIC has native support for SRv6 uSID in its SDK and implements the SAI adaptor.

##	SONiC
SONiC (Software for Open Networking in the Cloud) is a free Network OS based on Linux and currently being developed by the Open Compute Project. SONiC includes the networking software components necessary for a fully functional L3 device and was designed to meet the requirements of a cloud data center.
SRv6 uSID is supported in SONiC since [release 202211 (github.com)](https://github.com/sonic-net/SONiC/tree/master/doc/srv6). [SONiC 202305 (github.com)](https://github.com/sonic-net/SONiC/pull/1252) provides several scale enhancements for SRv6 VPN and SRv6 Policy.
You can find more details on the latest status of SRv6 uSID support in SONiC at the [SONiC official GitHub repository (github.com)](https://github.com/sonic-net/SONiC/tree/master/doc/srv6).

##	FRR
SONiC uses the Free-Range Routing (FRR) stack for the routing protocols such ISIS and BGP and the RIB functionality. SRv6 uSID is supported in FRR since the [FRR 8.5 release (frrouting.org)](https://frrouting.org/release/8.5/).
You can find more details on the latest status of SRv6 uSID support in FRR at the [FRR official GitHub repository (github.com)](https://github.com/FRRouting/frr/releases).

<br />

## Demo: SRv6 uSID in SONiC with Cisco Silicon One
SRv6 uSID is fully supported across the Cisco IOS-XR and the SONiC Network OS.
The SRv6 uSID support in SONiC is available in the Cisco C8000 router and the Cisco Silicon one based whitebox.
Ahmed Abdelsalam (Cisco) shows a demo of full stack SRv6 uSID support in SONiC with Cisco SiliconOne. This is a full stack solution that includes the Cisco silicon One Q200 ASIC, the switch abstraction Interface (SAI), the SONiC software stack itself and FRR Routing stack.
<br />Watch the demo here: [Demo: SRv6 uSID in SONiC with Cisco Silicon One]({{ '/demos/20230602-demo-srv6-usid-in-sonic-with-cisco-silicon-one' | relative_url }}).

## Blog: SONiC DC Fabric with SRv6 uSID
Bruce McDougall (Cisco) wrote a very interesting Blog on how to build a SONiC DC Fabric based on SRv6 uSID.
<br />Click here to read the blog: [Building an SRv6 uSID Data Center Fabric with SONiC]({{ '/blogs/srv6-usid-on-sonic' | relative_url }}).

