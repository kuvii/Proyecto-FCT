import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  // getting stored value
  try {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial ?? defaultValue;
  } catch (error) {
    console.error(`Error parsing value for key "${key}"`, error);
    return defaultValue;
  }
}

/**
 * Custom Hook for LocalStorage use
 * @example 
  import { useLocalStorage } from "./useLocalStorage";

  function Example() {
    const [name, setName] = useLocalStorage("name", "User1");

    const handleInputChange = (event) => {
      setName(event.target.value);
    };

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <input type="text" value={name} onChange={handleInputChange} />
      </div>
    );
  }

  export default Example;
 * @param {string} key
 * @param {*} defaultValue 
 * @returns
 */
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
      return getStorageValue(key, defaultValue);
    }
  })

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
      // storing input name
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value])

  return [value, setValue]
}