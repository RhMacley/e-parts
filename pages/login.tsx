import type { NextPage } from 'next'

import RightSideLogin from '../components/RightSideLogin/RightSideLogin'
import LeftSideLogin from '../components/LeftSideLogin/LeftSideLogin'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
`;

const Login: NextPage = () => {
  return (
    <Page>
        <LeftSideLogin/>
        <RightSideLogin />
    </Page>
  )
}

export default Login