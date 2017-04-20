---
title: Linux Kernel
breadnav: true
date: '2017-01-20 12:18 +0100'
header:
  teaser: 'https://www.kernel.org/theme/images/logos/tux.png'
excerpt: >-
  The IPv6 dataplane functionalities for Segment Routing are available in the Linux Kernel. Find out how to start using SR on any Linux host.
---

## Linux kernel 4.10

The IPv6 dataplane functionalities enabling Segment Routing packet generation and forwarding are available in the latest Linux kernel releases (4.10 and later). This implementation is provided by the [IP Networking Lab](https://inl.info.ucl.ac.be) of Université Catholique de Louvain, Louvain-la-Neuve, Belgium.

Quick start guide and complete documentation are available on the [dedicated website](http://www.segment-routing.org/).

For any question regarding this implementation, please reach out to the [developers mailing list](https://sympa-2.sipr.ucl.ac.be/sympa/info/sr6-dev).


## srext - a Linux kernel module for the SRv6 Network Programming model

In parallel, the [Networking Group](http://netgroup.uniroma2.it) from University of Rome Tor Vergata, Italy, is developing a new kernel module providing more advanced Segment Routing functions. This module is intended to be eventually fully compliant with the SRv6 Network Programming model defined in [draft-filsfils-spring-srv6-network-programming](https://datatracker.ietf.org/doc/draft-filsfils-spring-srv6-network-programming/).

The srext module is [available on GitHub](https://netgroup.github.io/SRv6-net-prog/).

## SR behaviors support

The following tables show the availability in Linux of each SRv6 behavior defined in [draft-filsfils-spring-srv6-network-programming](https://datatracker.ietf.org/doc/draft-filsfils-spring-srv6-network-programming/).

New entries will be added to these tables as more SRv6 behaviors are defined in IETF documents.

### Endpoint functions

Endpoint functions are triggered when the IPv6 Destination Address of an incoming packet matches an entry in the _My Local SIDs_ table of an SRv6-enabled node.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| End | Endpoint function | <span style="color:green">**4.10** (February 2017)</span> |
| End.X | Endpoint function with Layer-3 cross-connect | <span style="color:green">**4.10** (February 2017)</span> |
| End.T | Endpoint function with specific IPv6 table lookup | <span style="color:orange">In development</span> |
| End.DX2 | Endpoint with decapsulation and Layer-2 cross-connect | <span style="color:orange">In development</span> |
| End.DX6 | Endpoint with decapsulation and IPv6 cross-connect | <span style="color:orange">In development</span> |
| End.DX4 | Endpoint with decapsulation and IPv4 cross-connect | <span style="color:orange">In development</span> |
| End.DT6 | Endpoint with decapsulation and IPv6 table lookup | <span style="color:orange">In development</span> |
| End.DT4 | Endpoint with decapsulation and IPv4 table lookup | <span style="color:orange">In development</span> |
| End.B6 | Endpoint bound to an SRv6 policy | <span style="color:orange">In development</span> |
| End.B6.Encaps | Endpoint bound to an SRv6 encapsulation Policy | <span style="color:orange">In development</span> |
| End.BM | Endpoint bound to an SR-MPLS Policy | <span style="color:orange">In development</span> |
| End.S | Endpoint in search of a target in table T | <span style="color:orange">In development</span> |
| End.AS | Endpoint to SR-unaware APP via static proxy | <span style="color:#049FD9">**srext** (April 2017)</span> |
| End.AM | Endpoint to SR-unaware APP via masquerading | <span style="color:orange">In development</span> |

### Transit behaviors

Transit behaviors are triggered when an in-transit packet matches a steering
rule on an SRv6-enabled node. Examples of steering rules are packets arriving on
a specific incoming interface or whose Destination Address belongs in a given
prefix.

| Name | Description | Release |
| ---- | ----------- | :-----: |
| T.Insert | Transit behavior with insertion of an SRv6 Policy | <span style="color:green">**4.10** (February 2017)</span> |
| T.Encaps | Transit behavior with encapsulation in an SRv6 policy | <span style="color:green">**4.10** (February 2017)</span> |
| T.Encaps.L2 | T.Encaps behavior of the received L2 frame | <span style="color:orange">In development</span> |
