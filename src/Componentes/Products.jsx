export const Products = ({ products }) => {
  return (
    <div className="row">
      {products.map((element, index) => {
        return (
          <div className="col-4" key={index}>
            <h4>{element.strDrink}</h4> 
            <img src={element.strDrinkThumb} height={200} width={200} alt="" /> 
            <h3>{element.strCategory}</h3> 
          </div>
        );
      })}
    </div>
    );
  };