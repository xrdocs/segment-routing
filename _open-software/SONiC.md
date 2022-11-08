---
published: true
breadnav: true
date: '2022-11-98 08:52 -0700'
title: SAI/SONiC
app: false
header:
  teaser: images/new-design/SONiC.png
excerpt: >-
  Cisco, among other ecosystem partners, has collaborated in the development of the SRv6 uSID implementation in SONiC/SAI.
  Find out how to leverage this platform in your network architecture.
---

## SAI

The Switch Abstraction Interface (SAI) is an abstraction layer to program any silicon, regardless of its vendor. The community has worked on a standard API that models SRv6 uSID configuration on a router.
Since June 2021, there is a SAI definition with full support for SRv6 uSID. You can find more details in the [PR](https://github.com/opencomputeproject/SAI/pull/1231).

The Cisco Silicon One has native support for SRv6 uSID in its SDK, and implements the SAI adaptor.

## SONiC

SONiC (Software for Open Networking in the Cloud) is a free NetworkOS based on Linux and currenty being developed by the Open Compute Project. SONiC includes the networking software components necessary for a fully functional L3 device, and was designed to meet the requirements of a cloud data center.

The major release v202212 contains support for SRv6 uSID. These changes were included in June 2022, and include support for the underlay SRv6 Endpoint Behaviors uN and uA; as well as the support of L3VPN constructs (End.DT/DX SIDs). 

Find more details in [the PR](https://github.com/sonic-net/sonic-swss/pull/2335).

## FRR

The default routing stacked used together with SONiC is FRRouting. FRRouting has support for SRv6 uSID, including the configuration of L3VPNs among others. 
