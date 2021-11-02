import styled from 'styled-components'

export const SectionExampleWrapper = styled.div`
  height: 100vh; // remove isso é só para a seção ficar uma altura
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.palette.grey['700']};
`
