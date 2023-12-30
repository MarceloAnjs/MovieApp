import React from "react";
import {
  View,
  Dimensions,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import InputHeader from "../../components/InputHeader";
import SubMovieCard from "../../components/SubMovieCard";
import useSearchViewModel from "./index.model";
import { COLORS, SPACING } from "../../theme/theme";

const { width } = Dimensions.get("screen");

const SearchScreen = ({ navigation }: any) => {
  const {
    baseImagePath,
    searchList,
    searchMoviesFunction,
    isFetchingSearchList,
  } = useSearchViewModel();
  console.log(searchList);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        {isFetchingSearchList ? (
          <ActivityIndicator
            size="large"
            color={COLORS.Orange}
            style={styles.loadingContainer}
          />
        ) : (
          <FlatList
            data={searchList}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.InputHeaderContainer}>
                <InputHeader searchFunction={searchMoviesFunction} />
              </View>
            }
            contentContainerStyle={styles.centerContainer}
            renderItem={({ item, index }) => (
              <SubMovieCard
                shoudlMarginatedAtEnd={false}
                shouldMarginatedAround={true}
                cardFunction={() => {
                  navigation.push("MovieDetails", { movieid: item.id });
                }}
                cardWidth={width / 2 - SPACING.space_12 * 2}
                title={item.original_title}
                imagePath={baseImagePath("w342", item.poster_path)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
