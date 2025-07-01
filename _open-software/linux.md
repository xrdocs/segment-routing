---
position: 10
title: Linux Kernel
app: false
breadnav: true
date: '2025-06-30 12:18 +0100'
header:
  teaser: images/open-software/linux.png
excerpt: >-
  SRv6 has been supported in the Linux kernel since its introduction at IETF. Currently, the Linux kernel supports most of the SRv6 Network programming behaviors defined in RFC8986
---

SRv6 has been supported in the Linux kernel since its introduction at IETF.

The very first support of SRv6 in the Linux kernel was introduced in Kernel 4.10 which was released in Feb 2017.

Since then, SRv6 support in the Linux kernel has been getting more mature with almost each kernel release.

New features, bug fixes and performance improvement patches are getting merged in the Linux kernel over time.

Currently, the Linux kernel supports most of the SRv6 Network programming behaviors defined in [RFC8986](https://datatracker.ietf.org/doc/html/rfc8986).

## Endpoint behaviors

| Kernel | Date | behavior | Description |
| ------ | ---- | -------- | ----------- |
| 4.10 | Feb 2017 | End | Endpoint |
|      |          | End.X | Endpoint with L3 cross-connect |
| 4.14 | Nov 2017 | End.T | Endpoint with specific IPv6 table lookup |
|      |          | End.DT6 | Endpoint with decapsulation and specific IPv6 table lookup |
|      |          | End.DX6 | Endpoint with decapsulation and IPv6 cross-connect |
|      |          | End.DX4 | Endpoint with decapsulation and IPv4 cross-connect |
|      |          | End.DX2 | Endpoint with decapsulation and L2 cross-connect |
|      |          | End.B6 | Endpoint bound to an SRv6 policy |
|      |          | End.B6.Encaps | Endpoint bound to an SRv6 encapsulation Policy |
| 5.11 | Dec 2020 | End.DT4 | Endpoint with decapsulation and IPv4 table lookup |
| 5.14 | June 2021 | End.DT46 | Endpoint with decapsulation and specific IP table lookup |
| 6.1 | Dec 2022 | uN | uSID Endpoint  |
| 6.3 | Apr 2023 | End (PSP) | Endpoint with Penultimate Segment Pop of the SRH
| 6.6 | Oct 2023 | uA | uSID Endpoint with L3 cross-connect |


## Headend behaviors

| Kernel | Date | behavior | Description |
| ------ | ---- | -------- | ----------- |
| 4.10 | Feb 2017 | H.Encpas | SR Headend with Encapsulation in an SR Policy |
|      |          | H.Insert | SR Headend with insertion of an SRv6 Policy |
| 4.14 | Nov 2017 | H.Encaps.L2 | H.Encaps Applied to Received L2 Frames |
| 6.0 | Oct 2022 | H.Encaps.Red | H.Encaps with Reduced Encapsulation |
|     |          | H.Encaps.L2.Red | H.Encaps Applied to Received L2 Frames |