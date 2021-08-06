// write your custom hook here to control your checkout form
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};

const useForm = (initialValues)=>{
    const [values, setValues] = useLocalStorage("form", initialValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value 
        });
    };

    return [values, handleChanges]
    
};
export default useForm;