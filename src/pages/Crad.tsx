const Cards = ({ item, handleClick }: any) => {
  const { title, author, price, img } = item;

  return (
    <>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="Image" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}&#x20B9;</p>

          <button onClick={() => handleClick(item)}> Add to cart</button>
        </div>
      </div>
    </>
  );
};
export default Cards;
