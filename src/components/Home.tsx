import { useDispatch, useSelector } from "react-redux";
import { AppRootState, AppDispatch } from "../redux/store";
import { ChangeEvent, useState } from "react";
import { counterActions } from "../redux/counter/counterSlice";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: AppRootState) => state.counter.value);
    const [amount, setAmount] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(+event.target.value);
    }

    const handleSubmit = () => {
        dispatch(counterActions.incrementByAmount(amount));
    }

    return (
        <div>
            <button onClick={() => dispatch(counterActions.increment())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(counterActions.decrement())}>-</button>
            <div>
                <input type="number" value={amount} onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
            </div>
        </div>
    );
}

export default Home;
