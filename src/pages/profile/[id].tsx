import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const userId = id;
  }, [id]);

  return (
    <div className="ml-12 justify-center items-center mt-12 lg:pl-16">
      <div className="pl-6 ">

      </div>
    </div>
  );
};

export default Profile;
