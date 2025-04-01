---
published: true
breadnav: true
hidden: true
date: '2025-03-26 08:00'
title: 'Highlights of the SRv6 Conference in Paris, March 2025'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'The MPLS & SRv6 AI Net World Congress in Paris, 2025, highlights the transformative impact of SRv6 technology across various sectors, including AI applications. Find several real-world testimonials of SRv6 and IPM applications presented at this conference.'
header:
  teaser: 'images/MPLS-SRv6-WC-2025/MPLS-SRv6-WC-2025-teaser.png'
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
}
</style>

The [**MPLS & SRv6 AI Net World Congress 2025** (uppersideconferences.com)](https://www.uppersideconferences.com/mpls-sdn-nfv/mplswc_2025_agenda.html), March 2025 in Paris, highlights the transformative impact of SRv6 technology across various sectors, including AI applications.

This page highlights a selection of SRv6 and IPM topics presented at this conference, mainly consisting of real-world testimonials of SRv6 and IPM applications in different sectors.

<br />

### Highlighted presentations:

<div markdown="1">
#### [Cisco: SRv6/IPM New Use-cases and Deployments](/conferences/Paris25-Cisco-Clarence-Filsfils)
_**Clarence Filsfils**, Cisco Fellow_
{: .indent}
The presentation provides an update on the SRv6 and IPM use cases and deployments. Since the kickoff in Rome in 2017, SRv6 has become a proposed standard RFC, enabling network programming through destination address instructions. The collaboration with Alibaba and Microsoft enhanced SRv6 in SONiC, with deployments on 8K Silicon One systems. Key deployments include the Dutch government agency, Rijkswaterstaat, Zain, showcasing innovations planned over the next two years, Swisscom, Arelion, Jio, Rivada.
{: .indent}

SRv6's application in AI Data Centers offers deterministic path selection and control by GPUs, enhancing resilience and scalability with a stateless solution. The agile SRv6 overlay provides rich SLAs, service insertion, and segmentation encoded in network programs. Cisco's Decentralized SDN solution is progressing, with use cases in multicast trees, analytics, and traffic control.
{: .indent}

Clarence emphasizes the importance of collaboration with lead operators and introduces the speakers sharing their real-world experiences with SRv6 uSID and IPM.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Microsoft: SONiC for AI with SRv6](/conferences/Paris25-Microsoft-Rita-Hui)
_**Rita Hui**, Principal Software Engineering Manager, Microsoft_
{: .indent}
This presentation discusses the use of SONiC, an open-source network operating system, in AI environments using SRv6. SONiC is crucial for Microsoft's global Data Centers, ensuring high availability and efficiency for services like Bing and Office 365, as well as hosting applications on the Azure cloud platform. The Data Center topology includes rack-level switches, tier switches, and spines connected through a redundant mesh.
{: .indent}

With AI workloads requiring massive data, SONiC's SRv6 implementation facilitates efficient traffic management via source routing, path enumeration, and failure detection at the source. This setup ensures scalable, reliable, and low-latency networks capable of supporting AI training clusters. SONiC contributions include static SRv6 uSID configurations and locator support, enhancing control over traffic flows without dynamic routing protocols.
{: .indent}

The server side utilizes SmartNICs to manage point-to-point data transactions between GPUs during AI training. SONiC's adaptability allows for expanding network capacity without altering fundamental designs.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Nebius: SRv6 uSID DC Frontend to Peering](/conferences/Paris25-Nebius-Alexey-Gorovoy)
_**Alexey Gorovoy**, Network Engineer, Nebius_
{: .indent}
In this presentation, Alexey share insights into their SRv6 design case study, focusing on how SRv6 can streamline network operations for Nebius, a Neo cloud service provider specializing in AI-native cloud computing platforms. Nebius operates several data centers interconnected through a private WAN, and their infrastructure functions over IPv6. The presentation highlighted challenges with current protocols like VXLAN EVPN and MPLS-SR, which require complex stitching functionalities and lack native traffic engineering capabilities.
{: .indent}

SRv6 addresses these challenges by enabling efficient bridging of data center and WAN domains, creating unified data planes based on IPv6, and supporting true traffic engineering for service chains. Two conceptual use cases were discussed: overlay networks utilizing SRv6 for end-to-end connectivity without stitching, and service chaining with SRv6 uSID for firewall integration. SRv6 simplifies operations by controlling explicit traffic paths, ensuring stateful services maintain integrity, and providing scalability.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Swisscom: TITAN: SRv6 uSID and IPM at Swisscom](/conferences/Paris25-Swisscom-Rolf-Schmid)
_**Rolf Schmid**, Senior System Architect for IP Transport Networks, Swisscom_
{: .indent}
This presentation introduces the Titan network, Swisscom's new converged IP transport network built on SRv6 and uSIDs. Swisscom, a leader in the Swiss telco market known for innovation and sustainability, is transitioning from a complex network landscape with multiple suppliers to a simplified, unified network with Cisco as the strategic supplier. The new network aims to standardize services, offer them through APIs, and implement network as a service with robust telemetry for monitoring.
{: .indent}

Titan features a dual core plane for high availability, using SRv6 for efficient traffic engineering and address summarization, reducing locators and enhancing convergence. Swisscom is conducting IPM testing for path performance measurement, leveraging Cisco's hardware-based solution for scalability and ECMP awareness. The next steps include a trial in the Titan production network, furthering Swisscom's efforts to maintain its leadership in network quality and innovation.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Goldman Sachs: SRv6 for Low-Latency Multicast](/conferences/Paris25-Goldman-Sachs-Michael-Valentine)
_**Mike Valentine**, Technology Fellow, Network Architecture, Goldman Sachs_
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Colt: Evolving Network Architectures: From Hardware to Sustainable NaaS](/conferences/Paris25-Colt-Bart-Janssens)
_**Bart Janssens**, Senior Specialist Packet Architecture, Colt Technology_
{: .indent}
The presentation focuses on evolving network architectures from hardware to sustainable Network as a Service (NaaS), integrating visualization and network programmability with other components to create a cloud-like packet fabric for Colt. The market demands network programmability for Layer 2 and Layer 3 with ultra-low latency and sustainable services from 1 gig to 400 gig, supporting intent-based networking.
{: .indent}

Colt's architecture evolution involves dense Silicon One devices, reducing space and power while increasing capacity, alongside transport routers and optical networking at 400 gig and 800 gig. The orchestration stack processes customer intent requests, leveraging Cisco's provider connectivity assurance for real-time network feedback on traffic-steering options. This flexible stack supports various service definitions, including shortest path, sustainable paths, and ultra-low latency using LEO satellites.
{: .indent}

Colt's NaaS front end offers user-friendly interactions with microservices, calculating paths based on latency or sustainability. Real-time API queries into the Provider Connectivity Assurance (PCA) stack consider router location, power greenness, and emissions. Visualization tools provide network topology, SLA slice, power, and carbon emissions insights, supporting transitions from L2 to L3 for AI traffic steering.
{: .indent}

This journey involves collaboration with vendors and internal teams, aiming for sustainable, intent-based network architecture with real-time insights and control.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Rakuten: Guaranteed bandwidth services with SRv6 policy for deterministic networking](/conferences/Paris25-Rakuten-Akash-Agrawal)
_**Akash Agrawal**, Technical Director, Rakuten_
{: .indent}
This presentation discusses Rakuten Mobile's SRv6 deployment journey, focusing on transforming their IP transport network in Japan into a simpler, scalable, and agile architecture. Rakuten Mobile achieved this by migrating to an overlay architecture with SRv6, improving network efficiency and offering differentiated SLA services. Notable improvements include significant reductions in routing inefficiencies, enhanced IGP scale, faster convergence, and a decrease in site flaps.
{: .indent}

This year, Rakuten Mobile introduces new services with low latency, high reliability, and high bandwidth using Flex Algo and QoS, managed by centralized SDN controllers. They are also developing a cloud SD-WAN with Cisco to enable rich connectivity for enterprise customers. A key focus is on guaranteed bandwidth services, using resource isolation, bandwidth reservation, and a bandwidth manager to ensure strict paths and avoid oversubscription.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [SoftBank: SRv6 MUP, an architecture implementation update progress](/conferences/Paris25-SoftBank-Satoru-Matsushima)
_**Satoru Matsushima**, Technical Meister, SoftBank_
{: .indent}
</div>
{: .notice}

