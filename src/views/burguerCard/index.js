import React from 'react';
import {CardStyled, CtnImage} from './style';
import * as cp from '../../components';
import { Link } from 'react-router-dom'

const BurguerCard = ({item, setCartList, cartList}) => {
  return (
    <CardStyled>
      <CtnImage>
        <img src={item.thumbnail} alt={`Imagem do ${item.name}`}/>
      </CtnImage>
      <h2>{item.name}</h2>
      <span>{`R$ ${item.price},00`}</span>
      <cp.Button children={'Comprar'} getEvent={() => {
        setCartList([...cartList, ...[item]]);
      }}/>
      <Link to={`/burguers/${item.id}`}>Mais detalhes</Link>
    </CardStyled>
  )};

export default BurguerCard;
