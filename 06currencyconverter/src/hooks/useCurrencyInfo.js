import { useEffect,useState } from "react";

//This is our custom hook using hooks from react

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) //here the data is there.
      .then((res) => res.json())//convert to string
      .then((res) => setData(res[currency]))
      //on the above line we pin pointed on the currency field of the fetched DB. ignoring other fields.
    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;