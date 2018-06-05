import * as React from 'react';

import ProductList from './components/ProductList'
import ProductModel from './store/Product'
import ProductListModel from './store/ProductList'

// https://picturepan2.github.io/spectre/getting-started.html
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import 'spectre.css/dist/spectre.min.css'

import './App.css';

const productList = new ProductListModel([
  new ProductModel('1', 'Web Hosting'),
  new ProductModel('2', 'Bare Metal')
])

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ProductList productList={ productList }/>
      </div>
    );
  }
}

export default App;
