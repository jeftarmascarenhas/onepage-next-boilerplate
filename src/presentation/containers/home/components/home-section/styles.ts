import styled from 'styled-components'

export const HomeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.palette.grey['800']};
`
