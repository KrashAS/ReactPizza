import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://626d16545267c14d5677d9c2.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (error) {
        alert(error.message);
        navigate("/");
      }
    }
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        asperiores excepturi tempora sit voluptates, magni in officia error
        expedita ab saepe a at nihil similique sapiente repellendus debitis eius
        dignissimos!
      </p>
      <h4>{pizza.price}</h4>
    </div>
  );
};
export default FullPizza;
