import PricingClient, { PricingTypes } from "../index"

const { client, methods: Pricing } = new PricingClient("https://graph.xray.app/output/pricing/mainnet/api/v1", {
  headers: {
    Authorization: "Bearer YOUR_API_TOKEN",
    "X-Some-Header": "YOUR_SOME_HEADER_VALUE",
  },
})

const app = async () => {
  const image = await Pricing.Orders()
  if (image) {
    console.log("Orders:", image.ok.data)
  } else {
    console.error(image.error)
  }
}

app()
