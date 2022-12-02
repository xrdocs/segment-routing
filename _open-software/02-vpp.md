---
published: true
breadnav: true
date: '2017-01-20 08:52 -0700'
title: The Fast Data Project (FD.io)
app: false
header:
  teaser: images/new-design/fd-logo.png
excerpt: >-
  Cisco has funded an extensive implementation of SRv6 in open-source project FD.io VPP.
  Find out how to leverage this platform in your network architecture.
---

## Introduction

FD.io (Fast data - Input/Output) is a collection of several projects and libraries to amplify the transformation that began with Data Plane Development Kit (DPDK) to support flexible, programmable and composable services on a generic hardware platform. FD.io offers the Software Defined Infrastructure developer community a landing site with multiple projects fostering innovations in software-based packet processing towards the creation of high-throughput, low-latency and resource-efficient IO services suitable to many architectures (x86, ARM, and PowerPC) and deployment environments (bare metal, VM, container). 

The heart of the project is Vector Packet Processing (VPP) technology donated by Cisco. This code is already running in products on the market today.  The design of VPP is hardware, kernel, and deployment (bare metal, VM, container) agnostic.  It runs completely in userspace. VPP has been benchmarked against top-shelf traffic generators yielding results never seen before in software-based packet processing.

The key characteristic of VPP is the fact that rather than processing the first packet through the whole graph, and then the second packet through the whole graph, VPP instead processes an entire vector of packets through a graph node before moving on to the next graph node. Because the first packet in the vector warms up the instruction cache, the remaining packets tend to be processed at extreme performance.  The fixed costs of processing the vector of packets are amortized across the entire vector.  This lead not only to very high performance, but also statistically reliable performance.
  
## Segment Routing in VPP

The Segment Routing team at Cisco has funded an implementation of Segment Routing for IPv6 in VPP. The objective of this implementation is to provide an outstanding open software support for SR with the same behavior specs as the different hardware platforms such as IOS XR and IOS XE. 

### SR behaviors support

The following tables show the availability in VPP of each SRv6 behavior defined in [draft-filsfils-spring-srv6-network-programming](https://datatracker.ietf.org/doc/draft-filsfils-spring-srv6-network-programming/).

New entries will be added to these tables as more SRv6 behaviors are defined in IETF documents.

#### Endpoint functions

Endpoint functions are triggered when the IPv6 Destination Address of an incoming packet matches an entry in the _My Local SIDs_ table of an SRv6-enabled node.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| End | Endpoint function | <span style="color:green">**17.04** (April 2017)</span> |
| End.X | Endpoint function with Layer-3 cross-connect | <span style="color:green">**17.04** (April 2017)</span> |
| End.T | Endpoint function with specific IPv6 table lookup | <span style="color:green">**17.10** (October 2017)</span> |
| End.DX2 | Endpoint with decapsulation and Layer-2 cross-connect | <span style="color:green">**17.04** (April 2017)</span> |
| End.DX6 | Endpoint with decapsulation and IPv6 cross-connect | <span style="color:green">**17.04** (April 2017)</span> |
| End.DX4 | Endpoint with decapsulation and IPv4 cross-connect | <span style="color:green">**17.04** (April 2017)</span> |
| End.DT6 | Endpoint with decapsulation and IPv6 table lookup | <span style="color:green">**17.04** (April 2017)</span> |
| End.DT4 | Endpoint with decapsulation and IPv4 table lookup | <span style="color:green">**17.04** (April 2017)</span> |
| End.B6 | Endpoint bound to an SRv6 policy | <span style="color:green">**17.04** (April 2017)</span> |
| End.B6.Encaps | Endpoint bound to an SRv6 encapsulation Policy | <span style="color:green">**17.04** (April 2017)</span> |
| End.BM | Endpoint bound to an SR-MPLS Policy | <span style="color:orange">In development</span> |
| End.S | Endpoint in search of a target in table T | <span style="color:orange">In development</span> |
| End.AS | Endpoint to SR-unaware APP via static proxy | <span style="color:green">**18.04** (April 2018)</span> |
| End.AD | Endpoint to SR-unaware APP via dynamic proxy | <span style="color:green">**18.04** (April 2018)</span> |
| End.AM | Endpoint to SR-unaware APP via masquerading | <span style="color:green">**18.04** (April 2018)</span> |

#### Transit behaviors

Transit behaviors are triggered when an in-transit packet matches a steering
rule on an SRv6-enabled node. Examples of steering rules are packets arriving on
a specific incoming interface or whose Destination Address belongs in a given
prefix.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| T.Insert | Transit behavior with insertion of an SRv6 Policy | <span style="color:green">**17.04** (April 2017)</span> |
| T.Encaps | Transit behavior with encapsulation in an SRv6 policy | <span style="color:green">**17.04** (April 2017)</span> |
| T.Encaps.L2 | T.Encaps behavior of the received L2 frame | <span style="color:green">**17.04** (April 2017)</span> |


## Configure IPv6 Segment Routing with VPP

An example of SRv6-based overlay VPN with underlay optimization, for both IPv4
and IPv6 traffic, is provided on the [Segment Routing page of the FD.io
wiki](https://wiki.fd.io/view/VPP/Segment_Routing_for_IPv6). This page includes
a sample topology and all the necessary configurations.

An extensive documentation of the SRv6 code, with all the behaviors and their
respective CLI commands, is also available on the [dedicated page of the VPP
manual](https://docs.fd.io/vpp/17.07/srv6_doc.html).

