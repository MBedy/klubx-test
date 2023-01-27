import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export default function useScreenOrientation() {
  useEffect(() => {
    lockPortraitOrientation();
  }, []);

  async function lockPortraitOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }
}
