import React from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { COLORS, FONTSIZE } from "../../theme/theme";
import AppHeader from "../../components/AppHeader";
import { LinearGradient } from "expo-linear-gradient";
import CategoryHeader from "../../components/CategoryHeader";
import CastCard from "../../components/CastCard";
import useMovieDetailsViewModel from "./index.model";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MovieDetailsScreen = ({ navigation, route }: any) => {
  const {
    baseImagePath,
    movieCastData,
    movieData,
    isFetchingmovieCastData,
    isFetchingmovieData,
  } = useMovieDetailsViewModel(route);

  if (isFetchingmovieData && isFetchingmovieCastData) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={""}
            action={() => navigation.goBack()}
          />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar hidden />

      <View>
        <ImageBackground
          source={{
            uri: baseImagePath("w780", movieData?.backdrop_path),
          }}
          style={styles.imageBG}
        >
          <LinearGradient
            colors={[COLORS.BlackRGB10, COLORS.Black]}
            style={styles.linearGradient}
          >
            <View style={styles.appHeaderContainer}>
              <AppHeader
                name="close"
                header={""}
                action={() => navigation.goBack()}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.imageBG}></View>
        <Image
          source={{ uri: baseImagePath("w342", movieData?.poster_path) }}
          style={styles.cardImage}
        />
      </View>

      <View style={styles.timeContainer}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={FONTSIZE.size_20}
          color={COLORS.White}
        />
        <Text style={styles.runtimeText}>
          {Math.floor(movieData?.runtime / 60)}h{" "}
          {Math.floor(movieData?.runtime % 60)}m
        </Text>
      </View>

      <View>
        <Text style={styles.title}>{movieData?.original_title}</Text>
        <View style={styles.genreContainer}>
          {movieData?.genres.map((item: any) => {
            return (
              <View style={styles.genreBox} key={item.id}>
                <Text style={styles.genreText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.tagline}>{movieData?.tagline}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.rateContainer}>
          <AntDesign name="star" style={styles.starIcon} />
          <Text style={styles.runtimeText}>
            {movieData?.vote_average.toFixed(1)} ({movieData?.vote_count})
          </Text>
          <Text style={styles.runtimeText}>
            {movieData?.release_date.substring(8, 10)}{" "}
            {new Date(movieData?.release_date).toLocaleString("default", {
              month: "long",
            })}{" "}
            {movieData?.release_date.substring(0, 4)}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{movieData?.overview}</Text>
      </View>

      <View>
        <CategoryHeader title="Top Cast" />
        <FlatList
          data={movieCastData}
          keyExtractor={(item: any) => item.id}
          horizontal
          contentContainerStyle={styles.containerGap24}
          renderItem={({ item, index }) => (
            <CastCard
              shouldMarginatedAtEnd={true}
              cardWidth={80}
              isFirst={index == 0 ? true : false}
              isLast={index == movieCastData?.length - 1 ? true : false}
              imagePath={baseImagePath("w185", item.profile_path)}
              title={item.original_name}
              subtitle={item.character}
            />
          )}
        />

        <View>
          <TouchableOpacity
            style={styles.buttonBG}
            onPress={() => {
              navigation.push("SeatBooking", {
                BgImage: baseImagePath("w780", movieData.backdrop_path),
                PosterImage: baseImagePath("original", movieData.poster_path),
              });
            }}
          >
            <Text style={styles.buttonText}>Select Seats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;
