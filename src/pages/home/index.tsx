import { Heading, Text } from '@ignite-ui/react'
// next/image automatiza o processo de otimização da imagem
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/appInicial.png'
import { ClaimUsernameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
          <Heading size="4xl">Agendamento Descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas 
            marquem agendamentos no seu tempo livre.
          </Text>


          <ClaimUsernameForm/>
      </Hero>


      <Preview>
          <Image 
            src={previewImage}
            // A maior altura que eu quero que seja carregada
            height={400}
            // Diminui sempre para 80% então ajustamos para 100%
            quality={100}
            priority
            alt='Calendario simbolizando aplicação em funcionamento'
          />
      </Preview>
    </Container>
  )
}
