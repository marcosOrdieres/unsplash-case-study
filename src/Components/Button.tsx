import styled from 'styled-components';

export interface ButtonProps {
    color: string;
    background?: string;
}

const defaultButtonProps: Partial<ButtonProps> = {
    color: 'red',
    background: 'red',
};

const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'white'};
  width: 200px;
  height: 50px;
  margin: 1em;
  border-radius: 50px;
`;
export const Button: React.FC<ButtonProps> = (props) => <ButtonStyled {...props} />;

ButtonStyled.defaultProps = defaultButtonProps;
