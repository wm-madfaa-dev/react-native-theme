import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";
import { ScrollView } from "react-native-gesture-handler";

type ElevationScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  ROUTES.Typography
>;
type ElevationScreenRouteProp = RouteProp<RootStackParams, ROUTES.Typography>;

interface ElevationScreenProps {
  navigation: ElevationScreenNavigationProp;
  route: ElevationScreenRouteProp;
}

const ElevationScreen: React.FC<ElevationScreenProps> = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h1]}>H1 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h2]}>H2 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h3]}>H3 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h4]}>H4 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h5]}>H5 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.h, styles.h6]}>H6 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.s, styles.s1]}>S1 Subtitle</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.s, styles.s2]}>S2 Subtitle</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.p, styles.p1]}>P1 Paragraph</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.p, styles.p2]}>P2 Paragraph</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.c, styles.c1]}>P1 Caption</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.c, styles.c2]}>P2 Caption</Text>
      </View>
      <View style={styles.typography}>
        <Text style={[styles.label, styles.label]}>label</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15
  },
  typography: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.12)"
  },
  h: {
    fontStyle: "normal",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  h1: {
    fontSize: 36,
    lineHeight: 48
  },
  h2: {
    fontSize: 32,
    lineHeight: 40
  },
  h3: {
    fontSize: 30,
    lineHeight: 40
  },
  h4: {
    fontSize: 26,
    lineHeight: 32
  },
  h5: {
    fontSize: 22,
    lineHeight: 32
  },
  h6: {
    fontSize: 18,
    lineHeight: 24
  },
  s: {
    fontStyle: "normal",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  s1: {
    fontSize: 15,
    lineHeight: 24
  },
  s2: {
    fontSize: 13,
    lineHeight: 24
  },
  p: {
    fontStyle: "normal",
    fontWeight: "normal",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  p1: {
    fontSize: 15,
    lineHeight: 20
  },
  p2: {
    fontSize: 13,
    lineHeight: 18
  },
  c: {
    fontStyle: "normal",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  c1: {
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16
  },
  c2: {
    fontSize: 12,
    lineHeight: 16
  },
  label: {
    color: "rgba(0, 0, 0, 0.87)",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 12,
    lineHeight: 16
  }
});

export default ElevationScreen;
