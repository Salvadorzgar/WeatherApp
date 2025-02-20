import { Forecast, ForecastList } from "./types";

export function format(data: Forecast | undefined) {
    if (!data) {
        return {};
    }
    
    const mappedData = {} as Record<string, ForecastList>;
    
    const info = data.list.forEach((item) => {
        const key = item.dt_txt.split(' ')[0];

        if (!mappedData[key]) {
            mappedData[key] = [];
        }

        mappedData[key].push({
            weather: item.weather,
            main: item.main,
            dt: item.dt,
            dt_txt: item.dt_txt,
        });
    });

    return mappedData;
}