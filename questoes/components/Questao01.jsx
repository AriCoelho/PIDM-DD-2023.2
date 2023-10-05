import React from 'react';
import { View, Text, SectionList } from 'react-native';
import data from './DadosQ01';
import { styles } from './styles';

const MySectionList = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.whiteText}>{item.name}</Text>
            <Text style={[styles.whiteText]}>{item.value}</Text>
            <Text style={[styles.whiteText]}>{item.time}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.whiteText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MySectionList;
