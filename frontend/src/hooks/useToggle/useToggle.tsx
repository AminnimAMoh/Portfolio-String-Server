import React, { useCallback, useState } from 'react'
import { UseToggleResults } from './useToggle.interface';


function useToggle(initialState: boolean=false): UseToggleResults {
    const [state, setState]=useState(initialState);

    const toggleState=useCallback(()=> (setState((currentState: boolean)=>!currentState)), [])
    const toggleStateFalse=useCallback(()=> (setState(false)), [])
    const toggleStateTrue=useCallback(()=> (setState(true)), [])

    return [state, toggleState, toggleStateFalse, toggleStateTrue]
}

export default useToggle