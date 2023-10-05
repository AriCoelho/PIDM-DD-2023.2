import React from 'react';
import { View, Text, SectionList } from 'react-native';
import data from './DadosQ01';
import { styles } from './styles';
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

const MySectionList = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <IconButton
                icon={item.icon}
                iconColor={MD3Colors.tertiary0}
                size={30}
                onPress={() => console.log('Pressed')}
                mode="contained"
              />
                <Text style={styles.whiteText}>{item.name}</Text>
                <Text style={[styles.whiteText]}>{item.time}</Text>
              <Text style={[styles.whiteText]}>{item.value}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.whiteText}>{title}</Text>
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
};

export default MySectionList;
