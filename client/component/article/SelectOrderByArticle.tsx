import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Entypo from "@expo/vector-icons/Entypo";
import TotalArticle from "./TotalArtticle";

const SelectOrderByArticle = () => {
  const orderByOption = ["최신순", "인기순"];
  const [orderBy, setOrderBy] = useState("최신순");

  return (
    <>
      <View style={{ paddingLeft: 10, paddingTop: 20 }}>
        <SelectDropdown
          data={orderByOption}
          onSelect={(selectedItem) => {
            setOrderBy(selectedItem);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {orderBy || "최신순"}
                </Text>
                <Entypo
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
              </View>
            );
          }}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
      <TotalArticle orderBy={orderBy} />
    </>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 120,
    height: 50,
    backgroundColor: "#757575",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    marginTop: -50,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default SelectOrderByArticle;
