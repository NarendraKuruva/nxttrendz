import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import allProductsData from '../../fixtures/ProductItems.json'
import productItemDetails from '../../fixtures/ProductItemDetails.json'
import NxtTrenzService from '.'
class NxtTrendzServiceFixture implements NxtTrenzService {
   getAllProducts(
      url: string
   ): Promise<{
      data: {
         id: string
         image_url: string
         title: string
         price: string
         brand: string
         rating: string
      }[]
   }> {
      return resolveWithTimeout(allProductsData)
   }
   getProductItemDetails(url: string) {
      return resolveWithTimeout(productItemDetails)
   }
   getPrimeDeals(url: string) {
      return resolveWithTimeout(allProductsData)
   }
}
export default NxtTrendzServiceFixture
