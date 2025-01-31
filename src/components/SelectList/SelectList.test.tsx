import { SelectList } from "@components/SelectList"
import { fireEvent, render, screen } from "@testing-library/react-native"

describe("Component: SelectList", () => {
  it("should return selected city details", () => {
    const data = [
      {id: '1', name: 'Hirakata', latitude: 123, longitude: 456},
      {id: '2', name: 'Yawata', latitude: 789, longitude: 321}
    ];

    const onPress = jest.fn();
    const onChange = jest.fn();
    
    render(
      <SelectList 
        data={data} 
        onPress={onPress}
        onChange={onChange}  
      />
    )

      const selectedCity = screen.getByText(/hirakata/i);
      fireEvent.press(selectedCity);

      expect(onPress).toHaveBeenCalledWith(data[0]);
  })

  it("should not show options when data props is empty", () => {
    
    const onPress = jest.fn();
    const onChange = jest.fn();

    render(
      <SelectList 
        data={[]} 
        onPress={onPress}
        onChange={onChange}  
      />
    )
    const options = screen.getByTestId('options');
    expect(options.children).toHaveLength(0);
  })
})