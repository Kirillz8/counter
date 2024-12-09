import s from './CounterSettings.module.css';
import {Button} from '../Button/Button.tsx';
import {ChangeEvent, useState} from 'react';

type CounterSettingsProps = {
    changeCounterValue: (payload: { maxValue: number, startValue: number, resetValue: number }) => void
    setErrorMessage: (message: string) => void
}

export const CounterSettings = ({changeCounterValue, setErrorMessage}: CounterSettingsProps) => {
    const [minInputValue, setMinInputValue] = useState(0);
    const [maxInputValue, setMaxInputValue] = useState(0);

    // const changeInputHandler = (e: ChangeEvent<HTMLInputElement>, callbackFn: (num: number) => void) => {
    //     const curNum = Number(e.currentTarget.value)
    //     callbackFn(curNum)
    //
    //     if (curNum < 0) {
    //         setErrorMessage('Incorrect value!')
    //     } else if (callbackFn === setMinInputValue && curNum >= maxInputValue) {
    //         setErrorMessage('Start value must be less than max value')
    //     } else if (callbackFn === setMaxInputValue && minInputValue >= curNum) {
    //         setErrorMessage('Max value must be greater than start value')
    //     } else setErrorMessage('enter values and press "SET"')
    // }

    const changeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const curNum = Number(e.currentTarget.value)
        setMaxInputValue(curNum)

        if (curNum < 0) {
            setErrorMessage('Incorrect value!')
        } else if (curNum <= minInputValue) {
            setErrorMessage('Max value must be greater than start value')
        } else setErrorMessage('enter values and press "SET"')
    }

    const changeInputMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const curNum = Number(e.currentTarget.value)
        setMinInputValue(curNum)
        if (curNum < 0) {
            setErrorMessage('Incorrect value!')
        } else if (curNum >= maxInputValue) {
            setErrorMessage('Start value must be less than max value')
        } else setErrorMessage('enter values and press "SET"')
    }

    const setSettingsValues = () => {
        changeCounterValue({maxValue: maxInputValue, startValue: minInputValue, resetValue: minInputValue})
    }

    return (
        <div className={s.counterSettingsContainer}>
            <div className={s.counterSettingsInputs}>
                <label htmlFor="" className={s.counterSettingsLabels}>
                    max value
                    <input type="number" value={maxInputValue + ''} className={s.counterSettingsInput}
                           onChange={changeInputMaxValue}/>
                </label>

                <label htmlFor="" className={s.counterSettingsLabels}>
                    min value
                    <input type="number" value={minInputValue + ''} className={s.counterSettingsInput}
                           onChange={changeInputMinValue}/>
                </label>
            </div>

            <div className={s.counterButtonContainer}>
                <Button title={'set'} onClick={setSettingsValues}
                        disabled={minInputValue < 0 || maxInputValue <= minInputValue}/>
            </div>
        </div>
    );
};