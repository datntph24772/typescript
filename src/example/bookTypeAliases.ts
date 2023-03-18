type Book={
    authors:Authors[],
    book_cover?: string,
    categories:Categories,
    current_seller:Current_seller,
    description:string,
    images:Image[],
    list_price:number,
    name:string,
    original_price:number,
    quantity_sold:Quantity_sold,
    rating_average:number,
    short_description:number,
    specifications:Specifications[]
}[]

type Authors={
    id:number,
    name:string,
    slug:string
}
type Categories={
    id:number,
    name:string,
    is_leaf:boolean
}
type Current_seller={
    id:number,
    sku:number,
    name:string,
    link:string,
    logo:string,
    price:number,
    product_id:number,
    store_id:number,
    is_best_store:boolean,
    is_offline_installment_supported:null
}
type Image={
    base_url:string,
    is_gallery:boolean,
    label:null,
    large_url:string,
    medium_url:string,
    position:null,
    small_urlo:string,
    thumbnail_url:string
}
type Quantity_sold={
    text:string,
    value:number
}
type Specifications={
    name:string,
    attributes:Attributes[]
}
type Attributes={
    code:string,
    name:string,
    value:string
}