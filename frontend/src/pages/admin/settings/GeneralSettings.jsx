import { useEffect, useState } from "react";
import SettingsLayout from "./SettingsLayout";
import GeneralProfileForm from "./components/GeneralProfileForm";
import { getProfile } from "../../../api/user.api"

export default function GeneralSettings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <SettingsLayout title="Settings">
        <p>Loading...</p>
      </SettingsLayout>
    );
  }

  return (
    <SettingsLayout title="Settings">
      <GeneralProfileForm user={user} setUser={setUser} />
    </SettingsLayout>
  );
}