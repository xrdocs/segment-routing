---
published: true
breadnav: true
date: '2026-08-25 10:10'
title: '@Scale Networking 2026 – “Resilient AI Supercomputer Networking using MRC and SRv6”'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At @Scale Networking 2026, Jitendra Padhye of OpenAI presented how MRC and static SRv6 source routing keep large-scale AI training jobs running through network failures.'
header:
  teaser: 'images/atscale-networking-2026/2026-08-25-atscale-openai-mrc-srv6.jpg'
---
At **[@Scale: Networking 2026](https://atscaleconference.com/events/networking-2026/)** (25 August 2026, Santa Clara), **Jitendra Padhye** of OpenAI presented “Resilient AI Supercomputer Networking using MRC and SRv6.”

Tail latency dominates the performance of synchronous pretraining jobs at very large scale. The session describes a three-pronged approach: MRC, a new RDMA-based transport that sprays across many paths and actively load-balances between them to eliminate flow collisions; multi-plane Clos topologies that raise switch radix and redundancy so clusters well beyond 100K GPUs can be built as two-tier fabrics; and static SRv6 source routing, which lets MRC bypass failures itself without waiting for control-plane convergence.

OpenAI shared production experience running MRC and static SRv6 in clusters used to train frontier models, showing how training jobs ride out network failures that previously would have interrupted training.

&nbsp;
### Video

{% include video id="gTqeU9cCxKQ" provider="youtube" %}
