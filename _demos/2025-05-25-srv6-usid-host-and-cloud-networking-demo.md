---
published: true
breadnav: true
hidden: true
date: '2025-03-25 00:00'
title: 'Demo: SRv6 uSID Host and Cloud Networking'
author: 'Segment Routing Team'
technology: 'SRv6'
excerpt: 'This demo, presented at the SRv6 Conference in Paris 2025, demonstrates seamless end-to-end integration of SRv6 transport networking with Kubernetes clusters using Cilium CNI. It highlights how SRv6 enables flexible, isolated application environments with no protocol translation or data stitching across the network.'
teaser: 'https://img.youtube.com/vi/bPYNGCumB-I/mqdefault.jpg'
---    

In this demo, presented at the SRv6 Conference in Paris 2025, Arkadiusz Kaliwoda showcases an innovative integration of SRv6-based transport networking with Kubernetes clusters using Cilium CNI. The demonstration highlights how SRv6 domains can extend from the transport network, through the data center, and up to Kubernetes hosts, enabling seamless end-to-end connectivity without protocol translation or data stitching.

Key elements include the use of SRv6 locators, BGP routing, and VRF configurations to create isolated application environments. Kubernetes nodes, acting as PE devices, advertise their SRv6 locators via BGP, with seamless route redistribution across the network. Applications are deployed in VRFs, leveraging SRv6 encapsulation to ensure connectivity and isolation across the fabric. The demo emphasizes flexibility, scalability, and streamlined network integration for modern cloud-native applications.

{% include video id="bPYNGCumB-I" provider="youtube" %}

