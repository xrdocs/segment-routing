---
published: true
breadnav: true
date: '2020-07-27 10:00 -0700'
title: 'Dennis Cai of Alibaba talks about Segment Routing - Podcast'
author: Dennis Cai, Ray Mota
excerpt: 'In this podcast, Dennis Cai, Chief Architect of Network Infrastructure of Alibaba, talks about Segment Routing and the SRv6 adoption at Alibaba. Transcript is provided here.'
header:
  teaser: 'https://storage.buzzsprout.com/variants/ro5x7eb1n4bz1nluijqed2cqv4gl/74cb75bab2243992e98fab5156007185827084cf97936f24c0c66a651388df90.jpg'
---    

## *Dennis Cai, Chief Architect of Network Infrastructure, Alibaba*

[<img src="https://storage.buzzsprout.com/variants/ro5x7eb1n4bz1nluijqed2cqv4gl/74cb75bab2243992e98fab5156007185827084cf97936f24c0c66a651388df90.jpg" width="300"/>](https://www.buzzsprout.com/1010419/4702961-alibaba-dennis-cai-talks-about-segment-routing-episode-18)

This is a transcript of [The Deep Edge Podcast - Episode 18](<https://www.buzzsprout.com/1010419/4702961-alibaba-dennis-cai-talks-about-segment-routing-episode-18>).

### Question – Could you say a few words about Alibaba and share some insights into the network infrastructure that supports Alibaba’s business?

Alibaba is a web company as you and many others know. We are a giant economies company. That’s our usual core business but beyond that we also have many others such as electronic payment, FinTech, cloud computing, digital media and entertainment, logistics and other business innovation and initiatives. As you can see, our applications are very diverse, and we see a tremendous challenge to our global network infrastructure. My team is responsible for design the entire network infrastructure of Alibaba. Our infrastructure is mass scale and fast evolving. So, with the mass network infrastructure is even more challenging. We are actively looking for adopting new technologies and innovations to meet our business requirements. 

### Question – In your opinion, what are the key factors driving SRv6 adoption?

There are few key reasons for us to adopt SRv6. First, our entire network infrastructure is going to use IPv6 and we are looking for some network innovations related to IPv6. We see SRv6 as bringing tremendous flexibility to our network and valid our business. The second is about simplicity. Simplicity means a lot in networking world. A simple network is easier to maintain, faster to deploy and evolve. It also means higher availability and better scale. SRv6 is simple but it doesn’t compromise any performance and scale. It doesn’t increase the CAPEX. We don’t see much pushing back from our operation team to SRv6 as many other innovations, so that’s really good. Another key criterion is SRv6 is very friendly to our compute systems such as our controllers, our overlay gateways, smart NIC. etc. The engineering cost is not that high comparing to the big value it brings to us. If you compare all that together, I would say there is no reason for us to not adopt SRv6   

### Question – Could you elaborate on the use cases you plan to address with SRv6?

We have multiple use-cases in mind. Eventually our entire network infrastructure will be IPv6 and all our traffic engineering will be SRv6 based. Not only for existing use-cases but also for the new use-cases. The first use-case is for our traditional backbone, metro network for the traffic engineering. This is a natural evolution as we move to IPv6 infrastructure. Second, we actually plan to deploy SRv6 in our data center network so can create new capabilities into our datacenter network. We are evolving the datacenter network, actually architectural part, from best effort network to a predictable network. The TE is one of the key foundations to enable this predictable network. 
   
### Question – SRv6 micro-instructions bring new capabilities and will be key in enabling new use cases at mass scale. What’s in it for you and how do you plan to leverage these new capabilities moving forward?

The common concern about SRv6 is too costly in terms of encapsulation overhead which puts a lot of challenge to the hardware chipset, and it is not a bandwidth efficient, that’s a common concern. Industry has been looking for some solution for a while. The micro-instruction is one of them. I would say the most brilliant part of micro-instructions is that it does not violate the nature of IPv6 lookup and forwarding, while the SRH space is saved.<br /> 
You can even build a SID-list without any additional SRH, the 128-bit space contains enough path information for many other use-cases. 

I am glad to see more and more micro-instructions related features has been defined and implemented on multiple platforms. The first use-case we are looking at is explicit traffic engineering path where a long SID list is required. Moving forward as I mentioned earlier, we are going to try the idea of uSID for the overlay segmentation and service chaining in a data center. We are thinking about pushing the SRv6 source node from network to edge including the network overlay gateway and the host. The edge devices are closer to applications and is the better and natural place to apply the network policies. With SRv6 and micro instruction, this become possible and is easier to implement.   

### Question – What are the things you would recommend customers pay particular attention to ensure a successful SRv6 implementation?

SRv6 is still relatively new and we are still in a PoC stage. We did a successful SRv6 uSID verification in Cisco Lab few months ago. Now, we are in the process of testing the PoC in our own lab and integrate with our controller. We did the test on the Cisco 8000 series, NCS5500 and ASR9k. We are also planned it on other vendors as well. 

As we can see there are different approaches in terms of how to compress the V6 address space. So was certainly cause the vendor interoperability issue. It very important to understand the vendor approach, hardware capability, and interoperability. That’s the reason we have to do the full lab interoperability test before we can do any real implementations.  

