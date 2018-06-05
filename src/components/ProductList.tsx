import * as React from 'react';
import Product from './Product'

import IProduct from '../typings/IProduct'
import IProductList from '../typings/IProductList'

export interface IProps {
  productList: IProductList
}

class ProductList extends React.Component<IProps, object> {
  public props: IProps
  public render() {
    return (
      <div className="ProductList container">
        <h3>Product List</h3>
        <div className="columns">
          {
            this.props.productList.products.map((product: IProduct, index: number) => {
              return (
                <div key={ index } className="column col-6 col-xs-12">
                  <Product  product={ product }/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ProductList