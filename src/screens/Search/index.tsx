import { useEffect, useState } from 'react';
import { ImageBackground, Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import Logo from "@assets/logo.svg";
import bg from '@assets/background.png';

import { useCity } from '@hooks/useCity';
import { CityProps, getCityByNameService } from '@services/getCityByNameService';

import { SelectList } from '@components/SelectList';

export function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const { handleChanceCity } = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <ImageBackground source={bg} defaultSource={bg} style={styles.container} resizeMode="cover">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ alignItems: "center" }}>
            <Logo width={186} height={32} />
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>

            <View style={styles.content}>
              <Text style={styles.title}>
                Boas vindas ao <Text style={styles.brand}>iWeather</Text>
              </Text>

              <Text style={styles.subtitle}>
                Escolha um local para ver a previsão do tempo
              </Text>

              <SelectList
                data={cities}
                onChange={setSearch}
                isLoading={isLoading}
                onPress={handleChanceCity}
                placeholder="Buscar local"
              />
            </View>
          </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}