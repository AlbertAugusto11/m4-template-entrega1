export interface IProduct {
    id: number
    name?: string
    price?: number
    createdAt: Date
    updatedAt: Date
}
export type TProduct = Pick<IProduct, "name" | "price">

export interface IProductList {
    createProduct (data: TProduct): IProduct 
    getProducts (): IProduct[]
    getOneProduct (id: number): IProduct | undefined
    updateProduct (id: number, data: TProduct): TProduct
    deleteProduct (id: number): { message: string }

}