import styled from 'styled-components';

export interface ContainerProps {
  children?: any;
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-width: 1px;
  border-radius: 10px;
`;

export const Container: React.FC<ContainerProps> = (props) => <ContainerStyled {...props}>{props.children}</ContainerStyled>;

export default ContainerStyled;