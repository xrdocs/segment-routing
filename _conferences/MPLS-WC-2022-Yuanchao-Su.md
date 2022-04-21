---
published: true
breadnav: true
date: '2022-04-05 17:00 -0700'
title: 'MPLS WC 2022 - Alibaba: Full Stack SRv6 Deployment'
author: Segment Routing Team
technology: 'SRv6'
excerpt: 'At the MPLS WC in Paris, April 2022, Yuanchao Su, Alibaba, presented "Alibaba: Full stack SRv6 towards a ''Predictable Network''". Unified SRv6 dataplane from socket to peering link.'
header:
  teaser: 'https://img.youtube.com/vi/izE4eh1q6ts/mqdefault.jpg'
---
<style>
.single iframe, .single img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
@media screen and (min-width: 893px) {
    .single iframe, .single img {
        width: 712px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
}
</style>

**Yuanchao Su** of Alibaba presented "Alibaba: Full stack SRv6 towards a 'Predictable Network'" at the [**MPLS WC 2022**](<https://www.uppersideconferences.com/mpls-sdn-nfv/mplswc_2022_agenda_day_1.html>), April 2022 in Paris.
Unified SRv6 dataplane from socket to peering link leveraging SRv6’s scalability, simplicity & programmability in all layers to provide predictable network services to every single application.

### Video

<iframe width="100%" height="400px" src="https://www.youtube.com/embed/izE4eh1q6ts" frameborder="0" allowfullscreen></iframe>

### Slides

{% capture "pdf-link" %}/images/MPLS-WC-2022/d1-18-30-su-yuanchao.pdf{% endcapture %}
<script src="{{ 'assets/js/pdfobject.min.js' | relative_url }}"></script>
<div class="fitvidsignore" id="pdf"></div>
<script>PDFObject.embed(" {{ pdf-link | relative_url }} ", "#pdf", {height: "21.5em", width: "31.3em"});</script>

