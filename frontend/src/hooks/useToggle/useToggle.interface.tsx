export type UseToggleResults=[
    boolean, // The current state.
    ()=> void, // Toggle the current state.
    ()=> void, // Toggle the current state to 'false'.
    ()=> void, // Toggle the current state to 'true'.
]