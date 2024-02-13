interface IWeather{
    main: {
        temp: number;
        feels_like: number;
      },
    weather: {
        main: string;
        description: String;
    };
}