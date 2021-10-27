import styled from 'styled-components'

export const HomeSectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.palette.grey['800']};
`
