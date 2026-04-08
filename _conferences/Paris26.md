---
published: true
breadnav: true
hidden: true
date: '2026-03-24 08:00'
title: 'Highlights of the SRv6 World Congress in Paris, March 2026'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'The Upperside World Congress in Paris, 2026, (formerly known as the MPLS WC) addresses data center interconnection technological issues and challenges. Find several real-world testimonials of leading hyperscalers and neocloud providers sharing their insights and experiences in SRv6 in AI infrastructure.'
header:
  teaser: 'images/Upperside-WC-2026/Paris26-thumbnail.png'
---
<style>
.indent {
    padding-left: 2em;
}
.notice {
    margin: 2em 0 !important;
    padding: 1em;
    /* color: #3d4144; */
    /* font-size: .75em !important; */
    /* text-indent: initial; */
    background-color: #f2f3f3;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(189,193,196,0.25);
    /*  “P” P’s */
}
</style>

The [**Upperside World Congress 2026** (uppersideconferences.com)](https://www.uppersideconferences.com/uwc/2026/index.html) (formerly known as the MPLS WC), March 2026 in Paris, addresses SRv6/AI Data Center Interconnect technological issues and challenges. Leading hyperscalers and neocloud providers came and shared their insights and experiences in SRv6 in AI infrastructure, with particular emphasis on data center (DC) and data center interconnect (DCI) architectures.

This page highlights a selection of SRv6 topics presented at this conference, mainly consisting of real-world testimonials of SRv6/AI Data Center Interconnect applications.

<br />

### Highlighted presentations:

<div markdown="1">
#### [Cisco: SRv6](/conferences/Paris26-Cisco-Clarence-Filsfils)
_**Clarence Filsfils**, Cisco Fellow_
{: .indent}
In this session, Clarence Filsfils from Cisco explores how SRv6 has fundamentally revolutionized IP networking, shifting it from a “best-effort” delivery protocol to a powerful, programmable, and highly scalable architecture.
{: .indent}

Discover how SRv6 has become the backbone for over 100,000 routers worldwide, supporting critical deployments across service providers, enterprises, and the world’s most advanced AI data centers. Learn about the core benefits of the technology—including deterministic traffic engineering, stateless service chaining, and operational simplicity—and see how it provides a unified, future-proof foundation for diverse industries, from telecommunications and finance to healthcare and industrial manufacturing.
{: .indent}

Whether you are looking to optimize your AI fabric or simplify your wide-area network, this presentation highlights why SRv6 remains the industry’s leading choice for modern, high-performance network infrastructure.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Alibaba: Ecore, the Next-Generation Service-Oriented Network](/conferences/Paris26-Alibaba-Roy-Jiang)
_**Roy Jiang**, Senior Network Architect, Alibaba Cloud_
{: .indent}
In this session, Roy Jiang from Alibaba explores the development and deployment of “Ecore,” the company’s next-generation, service-oriented data center network. Moving away from legacy MPLS-based infrastructure, Alibaba has pioneered a simplified, highly scalable architecture built entirely on SRv6 and Cisco Silicon One technology.
{: .indent}

Discover how Alibaba achieved a “single chip, single protocol” design, utilizing a composable “pizza box” hardware approach to streamline operations and enhance performance. By minimizing IGP domain sizes and leveraging SRv6 micro-segmentation, the team successfully reduced their network’s blast radius while achieving 10x faster convergence compared to their previous systems. This presentation highlights the tangible benefits of this transformation, including massive CAPEX savings, full automation, and the ability to deliver granular, deterministic traffic engineering for both machine-to-machine and machine-to-user traffic.
{: .indent}

Learn how Alibaba is setting a new industry benchmark for high-performance, future-ready data center networking.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Verizon: Simplifying the Network, the Journey to Unified Traffic Engineering with SRv6](/conferences/Paris26-Verizon-Luay-Jalil)
_**Luay Jalil**, Distinguished Fellow Technology & Architecture, Verizon_
{: .indent}
Join Luay Jalil, Distinguished Fellow at Verizon, for an insightful look at the evolution of network traffic engineering and the strategic shift toward a more unified infrastructure. Over the last 30 years, Verizon’s network has grown through multiple domains, encapsulations, and engineering models, creating significant operational complexity and friction between compute and network layers.
{: .indent}

In this session, explore how Verizon is moving beyond this fragmentation by extending routing intelligence directly into the compute layer. By treating compute workloads as active participants in the routing model rather than isolated edge devices, Verizon is simplifying provisioning and increasing organizational agility. Discover how SRv6 acts as the critical enabler for this transformation, providing a single, cohesive IP fabric that aligns compute, edge, and core domains. Learn how this shift reduces operational overhead and sets the stage for a more scalable, responsive, and future-ready network architecture.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Nebius: SRv6 uSID DC Frontend to Peering](/conferences/Paris26-Nebius-Alexey-Gorovoy)
_**Alexey Gorovoy**, Network Engineer, Nebius_
{: .indent}
Alexey Gorovoy provides an inside look at how Nebius leverages SRv6 to bridge the gap between virtual cloud environments and the WAN. As a provider of large-scale GPU clusters for AI innovators, Nebius required a networking solution that could support dynamic, granular traffic engineering and service chaining without the complexity of legacy protocol stitching.
{: .indent}

In this session, discover how Nebius transitioned from a fragmented VXLAN-EVPN and MPLS-SR environment to a unified SRv6 fabric. By moving routing intelligence to the host side via in-house developed virtual cloud gateways, Nebius has achieved a streamlined, lightweight architecture that operates entirely over IPv6. Learn how this shift enables efficient service chaining for virtual functions like firewalls, simplifies network operations, and provides the scalability needed to support high-performance AI workloads. This presentation highlights the practical advantages of SRv6 in a hybrid, multi-vendor environment and demonstrates how a “unified IP” approach can eliminate operational friction and protocol overhead.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Rakuten: SRv6 network, Demand-Matrix and Use-cases](/conferences/Paris26-Rakuten-Akash-Agrawal)
_**Akash Agrawal**, Director - IP Engineering, Rakuten Mobile_
{: .indent}
Join Akash from Rakuten Mobile as he explores the operational strategies behind their massive SRv6-enabled network. Spanning 59 IGP domains and 15,000 nodes, Rakuten’s infrastructure is a testament to the power of a converged, cloud-native architecture.
{: .indent}

In this session, discover how Rakuten leverages network slicing—offering distinct paths for low-latency, high-bandwidth, and default traffic—to maintain service quality across a single SRv6 fabric. Learn how the team addresses the complexities of scaling through ISIS summarization and a cutting-edge “digital twin” approach. By combining topology awareness with precise demand metrics derived from DDM accounting, Rakuten performs predictive “what-if” analysis to manage planned upgrades and unplanned failures with confidence. This presentation offers a masterclass in how a simplified, predictable network design enables automation at scale, ensuring operational excellence and optimal capacity planning.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Deutsche Telekom: Road towards SRv6](/conferences/Paris26-Deutsche-Telekom-Nicolai-Leymann)
_**Nicolai Leymann**, Senior Network Architect, Deutsche Telekom_
{: .indent}
Join this presentation from Deutsche Telekom (DT) to explore the company’s transition toward a “Horizontal Digital Architecture,” with SRv6 serving as the foundational technology for its future network strategy. Moving beyond legacy MPLS-based systems, DT is standardizing its architecture across its diverse European footprint to simplify operations, harmonize technology stacks, and accelerate service delivery.
{: .indent}

In this session, discover how DT is moving past the experimental phase of SRv6 to embrace a mature, standards-based approach that spans core, access, and data center domains. Learn about the strategic shift to micro-SID deployments and how SRv6 is being utilized to bridge the gap between physical infrastructure and cloudified, virtualized environments. By eliminating domain borders and reducing protocol layers, DT is creating a more flexible, future-proof network capable of supporting advanced requirements like 6G network slicing and seamless data center integration. This presentation highlights why SRv6 is the key to achieving a unified, high-performance IP fabric across complex, multi-vendor environments.
{: .indent}
</div>
{: .notice}


<div markdown="1">
#### [Cisco: From Mobile Networks to AI Infrastructure — SRv6 as the unifying technology](/conferences/Paris26-Cisco-Michael-Beesley)
_**Michael Beesley**, CTO SP Networking, Cisco_
{: .indent}
In this keynote session, Michael Beesley, VP CTO of Cisco’s Service Provider Networking business, explores the critical convergence of AI and mobile internet infrastructure. With nearly 40 years of experience in large-scale networking, Michael highlights how the industry is currently in a transformative era, where AI infrastructure—rather than just consumer connectivity—has become the primary driver of technological innovation and investment.
{: .indent}

Discover how SRv6 has evolved from an emerging technology into a mature, mainstream protocol stack that is already being deployed by over 500 service providers worldwide. Michael explains how SRv6 serves as a “unifying future,” providing a simplified, programmable, and highly scalable data plane that reduces operational complexity by eliminating legacy protocols and minimizing router state.
{: .indent}

From the architectural elegance required for 6G mobility to the massive, distributed clusters powering today’s AI training runs, this presentation outlines why SRv6 is the essential toolset for the next generation of network infrastructure. Learn how the massive industry investment in AI componentry is creating an unintended, positive “side effect”—enabling the development of next-generation core and edge routers that are more powerful, stable, and cost-effective than ever before.
{: .indent}
</div>
{: .notice}


