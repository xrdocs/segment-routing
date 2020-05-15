---
title: 'SRv6 micro-instructions'
author: Clarence Filsfils - APNIC blog
source-url: https://blog.apnic.net/2020/05/15/srv6-micro-instructions/
date: 2020-05-15
eurl: https://blog.apnic.net/2020/05/15/srv6-micro-instructions/
excerpt: >-
  Network programming is seminal to the Segment Routing over IPv6 data plane (SRv6) solution. It allows for expressing any end-to-end service in a stateless manner as a set of 16-byte instructions (Segment ID, or SID) encoded in the packet header. These instructions may express TE, FRR, VPN behaviours, as well as application behaviours.
  <br/>
  In this post, we introduce a straightforward extension to the SRv6 network program: each 16-byte instruction may contain up to six micro-instructions. The SRv6 Segment Routing Extension Header (SRH) data plane (RFC 8754) and the SRv6 control plane are leveraged without any change.

teaser: https://blog.apnic.net/wp-content/uploads/2020/04/Segment_purple_banner-768x281.png?v=40618139cfbbca611a3aaee27ade89b6
---

