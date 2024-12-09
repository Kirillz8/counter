import {useState} from 'react';
import {Button} from '../Button/Button.tsx';
import s from './Counter.module.css';
import {CounterSettings} from '../CounterSettings/CounterSettings.tsx';

export const Counter = () => {
    const [counter, setCounter] = useState({
        maxValue: 0,
        startValue: 0,
        resetValue: 0,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const incCounterValue = () => {
        if (counter.startValue < counter.maxValue) {
            setCounter({...counter, startValue: counter.startValue + 1});
        }
    }

    const resetCounterValue = () => {
        setCounter({...counter, startValue: counter.resetValue});
    }

    const changeCounterValue = (payload: { maxValue: number, startValue: number, resetValue: number }) => {
        setCounter({
            ...counter,
            maxValue: payload.maxValue,
            startValue: payload.startValue,
            resetValue: payload.resetValue
        })
        setErrorMessage('')
    }

    const color = counter.startValue === counter.maxValue ? s.redSpan : s.defaultSpan
    const fontSize = errorMessage ? s.errorMessage : s.defaultCount

    return (
        <>
            <CounterSettings changeCounterValue={changeCounterValue} setErrorMessage={setErrorMessage}/>

            <div className={s.counterContainer}>
                <div className={s.counterNumber}>
                    <span
                        className={`${color} ${fontSize}`}>
                        {errorMessage || counter.startValue}
                    </span>
                </div>

                <div className={s.counterButtonContainer}>
                    <Button title={'inc'} onClick={incCounterValue}
                            disabled={counter.startValue >= counter.maxValue}/>
                    <Button title={'reset'} onClick={resetCounterValue} disabled={counter.startValue <= counter.resetValue}/>
                </div>
            </div>
        </>
    );
};