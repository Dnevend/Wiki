---
sidebar_position: 4
tags: [blockchain, btc]
---

# EIP

## EIP-6963

多钱包自动发现及解决注入冲突的方案。当多个浏览器插件钱包试图将它们的以太坊提供者注入到 window.ethereum 时，会导致覆盖和恶意竞争。EIP-6963 引入了标准化的接口和事件，以便 DApps 无缝识别和与多个钱包交互，旨在解决提供者注入冲突问题，改善 DApps 和钱包提供者的生态系统。

[多钱包自动发现以及注入冲突解决方案: EIP-6963 调研](https://juejin.cn/post/7319781980974448675)

[mipd - Github](https://github.com/wevm/mipd)

[Metamask 实现 - Github](https://github.com/MetaMask/providers/blob/v14.0.2/src/EIP6963.ts)
