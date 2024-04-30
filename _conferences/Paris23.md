---
published: true
breadnav: true
hidden: true
date: '2023-04-19 07:00'
title: 'Highlights of the SRv6 Conference in Paris, April 2023'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'The MPLS SD & AI Net World Congress in Paris, April 2023, paid particular attention to SRv6: Technical Progress, Interop, and next steps. Moreover, an impressive set of service providers describe current deployments and introduce some exciting innovations.'
header:
  teaser: 'images/MPLS-WC-2023/MPLS-WC-2023-teaser.jpg'
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

The [**MPLS WC 2023 Conference** (uppersideconferences.com)](<https://www.uppersideconferences.com/mpls-sdn-nfv/mplswc_2023_agenda_day_02.html>), April 2023 in Paris, paid particular attention to SRv6 uSID: Technical Progress, Interop, and next steps. Moreover, an impressive set of service providers describe current deployments and introduce some exciting innovations.

This page highlights a selection of SRv6 topics presented at this conference, and several demos and innovations that have been announced at that time.

<br />

### Highlighted presentations:

<div markdown="1">
#### [Cisco: SRv6 Technology Status and Deployment Update](/conferences/Paris23-Cisco-Clarence-Filsfils)
_**Clarence Filsfils** of Cisco Systems_
{: .indent}
Reviewing the IETF status, the latest deployments and introducing some exciting innovations.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Colt: Building an Hyper-scale PCE](/conferences/Paris23-Colt-Bart-Janssens)
_**Bart Janssens** of Colt_
{: .indent}
New requirements, HS-PCE technology, use case experience.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Bell Canada: Implementing Services in the Cloud (Google, AWS)](/conferences/Paris23-Bell-Canada-Dan-Bernier)
_**Daniel Bernier** of Bell Canada_
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Softbank: Mobile User Plane (MUP) Use-case](/conferences/Paris23-Softbank-Satoru-Matsushima)
_**Satoru Matsushima** of Softbank_
{: .indent}
Discussing the actual PoC and understanding how to resolve the problem at scale.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Rakuten: Using SRv6 Traffic Accounting](/conferences/Paris23-Rakuten-Amit-Dhamija)
_**Amit Dhamija** of Rakuten_
{: .indent}
Covering the development of the industry prototype on Demand Matrix (DM) using the SRv6 traffic accounting feature.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Verizon: SRv6 DC Use Case Study](/conferences/Paris23-Verizon-Gyan-Mishra)
_**Gyan Mishra** of Verizon_
{: .indent}
Presenting a DC uSID design use case, a new state of the art innovation.
{: .indent}
</div>
{: .notice}

<div markdown="1">
#### [Cisco: Wavelength Services delivered over IP/MPLS ... Why not?](/conferences/Paris23-Cisco-Christian-Schmutzer)
_**Christian Schmutzer** of Cisco Systems_
{: .indent}
Discussing service SLA attributes and how technology building blocks such as EVPN-VPWS, PLE, OAM, circuit-style SR-TE, PCE, QoS and protection paradigms can work together to deliver mission critical services in a fundamental new and beneficial way for both the end-customer and the provider.
{: .indent}
</div>
{: .notice}

### SRv6 uSID Interoperability Test Report
EANTC published the results of the annual multi-vendor MPLS SDN interoperability test event. The results were showcased at the MPLS SD & AI World Congress 2023. Detailed descriptions of each test and its results are published in the test report that can be found [**here** (eantc.de)](https://eantc.de/events/mpls-sdn-interop-2023/).

{% comment %}
### Demonstrations:
<br />
#### [SRv6 ultra-scale - Imposition of 26 SRv6 uSIDs at Linerate](/demos/26-usid-push-linerate)
An NCS 5700 acting as an SRv6 PE pushes 26 uSIDs at linerate.

<br />
#### [SRv6 Stateless slicing at Ultra-Scale](/demos/stateless-slicing)
Apply stateless and scalable network partitioning to realize 5G slicing in the network.

<br />
#### [BGP PIC Edge with SRv6 Summarization](/demos/upa)
ISIS Unreachable Prefix Announcement (UPA) enables using BGP Prefix Independent Convergence (BGP PIC) functionality while using prefix summarization. Combining fast restoration with ultra-scaling.

<br />
#### [Path Tracing](/path-tracing)
Path Tracing allows operator to deterministically detect ECMP paths. It is implemented in HW at linerate in the normal forwarding pipeline and provides an Ultra-MTU-Efficiency.

{% endcomment %}
