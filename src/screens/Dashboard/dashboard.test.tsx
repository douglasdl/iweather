import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from "@screens/Dashboard";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Dashboard", () => {

  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    };

    await saveStorageCity(city);
  });

  it('should show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    // Wait for the city name to be rendered
    const cityName = await screen.findByText(/rio do sul/i, {}, { timeout: 3000 });
    expect(cityName).toBeTruthy();
  })

  it('should show another selected weather city', async () => {
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse }) // First mock (weather data)
      .mockResolvedValueOnce({ data: mockCityAPIResponse }) // Second mock (city search response)
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse }); // Third mock (new weather data)

    render(<Dashboard />);

    // Wait for loading state to appear before waiting for removal
    const loadingElement = screen.queryByTestId('loading');
    if (loadingElement) {
      await waitForElementToBeRemoved(() => loadingElement); // Wait for the loading element to be removed
    }

    const cityName = 'São Paulo';

    // Ensure the search input is rendered before interacting with it
    await waitFor(() => screen.getByTestId('search-input'));

    // Change text to trigger city search
    await act(async () => {
      const searchInput = screen.getByTestId('search-input');
      fireEvent.changeText(searchInput, cityName);
    });

    // Wait for city name to appear in the list and click it
    await waitFor(() => {
      const cityOption = screen.getByText(cityName, { exact: false });
      fireEvent.press(cityOption);
    });

    // Ensure the new city weather is displayed
    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});