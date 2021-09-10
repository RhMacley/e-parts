import type { NextPage } from 'next'

import Image from 'next/image'
import dash from '../../public/dash.svg'

import {Page, Title, Paragraph,ImageContainer} from './styles'
const RightSideLogin: NextPage = () => {
  return (
    <Page>
      <Title>Todo o seu fluxo de trabalho, em apenas um lugar!</Title>
      <Paragraph>Sem perca de tempo, sua rotina totalmente otimizada</Paragraph>
      <ImageContainer>
      <Image src={dash} alt="analytics" width={700}/>
      </ImageContainer>
    </Page>
  )
}

export default RightSideLogin