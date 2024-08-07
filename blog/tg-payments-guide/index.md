---
slug: tg-payment-guide
title: Telegram 支付机器人开发小记
description: 基于Grammy框架 Telegram Bot 开发与支付（TON、Star）开发小记
authors: [Dnevend]
tags: [telegram]
---

# Telegram 支付机器人开发小记

随着 Telegram 迈向区块链&小程序时代，TG 内部已经与 TON 钱包做了集成，并为了应用商店监管需要上线了 Telegram Stars 作为支付方式。正为区块链走向 Mass Adoption 铺设了一条新的高速公路。

在实践中学习，本文记录了 Telegram 机器人与支付环节的开发过程和一些经验提示。

[点击此处访问完整 Demo 地址](https://github.com/Dnevend/tg-payment-bot)

## 支付

### Pay With Telegram Stars

1. 调用 `sendInvoice` 发送发票，currency 参数指定为`XTR`

2. 等待字段 `pre_checkout_query` 的更新

3. 通过 `answerPreCheckoutQuery` 批准或取消订单

4. 等待字段 `successful_payment` 的更新

5. 存储成功支付的 `telegram_payment_charge_id`（未来可能需要用它来发起退款）

6. 向用户交付其所购买的商品和服务

### Pay With TON

TODO:

## 注意点

- **测试环境账号注册**

  在 Telegram 的账号体系中，测试环境与主环境完全隔离，因此在进行测试环境登录时，无法直接使用现有账号进行登录，在扫码时会提示`AUTH_TOKEN_INVALID2`错误，以及无法收到验证码的情况。
  所以你需要先注册一个测试账号，截止 2024 年 8 月，测试账号只能通过 iPhone 端 Telegram 进行。具体操作流程如下：

  > 1、登录 Telegram iPhone  
  > 2、多次点击右下角`Setting`Tab 进入 Debug 页面  
  > 3、点击操作列表中的`Accounts`项  
  > 4、点击`Login to another account`选择`Test`环境，完成账号注册

  账号注册完成后，就可以按官方流程进入测试环境。在使用测试环境时，您可以采用未加密的 HTTP 链接来测试您的 Web 应用或 Web 登录功能。

  另外测试环境的 Telegram Star 也需要进行购买，不过可以参考下文使用 stripe 提供的测试信用卡无限制进行购买。

- **信用卡测试支付**

  在您的机器人支付功能仍在开发和测试阶段时，请使用 **“Stripe 测试模式”** 提供商。在此模式下，您可以进行支付操作而不会实际计费任何账户。测试模式中无法使用真实信用卡，但您可以使用测试卡，如 `4242 4242 4242 4242` [(完整测试卡列表)](https://docs.stripe.com/testing#cards)。您可以随意在测试模式与实时模式间切换，但在正式上线前，请务必查阅[上线检查清单](https://core.telegram.org/bots/payments#going-live)。

## 引用参考

- [grammY](https://grammy.dev/zh/guide/)

  grammY 是一个用于创建 Telegram Bot 的框架。它可以从 TypeScript 和 JavaScript 中使用，在 Node.js、 Deno 和浏览器中运行。

- [Bot Payments API for Digital Goods and Services](https://core.telegram.org/bots/payments-stars)

- [出售饺子的机器人](https://docs.ton.org/mandarin/develop/dapps/tutorials/accept-payments-in-a-telegram-bot-js)

  官方 Demo，一个简单的 Telegram 机器人，用于接收 TON 支付。

- [Telegram test server 账号注册](https://medium.com/@Asher_Tan/telegram-test-server%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C-24b0d424a2ff)

- [How to integrate Telegram Stars Payment to your bot](https://teletype.in/@alteregor/how-to-integrate-telegram-stars)
