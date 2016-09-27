---
author: Segment Routing Team
published: true
date: '2016-09-27 08:17 -0700'
title: Traffic duplication through segmentable disjoint paths
---

## Abstract

Ultra-low latency is a key component of safety-critical operations such as robot-assisted remote surgery or financial applications where every single millisecond counts. In this paper, we show how network operators can build upon the recently proposed Segment Routing architecture to provide a traffic duplication service to better serve the users of such demanding applications. We propose the first implementation of Segment Routing in the Linux kernel and leverage it to provide a traffic duplication service that sends packets over disjoint paths. Our experiments show that with such a service existing TCP stacks can preserve latency in the presence of packet losses. We also propose and evaluate an efficient algorithm that computes disjoint paths that can be realised by using segments. Our evaluation with real and synthetic network topologies shows that our proposed algorithms perform well in large networks.


><http://inl.info.ucl.ac.be/system/files/paper_9.pdf>