import { useSelector } from "react-redux";


export default function useSpecificSelector(whichState){
    const appState = useSelector(state => state);
    const stateObjectKeys = Object.keys(appState);
    if(!stateObjectKeys.includes(whichState)){
        throw new Error("this state not exist in app state!")
    }
    const selector = useSelector(state => state[whichState]);
    return selector;
}