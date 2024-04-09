import { getCityByNameService } from "./getCityByNameService"
import { api } from "./api"
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse"

describe("API: getCityByNameService", () => {
    it("should return city details", async () => {
        const data = {
            id: '1',
            name: 'Hirakata',
            sys: {
                country: 'BR'
            },
            coord: {
                lat: 123,
                long: 456
            }
        };

        jest.spyOn(api, "get").mockResolvedValue({ data })
        const response = await getCityByNameService("Hirakata")

        expect(response.length).toBeGreaterThan(0);
    })
})