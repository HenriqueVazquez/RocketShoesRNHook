/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Product,
  AddButton,
  ViewProductAmount,
  ProductAmountText,
  AddButtonText,
  ListProducts,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((SumAmount, product) => {
      SumAmount[product.id] = product.amount;

      return SumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{ uri: item.image }}
          acessible
          accessibilityLabel={`Imagem do ${item.title}`}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice
          accessibilityLabel={`O valor do ${item.title} é ${formatPrice(
            item.price
          )}`}
        >
          {formatPrice(item.price)}
        </ProductPrice>
        <AddButton
          onPress={() => handleAddProduct(item.id)}
          accessibilityLabel={
            amount[item.id]
              ? `O carrinho possui ${amount[item.id]} ${item.title} adicionados`
              : 'o carrinho não possui esse item'
          }
          accessibilityHint={
            amount[item.id]
              ? 'Clique duas vezes para adicionar mais um deste item ao carrinho'
              : 'Clique duas vezes para adicionar ao carrinho'
          }
        >
          <ViewProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ViewProductAmount>
          <AddButtonText>ADICIONAR 2</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <ListProducts
        data={products}
        extraData={amount}
        keyExtractor={(product) => String(product.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
