import React from "react"

import { Flex, Heading, Button } from "rebass"
import useBirthDay from "../../hooks/birthday"

const Intro = () => {
  const { step, dispatch } = useBirthDay()
  return (
    <Flex flexDirection="column" justifyContent="center" alignitems="center">
      <Heading fontSize={[8]} sx={{ fontWeight: 800 }} color="textwhite">
        Ue ciao xd {step}
      </Heading>
      <Button
        variant="primary"
        onClick={() => {
          dispatch({
            type: "STEP_UPDATE",
            payload: 1,
          })
        }}
      >
        Inizia la tua giornata
      </Button>
    </Flex>
  )
}

export default Intro
