import React, { createContext, useReducer } from "react"

const BirthdayContext = createContext()

const BirthdayProvider = ({ children }) => {
  const initialState = {
    step: 0,
    breakfast: null,
    train: null,
    gift: null,
    lunch: null,
    plant: null,
    movie: null,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "STEP_UPDATE":
        return {
          ...state,
          step: action.payload,
        }

      case "CHOSEN_BREAKFAST_UPDATE":
        return {
          ...state,
          breakfast: action.payload,
        }

      case "CHOSEN_TRAIN_UPDATE":
        return {
          ...state,
          train: action.payload,
        }

      case "CHOSEN_GIFT_UPDATE":
        return {
          ...state,
          gift: action.payload,
        }

      case "CHOSEN_LUNCH_UPDATE":
        return {
          ...state,
          lunch: action.payload,
        }

      case "CHOSEN_PLANT_UPDATE":
        return {
          ...state,
          plant: action.payload,
        }

      case "CHOSEN_MOVIE_UPDATE":
        return {
          ...state,
          movie: action.payload,
        }

      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BirthdayContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BirthdayContext.Provider>
  )
}

export { BirthdayProvider, BirthdayContext }
