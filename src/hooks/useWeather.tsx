import { useEffect, useState } from "react";
import { Weather } from "../types";

type IProps = {
    lat: string;
    lon: string;
}

export default function useWeather({ lat, lon }: IProps) {
    const [data, setData] = useState<Weather>();
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4175edeeec7e7ee705831eecca46c2d&units=metric`);
            const data = await response.json();
            setData(data);
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getWeather();
    }, [])

    return [data, loading] as const;
}