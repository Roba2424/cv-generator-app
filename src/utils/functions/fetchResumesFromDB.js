import { ref, get } from "firebase/database";
import { auth, realTimedb } from "../../service";
import { REALTIME_PATH_NAMES } from "../constant";

export const fetchResumesFromDB = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    throw new Error("User is not logged in");
  }

  const resumesRef = ref(
    realTimedb,
    `${REALTIME_PATH_NAMES.RESUMES}/${userId}`
  );
  const snapshot = await get(resumesRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {};
  }
};
