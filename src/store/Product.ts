import IProduct from '../typings/IProduct'

class Product implements IProduct {
  public id: string;
  public name: string;
  
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default Product
