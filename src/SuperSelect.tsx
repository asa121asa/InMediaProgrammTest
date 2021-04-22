import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useEffect} from "react";
import style from './Form.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    Value?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }


) => {
    const mappedOptions = options && options.map((o, i) => <option key={i}>{o}</option>)


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select placeholder={'gitfitrdir'} className={style.dropdown} onChange={onChangeCallback} {...restProps}>
            <option  value='1' disabled>Select</option>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;



