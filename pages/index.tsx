import type { NextPage } from 'next'
import styled from "styled-components"

const Title = styled.h1`
  color: red;
`

const Home: NextPage = () => {
  return (
    <div>
          <Title>Hello World</Title>
    </div>
  )
}

export default Home
