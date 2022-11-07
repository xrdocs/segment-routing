---
published: true
breadnav: true
date: '2022-04-01 15:00 +0200'
title: 'SRv6 uSID Unreachable Prefix Announcement'
author: 'Jakub Horn, Cisco'
technology: 'SRv6'
excerpt: 'SRv6 uSID Unreachable Prefix Announcement'
teaser: images/demo-upa/teaser.png
---    
### *Demo Video*
{% include video id="i28RgnUcD4w" provider="youtube" %}

## Overview
Among many reasons for the wide adoption of SRv6 uSID technology is ultimate scalability. SRv6 uSID currently provides full feature parity with SR-MPLS but in a much simpler manner, and with much higher scalability. The key concept for infinite scalability is the applicability of classless routing (CIDR) to SRv6 uSID networks.

Let’s say we have a midsized network with 30k routers. It is obvious that we cannot handle such a network as a single IGP domain. We must split it into multiple IGP domains. Either using the hierarchical structure of IGP protocols (ISIS levels or OSPF areas) or even using different IGP processes. 


For simplicity, we split our network into 30 domains with 1000 nodes each. As we need to maintain any-to-any connectivity, an obvious option is to redistribute all SRv6 locators everywhere. But IGP protocols have their scalability limits as well. Attempt to redistribute all locators across would reach IGP limits. 

SRv6 offers a very elegant solution to that problem: summarization. Every border router will propagate a few summary prefixes instead of all locators. 

![Figure 1 - Summarization](/images/demo-upa/UPA_fig1.png)
<p align = "left">
 <i>Figure 1 - Summarization</i> 
</p>





In Figure 1 we can see an example of summarization. 1000 /48 Locator prefixes are summarized into the core as four /40 networks. As a result, in the core there will only be 120 summary routes instead of 30k, while still providing any-to-any connectivity. 120 networks in a single domain are simple to handle for any IGP routing protocol and easy to handle for any HW platform. 

For a network of this size, we will probably not do any additional summarization towards Domain 0, but for very large networks hierarchical summarization will be necessary.

Now we have a perfectly scalable network thanks to the reduced level of information propagated among domains via summarization. But consequently, PE1 does not see any failure happening outside of its local Domain0. So, when PE11 in Domain2 fails it cannot trigger BGP Prefix Independent Convergence (BGP PIC) on PE1. 

BGP Prefix Independent Convergence is a technology allowing fast switchover, in a prefix independent manner, to redundant paths in case of an egress PE failure. In a nutshell, the ingress PE1 receives many prefixes from a primary egress PE11 and the same set of prefixes from a secondary egress PE12. The ingress PE1 programs all primary prefix paths into the hardware forwarding table. the ingress PE1 also programs all prefix paths from the secondary egress PE12 into the hardware as backup paths. Then once the IGP of the ingress PE1 discovers the failure of the primary egress PE11, it just triggers an immediate switchover to the backup paths. 

To trigger the switchover, ingress PE needs to be notified about the failure of the primary egress PE. This notification comes naturally from IGP update in a single IGP domain or in multi-domain networks that are not using summarization. In such cases the ingress PE triggers BGP PIC and traffic restoration is very fast.

However, with summarization, the ingress PE will never be notified about an egress PE failure. Because the egress PE failure is hidden by the summary route which is not changing at all. Traffic restoration following an egress PE failure relies on BGP convergence, which can be very slow.

This demonstration shows how BGP PIC can be triggered within very large networks where summarization is in place. Technology to achieve it is called UPA: Unreachable Prefix Announcement.


## Demonstration network description
Our demonstration network is shown in Figure 2. 

![Figure 2 - Network](/images/demo-upa/UPA_fig2.png)
<p align = "left">
 <i>Figure 2 - Demonstration network</i> 
</p>

There are basically two ISIS domains. For this presentation, we are using different ISIS levels, but the solution will work the same way with redistribution between two IS-IS instances. 

In between domains we have a single Area Border Router (ABR). The ABR is responsible for routing information propagation between domains. This router can summarize routing information for each domain. 

In Domain 2 we have two redundant PE routers: PE11 and PE12. Both PEs are connected to a single CE1 and this CE is connected to the IXIA traffic generator.

IXIA is advertising 800k IPv4 prefixes to the CE router. The CE router advertises all these prefixes to PE11 and PE12. Both PEs are advertising the prefixes to the Route Reflector in VPNv4 address family. The Route Reflector propagates them towards the ingress PE1. Note that the solution also works for other address-families.

So here we can see how many routes are in the VRF named “INTERNET” on PE1:
 
 ```
  RP/0/RP0/CPU0:PE1#sh route vrf INTERNET summary

  Route Source                     Routes     Backup     Deleted     Memory(bytes)
  connected                        1          0          0           216
  local                            1          0          0           216
  static                           1          0          0           216
  bgp 100                          799861     0          0           204764416
  dagr                             0          0          0           0
  application l2vpn_evpn           0          0          0           0
  Total                            799864     0          0           204765064
```

BGP PIC is enabled on ingress PE1, hence we can verify for one specific route (1.0.5.0/24) that the primary path is coming from PE11 and the backup path is coming from PE12:

```
RP/0/RP0/CPU0:PE1#sh route vrf INTERNET 1.0.5.0/24 detail
Sat Apr  2 07:45:30.457 EDT

Routing entry for 1.0.5.0/24
  Known via "bgp 100", distance 200, metric 0
  Tag 102
  Number of pic paths 1 , type internal
  Installed Apr  2 07:37:30.169 for 00:08:00
  Routing Descriptor Blocks
    fccc:cc00:2011::1, from fccc:cc00:9::1
      Nexthop in Vrf: "default", Table: "default", IPv6 Unicast, Table Id: 0xe0800000
      Route metric is 0
      Label: None
      Tunnel ID: None
      Binding Label: None
      Extended communities count: 0
      Source RD attributes: 0x0000:11:1
      NHID:0x0(Ref:0)
      SRv6 Headend: H.Encaps.Red [f3216], SID-list {fccc:cc00:2011:efa0::}
      MPLS eid:0x11c3000000001
    fccc:cc00:2012::1, from fccc:cc00:9::1, BGP backup path
      Nexthop in Vrf: "default", Table: "default", IPv6 Unicast, Table Id: 0xe0800000
      Route metric is 0
      Label: None
      Tunnel ID: None
      Binding Label: None
      Extended communities count: 0
      Source RD attributes: 0x0000:12:1
      NHID:0x0(Ref:0)
      SRv6 Headend: H.Encaps.Red [f3216], SID-list {fccc:cc00:2012:efa1::}
      MPLS eid:0x11c2f00000001
  Route version is 0xa1 (161)
  No local label
  IP Precedence: Not Set
  QoS Group ID: Not Set
  Flow-tag: Not Set
  Fwd-class: Not Set
  Route Priority: RIB_PRIORITY_RECURSIVE (12) SVD Type RIB_SVD_TYPE_REMOTE
  Download Priority 3, Download Version 223884738
  No advertising protos.
```
The IXIA port on the left sends 800k streams of measurement traffic, one to each of the BGP prefixes, to verify connectivity to all 800k prefixes. IXIA uses packet loss to measure convergence time in case of failure. We will simulate primary egress PE11 failure by shutting down its core facing interface.

To demonstrate the efficiency of UPA, we will do three different measurements of network convergence. 
1.	Without summarization
2.	With summarization
3.	With summarization and UPA enabled


## Convergence without summarization
Without any summarization configured on the ABR, ingress PE1 receives both PE11 and PE12 locators:
```
RP/0/RP0/CPU0:PE1#sh route ipv6 | incl fccc:cc00:20

i ia fccc:cc00:2011::/48
i ia fccc:cc00:2012::/48
```
Once we trigger the PE11 failure, IGP deletes the locator prefix of PE11 and PE1 triggers BGP PIC.

![Figure 3 - IXIA - Failure without summarization](/images/demo-upa/UPA_fig3.png)
<p align = "left">
 <i>Figure 3 - IXIA - Failure without summarization</i> 
</p>

The IXIA measurement shows that convergence is very fast: 353 milliseconds. This is the sequence of events during that time:

1.	The IGP in domain 2 detects PE11’s failure
2.	The IGP floods the failure throughout domain 2
3.	The ABR propagates that information into domain 1
4.	The IGP in domain 1 floods the information
5.	PE1 receives the information and triggers BGP PIC – switching to all preprogrammed backup paths 

This solution can only be used for small networks, where the IGP scale allows all locators to be flooded within the domain.


## Convergence with summarization
In this test, we consider a larger network that requires summarization. Summarization configuration on the ABR, summarizing the domain 2 locator prefixes into domain 1:
```
router isis 100
 address-family ipv6 unicast
  summary-prefix fccc:cc00:2000::/40 level 2
```

After configuring the summary prefix, PE1 no longer receives individual locators of domain 2:

```
RP/0/RP0/CPU0:PE1#sh route ipv6 | incl fccc:cc00:20

i ia fccc:cc00:2000::/40

```
Therefore, the IGP of domain 1 no longer receives PE11 failure notifications and BGP PIC can’t be triggered anymore on PE1.

![Figure 4 - IXIA - Failure with summarization](/images/demo-upa/UPA_fig4.png)
<p align = "left">
 <i>Figure 4 - IXIA - Failure with summarization</i> 
</p>

In this measurement, the convergence was very slow (more than 50 seconds) due to the delay of BGP detecting and propagating the failure. This is the sequence of events:

1.	The Route Reflector detects the failure of the BGP session to PE11
2.	The Route Reflector sends BGP withdraw messages to PE1 for all prefixes, one by one 
3.	PE1 reprograms the FIB entry for each prefix

The overall convergence time depends on the number of prefixes. The more prefixes the longer the convergence time will be. But we need fast BGP PIC convergence even in very large networks where summarization is used!


## Unreachable Prefix Announcement
The solution is UPA – Unreachable Prefix Announcement. What is it and how does it work? 

Essentially, UPA is a regular IGP update that announces the unreachability of a prefix. UPA informs the ingress PE about an egress PE failure and enables the ingress PE to trigger BGP PIC. 

The unreachability property of the prefix is carried by using an “unreachable” metric, which is already part of the ISIS protocol definitions (According to RFC5308, any prefix advertised metric larger than MAX_V6_PATH_METRIC 0xfe000000 must not be considered during path computation and can be used for other purposes). Thus, UPA doesn’t require any protocol extension. 

The figure below shows the example network in stable state. The IGP of PE11 advertises its LSP with locator /48 into domain 2. The ABR receives this LSP and advertises the /40 summary prefix into domain 1. PE1 receives this summary prefix that provides reachability to PE11.

![Figure 5 - UPA Stable state](/images/demo-upa/UPA_fig5.png)                    
<p align = "left">
 <i>Figure 5 - UPA Stable state</i> 
</p>

When the ABR loses reachability to PE11 in domain 2, the ABR recognizes that the locator of PE11 is part of the summary prefix and generates a UPA for the locator of PE11. The UPA is flooded throughout domain 1. The IGP of PE1 receives the UPA and triggers BGP PIC for all BGP prefixes learned via PE11.

![Figure 6 - UPA Remote PE failure](/images/demo-upa/UPA_fig6.png)                     
<p align = "left">
 <i>Figure 5 - UPA Remote PE failure</i> 
</p>
The goal of UPA is to notify about unreachability of prefixes so routers that are part of a remote domain can act upon this notification. Thus, UPA prefixes are not intended to be persistent.

After some time period the ABRs automatically withdraw the UPA. This time period is to allow full BGP convergence and is configurable.

For UPA to work, only the ABRs and ingress PEs routers need to be upgraded. All intermediate nodes will flood the UPA prefix seamlessly.


## Convergence with summarization and UPA

Unreachable Prefix Announcement configuration is very simple. It needs to be configured on the ABR – to generate the UPA route:
```
router isis 100
 address-family ipv6 unicast
  summary-prefix fccc:cc00:2000::/40 level 2 adv-unreachable
```
And also on the ingress PE router to react on UPA:
```
router isis 100 
address-family ipv6 unicast
  prefix-unreachable
   rx-process-enable
```
Now we can simulate a PE11 failure and measure convergence using IXIA.

![Figure 7 - IXIA - Failure with summarization and UPA](/images/demo-upa/UPA_fig7.png)
<p align = "left">
 <i>Figure 7 - Failure with summarization and UPA</i> 
</p>
We can see that the convergence time is exactly the same as without summarization, precisely 353 milliseconds. 
This is the sequence of events during that time:
1.	The IGP in domain 2 detects PE11’s failure
2.	The IGP floods the failure throughout domain 2
3.	The ABR receives the failure information, generates a UPA for PE11’s prefixes and sends it into domain 1
4.	The IGP in domain 1 floods the UPA
5.	PE1 receives the UPA and triggers BGP PIC – switching to all preprogrammed backup paths 

This is a snippet of the ISIS LSP showing the UPA generated by the ABR:
```
ABR.00-00           * 0x0000071b   0x6e13        1068 /*            0/0/0
  Area Address:   49
  SRv6 Locator:   MT (IPv6 Unicast) fccc:cc00:4::/48 D:0 Metric: 0 Algorithm: 0
    Prefix Attribute Flags: X:0 R:0 N:0 E:0 A:0
    END SID: fccc:cc00:4:: uN (PSP/USD)
      SID Structure:
        Block Length: 32, Node-ID Length: 16, Func-Length: 0, Args-Length: 0
……SNIP………
        
  SRv6 Locator: MT (IPv6 Unicast) fccc:cc00:2011::/48 D:0 Metric: 4261412865 Algorithm: 0
    Prefix Attribute Flags: X:0 R:1 N:0 E:0 A:0
  NLPID:          0x8e
  Hostname:       ABR
……SNIP………
  MT:             IPv6 Unicast                                 0/0/0
  Metric: 0          MT (IPv6 Unicast) IPv6 fccc:cc00:4::/48
    Prefix Attribute Flags: X:0 R:0 N:0 E:0 A:0
  Metric: 20         MT (IPv6 Unicast) IPv6 fccc:cc00:5::/48
    Prefix Attribute Flags: X:0 R:1 N:0 E:0 A:0
  Metric: 4261412865 MT (IPv6 Unicast) IPv6 fccc:cc00:2011::/48
    Prefix Attribute Flags: X:0 R:1 N:0 E:0 A:0
  Metric: 10         MT (IPv6 Unicast) IPv6-External fccc:cc00:2000::/40
    Prefix Attribute Flags: X:0 R:0 N:0 E:0 A:0
……SNIP………
```
We can see that the ABR still advertises the summary /40 prefix. The ABR also advertises the UPA: prefix fccc:cc00:2011::/48 with metric 4261412865 (0xFE000001). This metric value is the default value of an “unreachable” metric in our implementation, it can be configured if necessary. As indicated before, the UPA is present in the ISIS LSP for a period of time to allow BGP convergence. It will be automatically removed from the ISIS LSP after configurable time (3 minutes by default).

## Conclusion
Summarization enables scalability for very large SRv6 networks while preserving unprecedented simplicity. When summarization is used, failures of PEs in remote domains cannot be recognized by a local PE, hence BGP PIC cannot be triggered for such failures.

UPA – Unreachable Prefix Announcement – allows notification of prefix unreachability in multi-domain networks where summarization is used, hereby enabling any PE to trigger BGP PIC for remote PE failures. 

By not requiring any protocol extension, UPA is very simple to deploy and needs to be enabled only on ABRs and ingress PEs. Transit nodes will propagate UPA without any code or configuration changes.

## Industry quotes

*“SRv6 architecture has provided unprecedented scale to the Rakuten transport domain; however, critical SLA for various business-critical applications are impacted due to the prevalent multi-domain BGP PIC problem. UPA solution has unravelled it by providing a simple, scalable solution to our convergence problem, and the best part is that it can interwork in any mixed multivendor deployments.”*

***Amit Dhamija*** *, Principal Architect – Strategy & Architecture, Rakuten*


*"The idea developed behind UPA solves the problem of “PE unreachable when route summarization is used”, in the most easy way, by reusing unreachable metric as depicted in RFC5308. This is going to great stability for a greatly scalable design."*

***Daniel Voyer*** *, Technical Fellow - Network, Bell Canada*
