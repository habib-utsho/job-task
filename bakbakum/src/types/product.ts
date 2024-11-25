export interface TProduct {
    _id: string
    title: string
    description: string
    weight: number
    price: TPrice
    discount: TDiscount
    quantity: number
    thumbnail: string
    images: Image[]
    category: TCategory
    vendor: TVendor
    shop: TShop
    brand: TBrand
    delivery: TDelivery
    features: TFeatures
    isFragile: boolean
    promotions: TPromotion[]
    collections: any[]
    isActive: boolean
    badge: string
    variantType: string
    variants: TVariants
    order: number
    shopPosition: number
    orderLimit: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TPrice {
    merchant: TMerchantPrice
    icchaporon: TIcchaporonPrice
  }
  
  export interface TMerchantPrice {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface TIcchaporonPrice {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface TDiscount {
    type: string
    discountPercentage: number
    price: TPrice2
  }
  
  export interface TPrice2 {
    merchant: TMerchantPrice2
    icchaporon: TIcchaporonPrice2
  }
  
  export interface TMerchantPrice2 {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface TIcchaporonPrice2 {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface Image {
    url: string
    isDeleted: boolean
  }
  
  export interface TCategory {
    categoryCollections: any[]
    _id: string
    name: string
    image: string
    promotions: string[]
    collections: string[]
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TVendor {
    _id: string
    merchantId: string
    name: string
    email: string
    user: string
    contactNo: string
    contactNoType: string
    address: TAddress
    moderator: string
    isActive: boolean
    createdAt: string
    updatedAt: string
    __v: number
    shop: string
  }
  
  export interface TAddress {
    details: string
    postCode: string
    thana: string
    postOffice: string
    district: string
    division: string
    createdAt: string
    updatedAt: string
    _id: string
  }
  
  export interface TShop {
    _id: string
    name: string
    description: string
    icon: string
    vendor: string
    contactNo: string
    address: TAddress2
    moderator: string
    position: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TAddress2 {
    details: string
    postCode: string
    thana: string
    postOffice: string
    district: string
    division: string
    createdAt: string
    updatedAt: string
    _id: string
  }
  
  export interface TBrand {
    _id: string
    name: string
    promotions: string[]
    collections: any[]
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TDelivery {
    isFree: boolean
    isCalculateByWeight: boolean
    insideDhaka: TInsideDhaka[]
    outsideDhaka: TOutsideDhaka[]
    single: TSingle
  }
  
  export interface TInsideDhaka {
    max: number
    cost: number
  }
  
  export interface TOutsideDhaka {
    max: number
    cost: number
  }
  
  export interface TSingle {
    insideDhaka: number
    outsideDhaka: number
    _id: string
  }
  
  export interface TFeatures {
    Size: string
    Origin: string
  }
  
  export interface TPromotion {
    _id: string
    name: string
    description: string
    startDate: string
    endDate: string
    daysOfWeek: string[]
    isActiveCron: boolean
    isApproved: boolean
    isActive: boolean
    products: TPromotionProduct[]
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TPromotionProduct {
    productId: string
    discount?: TDiscount2
    status: boolean
    orderLimit?: number
    position: number
  }
  
  export interface TDiscount2 {
    type: string
    discountPercentage: number
    price: TPrice3
  }
  
  export interface TPrice3 {
    merchant: TMerchant3
    icchaporon: TIcchaporonPrice3
  }
  
  export interface TMerchant3 {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface TIcchaporonPrice3 {
    buyingPrice: number
    sellingPrice: number
  }
  
  export interface TVariants {
    singleVariants: SingleVariants
    colorVariants: any[]
    sizeVariants: any[]
  }
  
  export interface SingleVariants {
    colorVariants: any[]
    sizeVariants: any[]
  }
  