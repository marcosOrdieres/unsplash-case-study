import styled from 'styled-components';

export interface DividerProps {
    width?: string;
}

const defaultDividerProps: Partial<DividerProps> = {
    width: '100%',
};

const DividerStyled = styled.hr<DividerProps>`
  height: 1px;
  width: ${(props) => props.width || '80%'};
  background: rgba(70, 74, 80, 0.5);
  border-width: 0;
`;

export const Divider: React.FC<DividerProps> = (props) => <DividerStyled {...props} />;

DividerStyled.defaultProps = defaultDividerProps;
