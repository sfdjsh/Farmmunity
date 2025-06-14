import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { getCropsNameApi } from "../api/crops";
import { useEffect, useState } from "react";
import SelectedCropInfo from "./SelectedCropInfo";

export default function SelectCrop() {
  const [cropsName, setCropsName] = useState([{}]);
  const [selectedCrop, setSelectedCrop] = useState("전체");

  useEffect(() => {
    const fetchCropsName = async () => {
      const cropsNameData = await getCropsNameApi();
      setCropsName(cropsNameData);
    };
    fetchCropsName();
  }, [selectedCrop]);

  return (
    <>
      <View style={{ paddingLeft: 10, paddingTop: 20 }}>
        <SelectDropdown
          data={cropsName}
          onSelect={(selectedItem, index) => {
            setSelectedCrop(selectedItem.name);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selectedItem?.name || "전체"}
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
                <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
      <SelectedCropInfo name={selectedCrop} />
    </>
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
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
