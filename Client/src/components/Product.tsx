import type { IProduct } from "../model/IProduct";


interface Props {
    product: IProduct;
}

export default function Product(props: Props) {
  return (
    <>
      {props.product.isActive ? (
        <div>
          <h3>{props.product.name} </h3>
          <p>{props.product.price}</p>
        </div>
      ) : (
        <p>Bu ürün satişta değil</p>
      )}
    </>
  );
}
