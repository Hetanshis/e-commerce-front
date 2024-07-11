import list from "../data";
import "../styles/card.css";
import Cards from "./Crad";
const Products = ({ item, handleClick }: any) => {
  return (
    <section>
      {list.map((item: any) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};
export default Products;
