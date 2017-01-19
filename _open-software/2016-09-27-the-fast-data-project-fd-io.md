---
author: Segment Routing Team
published: true
breadnav: true
date: '2016-09-27 08:52 -0700'
title: The Fast Data Project (FD.io)
header:
  teaser: 'https://fd.io/sites/cpstandard/files/fd-logo.png'
excerpt: >-
  "Relentlessly focused on data IO speed and efficiency for more flexible and
  scalable networks and storage", supports MPLS Segment Routing encapsulation
---

## Introduction  

FD.io (Fast data - Input/Output) is a collection of several projects and libraries to amplify the transformation that began with Data Plane Development Kit (DPDK) to support flexible, programmable and composable services on a generic hardware platform. FD.io offers the Software Defined Infrastructure developer community a landing site with multiple projects fostering innovations in software-based packet processing towards the creation of high-throughput, low-latency and resource-efficient IO services suitable to many architectures (x86, ARM, and PowerPC) and deployment environments (bare metal, VM, container). 

A key component is the Vector Packet Processing (VPP) library donated by Cisco. This code is already running in products on the market today.  The VPP library is highly modular, allowing for new graph nodes to be easily “plugged in” without changes to the underlying code base. This gives developers the potential to easily build any number of packet processing solutions with varying forwarding graphs.

Along with VPP, FD-io leverages DPDK capabilities in support of additional projects including NSH_ SFC, Honeycomb, and ONE to accelerate the NFV data planes. The FD.io projects are aligning to other key open source initiatives in support of NFV and SDN such as OPNFV.  See the Fast data Stack (FTS) project proposal with OPNFV overall objectives, the proposal calls for an optional virtualized data plane integrated with  OpenStack and OpenDaylight (see FastDataStacks).
  
  
  
## Configure IPv6 Segment Routing with VPP

><https://wiki.fd.io/view/VPP/Configure_IPv6_Segment_Routing> 