import styled from 'styled-components';

export interface MainImageContainerProps {
  backgroundColor?: string;
  children?: any;
}

const defaultMainImageContainerProps: Partial<MainImageContainerProps> = {
  backgroundColor: 'yellow',
};

const MainImageContainerStyled = styled.div<MainImageContainerProps>`
  display: flex;
  width: 80%;
  height: 80%;
  background-color: ${(props) => props.backgroundColor || 'white'};
  align-items: center;
  justify-content: center;
`;
export const MainImageContainer: React.FC<MainImageContainerProps> = (
  props
) => (
  <MainImageContainerStyled {...props}>
    {props.children}
  </MainImageContainerStyled>
);

MainImageContainerStyled.defaultProps = defaultMainImageContainerProps;

export default MainImageContainerStyled;
