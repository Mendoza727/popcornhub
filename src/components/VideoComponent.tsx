import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { TrailerMovie } from "../core/entities/Movie.entity";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  urlVideo: string;
  site: string;
}

export const VideoComponent = ({ site, urlVideo }: Props) => {
  const { top } = useSafeAreaInsets();

  const getSite = (site: string, key: string): any => {
    switch (site) {
      case "YouTube":
        return `https://www.youtube.com/embed/${key}?autoplay=1&controls=0&mute=1&loop=1&playlist=${key}&rel=0&modestbranding=1&cc_load_policy=0&showinfo=0`;
      case "Vimeo":
        return `https://vimeo.com/${key}?autoplay=1&muted=1&badge=0&loop=1`;
      default:
        return Error("Not Link Implemented");
    }
  };

  const videoSelected = getSite(site, urlVideo);

  return (
    <View style={style.container}>
      <WebView
        style={{
          ...style.video,
          top: top,
        }}
        source={{ uri: videoSelected }}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

interface Prop {
  videos: TrailerMovie[];
}

export const VideoComponentSound = ({ videos }: Prop) => {
  const { top } = useSafeAreaInsets();
  const videoWidth = Dimensions.get("window").width - 80; // Small padding for the card
  const videoHeight = (videoWidth * 8) / 8; // 16:9 Aspect Ratio

  const getSite = (site: string, key: string): any => {
    switch (site) {
      case "YouTube":
        return `https://www.youtube.com/embed/${key}?autoplay=0&controls=1&mute=0`;
      case "Vimeo":
        return `https://vimeo.com/${key}?autoplay=0&muted=0`;
      default:
        return Error("Not Link Implemented");
    }
  };

  return (
    <FlatList
      data={videos.filter(
        (video, index, self) =>
          index === self.findIndex((v) => v.id === video.id)
      )}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <WebView
            style={[
              styles.video,
              { width: videoWidth, height: videoHeight, top },
            ]}
            source={{ uri: getSite(item.siteStored, item.key) }}
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: 'auto'
  },
  video: {
    alignSelf: "center", // Center the video within the card
    width: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  releaseDate: {
    fontSize: 14,
    color: "#555",
    textAlign: "right",
    marginBottom: 10,
    marginRight: 10,
  },
});
