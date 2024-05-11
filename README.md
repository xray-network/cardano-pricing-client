<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-pricing-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-pricing-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/ray-network/cardano-pricing-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-pricing-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# Cardano Pricing TypeScript Client

> [!NOTE]
> Automatically generated Openapi-fetch (Axios) client for [XRAY/Graph Pricing API](https://xray.app) based on [schema.yaml](https://raw.githubusercontent.com/xray-network/cardano-pricing-client/main/src/schema/schema.yaml) OpenAPI schema. DEX price tracking for any Cardano token

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install cardano-pricing-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-pricing-client
```

## Usage

```TypeScript
import PricingClient from "cardano-pricing-client"

const client = PricingClient("https://graph.xray.app/output/pricing/mainnet/api/v1")

const app = async () => {
  const orders = await client.GET("/orders")

  if (orders.data) {
    console.log(tip.data)
  }
  if (orders.error) {
    console.error(tip.error)
  }
}

app()
```

## Advanced Usage

<details>
<summary>Request Cancellation (AbortSignal)</summary>

```TypeScript
import PricingClient from "cardano-pricing-client"

const client = PricingClient("https://graph.xray.app/output/pricing/mainnet/api/v1")

const app = async () => {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort() // cancel request
    console.log('Aborted!')
  }, 200)

  const orders = await client.GET("/orders", {
    signal: abortController.signl,
  })

  if (orders.data) {
    console.log(tip.data?.[0]?.block_no)
  }
  if (orders.error) {
    console.error(tip.error)
  }
}

app()
```

</details>

## Endpoints

* Check OpenAPI fetch documentations for available endpoint parameters: https://openapi-ts.pages.dev/openapi-fetch/
* The client uses OpenAPI definitions from the Pricing API configuration: [schema.yaml](https://raw.githubusercontent.com/xray-network/cardano-pricing-client/main/src/schema/schema.yaml)


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer)

```
https://graph.xray.app/output/pricing/mainnet/api/v1
```

```
https://graph.xray.app/output/pricing/preprod/api/v1
```

```
https://graph.xray.app/output/pricing/preview/api/v1
```
