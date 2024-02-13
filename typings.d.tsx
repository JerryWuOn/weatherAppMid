interface IWeather{
    main: {
        temp: number;
        feels_like: number;
    },
    weather: {
        map(arg0: (d: any, index: any) => React.JSX.Element): React.ReactNode;
        main: string;
    },
    wind: {
        speed: number;
    },
    dt: number;
}

interface IForecast{
    list: {
        slice(arg0: number, arg1: number): unknown;
        main: {
            temp: number;
        };
        weather: {
            main: string;
            description: string;
        };
        wind: {
            speed: number;
        };
        dt: number;
    }
}
