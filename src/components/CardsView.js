import React from "react";
import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map((o) => (
        <ShopCard items={o} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};