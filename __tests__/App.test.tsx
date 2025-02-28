/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { fireEvent, render, screen, userEvent, within } from '@testing-library/react-native';
import App from '../App';
import Home from '../src/screens/Home';
import CitiesSearchBar from '../src/components/CitiesSearchBar';


describe("The app renders correctly", () => {
  it("renders the search city bar", async () => {
    render(<App />);

    const searchBar = screen.getByPlaceholderText("Buscar ciudad");

    expect(searchBar).toBeOnTheScreen();
  });

  it("renders the empty list city", async () => {
    render(<App />);
    const emptyList = screen.getByText("Busca una ciudad");

    expect(emptyList).toBeOnTheScreen();
  });
})

describe("Search bar", () => {
  it("changes text when typing", async () => {
    render(<App />);

    const user = userEvent.setup();
    const searchBar = screen.getByPlaceholderText("Buscar ciudad");

    await user.type(searchBar, "Mexico city");

    expect(searchBar).toHaveDisplayValue("Mexico city");
  });

  it("Clears when deleting text", async () => {
    render(<App />);

    const user = userEvent.setup();
    const searchBar = screen.getByPlaceholderText("Buscar ciudad");

    await user.type(searchBar, "Mexico city");
    expect(searchBar).toHaveDisplayValue("Mexico city");

    await user.clear(searchBar);

    expect(searchBar).toHaveDisplayValue("");
  });
})

describe("Search button", () => {
  it("Renders the search button", async () => {
    const { getByTestId } = render(<App />);
    const searchButton = getByTestId("search-button");

    expect(searchButton).toBeOnTheScreen();
  });

  it("Is pressed when user touches it", async () => {
    const mockfn = jest.fn();
    const { getByTestId } = render(
      <CitiesSearchBar onPress={mockfn} placeholder='' onChangeText={() => {}} />
    );
    const searchButton = getByTestId("search-button");

    fireEvent.press(searchButton);

    expect(mockfn).toHaveBeenCalled();
  })
})

describe("Home screen integration", () => {
  it("All components render correctly in initial state", async () => {
    render(<Home />);
    const searchBar = screen.getByPlaceholderText("Buscar ciudad");
    expect(searchBar).toBeOnTheScreen();
    expect(searchBar).toHaveDisplayValue("");

    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeOnTheScreen();

    const emptyList = screen.getByText("Busca una ciudad");
    expect(emptyList).toBeOnTheScreen();
  });

  it("Shows the list of cities when searching", async () => {
    render(<Home />);
    const searchBar = screen.getByPlaceholderText("Buscar ciudad");
    fireEvent.changeText(searchBar, "Tijuana");
    expect(searchBar).toHaveDisplayValue("Tijuana")

    const searchButton = screen.getByTestId("search-button");
    fireEvent.press(searchButton);

    const results = await screen.findAllByTestId(/city-item-\d+/);
    expect(results.length).toBeGreaterThan(0);
  })
})