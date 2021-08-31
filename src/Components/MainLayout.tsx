import styled from 'styled-components';

export interface MainLayoutProps {
  children?: any;
}

const MainLayoutStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #004cfc;
  align-items: center;
  justify-content: center;
`;

export const MainLayout: React.FC<MainLayoutProps> = (props) => <MainLayoutStyled {...props}>{props.children}</MainLayoutStyled>;

export default MainLayoutStyled;