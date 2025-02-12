import { useSelector } from "react-redux";


export default function useSpecificSelector(whichState){
    const selector = useSelector(state => state[whichState]);
    return selector;
}