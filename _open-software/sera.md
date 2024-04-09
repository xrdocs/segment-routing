---
position: 130
published: true
breadnav: true
date: '2022-12-2 08:52 -0700'
title: SERA
app: false
header:
  teaser: images/open-software/sera.png
excerpt: >-
  SERA is a SEgment Routing Aware firewall that extends the Linux iptables firewall. It's capable of applying the iptables rules to the inner packet of received SR traffic. 
---

## Introduction

SERA is a SEgment Routing Aware firewall that extends the Linux iptables firewall. It's capable of applying the iptables rules to the inner packet of received SR traffic. 

SERA supports two modes of operation: 
- SERA basic mode: Uses the same set of rules defined for the legacy iptables and apply them directly to the Inner packet. It works for both Inner IPv4 and IPv6 packets and enabled per name-space using a sysctl, named  ip6t_seg.
- SERA advanced mode: Supports extended iptables rules to match outer header, SRH, and inner packet. It can Leverage SRv6 SID arguments, TLVs, or TAG and may apply differentiated processing based on the active SID (i.e., apply different rule sets for different SIDs). The advanced mode comes with some SR-specific actions. 
  
For more information, please refer to [SERA: SEgment Routing Aware Firewall for Service Function Chaining scenarios](http://netgroup.uniroma2.it/Stefano_Salsano/papers/18-ifip-sera-firewall-sfc.pdf).

The implementation of SERA is open-source and available on github at [SERA](https://github.com/SRouting/SERA) and [SR-iptables](https://github.com/SRouting/SR-iptables) for both data plane and control plane. 

The SRH matching part of SERA has been merged in the mainline of [Linux kernel 4.16](http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.16/) and [iptables release 1.6.2](https://www.netfilter.org/projects/iptables/downloads.html).
