---
title: Linux Kernel
app: false
breadnav: true
date: '2017-01-20 12:18 +0100'
header:
  teaser: images/new-design/tux.png
excerpt: >-
  The IPv6 dataplane functionalities for Segment Routing are available in the Linux Kernel. Find out how to start using SR on any Linux host.
---

## Linux kernel 4.10

The IPv6 dataplane functionalities enabling Segment Routing packet generation and forwarding are available in the latest Linux kernel releases (4.10 and later). This implementation is provided by the [IP Networking Lab](https://inl.info.ucl.ac.be) of Université Catholique de Louvain, Louvain-la-Neuve, Belgium.

## Linux kernel 4.14

Kernel 4.14 is another milestone in SRv6 support in Linux. A new set of SRv6 behaviors has been added to the kernel (see table below).

Quick start guide and complete documentation are available on the [dedicated website](http://www.segment-routing.org/).

For any question regarding this implementation, please reach out to the [developers mailing list](https://sympa-2.sipr.ucl.ac.be/sympa/info/sr6-dev).


## srext - a Linux kernel module for the SRv6 Network Programming model

In parallel, the [Networking Group](http://netgroup.uniroma2.it) from University of Rome Tor Vergata, Italy, is developing a new kernel module providing more advanced Segment Routing functions. This module is intended to be eventually fully compliant with the SRv6 Network Programming model defined in [RFC8986](https://datatracker.ietf.org/doc/html/rfc8986).

The srext module is [available on GitHub](https://netgroup.github.io/SRv6-net-prog/).

## SR behaviors support

The following tables show the availability in Linux of each SRv6 behavior defined in [RFC8986](https://datatracker.ietf.org/doc/html/rfc8986).

New entries will be added to these tables as more SRv6 behaviors are defined in IETF documents.

### Endpoint functions

Endpoint functions are triggered when the IPv6 Destination Address of an incoming packet matches an entry in the _My Local SIDs_ table of an SRv6-enabled node.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| End | Endpoint function | <span style="color:green">**4.10** (February 2017)</span>, <span style="color:#049FD9">**srext**</span> |
| End.X | Endpoint function with Layer-3 cross-connect | <span style="color:green">**4.10** (February 2017)</span>, <span style="color:#049FD9">**srext**</span> |
| End.T | Endpoint function with specific IPv6 table lookup | <span style="color:green">**4.14** (November 2017)</span> |
| End.DX2 | Endpoint with decapsulation and Layer-2 cross-connect | <span style="color:green">**4.14** (November 2017)</span>, <span style="color:#049FD9">**srext**</span> |
| End.DX6 | Endpoint with decapsulation and IPv6 cross-connect | <span style="color:green">**4.14** (November 2017)</span>, <span style="color:#049FD9">**srext**</span> |
| End.DX4 | Endpoint with decapsulation and IPv4 cross-connect | <span style="color:green">**4.14** (November 2017)</span>, <span style="color:#049FD9">**srext**</span> |
| End.DT6 | Endpoint with decapsulation and IPv6 table lookup | <span style="color:green">**4.14** (November 2017)</span> |
| End.DT4 | Endpoint with decapsulation and IPv4 table lookup | <span style="color:orange">December 2020</span> |
| End.B6 | Endpoint bound to an SRv6 policy | <span style="color:green">**4.14** (November 2017)</span> |
| End.B6.Encaps | Endpoint bound to an SRv6 encapsulation Policy | <span style="color:green">**4.14** (November 2017)</span> |
| End.BM | Endpoint bound to an SR-MPLS Policy | <span style="color:orange">In development</span> |
| End.S | Endpoint in search of a target in table T | <span style="color:orange">In development</span> |
| End.AD | Endpoint to SR-unaware APP via dynamic proxy | <span style="color:#049FD9">**srext**</span> |
| End.AM | Endpoint to SR-unaware APP via masquerading | <span style="color:#049FD9">**srext**</span> |

### Transit behaviors

Transit behaviors are triggered when an in-transit packet matches a steering
rule on an SRv6-enabled node. Examples of steering rules are packets arriving on
a specific incoming interface or whose Destination Address belongs in a given
prefix.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| T.Insert | Transit behavior with insertion of an SRv6 Policy | <span style="color:green">**4.10** (February 2017)</span> |
| T.Encaps | Transit behavior with encapsulation in an SRv6 policy | <span style="color:green">**4.10** (February 2017)</span> |
| T.Encaps.L2 | T.Encaps behavior of the received L2 frame | <span style="color:green">**4.14** (November 2017)</span> |
