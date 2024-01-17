---
layout: layouts/layout.njk
permalink: /docs/monitor/install/
type: docs
---

# Install the Monitor Client

The **Monitoring Client** is designed to be lightweight, easy to install, and configure.

With approximately 8 MB for download, when executed, it takes up no more than 10 MB of RAM on the host machine.

To get started, log in to access your account.

The installation instructions will appear on your screen upon entering the dashboard. If you already have a monitor and want to add another one, click on the **Configure** tab to review the instructions.

Follow the steps displayed on the screen to install the Client.

## Configuration

- **user_uuid** (mandatory)
    - This field is required to identify your account in the Client.
    - It must be configured before running the **run** or **service** commands.
- **machine_uuid** (optional, generated automatically if not set manually)
    - You can specify a machine_uuid if you have installed it previously and want to maintain the same reference.
- **instance_name** (optional)
    - Gives an alias to the instance. This alias is used to identify the machine on the dashboard.
- **disk_name** (optional)
    - The default value is **sda**.
    - Use the `lsblk` command to check the **"NAME"** of the disk you want to monitor.
    - Only one disk can be monitored per instance.
- **disk_path** (optional)
    - The default value is **/**.
    - Use the `lsblk` command to check the **"MOUNTPOINTS"** of the disk you want to monitor.
    - Only one disk can be monitored per instance.
- **loop_time** (optional)
    - The default value is 60. The value is in seconds.
    - Determine the period between data logs.
    - It is not recommended to set a value less than 10, as it may cause issues with the accuracy of the collected data.

## Running

Use the **run** command to validate the installation.

If no errors are presented, the sending of logs to the server will commence.

To keep the Client running in the background, use the **service** command.

The **service** command will create a `systemctl` process responsible for keeping the Client running.

After executing the **service** command, you can check the execution of the Client in the background by using the `systemctl status inlog` command. The task status will be displayed. In case of an error, check the installation and configuration of the Client.