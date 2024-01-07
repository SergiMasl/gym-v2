import React from "react";
// import { priceCard } from "./gist";

function PriceCard() {
  //   const cards = JSON.parse(result.data.files["gistfile1.txt"].content);;
  //   console.log(cards);
  //   const getGits = async () => {
  //     const res = priceCard();
  //     console.log(res);
  //   };
  //   getGits();

  const cards = [
    {
      id: "1",
      title: "Billed per month",
      price: "25",
      status: "Beginners",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "2",
      title: "Billed per month",
      price: "49",
      status: "Basic",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      title: "Billed per month",
      price: "99",
      status: "Advanced",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
      {cards.map((e) => (
        <div className="card" key={e.id}>
          <p className="card-title">{e.title}</p>
          <p className="card-price">
            <span>$</span>
            {e.price}
          </p>
          <p className="card-status">{e.status}</p>
          <p className="card-description">{e.description}</p>
          <button className="btm-price">Join Now</button>
        </div>
      ))}
    </>
  );
}

export default PriceCard;
