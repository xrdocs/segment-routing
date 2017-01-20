---
published: true
breadnav: true
date: '2017-01-20 08:52 -0700'
title: The Fast Data Project (FD.io)
header:
  teaser: 'https://fd.io/sites/cpstandard/files/fd-logo.png'
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



## Configure IPv6 Segment Routing with VPP
VPP' wiki contains an example on how to configure SRv6. It includes a sample topology and all the necessary configurations.


><https://wiki.fd.io/view/VPP/Configure_IPv6_Segment_Routing> 