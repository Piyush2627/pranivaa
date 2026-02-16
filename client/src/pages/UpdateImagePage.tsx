import { useEffect, useState, type ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { type UserDataType } from "../types/index.types";
import axios from "axios";
import CustomInput from "../components/common/CustomInput";

function UpdateImagePage() {
  const prams = useParams();
  const [isUserData, setIsUserData] = useState<UserDataType>();
  const [isUserInput, setIsUsersInput] = useState();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsUsersInput((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const FetchUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/getUser/${prams.id}`,
      );
      setIsUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchUser();
  }, []);
  const updateProfilePhotoButton = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/updateUser/${prams.id}`,
        isUserInput,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <CustomInput
          label="Change Image"
          name="profile"
          onChange={handleOnChange}
        />
        <div>
          <button onClick={updateProfilePhotoButton}> click</button>
        </div>
      </div>
      update image link {isUserData?.name}
    </div>
  );
}

export default UpdateImagePage;
