import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays 
        data={[
          { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
          { day: '19/07', min: '35°C', max: '39°C', icon: clearDay, weather: 'Céu limpo' },
          { day: '20/07', min: '39°C', max: '37°C', icon: clearDay, weather: 'Céu limpo' },
          { day: '21/07', min: '21°C', max: '30°C', icon: clearDay, weather: 'Chuva fraca' },
          { day: '22/07', min: '15°C', max: '20°C', icon: clearDay, weather: 'Nublado' },
        ]}
      />
    )

    expect(screen.getByText('19/07')).toBeTruthy()
  })

  it('should render all days correctly', () => {
    const data = [
      { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
      { day: '19/07', min: '35°C', max: '39°C', icon: clearDay, weather: 'Céu limpo' },
      { day: '20/07', min: '39°C', max: '37°C', icon: clearDay, weather: 'Céu limpo' },
    ];
  
    render(<NextDays data={data} />);
  
    data.forEach(({ day }) => {
      expect(screen.getByText(day)).toBeTruthy();
    });
  });

  it('should render nothing when data is empty', () => {
    render(<NextDays data={[]} />);
    expect(screen.queryByText('18/07')).toBeNull();
  });

  it('should render detailed weather information', () => {
    render(
      <NextDays 
        data={[
          { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
        ]}
      />
    );
  
    expect(screen.getByText('30°C')).toBeTruthy();
    expect(screen.getByText('34°C')).toBeTruthy();
  });

  // it('should render the correct icon', () => {
  //   const { getByTestId } = render(
  //     <NextDays 
  //       data={[
  //         { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
  //       ]}
  //     />
  //   );
  
  //   const icon = getByTestId('day-icon-18/07');
  //   expect(icon).toHaveProperty('source', clearDay);
  // });

  // it('matches the snapshot', () => {
  //   const tree = renderer.create(
  //     <NextDays 
  //       data={[
  //         { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
  //       ]}
  //     />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
})