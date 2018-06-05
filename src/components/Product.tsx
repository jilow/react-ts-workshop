import * as React from 'react';
import image from '../resources/osx-el-capitan.jpg'
import IProduct from '../typings/IProduct'

export interface IProps {
  product: IProduct
}

class Product extends React.Component<IProps, object> {
  public props: IProps
  public render() {
    const { id, name } = this.props.product
    return (
      <div className="Product card" product-id={ id }>
        <div className="card-image">
          <img src={ image } className="img-responsive"/>
        </div>
        <div className="card-header">
          <div className="card-title h5">{ name }</div>
          <div className="card-subtitle text-gray">Some description</div>
        </div>
        <div className="card-body">
          specs...
        </div>
        <div className="card-footer">
          <button className="btn btn-primary float-right" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            Buy <i className="icon icon-forward"/>
          </button>
        </div>
      </div>
    )
  }
}

export default Product