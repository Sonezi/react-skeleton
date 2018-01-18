var React = require('react');

class ListItem extends React.Component {

    render() {
      return (
        <li>
            <a href="#">
              <h4>{this.props.ingredient}</h4>
              </a>
        </li>
      );
    }
}

module.exports = ListItem;
