import React from "react";
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map((o) => (
        <ShopItem items={o} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};