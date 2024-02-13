interface IWeather{
    main: {
        temp: number;
        feels_like: number;
    },
    weather: {
        main: string;
    },
    wind: {
        speed: number;
    },
    dt: number;
}

interface IForecast{
    list: {
        main: {
            temp: number;
        };
        weather: {
            main: string;
        };
    }
}
