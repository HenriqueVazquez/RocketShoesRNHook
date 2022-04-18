import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 95%;
`;

export const ProductImage = styled.Image`
  align-self: center;
  flex: 1;
  height: 250px;
  width: 300px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  align-self: center;
`;

export const ListProducts = styled.FlatList`
  width: 100%;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
  align-self: flex-end;
`;

export const AddButton = styled(RectButton)`
  background: ${colors.primary};
  width: 100%;

  border-radius: 4px;
  padding: 0px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewProductAmount = styled.View`
  padding: 13px 37px;
  background: ${darken(0.15, colors.primary)};

  border-radius: 4px;
  margin-bottom: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`;

export const ProductAmountText = styled.Text`
  font-size: 16px;
  color: white;
  align-items: center;
  justify-content: center;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  font-size: 16px;
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
