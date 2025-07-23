---
regenerate: true
layout: tutorial-articles 
permalink: /measurements
hero-image: images/new-design/SR-Background-Image-2.png
title: "Measurements"
technology: ""
type: "Measurements"
description: "Measurements provide comprehensive observability and troubleshooting across modern IP networks"
---
 
<style>
.article-postfix {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #bdbdbd;
    letter-spacing: 0.5px;
    font-weight: 500;
}
/**
 * Tabs
 */
.tabcontainer {
  max-width: 1200px;
  margin: auto;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
}

.tabs label {
  order: 1;
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  /* background: #90CAF9; */
  /* font-weight: bold; */
  transition: background ease 0.2s;
  border: 1px solid lightgrey;
  border-bottom-width: 0px;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
  /*background: whitesmoke;*/
}

.tabs h1 {
  font-weight: 300;
}
.tabs input[type=radio] {
  display: none;
}

.tabs input[type=radio]:checked + label {
  background: white;
  position: relative;
}

.tabs input[type=radio]:not(:checked) + label {
  background: whitesmoke;
}

.tabs input[type=radio]:checked + label + .tab {
  display: block;
  border: 1px solid lightgrey;
  border-radius: 0em 0.3em 0.3em 0.3em;
}

.tabs input[type=radio]:checked + label:after {
    content: "";
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    z-index: 100;
    padding: 0;
    margin: 0;
    display: block;
}

/* two tabs only, better to keep, even for small screens
@media (max-width: 45em) {
  .tabs .tab, .tabs label {
    order: initial;
  }

  .tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
    border-bottom-width: 0px;
  }
}
*/
/**
 * Generic Styling
*/
body {
  /*background: #eee;*/
  /*min-height: 100vh;*/
  box-sizing: border-box;*/
  /*padding-top: 10vh;*/
  /*font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;*/
  /*font-weight: 300;*/
  /*line-height: 1.5;*/
  /*max-width: 60rem;*/
  /*margin: 0 auto;*/
  /*font-size: 112%;*/
}
</style>
{% comment %}
- include any category page that has the sanity check items id.size and date
- the IPM entries must have 'IPM' in technology list
   * sort the items with 'ipm-order' field first, followed by other items in reverse data order
- the PT entries must have 'PT' in technology list
   * sort the items with 'pt-order' field first, followed by other items in reverse data order
{% endcomment %}
{% include base_path %}
{% assign all_content = site.documents
| where_exp:"item", "item.id.size"
| where_exp:"item", "item.date"
| uniq %}
<div class="tabcontainer">
  <div class="tabs">
    <input type="radio" name="tabs" id="tabone" checked="checked">
    <label for="tabone">IP Measurements</label>
    <div class="tab">
      <h1>IP Measurements</h1>
      <div class="container single">
        <section class="page__content" itemprop="text">
          {% capture ip_measurements_markdown %}
The network fabric that connects our customers is built on top of IP and leverages ECMP routing—meaning there are numerous network paths between edge nodes. Traditionally, network operators have relied on legacy network performance monitoring solutions that sample a limited set of metrics such as minimum, maximum, or average latency. However, these legacy solutions struggle to detect the true application experience because they lack the scale to measure all ECMP paths and often miss performance issues affecting specific customers.

As a result, operators often face a reactive cycle: customers detect network problems first, and only then do operators begin troubleshooting. This approach is repeatedly encountered and highlights a critical gap—legacy monitoring tools cannot reliably measure or reflect the experience of all users.

IP Measurements (IPM) is a modern approach designed to address these challenges. By integrating measurement capabilities directly into network hardware, IPM provides detailed, real-time insights into key network metrics such as latency, loss, and liveness across all network paths. It continuously correlates measurement data with routing information, allowing operators to proactively identify and address performance issues. This ensures a consistent and high-quality user experience and represents a significant improvement in scale and efficiency over traditional methods.
          {% endcapture %}
          {{ ip_measurements_markdown | markdownify }}
        </section>
      </div>
      <div class="container accordion">
        {% assign ipm_with_order = all_content
          | where_exp: "item", "item.technology contains 'IPM'"
          | where_exp: "item", "item.ipm-order"
          | sort: "ipm-order" %}
        {% assign ipm_without_order = all_content
          | where_exp: "item", "item.technology contains 'IPM'"
          | where_exp: "item", "item.ipm-order == nil"
          | sort: "date" | reverse %}
        {% assign sorted = ipm_with_order | concat: ipm_without_order %}
        <details open>
          <!-- hiding the summary for now since there is only a single entry -->
          <summary style="display:none;">IP Measurements</summary>
          {% for post in sorted %}
          <div>
            {% include new-news-list-tags %}
          </div>
          {% endfor %}
        </details>
      </div>
    </div>
    
    <input type="radio" name="tabs" id="tabtwo">
    <label for="tabtwo">Path Tracing</label>
    <div class="tab">
      <h1>Path Tracing</h1>
      <div class="container single">
        <section class="page__content" itemprop="text">
          {% capture ip_measurements_markdown %}
ECMP is a key in today’s IP network. It provides both efficiency and resilience. However, the detecting and troubleshooting of these ECMP paths remains a big challenge that faces many operators. FIB corruption or FIB misconfiguration at any node is one among many issues that can happen and may lead packets to follow a non ECMP Path.

Path Tracing is a new solution that reveals all the unknows about ECMP. It allows operator to detect the currently available ECMP paths. They can also detect the ECMP Paths that were available at a given time in the past. Operators will be able also to know whether packets are following an ECMP Path or not. In addition, they can detect where packets are being drifted from the ECMP Path. Moreover, Path Tracing provides operators accurate end-to-end delay, per-hop delay, and the load of each interface that forwards the packet along the path.

The Path Tracing dataplane is optimized for HW linerate implementation in the base HW forwarding pipeline. It requires minimum packet header parsing and processing. As a result, it can be implemented using a minimum number of micro code instructions.

Path Tracing has also a rich ecosystem that includes several implementations in merchant silicon (Broadcom, Cisco, Marvell, others) and open source (Linux, VPP, P4, others).

The solution is currently being standardized in the SPRING WG at IETF [draft-filsfils-spring-path-tracing (ietf.org)](https://datatracker.ietf.org/doc/draft-filsfils-spring-path-tracing/).
          {% endcapture %}
          {{ ip_measurements_markdown | markdownify }}
        </section>
      </div>
      <div class="container accordion">
        {% assign pt_with_order = all_content
          | where_exp: "item", "item.technology contains 'PT'"
          | where_exp: "item", "item.pt-order"
          | sort: "pt-order" %}
        {% assign pt_without_order = all_content
          | where_exp: "item", "item.technology contains 'PT'"
          | where_exp: "item", "item.pt-order == nil"
          | sort: "date" | reverse %}
        {% assign sorted = pt_with_order | concat: pt_without_order %}
        <details open>
          <!-- hiding the summary for now since there is only a single entry -->
          <summary style="display:none;">Path Tracing</summary>
        {% for post in sorted %}
          <div>
            {% include new-news-list-tags %}
          </div>
        {% endfor %}
        </details>
      </div>
    </div>
  </div>
</div>

