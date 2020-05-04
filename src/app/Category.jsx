import React, { Component } from 'react';
import CategoryComp from '../modules/Category-Comp';
import axios from 'axios';

class Category extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://apiflm.000webhostapp.com/category/list`)
    .then(res => {
      const categories = res.data.result;
      this.setState({ categories });
    })
  }

  render() {
    return (
      <CategoryComp
        categories={this.state.categories}
      />
    )
  }
}

export default Category;