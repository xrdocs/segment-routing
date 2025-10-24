---
published: true
breadnav: true
date: '2025-08-26 01:00 +0200'
title: 'Open Source Summit Europe 2025 - SONiC SRv6 uSID Demo'
author: 'Kris Michielsen, Cisco'
technology: 'SRv6'
excerpt: 'SRv6 has been a key feature in SONiC for many years, supported through collaboration among various SONiC Ecosystem partners. Recently, Alibaba, Cisco, Microsoft, and Nvidia have worked closely to further enhance SRv6 for AI backend use-cases. At Open Source Summit Europe 2025, Cisco and Microsoft have showcased how SRv6 in SONiC enables wide range of DC use-cases including AI Backend.'
teaser: '/images/open-software/sonic.png'
---    
<style>
code {
    letter-spacing: 0px;
    font-size: 1.1em;
    white-space:pre-wrap;
}
.single {
    text-align: left;
}
</style>

SRv6 has been a key feature in SONiC for many years, supported through collaboration among various SONiC Ecosystem partners. Recently, Alibaba, Cisco, Microsoft, and Nvidia have worked closely to further enhance SRv6 for AI backend use-cases.

At Open Source Summit Europe 2025, Cisco and Microsoft have showcased how SRv6 uSID in SONiC enables wide range of DC use-cases including AI Backend.

&nbsp;
# Overview slides

{% include pdf link="images/2025-08-26-oss-eu-2025-usid-sonic-demo.pdf" %}


&nbsp;
# SONiC SRv6 Use Cases Demonstration

&nbsp;
## Overview

This demonstration covers two distinct use cases leveraging SRv6 uSID:
- [SRv6 uSID AI backend](#srv6-usid-ai-backend): Showcases an SRv6-enabled AI backend scenario.
- [SRv6 uSID L3VPN](#srv6-usid-l3vpn): Demonstrates establishing Layer 3 VPN connectivity.

&nbsp;

## <a name="srv6-usid-ai-backend"></a>Use Case 1: SONiC SRv6 uSID AI backend

&nbsp;
### Preparation

Clone the github repo:
```
git clone https://github.com/srv6-sonic/oss-eu-2025.git
cd oss-eu-2025
```

Deploy the AI Backend use case topology:
```
cd use-cases/SRv6-AI-Backend
sudo ./srv6_ai_backend.sh deploy
```

&nbsp;
### Reference topology

![Figure 1 - SONiC SRv6 uSID AI Backend](/images/2025-08-26-oss-eu-2025-sonic-srv6-demo/SONiC-SRv6-demo-AI-backend.png)
<p align = "left">
 <i>Figure 1 - SONiC SRv6 uSID AI Backend</i>
</p>

This setup uses a Clos topology of sonic-vs nodes, comprising two spines (01T1 and 02T1) and two leaves (01T0 and 02T0).  NIC-A and NIC-B are SRv6-enabled NICs.

**No routing protocols are used in the network.** All reachability is achieved through static routes.

NIC-B is configured with two global IPv6 addresses:
- lo0: `fcbb:bbbb:b001::1/128`
- eth1: `2001:db8:1:a001::a001/64`

Let's verify NIC-B's IPv6 address configuration:
```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-AI-Backend$ sudo ./srv6_ai_backend.sh shell NIC-B
root@NIC-B:/# ip -6 address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 state UNKNOWN qlen 1000
    inet6 fcbb:bbbb:b001::1/128 scope global
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
51: eth1@if52: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP qlen 1000
    inet6 2001:db8:2:b001::b001/64 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::1c87:aaff:fe30:d84b/64 scope link
       valid_lft forever preferred_lft forever
```

&nbsp;
### Discussion

Before proceeding, we need to remove a pre-existing route on NIC-A that points to NIC-B's locator prefix (`fcbb:bbbb:b001::/48`). This route was installed by the deployment script and would interfere with demonstrating the default path.

```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-AI-Backend$ sudo ./srv6_ai_backend.sh shell NIC-A
root@NIC-A:/# sudo ip route del fcbb:bbbb:b001::/48
```

After deleting the specific route, pings from NIC-A to NIC-B will now follow the default best path, consting of two ECMP paths.
```
root@NIC-A:/# ping fcbb:bbbb:b001::1 -I fcbb:bbbb:a001::1 -c 5
PING fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1) from fcbb:bbbb:a001::1 : 56 data bytes
64 bytes from fcbb:bbbb:b001::1: icmp_seq=1 ttl=61 time=0.470 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=2 ttl=61 time=0.866 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=3 ttl=61 time=0.813 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=4 ttl=61 time=0.376 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=5 ttl=61 time=0.380 ms

--- fcbb:bbbb:b001::1 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4085ms
rtt min/avg/max/mdev = 0.376/0.581/0.866/0.214 ms
```

To visualize the ECMP paths from NIC-A to NIC-B, we can use traceroute for IPv6.
On Ubuntu, you can use the following commands to install traceroute for IPv6:
```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-AI-Backend$ sudo apt install traceroute
```

Now traceroute the path to NIC-B using ICMP probes (-I argument).
```
root@NIC-A:/# traceroute6 fcbb:bbbb:b001::1 -s fcbb:bbbb:a001::1 -I
traceroute to fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1), 30 hops max, 80 byte packets
 1  2001:db8:1:a001::1 (2001:db8:1:a001::1)  0.202 ms  0.151 ms  0.146 ms
 2  2001:db8:1:1001::1001 (2001:db8:1:1001::1001)  0.516 ms  0.573 ms  0.570 ms
 3  2001:db8:2:1001::2 (2001:db8:2:1001::2)  0.566 ms  0.562 ms  0.559 ms
 4  fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1)  0.956 ms  0.959 ms  0.868 ms
```

To observe the ECMP load balancing, we can vary the IPv6 Flow-label value (-l argument).
Due to ECMP hashing, different flow labels can cause packets to take different paths.
```
root@NIC-A:/# traceroute6 fcbb:bbbb:b001::1 -s fcbb:bbbb:a001::1 -I -l 1
traceroute to fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1), 30 hops max, 80 byte packets
 1  2001:db8:1:a001::1 (2001:db8:1:a001::1)  0.263 ms  0.218 ms  0.247 ms
 2  2001:db8:1:1001::1001 (2001:db8:1:1001::1001)  0.646 ms  0.762 ms  0.764 ms
 3  2001:db8:2:1001::2 (2001:db8:2:1001::2)  1.123 ms  1.125 ms  1.121 ms
 4  fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1)  1.268 ms  1.555 ms  1.554 ms
```

```
root@NIC-A:/# traceroute6 fcbb:bbbb:b001::1 -s fcbb:bbbb:a001::1 -I -l 2
traceroute to fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1), 30 hops max, 80 byte packets
 1  2001:db8:1:a001::1 (2001:db8:1:a001::1)  0.308 ms  0.325 ms  0.337 ms
 2  2001:db8:1:1002::1002 (2001:db8:1:1002::1002)  0.744 ms  0.760 ms  0.771 ms
 3  2001:db8:2:1002::2 (2001:db8:2:1002::2)  1.229 ms  1.259 ms  1.278 ms
 4  fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1)  1.287 ms  1.305 ms  1.392 ms
```

As demonstrated, different Flow-label values result in probes traversing different paths. For instance, Flow-label value 1 passes through node 01T1 (`2001:db8:1:1001::1001`), while Flow-label 2 passes through node 02T1 (`2001:db8:1:1002::1002`), showcasing the ECMP behavior.

To enable SRv6 overlay transport, we need to configure encapsulation at NIC-A and decapsulation at NIC-B.
Note that this use case does not involve virtualization (VPNs).

Decapsulation at NIC-B was already configured by the deployment script.
To decapsulate the packets, an explicit uDT46 SID with value 0xfe09 is configured.
Two forwarding entries are installed for this SID: one for the uDT46 only (/48) and another for uN + uDT46 (/64).
The behavior is configured to lookup the inner packet destination in the GRT.
```
# Add uDT46 to decapsulate traffic
ip link add vrfdefault type vrf table main
ip link set vrfdefault up
ip -6 route add fcbb:bbbb:fe09::/48 encap seg6local action End.DT46 vrftable main dev vrfdefault
ip -6 route add fcbb:bbbb:B001:fe09::/64 encap seg6local action End.DT46 vrftable main dev vrfdefault
```

The equivalent configuration was also applied on NIC-A:
```
# Add uDT46 to decapsulate traffic
ip link add vrfdefault type vrf table main
ip link set vrfdefault up
ip -6 route add fcbb:bbbb:fe09::/48 encap seg6local action End.DT46 vrftable main dev vrfdefault
ip -6 route add fcbb:bbbb:A001:fe09::/64 encap seg6local action End.DT46 vrftable main dev vrfdefault
```

On NIC-A, we now reconfigure the static route to instantiate the H.Encaps.Red behavior for traffic destined for NIC-B's locator prefix (`fcbb:bbbb:B001::/48`):
```
# Steer IPv6 traffic over SID List
ip -6 route add fcbb:bbbb:B001::/48 encap seg6 mode encap.red segs fcbb:bbbb:1:1001:2:B001:fe09:: dev eth1
```

With this route, packets destined for `fcbb:bbbb:B001::/48` will be steered over the specified SID list <`fcbb:bbbb:1:1001:2:B001:fe09::`>. These packets are encapsulated (H.Encaps.Red) in an outer IPv6 header with the Destination Address set to `fcbb:bbbb:1:1001:2:B001:fe09::`.
This SID list directs the packets through the sequence of nodes 01T0 (`fcbb:bbbb:1::`), 01T1 (`fcbb:bbbb:1001::`), and 02T0 (`fcbb:bbbb:2::`) before reaching NIC-B's uDT46 SID (`fcbb:bbbb:B001:fe09::`).

The traceroute tool does not display intermediate hops for the encapsulated packets.
However, a tcpdump packet capture on NIC-A's eth1 interface will reveal the encapsulated packets.

First, start capturing packets on NIC'A's eth1 interface in one terminal.
Then initiate a ping from NIC-A to NIC-B in another terminal:

Terminal 1:
```
root@NIC-A:/# ping fcbb:bbbb:b001::1 -I fcbb:bbbb:a001::1 -c 1
PING fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1) from fcbb:bbbb:a001::1 : 56 data bytes
64 bytes from fcbb:bbbb:b001::1: icmp_seq=1 ttl=64 time=0.978 ms

--- fcbb:bbbb:b001::1 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.978/0.978/0.978/0.000 ms
```

Terminal 2:
```
root@NIC-A:/# tcpdump -i eth1 -vvv
tcpdump: listening on eth1, link-type EN10MB (Ethernet), snapshot length 262144 bytes

15:21:14.293515 IP6 (flowlabel 0xf7adf, hlim 64, next-header IPv6 (41) payload length: 104) fcbb:bbbb:a001::1 > fcbb:bbbb:1:1001:2:b001:fe09:0: IP6 (flowlabel 0xf7adf, hlim 64, next-header ICMPv6 (58) payload length: 64) fcbb:bbbb:a001::1 > fcbb:bbbb:b001::1: [icmp6 sum ok] ICMP6, echo request, id 32016, seq 1

15:21:14.294468 IP6 (flowlabel 0x31f92, hlim 61, next-header IPv6 (41) payload length: 104) fcbb:bbbb:b001::1 > fcbb:bbbb:a001:fe09::: IP6 (flowlabel 0x31f92, hlim 64, next-header ICMPv6 (58) payload length: 64) fcbb:bbbb:b001::1 > fcbb:bbbb:a001::1: [icmp6 sum ok] ICMP6, echo reply, id 32016, seq 1

2 packets captured
2 packets received by filter
0 packets dropped by kernel
```

The tcpdump output confirms the SRv6 encapsulation:
The echo request packet is `(SA=fcbb:bbbb:a001::1, DA=fcbb:bbbb:1:1001:2:b001:fe09:0)(SA=fcbb:bbbb:a001::1, DA=fcbb:bbbb:b001::1)(ICMP6)`.
The echo reply packet is `(SA=fcbb:bbbb:b001::1, DA=fcbb:bbbb:a001:fe09::)(SA=fcbb:bbbb:b001::1, DA=fcbb:bbbb:a001::1)(ICMP6)`.

If a path (e.g., via node 01T1) experiences an issue, a controller can quickly update the route on NIC-A to steer traffic through an alternate path, such as via node 02T1.

To demonstrate this, we can replace the current route on NIC-A to use a different SID list, effectively rerouting traffic through node 02T1:
```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-AI-Backend$ sudo ./srv6_ai_backend.sh shell NIC-A
root@NIC-A:/# ip -6 route replace fcbb:bbbb:B001::/48 encap seg6 mode encap.red segs fcbb:bbbb:1:1002:2:B001:fe09:: dev eth1
```

This command updates the static route on NIC-A, changing the Segment List to fcbb:bbbb:1:1002:2:B001:fe09::. This new list directs traffic through nodes 01T0, 02T1, and 02T0, effectively bypassing 01T1. This highlights the flexibility of SRv6 in steering traffic based on operational needs or network conditions.

&nbsp;
<hr/>
&nbsp;

## <a name="srv6-usid-l3vpn"></a>Use Case 2: SONiC SRv6 uSID L3VPN

This demonstration focuses on establishing L3VPN connectivity using SRv6 uSID. We will:

- Examine the reference network topology.
- Verify the control plane and data plane for both the underlay and VPN overlay.
- Confirm end-to-end data plane connectivity by pinging from NIC-A to NIC-B, demonstrating the end-to-end SRv6 path.

&nbsp;
### Preparation

Clone the github repo:
```
git clone https://github.com/srv6-sonic/oss-eu-2025.git
cd oss-eu-2025
```

Deploy the L3VPN use case topology:
```
cd use-cases/SRv6-L3VPN
sudo ./srv6_l3vpn.sh deploy
```

&nbsp;
### Reference topology

![Figure 1 - SONiC SRv6 uSID L3VPN](/images/2025-08-26-oss-eu-2025-sonic-srv6-demo/SONiC-SRv6-demo-L3VPN.png)
<p align = "left">
 <i>Figure 1 - SONiC SRv6 uSID L3VPN</i>
</p>

The setup uses a Clos topology composed of SONiC virtual switch (sonic-vs) nodes. It includes two spine nodes (01T1 and 02T1) and two leaf nodes (01T0 and 02T0).  The leaf nodes function as L3VPN PEs. NIC-A and NIC-B serve as CEs in the L3VPN setup.

The reachability between PE and CE is established using static routes.
The overlay and underlay reachability between the PEs is managed via hop-by-hop link-peering eBGP.

NIC-B is configured with two global IPv6 addresses:
- lo0: `fcbb:bbbb:b001::1/128`
- eth1: `2001:db8:2:b001::b001/64`

Let's verify NIC-B's configuration by inspecting its IPv6 addresses:
```
ubuntu@server$ sudo ./srv6_l3vpn.sh shell NIC-B
root@NIC-B:/# ip -6 address show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 state UNKNOWN qlen 1000
    inet6 fcbb:bbbb:b001::1/128 scope global
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
23: eth1@if24: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 state UP qlen 1000
    inet6 2001:db8:2:b001::b001/64 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::5020:feff:fe10:72b4/64 scope link
       valid_lft forever preferred_lft forever
```

Similarly, NIC-A also has two global IPv6 addresses configured:
- lo0: fcbb:bbbb:a001::1/128
- eth1: 2001:db8:1:a001::a001/64

&nbsp;
### Discussion

The primary goal of this L3VPN demo is to verify reachability between NIC-A and NIC-B. Specifically, we aim to ping the loopback address of NIC-B (`fcbb:bbbb:b001::1`) from NIC-A. To achieve this, we will first trace how NIC-B's loopback address is routed through the network.

NIC-A can reach NIC-B's loopback via the connected node 01T0 (interface address `2001:db8:1:a001::1`).
Let's examine NIC-A's routing table.
```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-L3VPN$ sudo ./srv6_l3vpn.sh shell NIC-A
root@NIC-A:/#
root@NIC-A:/# ip -6 route get fcbb:bbbb:b001::1/128
fcbb:bbbb:b001::1 from :: via 2001:db8:1:a001::1 dev eth1 src 2001:db8:1:a001::a001 metric 1024 pref medium
```

This output confirms that NIC-A's traffic destined for `fcbb:bbbb:b001::1` will be sent via `2001:db8:1:a001::1` on eth1.

Interface Ethernet0 on node 01T0 is associated with vrf Vrf9.
```
cisco@build-vm:~/git/oss-eu-2025/use-cases/SRv6-L3VPN$ sudo ./srv6_l3vpn.sh shell 01T0
root@01T0:/# show vrf
sudo: docker: command not found
VRF    Interfaces
-----  ------------
Vrf9   Ethernet0
```

Node 01T0 receives NIC-B's loopback prefix from spine odes 01T1 and 02T1 via BGP VPN routes.
We can inspect these routes using FRR's CLI, `vtysh`.
```
root@01T0:/# vtysh -c "show bgp ipv6 vpn wide"
BGP table version is 2, local router ID is 1.1.1.1, vrf id 0
Default local pref 100, local AS 65001
Status codes:  s suppressed, d damped, h history, u unsorted, * valid, > best, = multipath,
               i internal, r RIB-failure, S Stale, R Removed
Nexthop codes: @NNN nexthop's vrf id, < announce-nh-self
Origin codes:  i - IGP, e - EGP, ? - incomplete
RPKI validation codes: V valid, I invalid, N Not found

     Network                                      Next Hop                                  Metric LocPrf Weight Path
Route Distinguisher: 1:9
 *>  2001:db8:1:a001::/64                         ::@37<                                         0         32768 ?
    UN=:: EC{99:99} label=917504 sid=fcbb:bbbb:1:: sid_structure=[32,16,16,0] type=bgp, subtype=5
 *>  fcbb:bbbb:a001::/48                          2001:db8:1:a001::a001@37<                      0         32768 ?
    UN=2001:db8:1:a001::a001 EC{99:99} label=917504 sid=fcbb:bbbb:1:: sid_structure=[32,16,16,0] type=bgp, subtype=5
Route Distinguisher: 2:9
 *>  2001:db8:2:b001::/64                         2001:db8:1:1001::1001                                        0 65011 65002 ?
    UN=2001:db8:1:1001::1001 EC{99:99} label=917504 sid=fcbb:bbbb:2:: sid_structure=[32,16,16,0] type=bgp, subtype=0
 *=                                               2001:db8:1:1002::1002                                        0 65012 65002 ?
    UN=2001:db8:1:1002::1002 EC{99:99} label=917504 sid=fcbb:bbbb:2:: sid_structure=[32,16,16,0] type=bgp, subtype=0
 *>  fcbb:bbbb:b001::/48                          2001:db8:1:1001::1001                                        0 65011 65002 ?
    UN=2001:db8:1:1001::1001 EC{99:99} label=917504 sid=fcbb:bbbb:2:: sid_structure=[32,16,16,0] type=bgp, subtype=0
 *=                                               2001:db8:1:1002::1002                                        0 65012 65002 ?
    UN=2001:db8:1:1002::1002 EC{99:99} label=917504 sid=fcbb:bbbb:2:: sid_structure=[32,16,16,0] type=bgp, subtype=0

Displayed 4 routes and 6 total paths
```

Further details for the specific VPN route `fcbb:bbbb:b001::/48`.
```
root@01T0:/# vtysh -c "show bgp ipv6 vpn fcbb:bbbb:b001::/48"
BGP routing table entry for 2:9:fcbb:bbbb:b001::/48, version 3
not allocated
Paths: (2 available, best #1)
  Advertised to non peer-group peers:
  2001:db8:1:1001::1001 2001:db8:1:1002::1002
  65011 65002
    2001:db8:1:1001::1001 from 2001:db8:1:1001::1001 (11.11.11.11)
      Origin incomplete, valid, external, multipath, best (Older Path)
      Extended Community: RT:99:99
      Remote label: 917504
      Remote SID: fcbb:bbbb:2::, sid structure=[32 16 16 0 16 48]
      Last update: Fri Sep 19 16:48:27 2025
  65012 65002
    2001:db8:1:1002::1002 from 2001:db8:1:1002::1002 (12.12.12.12)
      Origin incomplete, valid, external, multipath
      Extended Community: RT:99:99
      Remote label: 917504
      Remote SID: fcbb:bbbb:2::, sid structure=[32 16 16 0 16 48]
      Last update: Fri Sep 19 16:48:27 2025
```

Node 01T0 receives the route `fcbb:bbbb:b001::/48` with the VPN SID `fcbb:bbbb:2:e000::`. The function part of the SID (e000) is transposed into the Remote label field as 917504 (which is 0xe0000 in decimal).
Note that the spine nodes have propagated this route in BGP using nexthop-self while keeping the VPN SID unchanged.

Node 01T0 installs one of these paths into its RIB, applying H.Encaps.Red behavior. This behavior means the packet will be encapsulated in an outer IPv6 header with DA=`fcbb:bbbb:2:e000::`.
```
root@01T0:/# vtysh -c "show ipv6 route vrf Vrf9"
Codes: K - kernel route, C - connected, L - local, S - static,
       R - RIPng, O - OSPFv3, I - IS-IS, B - BGP, N - NHRP,
       T - Table, v - VNC, V - VNC-Direct, A - Babel, F - PBR,
       f - OpenFabric, t - Table-Direct,
       > - selected route, * - FIB route, q - queued, r - rejected, b - backup
       t - trapped, o - offload failure

IPv6 unicast VRF Vrf9:
C>* 2001:db8:1:a001::/64 is directly connected, Ethernet0, weight 1, 3d15h55m
B>q 2001:db8:2:b001::/64 [20/0] via fe80::10:1ff:fe00:1001, Ethernet4 (vrf default), label 917504, seg6 fcbb:bbbb:2:e000::, encap behavior H.Encaps.Red, weight 1, 3d15h55m
S>* fcbb:bbbb:a001::/48 [1/0] via 2001:db8:1:a001::a001, Ethernet0, weight 1, 3d15h55m
B>q fcbb:bbbb:b001::/48 [20/0] via fe80::10:1ff:fe00:1001, Ethernet4 (vrf default), label 917504, seg6 fcbb:bbbb:2:e000::, encap behavior H.Encaps.Red, weight 1, 3d15h55m
C>* fe80::/64 is directly connected, Ethernet0, weight 1, 3d15h55m
```

The route for `fcbb:bbbb:b001::/48` shows `seg6 fcbb:bbbb:2:e000::, encap behavior H.Encaps.Red`, indicating the SRv6 encapsulation.

The route details within zebra:
```
root@01T0:/# vtysh -c "show ipv6 zebra route dump vrf Vrf9" | grep -A 22 "Route: fcbb:bbbb:b001::/48"
Route: fcbb:bbbb:b001::/48
   protocol: bgp
   instance: 0
   VRF ID: 37
   VRF name: Vrf9
   flags: 9
   distance: 20
   metric: 0
   tag: 0
   status: 24
   nexthop_group_id: 36
   nexthop_num: 1
   nexthop_active_num: 1
   table: 1001
   uptime: 3d16h05m
   Nexthop 1:
      type: 5
      flags: 3
      ip: fe80::10:1ff:fe00:1001
      afi: ipv6
      interface index: 3
      interface name: Ethernet4

```

And how the route appears in the linux kernel's routing table:
```
root@01T0:/# sudo ip -6 route show vrf Vrf9 fcbb:bbbb:b001::/48
fcbb:bbbb:b001::/48 nhid 36  encap seg6 mode encap.red segs 1 [ fcbb:bbbb:2:e000:: ] via fe80::10:1ff:fe00:1001 dev Ethernet4 proto bgp metric 20 pref medium
```

Node 01T0 learns the underlay reachability to the SRv6 locator from node 02T0 (`fcbb:bbbb:2::/48`) from two of its eBGP peers.
```
root@01T0:/# vtysh -c "show bgp ipv6 unicast fcbb:bbbb:2::/48"
BGP routing table entry for fcbb:bbbb:2::/48, version 7
Paths: (2 available, best #1, table default)
  Advertised to non peer-group peers:
  2001:db8:1:1001::1001 2001:db8:1:1002::1002
  65011 65002
    2001:db8:1:1001::1001 from 2001:db8:1:1001::1001 (11.11.11.11)
    (fe80::10:1ff:fe00:1001) (used)
      Origin IGP, valid, external, multipath, best (Router ID)
      Last update: Fri Sep 19 16:48:27 2025
  65012 65002
    2001:db8:1:1002::1002 from 2001:db8:1:1002::1002 (12.12.12.12)
    (fe80::10:2ff:fe00:1002) (used)
      Origin IGP, valid, external, multipath
      Last update: Fri Sep 19 16:48:27 2025
```

Two ECMP paths are installed for this locator prefix, providing load balancing.
```
root@01T0:/# vtysh -c "show ipv6 route fcbb:bbbb:2::/48"
Routing entry for fcbb:bbbb:2::/48
  Known via "bgp", distance 20, metric 0, best
  Last update 3d16h13m ago
  * fe80::10:1ff:fe00:1001, via Ethernet4, weight 1
  * fe80::10:2ff:fe00:1002, via Ethernet8, weight 1

```

The route in zebra:
```
root@01T0:/# vtysh -c "show ipv6 zebra route dump" | grep -A 29 "Route: fcbb:bbbb:2::/48"
Route: fcbb:bbbb:2::/48
   protocol: bgp
   instance: 0
   VRF ID: 0
   VRF name: default
   flags: 265
   distance: 20
   metric: 0
   tag: 0
   status: 16
   nexthop_group_id: 34
   nexthop_num: 2
   nexthop_active_num: 2
   table: 254
   uptime: 3d16h12m
   Nexthop 1:
      type: 5
      flags: 3
      ip: fe80::10:1ff:fe00:1001
      afi: ipv6
      interface index: 3
      interface name: Ethernet4
   Nexthop 2:
      type: 5
      flags: 3
      ip: fe80::10:2ff:fe00:1002
      afi: ipv6
      interface index: 4
      interface name: Ethernet8

```

The route in linux:
```
root@01T0:/# ip -6 route show fcbb:bbbb:2::/48
fcbb:bbbb:2::/48 nhid 34 proto bgp metric 20 pref medium
        nexthop via fe80::10:2ff:fe00:1002 dev Ethernet8 weight 1
        nexthop via fe80::10:1ff:fe00:1001 dev Ethernet4 weight 1
```

While the SRv6 locator and SID are not pingable in this case, we can verify basic underlay connectivity by pinging node 02T0's loopback address (`fcbb:bbbb:2::1`) from node 01T0. This confirms that the underlay path to node 02T0 is functional.
```
root@01T0:/# ping fcbb:bbbb:2::1 -I fcbb:bbbb:1::1 -c 5
PING fcbb:bbbb:2::1(fcbb:bbbb:2::1) from fcbb:bbbb:1::1 : 56 data bytes
64 bytes from fcbb:bbbb:2::1: icmp_seq=1 ttl=63 time=0.894 ms
64 bytes from fcbb:bbbb:2::1: icmp_seq=2 ttl=63 time=0.557 ms
64 bytes from fcbb:bbbb:2::1: icmp_seq=3 ttl=63 time=0.566 ms
64 bytes from fcbb:bbbb:2::1: icmp_seq=4 ttl=63 time=0.572 ms
64 bytes from fcbb:bbbb:2::1: icmp_seq=5 ttl=63 time=0.603 ms

--- fcbb:bbbb:2::1 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4131ms
rtt min/avg/max/mdev = 0.557/0.638/0.894/0.128 ms
```

Node 02T0, which is the L3VPN PE connected to NIC-B, has allocated a uDT46 SID (`fcbb:bbbb:2:e000::`) for VRF Vrf9. The uDT46 function performs decapsulation and then lookup in a VRF table, for both IPv4 and IPv6.
```
root@02T0:/# vtysh -c "show segment-routing srv6 locator"
Locator:
Name                 ID      Prefix                   Status
-------------------- ------- ------------------------ -------
MAIN                       1 fcbb:bbbb:2::/48         Up

root@02T0:/# vtysh -c "show segment-routing srv6 sid"
 SID                 Behavior    Context       Daemon/Instance    Locator    AllocationType
 ------------------------------  ------------  -----------------  ---------  ----------------
 fcbb:bbbb:2:e000::  uDT46       VRF 'Vrf9'    bgp(0)             MAIN       dynamic

```

Node 02T0 installs this SID entry in its forwarding table:
```
root@02T0:/# vtysh -c "show ipv6 route" | grep fcbb:bbbb:2:e000::
B>q fcbb:bbbb:2:e000::/128 [20/0] is directly connected, Vrf9, seg6local uDT46 table 1001, weight 1, 3d16h34m
```

```
root@02T0:/# ip -6 route show fcbb:bbbb:2:e000::
fcbb:bbbb:2:e000:: nhid 20  encap seg6local action End.DT46 vrftable 1001 dev Vrf9 proto bgp metric 20 pref medium
```

Within VRF Vrf9, node 02T0 routes packets destined for NIC-B's loopback (`fcbb:bbbb:b001::1`) via Ethernet0.

```
root@02T0:/# ip -6 route show vrf Vrf9 fcbb:bbbb:b001::/48
fcbb:bbbb:b001::/48 nhid 19 via 2001:db8:2:b001::b001 dev Ethernet0 proto static metric 20 pref medium
```

We can now verify end-to-end reachability by pinging NIC-B's loopback address (`fcbb:bbbb:b001::1`) from NIC-A:
```
root@NIC-A:/# ping fcbb:bbbb:b001::1 -I fcbb:bbbb:a001::1 -c 5
PING fcbb:bbbb:b001::1 (fcbb:bbbb:b001::1) from fcbb:bbbb:a001::1 : 56 data bytes
64 bytes from fcbb:bbbb:b001::1: icmp_seq=1 ttl=63 time=1.04 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=2 ttl=63 time=0.694 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=3 ttl=63 time=0.932 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=4 ttl=63 time=0.463 ms
64 bytes from fcbb:bbbb:b001::1: icmp_seq=5 ttl=63 time=0.914 ms

--- fcbb:bbbb:b001::1 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4070ms
rtt min/avg/max/mdev = 0.463/0.808/1.039/0.205 ms
```
A successful ping confirms that the SRv6 uSID L3VPN service provides connectivity between NIC-A and NIC-B.

To look at the SRv6 encapsulation, we can capture packets on node 01T0's Ethernet4 interface (which connects to node 01T1). We filter for IPv6 packets with a next header of 41 (indicating an encapsulated IPv6 packet).
```
root@01T0:/# tcpdump -i Ethernet4 -vvv "ip6 and ip6[6] == 41"
tcpdump: listening on Ethernet4, link-type EN10MB (Ethernet), snapshot length 262144 bytes
09:32:45.192100 IP6 (flowlabel 0xf7adf, hlim 63, next-header IPv6 (41) payload length: 104) fcbb:bbbb:1::1 > fcbb:bbbb:2:e000::: IP6 (flowlabel 0xf7adf, hlim 64, next-header ICMPv6 (58) payload length: 64) fcbb:bbbb:a001::1 > fcbb:bbbb:b001::1: [icmp6 sum ok] ICMP6, echo request, id 47512, seq 1
09:32:45.193010 IP6 (flowlabel 0x31f92, hlim 62, next-header IPv6 (41) payload length: 104) fcbb:bbbb:2::1 > fcbb:bbbb:1:e000::: IP6 (flowlabel 0x31f92, hlim 64, next-header ICMPv6 (58) payload length: 64) fcbb:bbbb:b001::1 > fcbb:bbbb:a001::1: [icmp6 sum ok] ICMP6, echo reply, id 47512, seq 1
```
The tcpdump output shows:
The ICMP6 echo request packet `(SA=fcbb:bbbb:a001::1, DA=fcbb:bbbb:b001::1)` is  encapsulated within an outer IPv6 header `(SA=fcbb:bbbb:1::1, DA=fcbb:bbbb:2:e000::)`.
The ICMP6 echo reply packet `(SA=fcbb:bbbb:b001::1, DA=fcbb:bbbb:a001::1)` is encapsulated in an outer IPv6 header `(SA=fcbb:bbbb:2::1, DA=fcbb:bbbb:1:e000::)`.


