import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/loquesea
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form onSubmit={this.goToStore} className="store-selector">
        {/* Comentario va entre llaves y tiene que estar dentro
                del elemento */}
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store →</button>
      </form>
    );
  }
}

export default StorePicker;
