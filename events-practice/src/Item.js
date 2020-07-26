import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.items.quantity}</h5>
        <div>
          <h5 className="item-name">{this.props.items.name}</h5>
          <h6 className="text-muted">{this.props.items.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.items.category}</div>
        <h5 className="price">{this.props.items.price}€</h5>
      </div>
    );
  }
}

export default Item;
