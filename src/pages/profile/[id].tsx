import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserProfile from "~/components/profile";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const userId = id;
  }, [id]);

  return (
    /* Page body */
    <div className="lg:pl-16">
      {/* Style wrapper */}
      <div className="flex w-full justify-center px-6 sm:flex-col sm:items-center md:flex-col lg:items-center xl:flex-row xl:px-6">
        <UserProfile/>
      </div>
    </div>
  );
};

export default Profile;
