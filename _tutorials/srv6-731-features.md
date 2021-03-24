---
author: Jakub Horn
published: true
breadnav: true
date: '2021-03-24 11:36 +0100'
order: 11
category: none
title: SRv6 7.3.1 features
excerpt: SRv6 7.3.1 features
---

# SRv6 uSID Configuration
This document describes simple SRv6 uSID configuration in IOS XR 7.3.1. It covers SRv6 uSID itself, L3VPN for IPv4 and IPv6, TI-LFA and microloop avoidance and Flexible Algorithm. This document is collateral to the 7.3.1 feature introduction: [Title of youtube video](https://www.youtube.com/watch?v=rcBZc5uF00Q).

## Introduction
Simple network with 5 routers. Platforms are NCS540 and NCS5501. But configurations are same across IOS XR portfolio.

![](/images/731_SRv6_features/image1.png)

Configurations on all routers are very identical. The only exception is BGP where we made router 1 route reflector.
Here we will provide configuration templates and at the end of the document you can find full device configurations for each router. Wherever we use uppercase **X** in the configuration it means router id so 1 for router 1, 2 for router 2, etc. For SRv6 on the NCS platform we need to enable HW profile. After enabling the HW profile router needs to be reloaded.



`hw-module profile segment-routing srv6 mode micro-segment format f3216`

## Basic SRv6 Configuration

### Interfaces:

```
interface TenGigE0/0/0/0
 ipv6 enable 
 no shut

interface TenGigE0/0/0/1
 ipv6 enable
 no shut
```


### SRv6 locator:

```
segment-routing
 srv6
  locators
   locator MAIN
    micro-segment behavior unode psp-usd
    prefix fcbb:bb00:X::/48
```
here we used X for template, which means config for router 1 is 
 `prefix fcbb:bb00:1::/48`
for router 2
`prefix fcbb:bb00:1::/48`
etc

![](/images/731_SRv6_features/image2.png)

## ISIS Configuration


```
router isis 1
 is-type level-1
 net 49.0.0.X.00
 address-family ipv6 unicast
  metric-style wide
  segment-routing srv6
   locator MAIN

 interface TenGigE0/0/0/0
  point-to-point
  address-family ipv6 unicast

 interface TenGigE0/0/0/1
  point-to-point
  address-family ipv6 unicast
```

![](/images/731_SRv6_features/image3.png)

## L3VPN and BGP Configuration

### VRF Configuration

```
vrf 1
 address-family ipv4 unicast
  import route-target
   1:1 
  export route-target
   1:1

interface Loopback101
 vrf 1
 ipv4 address 1.1.1.X 255.255.255.255
```

![](/images/731_SRv6_features/image4.png)

### BGP Configuration R1:

```
int lo0
ipv6 addr fcbb:bb00:1::1/128
router bgp 1
 bgp router-id 1.0.0.1
 address-family vpnv4 unicast
 address-family vpnv6 unicast
 neighbor-group RRC
  remote-as 1
  update-source Loopback0
  address-family vpnv4 unicast
   route-reflector-client
  address-family vpnv6 unicast
   route-reflector-client
 neighbor fcbb:bb00:2::1
  use neighbor-group RRC
 neighbor fcbb:bb00:3::1
  use neighbor-group RRC
 neighbor fcbb:bb00:4::1
  use neighbor-group RRC
 neighbor fcbb:bb00:5::1
  use neighbor-group RRC

 vrf 1
  rd 1:1
  address-family ipv4 unicast
   segment-routing srv6
    locator MAIN
    alloc mode per-vrf
   redistribute connected
```

### BGP Configuration R2-R5:
```
int lo0
ipv6 addr fcbb:bb00:X::1/128
router bgp 1
 bgp router-id 1.0.0.X
 address-family vpnv4 unicast
 address-family vpnv6 unicast
 neighbor fcbb:bb00:1::1
  remote-as 1
  update-source Loopback0
  address-family vpnv4 unicast
  address-family vpnv6 unicast

 vrf 1
  rd 1:1
  address-family ipv4 unicast
   segment-routing srv6
    locator MAIN
    alloc mode per-vrf
   redistribute connected
```

![](/images/731_SRv6_features/image5.png)

## TI-LFA and microloop avoidance

```
isis 1
 address-family ipv6 unicast
  microloop avoidance segment-routing
 interface TenGigE0/0/0/0
  address-family ipv6 unicast
   fast-reroute per-prefix
   fast-reroute per-prefix ti-lfa
 interface TenGigE0/0/0/1
  address-family ipv6 unicast
   fast-reroute per-prefix
   fast-reroute per-prefix ti-lfa
```

## Performance Measurement

```
performance-measurement
 interface TenGigE0/0/0/0
  delay-measurement 
 interface TenGigE0/0/0/1
  delay-measurement
```

![](/images/731_SRv6_features/image6.png)

## Flexible Algorithm

### Locator:

```
segment-routing
 srv6
  locators
   locator LATENCY
    micro-segment behavior unode psp-usd
    prefix fcbb:bb01:X::/48
    algorithm 128
```

### ISIS:

```
router isis 1
 flex-algo 128
  metric-type delay
  advertise-definition
 
 address-family ipv6 unicast
  segment-routing srv6
   locator LATENCY
```

![](/images/731_SRv6_features/image7.png)

### VRF:

```
vrf 2
 address-family ipv6 unicast
  import route-target
   1:2
  export route-target
   1:2

interface Loopback102
 vrf 2
  ipv6 address 2001:7543::X/128
```

### BGP:

```
router bgp 1
vrf 1
  rd 1:1
  address-family ipv4 unicast
   segment-routing srv6
    locator MAIN
    alloc mode per-vrf
   redistribute connected
```

![](/images/731_SRv6_features/image8.png)

## Configurations:
[Router1](/images/731_SRv6_features/m1.txt),
[Router2](/images/731_SRv6_features/m2.txt),
[Router3](/images/731_SRv6_features/m3.txt),
[Router4](/images/731_SRv6_features/m4.txt),
[Router5](/images/731_SRv6_features/m5.txt)
