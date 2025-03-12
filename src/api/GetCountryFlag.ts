import { useState } from "react"


const getCountryFlag = (country: string) => {
    const [flag, useFlag] = useState<string>("")
    const [isFlagLoading, useFlagLoading] = useState(false)

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Couldn't fetch the flag")
        }
        return response.json()
    })
    .then((data) => {
        useFlag(data[0].flags.png)
        useFlagLoading(true)
    })
    .catch((error) => {
        console.log(error);
        
    })

    return {flag, isFlagLoading}
}

export default getCountryFlag 