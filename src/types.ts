import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type City = {
    id: number;
    display: string;
    city_name: string;
    popularity: string;
    lat: string;
    long: string;
}

export type Weather = {
    weather: {
        main: string;
        icon: string;
    }[],
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    },
    dt: number;
}

export type ForecastList = Array<Weather & { dt_txt: string }>;

export type Forecast = {
    cod: string;
    message: number;
    list: ForecastList;
}
