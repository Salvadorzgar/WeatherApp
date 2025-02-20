import { useEffect, useState } from "react";
import { Forecast } from "../types";

type IProps = {
    lat: string;
    lon: string;
}

export default function useForecast({ lat, lon }: IProps) {
    const [data, setData] = useState<Forecast>();
    const [loading, setLoading] = useState(false);

    const getForecast = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b4175edeeec7e7ee705831eecca46c2d&units=metric`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getForecast();
    }, []);

    return [data, loading] as const;
}