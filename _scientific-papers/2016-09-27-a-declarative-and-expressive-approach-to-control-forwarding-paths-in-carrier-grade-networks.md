---
author: Segment Routing Team
published: true
date: '2016-09-27 08:22 -0700'
title: >-
  A Declarative and Expressive Approach to Control Forwarding Paths in
  Carrier-Grade Networks
excerpt: >-
  SDN simplifies network management by relying ondeclarativity (high-level
  interface) and expressiveness(network flexibility). We propose a solution to
  support those features while preserving high robustness and scalability as
  needed in carrier-grade networks. Our solution is based on (i) a two-layer
  architecture separating connectivity and optimization tasks; and (ii) a
  centralized optimizer called DEFO, which translates high-level goals expressed
  almost in natural language into compliant network configurations.      
tags:
  - segment-routing
---

## Abstract  

SDN simplifies network management by relying ondeclarativity (high-level interface) and expressiveness(network flexibility). We propose a solution to support those features while preserving high robustness and scalability as needed in carrier-grade networks. Our solution is based on (i) a two-layer architecture separating connectivity and optimization tasks; and (ii) a centralized optimizer called DEFO, which translates high-level goals expressed almost in natural language into compliant network configurations.   
  
Our evaluation on real and synthetic topologies shows that DEFO improves the state of the art by 

*  achieving better trade-offs for classic goals covered by previous works, 
*  supporting a larger set of goals (refined traffic engineering and service
chaining), and 
*  optimizing large ISP networks in few seconds. 

We also quantify the gains of our implementation,running Segment Routing on top of IS-IS,
over possible alternatives (RSVP-TE and OpenFlow).    

Renaud Hartert ∗ , Stefano Vissicchio ∗, Pierre Schaus ∗, Olivier Bonaventure ∗,
Clarence Filsfils † , Thomas Telkamp †, Pierre Francois ‡
∗ Université catholique de Louvain † Cisco Systems, Inc. ‡ IMDEA Networks Institute
∗ firstname.lastname@uclouvain.be † {cfilsfil,thtelkam}@cisco.com ‡ pierre.francois@imdea.org
{: .notice--info}


><http://conferences.sigcomm.org/sigcomm/2015/pdf/papers/p15.pdf>