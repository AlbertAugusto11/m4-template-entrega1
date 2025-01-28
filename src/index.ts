import { IProduct, IProductList, TProduct,  } from "./interfaces";


class ProductList implements IProductList {
    private productList: IProduct[] = []
    id: number = 1

    createProduct(data: TProduct): IProduct {
        let product = {...data, id: this.id, createdAt: new Date(), updatedAt: new Date()}
        this.productList.push(product)
        this.id++
        return product
    }

    getProducts(): IProduct[] {
        return this.productList
    }

    getOneProduct(id: number): IProduct | undefined {
        let returnProduct
        let product = this.productList.filter(element => {
            if(element.id == id){
                returnProduct = element
            }
        })
        return returnProduct
    }

    updateProduct(id: number, data: TProduct): IProduct {
        let index = this.productList.findIndex(element => element.id == id)
        let newProduct = {...this.productList[index],...data,updatedAt: new Date()}
        this.productList.splice(index,1,newProduct)
        return newProduct
    }

    deleteProduct(id: number): {message: string}{
        let index = this.productList.findIndex(element => element.id == id)
        this.productList.splice(index,1)
        return { message: "Product successfully deleted."}

    }
}

export const productList = new ProductList()