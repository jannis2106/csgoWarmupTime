import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgBubble } from "./SvgBubble";

interface SvgBubblesProps {
  isEnding: boolean;
}

export const SvgBubbles: React.FC<SvgBubblesProps> = React.memo(({ isEnding }) => {
  return (
    <View style={styles.view}>
      <SvgBubble
        isEnding={isEnding}
        path="M640.438 133.98c25 48.3 16.6 106.7 19 167.7 2.5 60.9 15.9 124.3-9.1 171.6-25 47.4-88.4 78.6-153.4 80.3-65.1 1.6-131.8-26.3-181.8-73.7-50-47.3-83.3-114-80.2-177.6 3-63.7 42.4-124.3 92.4-172.6 50-48.3 110.6-84.4 170.1-83.3 59.6 1 118 39.2 143 87.6"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M610.083 168.29c31.2 41 43.8 90.8 50.5 147.2 6.7 56.5 7.6 119.6-23.6 149-31.2 29.3-94.3 24.8-161.3 28.6-66.9 3.7-137.6 15.8-183.8-13.5-46.2-29.4-67.8-100.1-50.1-153.1 17.7-53.1 74.7-88.4 120.8-129.4 46.2-41 81.5-87.7 124.1-94.8 42.5-7.2 92.3 25 123.4 66"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M602.98 151.274c29.1 28.7 29.7 86.5 36.2 150.7 6.5 64.2 18.9 134.9-10.3 159.9s-99.9 4.3-160.1-6.2c-60.2-10.5-110-10.7-149.8-35.7-39.8-25-69.8-74.8-66.1-120.8 3.6-46.1 40.9-88.6 80.7-117.2 39.8-28.7 82.3-43.6 132.4-51.3 50-7.6 107.8-8 137 20.6"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M552.453 195.64c50 28.5 107.8 70.7 112.2 117.3 4.3 46.5-44.8 97.4-94.8 122.4s-100.9 24.1-150 22.4c-49.2-1.8-96.6-4.4-129.1-29.4s-50.1-72.4-54.6-124.3c-4.4-51.8 4.2-108.2 36.7-136.7 32.5-28.5 88.9-29.1 138.1-22.1 49.3 7.1 91.5 21.9 141.5 50.4"
      />

      <SvgBubble
        isEnding={isEnding}
        path="M622.313 165.983c32.1 43.2 47.9 91.7 41.3 133.7-6.6 42-35.6 77.3-67.7 120.3-32.2 43-67.5 93.7-111.4 102.1-43.8 8.5-96.2-25.1-146.2-68.1-50-43-97.6-95.4-102.9-153-5.3-57.6 31.7-120.6 81.7-163.7 50-43.2 113-66.6 168.7-59.4 55.8 7.2 104.3 45 136.5 88.1"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M631.16 131.564c33.8 25 30.7 95.7 29.4 165.1-1.2 69.4-.8 137.5-34.6 165.4-33.9 27.8-102 15.4-169.2 14.4-67.1-.9-133.4 9.6-173.2-18.2-39.8-27.8-53.3-94.1-39.7-146.7 13.5-52.7 54.1-91.9 93.9-116.9 39.8-25 79-35.8 133.9-51.6 54.9-15.8 125.6-36.5 159.5-11.5"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M603.25 124.46c26 29.7 23.5 84.2 14 129.1-9.5 44.9-26.2 80.2-52.2 126.5-26 46.4-61.3 103.7-114.4 121.4-53 17.6-123.7-4.3-154.2-50.6-30.5-46.4-20.8-117.1-9.1-176.1 11.6-59.1 25.2-106.5 55.7-136.1 30.5-29.7 77.9-41.6 128.8-45.2 50.9-3.5 105.4 1.4 131.4 31"
      />
      <SvgBubble
        isEnding={isEnding}
        path="M610.151 135.72c34.7 25 36.1 92.9 26.5 151.1-9.7 58.3-30.5 106.8-65.1 133-34.7 26.1-83.2 29.9-142.9 41-59.6 11.1-130.3 29.5-156.5 3.3-26.2-26.2-7.8-96.9-5.4-165.2 2.3-68.4-11.3-134.4 14.8-159.4 26.2-25 92.2-9 159.1-9.9 67-1 134.9-18.9 169.5 6.1"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scale: 0.7 }],
  },
});
