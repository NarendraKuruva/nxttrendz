import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import {
   AllProductsLoaderContainer,
   AllProductsMainContainer,
   AllProductsNoProductsFoundContainer,
   CenterContainer,
   ProductDetailedImg,
   ProductsAndFilterContainer,
   ProductsContainer,
   ProductsList,
   StyledButton,
   StyledMainHeading
} from '../styledComponents'
import ProductsHeader from '../ProductsHeader'
import FiltersGroup from '../FiltersGroup'
import stores from '../../../Common/stores'

const categoryOptions = [
   {
      name: 'Clothing',
      categoryId: '1'
   },
   {
      name: 'Electronics',
      categoryId: '2'
   },
   {
      name: 'Appliances',
      categoryId: '3'
   },
   {
      name: 'Grocery',
      categoryId: '4'
   },
   {
      name: 'Toys',
      categoryId: '5'
   }
]

const sortbyOptions = [
   {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)'
   },
   {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)'
   }
]

const ratingsList = [
   {
      ratingId: '4',
      imageUrl:
         'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png'
   },
   {
      ratingId: '3',
      imageUrl:
         'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png'
   },
   {
      ratingId: '2',
      imageUrl:
         'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png'
   },
   {
      ratingId: '1',
      imageUrl:
         'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png'
   }
]

@inject('nxtTrendzStore')
@observer
class AllProductsSection extends Component {
   componentDidMount(): void {
      const { nxtTrendzStore } = stores
      nxtTrendzStore.getProducts()
   }

   renderProductsList = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      return (
         <ProductsContainer>
            <ProductsHeader
               sortbyOptions={sortbyOptions}
               activeOptionId={nxtTrendzStore.activeOptionId}
            />
            <ProductsList>
               {nxtTrendzStore.productsList.map(product => (
                  <ProductCard productDetails={product} key={product.id} />
               ))}
            </ProductsList>
         </ProductsContainer>
      )
   }
   renderLoader = (): JSX.Element => (
      <div>
         <AllProductsLoaderContainer>
            <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
         </AllProductsLoaderContainer>
      </div>
   )
   renderFiltersGroup = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      return (
         <FiltersGroup
            searchInput={nxtTrendzStore.searchInput}
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            activeCategoryId={nxtTrendzStore.activeCategory}
            activeRatingId={nxtTrendzStore.activeRatingId}
            changeSearchInput={nxtTrendzStore.changeSearchInput}
            enterSearchInput={nxtTrendzStore.enterSearchInput}
            changeCategory={nxtTrendzStore.changeCategory}
            changeRating={nxtTrendzStore.changeRating}
            clearFilters={nxtTrendzStore.clearFilters}
         />
      )
   }

   renderFailureView = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      return (
         <AllProductsNoProductsFoundContainer>
            <CenterContainer>
               <ProductDetailedImg
                  src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'
                  alt='error view'
               />
               <StyledMainHeading>Products Not Found</StyledMainHeading>
               <StyledButton onClick={nxtTrendzStore.onContinueShopping}>
                  Continue Shopping
               </StyledButton>
            </CenterContainer>
         </AllProductsNoProductsFoundContainer>
      )
   }

   renderProductsPage = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      switch (nxtTrendzStore.apiStatus) {
         case 200:
            return this.renderProductsList()
         case 400:
            return this.renderFailureView()
         default:
            return this.renderLoader()
      }
   }

   render(): JSX.Element {
      return (
         <AllProductsMainContainer>
            <ProductsAndFilterContainer>
               {this.renderFiltersGroup()}
               {this.renderProductsPage()}
            </ProductsAndFilterContainer>
         </AllProductsMainContainer>
      )
   }
}
export default AllProductsSection
