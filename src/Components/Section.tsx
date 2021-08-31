import styled from 'styled-components';

export interface SectionProps {
  flex?: number;
  flexDirection?: string;
  color?: string;
  justifyContent?: string;
  paddingLeft?: string;
  alignItems?: string;
}

const defaultSectionProps: Partial<SectionProps> = {
  flex: 1,
  flexDirection: 'row',
  color: 'white',
  justifyContent: 'center',
  paddingLeft: '0%',
  alignItems: 'center'
};


const SectionStyled = styled.div<SectionProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.color};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  padding-left:${(props) => props.paddingLeft || null};
`;

export const Section: React.FC<SectionProps> = (
  props
) => (
  <SectionStyled {...props}>
    {props.children}
  </SectionStyled>
);

SectionStyled.defaultProps = defaultSectionProps;

export default SectionStyled;
