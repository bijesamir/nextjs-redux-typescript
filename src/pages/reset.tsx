import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '../store/store'
import { reset } from '@store/actions/counterActions'
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
const ResetPage: React.FC = () => {
  return (
    <Container>
      <main>
        <Link href={'/'}>back</Link>
        <HomepageCounter />
      </main>
    </Container>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(reset)
    return { props: {} }
  }
)

export default ResetPage
