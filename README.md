# rudp

Reliable UDP implementation for Node.js.

## Example

For a peer-to-peer application, you can write a script like this:

```javascript
var rudp = require('rudp');
var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

socket.bind(localPort);

var client = new rudp.Client(socket, remoteAddress, remotePort);

// And do whatever you want here
```

# RUDP

Reliable UDP implementation for Node.js

# Getting Started

## Installation
`
npm i rudp
`

# How it works
By adding sequence number into the packets we can make sure our packets will be delivered inorder to the server side. When you call `Client.send(data)` the `Client` class uses its 'Connection' instance to send the data. The Connection class has a Sender and a Receiver. The Sender class is responsible for sending the packets and the Receiver is responsible for receiving packets and passing them to the application inorder. The Connection class will call the Sender class send() function and the Sender will do the magic for you. The Sender class will split your data into UDP safe segment sizes which is 512 bytes and put every 16 chunks into one window. We will call those chunks Packets and every 16 Packets, a Window.  We call the first packet of each window the sync packet and the last one the reset packet. In this way the receiver is able to detect new incomming windows and when the window is finished.

# Simple Example

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Client

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Server

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.


# Notes

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.