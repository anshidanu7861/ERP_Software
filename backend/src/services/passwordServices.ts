import bcrypt from "bcrypt";

export const passwordManageMent = () => {
  const hashPassword = async (password: string) => {
    try {
      return await bcrypt.hash(password, 8);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const comparePassword = async (newPassword: string, oldPassword: string) => {
    try {
      return await bcrypt.compare(newPassword, oldPassword);
    } catch (error) {
      throw error;
    }
  };

  return {
    hashPassword,
    comparePassword,
  };
};
