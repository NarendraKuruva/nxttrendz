interface NxtTrenzService {
   getAllProducts(url: string): Promise<any>
   getProductItemDetails(url: string): Promise<any>
   getPrimeDeals(url: string): Promise<any>
}
export default NxtTrenzService
