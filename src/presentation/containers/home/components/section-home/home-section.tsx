import React from 'react'
import { SubTitle, Title } from '@/presentation/components'
// import Hamburger from '@/presentation/assets/images/hamburger-menu.svg'
import { ButtonDown, HomeContent, HomeSectionWrapper } from './styles'

const HomeSection: React.FC = () => {
  return (
    <HomeSectionWrapper id="home">
      {/* <Hamburger /> */}
      <HomeContent>
        <Title>You have Utility. We Web3</Title>
        <SubTitle>
          <span>Development technology in blockchain </span>
          <span>For you project</span>
        </SubTitle>
        <ButtonDown>
          <svg
            viewBox="0 0 38 48"
            fill="none"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="38" height="48" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_23_30"
                  transform="scale(0.0263158 0.0208333)"
                />
              </pattern>
              <image
                id="image0_23_30"
                width="38"
                height="48"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJqADAAQAAAABAAAAMAAAAABrUkJ5AAAB50lEQVRYCe2YPU7EMBCFVyshOm6A6FbcYSXavQjFngEugMQF4BSIjn4rKmquQIdEgbYgfBOSELJ2Ms9OQeGRhvhnfp5fxhubxWIGqapqjZrsZghXh1jOFWjuOAWYymhhrDCmMqDalxorjKkMqPalxgpjKgOqfamxwpjKgGpfaqwwpjKg2v/fGuOSeoxeo0fqqua2B4NdnDd1XBqPqMl9aiJ8s2/ixDhD39BPdL3gzyXayjYFHM5ZwPA/QV8aEK/Wb1m7aQb3PH+oFBDikwwM3yX6hJq8o6suNZ34ZGcVb+CfA2ycFIKH6Yzj6WZSgeHnKyMMT1ErQBOj17VTsZMZa3ysdEzuulXGGhhZEr8DgRofHr7/j2GXRIC8UxVg2CaXTE0mAcaLske5Fxh2WZusBeYOIgBzL7a37sMmCV20e4Bh49uBhzDCIwScLNQpYM28tKHCaAajU4HHgDE3ubBBOq1LguiriAFj3FUKGpKANYmCxRsCxph78wRSaUOxZBFgwUVoGQVrQNjrsaOJSX1E4fnnk0Q/+tqFVLopiVdo/5t6Qd9kh8qfNB3BiMcAwIOhQp7RPmDXIWAkTdoUILaGpicfTfv3FJoWOt8LILc9YF+07RR6nh85MwIg7GfhCrXb1sY0M2Tt/g1Pi4jC4U1AIwAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </ButtonDown>
      </HomeContent>
    </HomeSectionWrapper>
  )
}

export default HomeSection
