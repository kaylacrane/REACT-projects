import React, { Component } from 'react';
import Item from './Item';
import CategoryButton from './CategoryButton';

/*this is where we store the original list and then update to the filtered list from button event*/
let itemsList;

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.buttonFilterHandler = this.buttonFilterHandler.bind(this);
    /* this is where we assign the default list to our variable. Where we created the variable above you can't access props!*/
    itemsList = this.props.items;
  }
  /* we pass this method down to the button component and the button category is returned*/
  buttonFilterHandler(category) {
    /*using the category info we filter our default list into a new filtered list and update our itemsList variable*/
    if (category === 'All') {
      itemsList = this.props.items;
    } else {
      itemsList = this.props.items.filter((item) => item.category === category);
    }
    /*we force a reload*/
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div className="button-container">
          <CategoryButton
            category="All"
            buttonFilterHandler={this.buttonFilterHandler}
            items={this.props.items}
          />
          <CategoryButton
            category="Drinks"
            buttonFilterHandler={this.buttonFilterHandler}
            items={this.props.items}
          />
          <CategoryButton
            category="Cereal"
            buttonFilterHandler={this.buttonFilterHandler}
            items={this.props.items}
          />
          <CategoryButton
            category="Fast-food"
            buttonFilterHandler={this.buttonFilterHandler}
            items={this.props.items}
          />
        </div>
        {/* here we take our list (either default or filtered) and using map and our Item component we construct the HTML */}
        <ul className="item-list">
          {itemsList.map((item, i) => (
            <Item key={i} items={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
