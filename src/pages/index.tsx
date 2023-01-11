import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import styled from 'styled-components'

/**
 * Homepage
 */

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`

const HomePage: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>Hello, world!hhhh</h1>
        <Link href={'/reset'}>reset page</Link>
        <HomepageCounter />
      </main>
    </Container>
  )
}

export default HomePage
