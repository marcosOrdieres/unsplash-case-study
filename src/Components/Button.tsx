import styled from 'styled-components';

export interface ButtonProps {
  background: string;
  children?: any;
}

const defaultButtonProps: Partial<ButtonProps> = {
  background: 'yellow',
};


const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.background || 'white'};
  width: 200px;
  height: 50px;
  margin: 1em;
  border-radius: 50px;
`;
export const Button: React.FC<ButtonProps> = (props) => <ButtonStyled {...props}>{props.children}</ButtonStyled>;

ButtonStyled.defaultProps = defaultButtonProps;

export default ButtonStyled;