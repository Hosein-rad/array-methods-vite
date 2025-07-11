import { useState } from "react";

export function useArray(arr) {
  const [array, setArray] = useState(arr);

  const set = (newArr) => {
    setArray(newArr);
    return array;
  };
  const push = (num) => {
    setArray((currentArr) => [...currentArr, num]);
    return array;
  };
  const replace = (i, n) => {
    const newArray = [...array];
    newArray.splice(i, 1, n);
    setArray(newArray);
    return array;
  };
  const filter = (callback) => {
    const newArr = array.filter(callback);
    setArray(newArr);
    return array;
  };
  const remove = (i) => {
    const newArr = [...array];
    newArr.splice(i, 1);
    setArray(newArr);
    return array;
  };
  const clear = () => {
    setArray([]);
    return array;
  };
  const reset = () => {
    setArray(arr);
    return array;
  };
  return { array, set, push, replace, filter, remove, clear, reset };
}
