import { render, screen, userEvent } from "@testing-library/react-native"
import App from "../App"


describe("Forecast Screen", () => {
    beforeEach(async () => {
        render(<App />)
        const user = userEvent.setup();
        const seachbar = screen.getByPlaceholderText("Buscar ciudad");
        user.type(seachbar, "Tijuana");
    
        const searchButton = screen.getByTestId("search-button");
        user.press(searchButton);
    
        const city = await screen.findByTestId("city-item-0");
        await user.press(city);

    })

    it("Can navigate to forecast screen", async () => {
        const backbutton = await screen.findByText("<");
        expect(backbutton).toHaveTextContent("<");
    });

    it("Shows todays weather card", async () => {
        const weatherContainer = await screen.findByTestId('today-weather-container');
        expect(weatherContainer).toBeOnTheScreen();
    });

    it("Shows forecast list component", async () => {
        const forecastlist = await screen.findByTestId("forecast-list");
        expect(forecastlist).toBeOnTheScreen();
    })
});

describe("Today weather component", () => {
    beforeEach(async () => {
        render(<App />)
        const user = userEvent.setup();
        const seachbar = screen.getByPlaceholderText("Buscar ciudad");
        user.type(seachbar, "Tijuana");
    
        const searchButton = screen.getByTestId("search-button");
        user.press(searchButton);
    
        const city = await screen.findByTestId("city-item-0");
        await user.press(city);
    });

    it("Displays city name on main header", async () => {
        const cityname = await screen.findByTestId("city-name");

        expect(cityname).toHaveTextContent(/tijuana/i);
    });

    it("Displays an image icon for the weather", async () => {
        const image = await screen.findByTestId("today-weather-icon");
        
        expect(image).toBeTruthy();
    });

    it("Shows min temp for today", async () => {
        const mintemp = await screen.findByTestId("min-temp");
    
        expect(mintemp).toHaveTextContent(/^\d+ °C$/);
    });

    it("Shows temp for today", async () => {
        const temp = await screen.findByTestId("temp");
    
        expect(temp).toHaveTextContent(/^\d+ °C$/);
    });

    it("Shows max temp for today", async () => {
        const maxtemp = await screen.findByTestId("max-temp");
    
        expect(maxtemp).toHaveTextContent(/^\d+ °C$/);
    });
});

describe("Forecast List", () => {
    beforeEach(async () => {
        render(<App />)
        const user = userEvent.setup();
        const seachbar = screen.getByPlaceholderText("Buscar ciudad");
        user.type(seachbar, "Tijuana");
    
        const searchButton = screen.getByTestId("search-button");
        user.press(searchButton);
    
        const city = await screen.findByTestId("city-item-0");
        await user.press(city);
    });

    it("Shows a list with the forecast for the next 5 days", async () => {
        const list = await screen.findAllByTestId(/^forecast-row-\d+$/);
        expect(list.length).toBeGreaterThan(4);
    });
})
