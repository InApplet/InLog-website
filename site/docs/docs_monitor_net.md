---
layout: layouts/layout.njk
permalink: /docs/monitor/netwoek-metrics/
type: docs
---

# Network I/O Metrics

InLog offers the ability to monitor input and output (I/O) network operations on your system. This functionality is crucial for comprehending and optimizing the performance of your network infrastructure.

Below are the key metrics that can be tracked through InLog, along with their descriptions:

- **bytes_sent** (Bytes Sent)
    - The bytes_sent metric represents the total amount of bytes sent by the server. This includes data transmitted to other devices on the network.

- **bytes_recv** (Bytes Received)
    - The bytes_recv metric indicates the total amount of bytes received by the server. These bytes represent data coming from other devices on the network.

- **packets_sent** (Packets Sent)
    - The packets_sent metric counts the total number of packets sent by the server. Each packet is a unit of data transmitted over the network.

- **packets_recv** (Packets Received)
    - The packets_recv metric records the total number of packets received by the server. This represents the amount of data received from the network.

- **errin** (Total Receive Errors)
    - The errin metric represents the total number of errors occurring during the data receiving process. These errors may indicate issues with the integrity or quality of the network connection.

- **errout** (Total Send Errors)
    - The errout metric tallies the total number of errors occurring during the data sending process. Errors in this metric may indicate problems in transmitting data to other devices.

- **dropin** (Total Dropped Received Packets)
    - The dropin metric represents the total number of incoming packets that were discarded by the server. This may occur due to network congestion or processing issues.

- **dropout** (Total Dropped Sent Packets)
    - The dropout metric records the total number of outgoing packets that were discarded by the server. This can happen due to transmission issues or resource constraints.

## Using Metrics for Server Improvements

Explore some metrics that can help understand machine behavior and ways to enhance performance.

### Issue Identification:

Regularly monitor metrics to identify unexpected patterns or spikes.
High errors and drops may indicate network issues that need investigation.

### Performance Optimization:

Analyze bytes sent and received metrics to evaluate network traffic.
Consider optimizing applications and services to reduce network load if necessary.

### Error Resolution:

When detecting errors in errin and errout metrics, investigate and fix issues in the network infrastructure or configurations.

### Managed Dropped Packets:

Monitor packet drops (dropin and dropout) to identify network bottlenecks.
Adjust settings or upgrade hardware to improve transmission efficiency.

### Capacity Planning:

Utilize metrics to predict the need for network capacity expansion.
Plan upgrades based on observed growth in metrics over time.