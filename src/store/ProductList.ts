import IProduct from '../typings/IProduct'
import IProductList from '../typings/IProductList'

class ProductList implements IProductList {
  public products: IProduct[]

  constructor(products: IProduct[]) {
    this.products = products
  }
}

export default ProductList
