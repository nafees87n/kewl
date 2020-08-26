import Cookies from "js-cookie";
import axios from "axios";
const userInfo = async () => {
  const token = Cookies.get("chatToken");
  const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
  const info = await axios.get(url).then(res=>res.data);
  return info;
};

export default userInfo;
