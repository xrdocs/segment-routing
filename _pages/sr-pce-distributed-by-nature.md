---
regenerate: true
layout: single-full 
permalink: /sr-pce-distributed-by-nature
hero-image: images/new-design/SR-Hero-Background-Image-8.png
title: "SR-PCE distributed by Nature"
type: "Blogs"
description: "SR-PCE distributed by Nature"
sitemap: false
---

###### Author: Alberto Donzelli

![](/images/sr-pce-distributed-by-nature-fig1.png)

## Introduction

Segment routing is seeking the right balance between distributed intelligence and centralized programmability. It has been rapidly adopted by leading service providers as the best available networking technology to satisfy the needs of the SDN era, with no compromise on the overall stability, reliability, and self-healing capability of IP transport networks.


In Segment Routing architecture, the network behaves like a horizontally distributed controller, working seamlessly with SDN applications and centralized computation resources but, at the same time, being in condition to rely on the flexibility and reliability of distributed control plane.  In this regard the SR Path Computation Element (SR-PCE) represents an extension of the native distributed headend path computation capabilities.
The headend node would be still the owner of the SR-policy, checking the validity of the candidate paths and selecting which one should be active and, depending on different situations or configurations, can outsource (delegate) the computation of a the path to the SR-PCE.

<br />
## The Segment Routing Path Computation Element

The Path Computation Element is a network function designed to assist the headend router in properly setting up traffic engineering policies.
Every headend has its own traffic engineering topology database that can be used to set up policies accordingly to optimization objectives and constraints. But
since the visibility of the headend can be limited (to the IGP domain topology or limited in terms of KPI/metric  not available in the IGP or, more in general, limited by the information available on the local SRTE database), the headend can rely on the SR-PCE extended computation capabilities when needed. 

 
![](/images/sr-pce-distributed-by-nature-fig2.png)
_Fig 1 Headend visibility limited to the IGP domain. SR-PCE build the entire multidomain topology  via BGP-LS feeds_

In this way the headend can resolve paths to a destination outside IGP or can provide complex computations that would require a proper centralized view in order to be performed (e.g. disjoint paths from different headend).

<br />
### SR-TE Performant Automated Steering and On Demand Next Hop

Setting up Traffic Engineering paths represents  only half of a traffic engineering solution. The other half is to steer traffic selectively and efficiently on the traffic engineering policies. To use a simple analogy traffic engineering policies without a proper traffic steering solution, would be like having highways without  the actual  ramps to get  traffic over them.

![](/images/sr-pce-distributed-by-nature-fig3.png)
_Fig 2 Elevated roads without ramps are like Traffic Engineering paths without proper traffic steering_


The idea to make segment routing a real game changer in granular traffic steering came up in Rome during a discussion about efficient steering and the decoupling of service provisioning from path programming I was having with Clarence Filsfils and Alex Preusche. 

We all knew the nightmare of legacy mechanisms like Policy Based Routing to granularly steer traffic over RSVP-TE tunnels.  The extreme configuration complexity and performance impact to maintain the mapping between services and tunnels were already challenging from the start, resulting in rare deployments but the move to IoT and SDN era, where every flow could potentially require steering to a specific path, pushed traditional traffic steering limits even further making those mechanism completely inadequate.  
Following the same approach with Segment Routing was simply not an option. It was during this discussion that Clarence came up with the idea that in SR every destination could have the intent (color) defined as part of the service configuration and signaled via BGP, allowing to automatically granularly steer traffic on top of a specific SR policy. 
The development of this idea is called Automated Steering and consist in the ability of the headend to steer traffic based on the color of the route defined as part of the service configuration (set via extended community color). The headend can automatically steer traffic over an existing SRTE policy with destination (end point of the policy) equal to the BGP Next Hop of the route and color equal to the color of the SRTE policy. 

But the automation and simplification doesn’t stop here.  If no policy exists to the destination for a specific color (intent) the headend can automatically set it up On Demand (On Demand Next-hop, ODN) based on a pre-configured template. The computation can be performed by the headend itself or rely on the SR-PCE if needed.  
 
 
![](/images/sr-pce-distributed-by-nature-fig4.png)

This approach applies to every BGP signaled service  (EVPN, VPNv4/v6, IPv4/v6) and it represents by far the most granular, efficient, and scalable Network Slicing solution currently available in the industry:  a de facto standard.

<br />
## SR-PCE, a Naturally Distributed Network Function

As most of the cases that requires traffic engineering are related to the steering of BGP based services (VPN L3 and L2), SR policies are more efficiently programmed ON Demand by the headend. The headend would have then the possibility to resolve the path on its own or,
 when  needed it would  delegated the computation to the SR-PCE (e.g., Multi-Domain, Disjoint paths etc.). In this way we ensure better flexibility, scalability,  and ability to timely reoptimize policies in case of topology changes, avoiding unnecessary load at centralized  level.

This architecture also allows to optimally distribute SR-PCE resources horizontally ensuring higher scale for large networks.  In a similar way Route Reflectors architectures are normally designed and scaled up, the SR-PCE resources can be distributed based on scaling requirements, topology domains, different organizations. SR-PCE can be also specialized by applications (e.g., bandwidth optimization vs Inter domain connectivity with SLA). The headend can select which SR-PCE to relay a path request that belong to a specific category .

A common design rule is that every SR-PCE (usually deployed in pairs for redundancy) will provide path computation for an area, domain or simply a subset of the network. In this way we can scale up to support very large networks. By receiving BGP-LS feeds every SR-PCE can have visibility of the full network topology to program end-to-end paths. This approach is addressing with the maximum simplicity the needs of the major part of existing networks scale (e.g., up to 50k network elements or even more in the future) avoiding  the need of  complex hierarchical architectures.

![](/images/sr-pce-distributed-by-nature-fig5.png)

As technology evolves and a huge amount of network metrics and KPIs are available, this distributed architecture allows the maximum scale with simplicity. On top of the SR-PCEs applications like Crosswork Optimization Engine or other future application could provide further traffic engineering optimization (e.g. congestion management) without representing a bottleneck.



