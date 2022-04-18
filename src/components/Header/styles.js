import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: ${colors.dark};
  margin-top: 20px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 26px;
  padding-left: 35px;
  align-items: center;
  justify-content: center;
`;

export const BackToHome = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
