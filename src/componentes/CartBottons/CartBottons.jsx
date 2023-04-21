import React from 'react'
import { useParams } from 'react-router-dom';

export const CartBottons = () => {
 const [state, setState] = React.useState(1);
 const { productId } = useParams();
 
 const handleMoreClick = () => {
    setState(state + 1);
 };
 const handleLessClick = () => {
    if (state === 1) return;
    setState(state - 1);
 };

//  const addToCart = () => {
//   const existingProduct = itemCount.p.find(
//     (p) => p.productId === productId
//   );
//   if (existingProduct) {
//     existingProduct.qty += state;
//   }
//  }


  return (
    <>
      <p>{state}</p>
      <button onClick={handleLessClick} type="button" class="btn btn-primary" >-</button>
      <button onClick={handleMoreClick} type="button" class="btn btn-primary" >+</button>
    </>
  );
}
