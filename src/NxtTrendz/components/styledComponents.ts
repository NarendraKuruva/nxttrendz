import styled from 'styled-components'

export const CenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
`

export const FlexRowCenterContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
export const ProductsHeaderContainer = styled(FlexRowCenterContainer)`
   width: 860px;
   @media (max-width: 768px) {
      width: auto;
      flex-direction: column;
      align-items: flex-start;
   }
`

export const HeaderContainer = styled(FlexRowCenterContainer)`
   padding-top: 20px;
   padding-bottom: 15px;
   margin-bottom: 5px;
   border-bottom: 1px solid;
`

export const HeaderListContainer = styled.ul``

export const HeaderListItem = styled.li``
export const Logo = styled.img`
   width: 150px;
`
export const LoginInput = styled.input`
   border: 1px solid grey;
   background-color: azure;
   padding: 20px;
   height: 50px;
   border-radius: 8px;
   margin-bottom: 5px;
`

export const LoginFormMainContainer = styled.div`
   display: flex;
   padding: 50px;
   justify-content: center;
   align-items: center;
`

export const LoginMainImg = styled.img`
   width: 70%;
`
export const LoginFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   box-shadow: 0px 4px 16px 0px #bfbfbf;
   padding: 60px;
`
export const LoginFormWebsiteLogo = styled.img`
   width: 50%;
`
export const FlexColumnContainer = styled.div`
   display: flex;
   flex-direction: column;
`

export const HeadingTwo = styled.h2`
   font-size: 17px;
   font-weight: bold;
`
export const MatchStatus = styled.p`
   color: ${(props: { match_status: string }) =>
      props.match_status === 'Won' ? 'green' : 'red'};
`
export const HomeContainer = styled.div`
   width: 1200px;
   @media (max-width: 768px) {
      width: auto;
   }
`
export const StyledHomeContentContainer = styled.div``
export const LogoutButton = styled.button`
   color: white;
   background-color: #0b69ff;
   border: 0px;
   padding: 5px;
   border-radius: 5px;
`

export const StartShoppingBtn = styled(LogoutButton)``

export const StyledProductCard = styled.li`
   // margin: 5px;
   padding: 10px;
   border: 0px;
   border-radius: 8px;
   background-color: #f8f8ff;
   min-width: 180px;
   max-width: 1800px;
   min-height: 250px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   flex-wrap: wrap;
`

export const ProductsList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

export const ProductImg = styled.img`
   width: 250px;
`
export const RatingContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: #3b82f6;
   color: #ffffff;
   padding: 5px;
   border-radius: 8px;
   padding-left: 15px;
   padding-right: 15px;
`

export const RatingAndCostContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`
export const StyledStarIconContainer = styled.div``

export const StyledStarIcon = styled.img`
   width: 25px;
   margin-left: 5px;
`
export const StyledHeadingThree = styled.h3`
   font-weight: bold;
`
export const FlexRowContainer = styled.div`
   display: flex;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const FlexRowContainerwithoutMobile = styled(FlexRowContainer)`
   align-items: center;
   @media (max-width: 768px) {
      flex-direction: row;
   }
`
export const ProductDetailedImg = styled.img`
   width: 50%;
   border-radius: 20px;
   @media (max-width: 768px) {
      width: 100%;
   }
`
export const ProductDetailedViewMainContainer = styled.div`
   padding-top: 20px;
   width: 1200px;
   @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
   }
`
export const StyledParagraph = styled.p`
   color: ${props => props.color};
   font-size: ${props => props.size}px;
   margin-left: ${props => props.ml}px;
`
export const StyledProductItemDetails = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding-left: 50px;
   @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
   }
`
export const StyledSpanElement = styled.span`
   font-weight: bolder;
   color: black;
`
export const FlexCenterContainer = styled.div`
   display: flex;
   justify-content: center;
`
export const CounterContainer = styled(FlexRowContainer)`
   justify-content: space-between;
   align-items: center;
   width: 150px;
`
export const IncreaseDecreaseBtn = styled.button`
   border: 1px solid;
   height: 30px;
   width: 30px;
`

export const AddToCartBtnContainer = styled.div``

export const RatingItemsCont = styled.ul`
   display: flex;
   flex-direction: column;
`
export const RatingListContainer = styled.div``

export const RatingsMainContainer = styled.div``

export const StlyedRatingStarsImg = styled.img`
   width: 120px;
`

export const RatingStarImgContainer = styled.div``

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: lightgrey;
   padding: 8px;
   width: auto;
   justify-content: space-between;
   border-radius: 8px;
`
export const StyledInput = styled.input`
   outline: none;
   background-color: transparent;
   ::placeholder,
   ::-webkit-input-placeholder {
      color: black;
   }
`
export const StyledListItem = styled.li`
   color: ${props => (props.activeStatus === true ? '#0967d2' : '#64748b')};
   margin: 0px;
   cursor: pointer;
`
export const RatingFilterItemCont = styled(StyledListItem)`
   display: flex;
   align-items: center;
   color: ${props => (props.activeStatus === true ? '#0967d2' : '#64748b')};
`
export const ProductsAndFilterContainer = styled.div`
   display: flex;
   height: 100vh;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const AllProductsMainContainer = styled.div``

export const CategoryItemsContainer = styled(RatingItemsCont)``

export const CategoryOptionsContainer = styled.div``

export const CategoryItemsMainContainer = styled.div``
export const ProductsContainer = styled.div`
   overflow: auto;
   @media (max-width: 768px) {
      padding: 20px;
   }
`
export const FiltersContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 15px;
`

export const OutlineBtn = styled.button`
   border: 1px solid #0b69ff;
   color: #0b69ff;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
   margin-top: 10px;
`
export const PrimeDealsMainContainer = styled.div``

export const PrimeDealsList = styled.ul``

export const PrimeDealsFailureImg = styled.img``

export const ProductsPageMainContainer = styled.div``

export const ProductsPagePrimeDealsCont = styled.div``

export const ProductsPageAllProductsCont = styled.div``

export const AllProductsLoaderContainer = styled.div`
   display: flex;
   height: 40vh;
   width: 50vw;
   justify-content: center;
   align-items: center;
   text-align: center;
`
export const StyledButton = styled.button`
   color: white;
   border: 0px;
   border-radius: 8px;
   padding: 8px;
   padding-left: 20px;
   padding-right: 20px;
   background-color: #0b69ff;
`
export const AllProductsNoProductsFoundContainer = styled.div`
   width: 60vw;
   height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const StyledCartItem = styled.li`
   display: flex;
   align-items: center;
   background-color: #ffffff;
   padding: 16px;
   margin-bottom: 16px;
   box-shadow: 0px 4px 16px 0px #eaebed;
   @media (max-width: 768px) {
      margin-bottom: 32px;
      padding-left: 36px;
      padding-top: 24px;
      padding-bottom: 24px;
      padding-right: 48px;
   }
`
export const CartProductImg = styled.img`
   width: 96px;
   height: 96px;
   border-radius: 4px;
`
export const CartProductDetailsContainer = styled.div`
   margin-left: 16px;
`
export const CartProductTitleBrandContainer = styled.div`
   @media (max-width: 768px) {
      width: 250px;
   }
`
export const CartProductTitle = styled.p`
   color: #171f46;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   margin-top: 0;
   margin-bottom: 0;

   @media screen and (min-width: 768px) {
      font-size: 16px;
   }
`
export const CartProductBrand = styled.p`
   color: #64748b;
   font-family: 'Roboto';
   font-size: 10px;

   @media screen and (min-width: 768px) {
      font-size: 12px;
   }
`
export const CartQuantityContainer = styled.div`
   display: flex;
   align-items: center;
`
export const CartQualityControlBtn = styled.button`
   padding: 0;
`
export const CartProductQuantity = styled.p`
   color: #52606d;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   margin: 8px;
   line-height: 1.3;

   @media screen and (min-width: 768px) {
      font-size: 18px;
      margin-left: 16px;
      margin-right: 16px;
   }
`
export const TotalProductPrice = styled.p`
   color: #0b69ff;
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 500;
   margin-top: 0;
   margin-bottom: 0;
   min-width: 100px;
`
export const PriceRemoveContainer = styled.div`
   display: flex;
   align-items: center;
`
export const RemoveCartItemButton = styled.button`
   background-color: transparent;
   color: #334155;
   font-family: 'Roboto';
   font-size: 10px;
   line-height: 16px;
   border: none;
   outline: none;
   cursor: pointer;

   @media screen and (min-width: 768px) {
      display: none;
   }
`
export const RemoveCartItemMobileBtn = styled(StyledButton)`
   // background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   margin-left: 32px;

   @media screen and (max-width: 767px) {
      display: none;
   }
`
export const CartItemsContainer = styled.ul`
   display: flex;
   flex-wrap: wrap;
`
export const HeadingAndRemoveAllContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const CartItemsCountBadge = styled.span`
   background-color: #bfdbfe;
   color: #0967d2;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   border-radius: 50%;
   padding-left: 5px;
   padding-top: 2px;
   padding-right: 5px;
   padding-bottom: 2px;
   margin-left: 8px;

   @media screen and (min-width: 768px) {
      background-color: #e6f6ff;
   }
`
export const StyledCartSummery = styled.div`
   box-shadow: 0px 4px 16px 0px #eaebed;
   padding: 30px;
   width: 300px;
`
export const CartSummeryContainer = styled.div`
   display: flex;
   justify-content: flex-end;
`
export const EmptyContainer = styled(CenterContainer)`
   height: 80vh;
`
