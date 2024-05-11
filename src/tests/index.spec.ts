import { expect, test, vi } from "vitest"
import PricingClient from ".."

const baseUrl = "https://graph.xray.app/output/pricing/mainnet/api/v1"
const headers = {}
const client = PricingClient(baseUrl, headers)

test("/orders", async () => {
  const orders = await client.GET("/orders")
  expect(orders.data?.[0]).toHaveProperty("asset_a")
})
