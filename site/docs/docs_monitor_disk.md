---
layout: layouts/layout.njk
permalink: /docs/monitor/disk-metrics/
type: docs
---

# Disk I/O Metrics

InLog provides the capability to monitor input and output (I/O) disk operations on your system. This is essential for understanding and optimizing the performance of your storage device.

Below are the key metrics that can be tracked through InLog, along with their descriptions:

- **read_count** (Number of Reads)
    - Represents the total number of read operations performed on the storage device since the beginning of monitoring.

- **write_count** (Number of Writes)
    - Indicates the total number of write operations performed on the storage device since the beginning of monitoring.

- **read_bytes** (Read Bytes)
    - Refers to the total amount of bytes read from the storage device since the beginning of monitoring.

- **write_bytes** (Write Bytes)
    - Indicates the total amount of bytes written to the storage device since the beginning of monitoring.

- **read_time** (Read Time)
    - Represents the total time spent on read operations on the storage device. The time can be expressed in seconds or another unit, depending on the implementation.

- **write_time** (Write Time)
    - Indicates the total time spent on write operations on the storage device. Similar to read_time, the time unit may vary depending on the implementation.

- **busy_time** (Busy Time)
    - Refers to the total time during which the storage device has been busy performing read or write operations. This includes the time the device has been active, regardless of whether it's reading or writing.