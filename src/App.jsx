import './App.css'
import {useDispatch , useSelector} from "react-redux";
import {ADD, SUB} from "./store/action"
export default function App() {
  const countData = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  return (
    <main>
      <div>
        <h1>Count</h1>
        <h2>Count data :- {countData}</h2>
        <div style={{display: 'flex', gap: '10px', }}>
          <button onClick={() => dispatch(ADD())}>Add 10</button>
          <button onClick={() => dispatch(SUB())}>Sub 10</button>
        </div>  
       
      </div>  
    </main>
  )
}
