---
sidebar_position: 4
tags: [blockchain, eip]
---

# EIP

[以太坊改进提案 (EIP)](https://eips.ethereum.org/) 是为以太坊潜在新功能或流程提出建议的标准。 EIP 包含提议改进的技术规范，并作为社区的“真相来源”。 在 EIP 的过程中，将会讨论和制定以太坊的网络升级和应用标准。

## EIP-6963

多钱包自动发现及解决注入冲突的方案。当多个浏览器插件钱包试图将它们的以太坊提供者注入到 window.ethereum 时，会导致覆盖和恶意竞争。EIP-6963 引入了标准化的接口和事件，以便 DApps 无缝识别和与多个钱包交互，旨在解决提供者注入冲突问题，改善 DApps 和钱包提供者的生态系统。

[多钱包自动发现以及注入冲突解决方案: EIP-6963 调研](https://juejin.cn/post/7319781980974448675)

[mipd - Github](https://github.com/wevm/mipd)

[Metamask 实现 - Github](https://github.com/MetaMask/providers/blob/v14.0.2/src/EIP6963.ts)

## EIP-1193

EIP-1193 旨在为以太坊钱包和 DApps 之间的通信提供一致的接口。这个提案定义了一种 JavaScript API，通过这个 API，DApps 可以请求用户的账户信息、订阅钱包的事件，以及向以太坊网络发送交易。EIP-1193 的目标是提高开发者在不同钱包提供者之间构建应用的兼容性和用户体验。

[Ethereum Provider](https://juejin.cn/post/7176218426061357115)
