import NxtTrenzService from '.'

class NxtTrendzServiceApi implements NxtTrenzService {
   networkCallWithFetch: (url: string) => Promise<any>

   constructor(networkCallWithFetch) {
      this.networkCallWithFetch = networkCallWithFetch
   }
   getAllProducts(url: string) {
      return this.networkCallWithFetch(url)
   }
   getProductItemDetails(url: string) {
      return this.networkCallWithFetch(url)
   }
   getPrimeDeals(url: string) {
      return this.networkCallWithFetch(url)
   }
}
export default NxtTrendzServiceApi
