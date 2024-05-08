import { Axios, AxiosResponse, AxiosError, GenericAbortSignal } from "axios"
import * as T from "./types"

export default (client: Axios) => {
  return {
    /**
     * Get DEXs Orders
     * @param extraParams string (optional)
     * @param headers object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
     * @param signal GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
     */
    Orders: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ ok: AxiosResponse<T.OrdersResponse> | undefined; error: AxiosError | undefined }> => {
      return client.get(`/orders/?${extraParams ? extraParams : ""}`, { signal, headers })
    },
  }
}
