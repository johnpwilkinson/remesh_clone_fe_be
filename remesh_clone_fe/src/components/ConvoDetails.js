import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
 
class Car extends Component {

  render () {
    return (
      <Carousel>
        {this.props.filteredConvos.items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}

export default Car

