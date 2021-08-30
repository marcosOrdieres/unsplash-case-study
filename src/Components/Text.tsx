import styled from 'styled-components';

export interface TextProps {
    color: string;
    fontSize: number;
    textAlign?: string;
}

const defaultTextProps: Partial<TextProps> = {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
};

const TextStyled = styled.p<TextProps>`
  color: '${(props) => props.color}';
  text-align: ${(props) => props.textAlign || 'center'};
  font-size: ${(props) => props.fontSize};
`;

export const Text: React.FC<TextProps> = (props) => <TextStyled {...props} />;

TextStyled.defaultProps = defaultTextProps;

export default TextStyled;
