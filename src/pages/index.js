import React, { useContext } from "react"

import SEO from "../components/seo"

import Layout from "../components/__layout"

import { BirthdayProvider } from "../contexts/birthday"
import ThemeProvider from "../contexts/theme"
import Block from "../components/block"
import { Heading, Flex, Text } from "rebass"
import Deck from "../components/deck"
import funny1 from "../images/funny1.jpg"
import funny2 from "../images/funny2.jpg"
import funny3 from "../images/funny3.jpg"
import funny4 from "../images/funny4.jpg"
import funny5 from "../images/funny5.jpg"
import funny6 from "../images/funny6.jpg"
import trip1 from "../images/trip1.jpg"
import trip2 from "../images/trip2.jpg"
import trip3 from "../images/trip3.jpg"
import trip4 from "../images/trip4.jpg"
import trip5 from "../images/trip5.jpg"
import trip6 from "../images/trip6.jpg"
import work1 from "../images/work1.jpg"
import work2 from "../images/work2.jpg"
import work3 from "../images/work3.jpg"
import work4 from "../images/work4.jpg"
import work5 from "../images/work5.jpg"

const IndexPage = () => {
  return (
    <BirthdayProvider>
      <ThemeProvider>
        <Layout>
          <SEO title="Home" />
          <Flex flexDirection="column" sx={{ textAlign: "center" }}>
            <Block>
              <Heading mt={[4]} px={[5]} fontSize={[4, 5, 6]}>
                {" "}
                Cara Giulia,{" "}
              </Heading>
            </Block>
            <Block>
              <Text my={[3]} px={[5]} fontSize={[1, 2, 3]}>
                In questo momento che siamo lontani volevo farti una sorpresa,
                un regalo che non ha bisogno di essere toccato.
              </Text>
            </Block>
            <Block>
              <Text my={[3]} px={[5]} fontSize={[1, 2, 3]}>
                Voglio regalarti poche parole semplici.{" "}
              </Text>
            </Block>
            <Block>
              <Text
                sx={{ marginBottom: 200 }}
                mt={[3]}
                px={[5]}
                fontSize={[1, 2, 3]}
              >
                Mi fai stare bene. Anche se non sei accanto a me mi hai lasciato
                cosi tanti ricordi e insegnamenti che sento che ormai una parte
                di me è sempre qui.
              </Text>
            </Block>
            <Block sx={{ position: "relative" }}>
              <Deck cards={[trip1, trip2, trip3, trip4, trip5, trip6]} />
            </Block>
            <Block>
              <Text
                sx={{ marginTop: 200, marginBottom: 200 }}
                px={[5]}
                fontSize={[1, 2, 3]}
              >
                Sei la persona con più talento che conosca. Mi innamoro ogni
                volta della tua creatività e mi innamoro ogni volta che mi
                coinvolgi in un’avventura ( o a mangiare cibo)
              </Text>
            </Block>
            <Block sx={{ position: "relative" }}>
              <Deck cards={[work1, work2, work3, work4, work5]} />
            </Block>
            <Block>
              <Text
                sx={{ marginTop: 200, marginBottom: 200 }}
                px={[5]}
                fontSize={[1, 2, 3]}
              >
                Sei ( maledetta ) la più divertente. Che siano memini besughi,
                cose schifose o references mi fai sempre ridere tanto e mi fai
                essere felice. Ogni volta che lo fai capisco che piccola perla
                sei.
              </Text>
            </Block>
            <Block sx={{ position: "relative" }}>
              <Deck cards={[funny1, funny2, funny3, funny4, funny5, funny6]} />
            </Block>
            <Block>
              <Heading
                sx={{ marginTop: 200, marginBottom: 50 }}
                px={[5]}
                fontSize={[1, 2, 3]}
              >
                Buon compleanno Giulia. Il mio vero regalo arriverà sempre ogni
                giorno, ed è quello di renderti felice
              </Heading>
            </Block>
          </Flex>
        </Layout>
      </ThemeProvider>
    </BirthdayProvider>
  )
}

export default IndexPage
