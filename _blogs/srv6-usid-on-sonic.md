---
published: true
breadnav: true
date: '2023-06-02 10:00 -0700'
title: 'Building an SRv6 uSID Data Center Fabric with SONiC'
author: 'Bruce McDougall, Cisco Systems'
technology: 'SRv6'
category:
excerpt: 'Discover how the decoupled architecture of SONiC, combined with SRv6 uSID, offers operational simplicity, unified forwarding, and cost-effectiveness for network deployments. This blog provides insights into the proof-of-concept testing and the potential for highly automated, plug-and-play fabrics in data centers. Explore the configurations, benefits, and real-world examples of SRv6 uSID in SONiC, showcasing its capabilities in traffic engineering and service chaining.'
header:
teaser: 'images/open-software/sonic.png'
---    

<style>
div.highlighter-rouge, figure.highlight {
    position: relative;
    margin-bottom: 1em;
    /*font-family: Monaco,Consolas,"Lucida Console",monospace;*/
    font-family: Consolas,"Lucida Console",monospace;
    /*font-size: 1em;*/
    line-height: 1.3;
    border: 1px solid #f2f3f3;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0 0px 0.2px rgb(0 0 0 / 13%);
    margin: 0;
    padding: 1em;
}
div.highlighter-rouge pre.highlight {
    margin: 0;
    text-align: left;
}
div.highlighter-rouge pre.highlight code {
    white-space: pre-wrap;
    font-family: Monaco,Consolas,"Lucida Console",monospace;
}
a em {
    font-size: 1em;
}
.highlight .bold {
    font-weight: bold;
}
.blog-author {
    color: #676767;
    letter-spacing: 0.5px;
    font-weight: normal;
    font-size: 0.9em;
}
</style>

{: .blog-author}
Author: {{ page.author }}

**Simplicity always prevails.**

SONiC has been building momentum the last few years and is becoming a viable option for networks beyond the initial Hyperscaler deployments. A major driver of that momentum is SONiC’s decoupled software architecture, which makes a break from traditional monolithic network operating systems. A SONiC router is fundamentally a Linux machine plus containerized components which make up the routing and/or switching application.

This decoupled architecture offers a power combination of operational simplicity (Linux!) and software and feature agility, which align very nicely with the goals of SRv6 and SRv6 Network Programming.  SRv6 uSID gives us a very powerful tool to simplify networks as it operates natively over IPv6 and offers the ability to run a unified forwarding plane across network domains, while removing the expensive gateways performing encapsulation stitching at domain boundaries.

The SRv6 uSID solution outperforms the per-silo solutions. Over the last decade or so the networking industry has evolved an alphabet soup of different encapsulation types to perform different forwarding functions, such as VXLAN for overlays, NSH for service chaining, and MPLS for traffic engineering. This technology fragmentation leads to siloed operational environments and the need to invest in costly encap-stitching gateways. With SRv6 uSID we can unify all encapsulation services (Segmentation, Steering, Service Chain, etc.) under a common forwarding architecture which operates natively over IP. An IP-based Unified Forwarding Architecture that provides massive scale, operational simplicity, and is cost-effective as we eliminate expensive gateways and optimize functionality per MTU overhead.

uSID’s outperformance applies to the MPLS dataplane as well (e.g., hardware can push 3 times more uSIDs than MPLS labels; reduces the FIB entries and counters by 4 compared to MPLS; optimal load-balancing entropy). More info on SRv6 uSID scale compared to MPLS is available in the "Bell Canada: SRv6 uSID deployment" presentation at MPLS World Congress 2022 [MPLS WC 2022 - Bell Canada: SRv6 uSID Deployment – Benefits of an SRv6 uSID Fabric]({{ '/conferences/MPLS-WC-2022-Daniel-Voyer/' | relative_url }}).
 
![]({{ 'images/blogs/uSID-unified-solution.png' | relative_url }})
   
A SONiC fabric running SRv6 uSID makes for a compelling combination and we along with several operators are making investments to bring it about. As part of that effort, I did some proof-of-concept testing of my own and this blog is a report of my experiences. I’ve also published instructions and configs here: [srv6-labs/sonic-vs (github.com)](https://github.com/segmentrouting/srv6-labs/tree/main/sonic-vs)

My goal with the POC was to demonstrate SRv6 uSID capability, and more importantly simplicity and useability, in a multi-tenant BGP-based data center fabric. The POC shows the potential to create and run highly automated plug-and-play fabrics that can be dropped in with minimal day-1 configurations and low operational footprint and can be traffic engineered for optimal utilization. 

For POC’ing it was easiest for me to start with the SONiC-VS image. SONiC-VS is a kvm/qemu virtual machine image with a light CPU and memory footprint and is easy to use with tools such as virsh or gns3. In my testing I used virsh and built a 12-node CLOS topology consisting of a pair of ToRs, 4 leaf nodes, 4 spine nodes, and a pair of border leafs. 

In this blog I built the fabric in a fully virtualized fashion. However this is fully avialble with Cisco 8000 (or any Cisco Silicon One-based whitebox). A demo of SRv6 uSID in SONiC with Cisco Silicon One is available here: [Demo: SRv6 uSID in SONiC with Cisco Silicon One]({{ '/demos/20230602-demo-srv6-usid-in-sonic-with-cisco-silicon-one' | relative_url }}).

![](https://github.com/segmentrouting/srv6-labs/raw/main/sonic-vs/diagrams/sonic-vs-clos.png)
 

The 202305 SONiC release has support for SRv6 uSID (including SAI and FRR)<span id="a1">[¹](#1)</span>. In this POC, our engineering team applied some patches on top of SONiC 202305 to enable the static allocation of the uN and uA functionality. They are in the process of upstreaming the patch to the community. In the meantime, you can find the VS build here: 

[sonic-srv6-vs-rev4.img (2.5GB)](https://onedrive.live.com/download?cid=266D2E4F35D86653&resid=266D2E4F35D86653%21138084&authkey=AN9P9j7tPoEU3iU)
 
One of the features I was most excited to test with SONiC was SRv6 over BGP unnumbered. With BGP unnumbered we’re able to establish eBGP peering sessions over IPv6 link-local connections, and thus significantly simplify our router configuration and addressing scheme. For completeness I also built out a ‘numbered’ version of the topology with assigned IPv6 addresses for interfaces and BGP peering sessions, and successfully validated BGP route propagation and SRv6 uSID forwarding through both the unnumbered and numbered fabrics.  

I’ve seen different options for managing SONiC configurations via CLI or editing the /etc/sonic/config_db.json file. In my case I use the config_db.json file for interface configuration and a few global parameters like the nodes’ MAC addresses and BGP ASNs. Then I use FRR for BGP neighbors and address families, and for all SRv6 configurations. 

Example config_db.json:
[config_db.json (github.com)](https://github.com/segmentrouting/srv6-labs/blob/main/sonic-vs/config-unnumbered/sonic01/config_db.json)

Example frr.conf:
[frr.conf (github.com)](https://github.com/segmentrouting/srv6-labs/blob/main/sonic-vs/config-unnumbered/sonic01/frr.conf)

After bushwhacking through some learning curve, I had my SONiC fabric running with BGP unnumbered and exchanging IPv6 and VPN prefix info with SRv6 locator + End.DT function pairs. 

Example FRR SRv6 uSID configuration. In this case the uN SID is explicitly configured in FRR. In other scenarios, the uN SID may be automatically created through the IGP Protocol (e.g., IS-IS).

<div class="highlighter-rouge">
<pre class="highlight"><code>segment-routing
 srv6
  encapsulation
   source-address fc00:0:1::1
  locators
   locator MAIN
    behavior usid
    prefix fc00:0:1::/48 block-len 32 node-len 16
   exit
   !
  exit
  !
 exit
 !
 srv6
  explicit-sids
   sid fc00:0:1:: behavior uN
   exit
   !
  exit
  !
 exit
</code></pre>
</div>

I‘ve also configured BGP to use locator “MAIN":
 
<div class="highlighter-rouge">
<pre class="highlight"><code>router bgp 65001
 bgp router-id 10.0.0.1
 &lt;snip&gt;
 neighbor Ethernet0 interface remote-as 65003
 neighbor Ethernet4 interface remote-as 65003
 neighbor Ethernet8 interface remote-as 65005
 neighbor Ethernet12 interface remote-as 65005
 !
 segment-routing srv6
  locator MAIN
 exit
</code></pre>
</div>


FRR show segment-routing srv6 command output:
 
<div class="highlighter-rouge">
<pre class="highlight"><code>sonic01# show segment-routing srv6 locator 
Locator:
Name                 ID      Prefix                   Status
-------------------- ------- ------------------------ -------
MAIN                       1 fc00:0:1::/48            Up

sonic01# show segment-routing srv6 sid 
SID:
Address                 ID      Behavior                   Valid
----------------------- ------- -------------------------- -----
fc00:0:1::                    1 uN                          yes 
</code></pre>
</div>

From a dataplane perspective ingress and egress nodes successfully perform SRv6 encapsulation and decapsulation, and due to the seamless deployment nature of SRv6, the fabric itself behaves like an IPv6 fabric. 

Note that while the configurations in the GitHub repo have SRv6 uSID enabled on all nodes, it’s technically not necessary on the transit leaf and spine nodes so long as BGP is exchanging IPv6 underlay prefixes. The fact that SRv6 uSID is built on the foundation of IP routing, the Longest Prefix Match,  gives us the ability to do seamless deployment over IP fabrics.

Here is some example tcpdump output from a leaf node where I removed the SRv6 config:

<div class="highlighter-rouge">
<pre class="highlight"><code>admin@sonic06:~$ <span class="bold">sudo tcpdump -ni Ethernet0</span>
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on Ethernet0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
16:32:51.907316 IP6 fc00:0:1::1 > fc00:0:11:e000::: RT6 (len=2, type=4, segleft=0, last-entry=0, tag=0, [0]fc00:0:11:e000::) IP 10.101.1.2 > 10.101.11.1: ICMP echo request, id 69, seq 1865, length 64
16:32:51.910107 IP6 fc00:0:11::1 > fc00:0:1:e000::: RT6 (len=2, type=4, segleft=0, last-entry=0, tag=0, [0]fc00:0:1:e000::) IP 10.101.11.1 > 10.101.1.2: ICMP echo reply, id 69, seq 1865, length 64
</code></pre>
</div>

The non-SRv6 enabled leaf node is simply routing the traffic using standard IP Longest Prefix Match. 

My IPv6/SRv6 uSID fabric comes with several other benefits. uSID gives me up to 6 steering hops or 5 steering hops and VPN function bits in a single IPv6 destination address, so I get both granular traffic steering and VPN segmentation with lower overhead than VxLAN. And because its IPv6, my fabric achieves perfect load balancing with the IPv6 Flow Label that provides HW-friendly entropy at a shallow and fixed position.

## Traffic Engineering

My next POC goal was to validate traffic engineering in the fabric using SRv6 uSID. To do this I built a little packet generator script using [Scapy (scapy.net)](https://scapy.net/). The script forms UDP packets that are encapsulated in an outer IPv6 header where the destination address is a set of SRv6 uSID values that I’ve manipulated such that packets will traverse the path sonic01 &rarr; 03 &rarr; 07 &rarr; sonic11 &rarr; VPN decaps. 

For the purpose for this demo, I used this hard-coded packets. However, this can be achieved using the SRv6 Policy constructs. Here’s an example tcpdump output from transit leaf sonic03:

Ingress:
<div class="highlighter-rouge">
<pre class="highlight"><code>admin@sonic03:~$ <span class="bold">sudo tcpdump -ni Ethernet0</span>
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on Ethernet0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
03:32:59.202575 IP6 fc00:0:1::1 > <mark>fc00:0:3:7:11:e000::</mark> IP 10.101.11.2.22222 > 10.101.11.1.33333: UDP, length 0
</code></pre>
</div>

Egress:
<div class="highlighter-rouge">
<pre class="highlight"><code>admin@sonic03:~$ <span class="bold">sudo tcpdump -ni Ethernet8</span>
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on Ethernet8, link-type EN10MB (Ethernet), snapshot length 262144 bytes
03:33:13.983362 IP6 fc00:0:1::1 > <mark>fc00:0:7:11:e000::</mark> IP 10.101.11.2.22222 > 10.101.11.1.33333: UDP, length 0
</code></pre>
</div>

The tcpdump output shows uSID shift-and-forward behavior in action. Now I have a fabric I can traffic engineer!

## Service Insertion

My final goal for the POC was to demonstrate service insertion -a simple service chain- using SRv6 uSID. For this I attached a VPP instance with a scrubber appliance to the sonic02 ToR. This enables the source node to steer traffic through the "srubber" VNF in addition to the traffic engineering capabilities. 

Just in case your eyes haven’t entirely glazed over looking at tcpdumps, here is an example outbound packet as leaves sonic01 on its way to the scrubber VNF. 

<div class="highlighter-rouge">
<pre class="highlight"><code>21:29:35.430201 IP6 fc00:0:1::1 > <mark>fc00:0:3:2:faaf:11:e000::</mark> IP 10.101.1.2 > 10.102.12.1: ICMP echo request, id 0, seq 0, length 8
</code></pre>
</div>

The script forms UDP packets that are encapsulated in an outer IPv6 header where the destination address is a set of SRv6 uSID values that I’ve manipulated such that packets will traverse the path sonic01 &rarr; 03 &rarr; 02 &rarr; scrubber-VNF (SID 0xfaaf) &rarr; sonic11 &rarr; VPN decaps. 

Ingress-Scrubber VNF:
<div class="highlighter-rouge">
<pre class="highlight"><code>21:29:39.871321 IP6 fc00:0:1::1 > <mark>fc00:0:2:faaf:11:e000::</mark> IP 10.101.1.2 > 10.102.12.1: ICMP echo request, id 0, seq 0, length 8
</code></pre>
</div>

Egress-Scrubber VNF:
<div class="highlighter-rouge">
<pre class="highlight"><code>21:29:44.452142 IP6 fc00:0:1::1 > <mark>fc00:0:11:e000::</mark> IP 10.101.1.2 > 10.102.12.1: ICMP echo request, id 0, seq 0, length 8
</code></pre>
</div>

## Conclusion

All in all, the POC succeeded in its goals of demonstrating an SRv6/eBGP based DC fabric capable of supporting multi-tenancy and traffic steering, including service chaining. I was able to spin up a fabric quickly and easily, apply configs, and run both default path traffic and traffic that took a path I explicitly engineered. In theory this SONiC SRv6 fabric could come from the factory with the unnumbered configs pre-loaded and quite literally be plug and play. The GitHub repo referenced in this post is public so please feel free to download it for your own testing. We’re also happy to accept contributions if you have things to add or suggestions for improvement.

In our next SRv6 uSID-SONiC blog we'll explain how SRv6 uSID outperforms traditional ECMP-based fabrics for AI/ML training clusters, where the synchronization event in the network causes GPUs to be idle while waiting for the slowest path through the network to complete. The nature of the traffic (results are synchronous, high-bandwith and long-lived) differs from traditional DC traffic patters (most of it asynchronous, small-bandwidth, and short-lived flows). In this scenario traditional ECMP-based fabrics fail to provide optimal networking.
<br />
<hr />
<span id="1">¹</span> SRv6 uSID is available in SONiC since release 202211. SONiC 202305 provides several scale enhancements for SRv6 VPN and SRv6 Policy.[⏎](#a1)<br>
