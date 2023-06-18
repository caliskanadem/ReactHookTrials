import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  const [userDetail, setUserDetail] = useState(state);
  const { id } = useParams();

  useEffect(() => {
    if (!userDetail?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUserDetail(data));
    }
  }, [id, userDetail]);

  return (
    <div>
      <h2>User Detail</h2>
      {userDetail && <pre>{JSON.stringify(userDetail, null, 4)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
    </div>
  );
};

export default Detail;
