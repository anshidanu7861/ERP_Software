import AdminModel from "../db/models/Admin/admin.model";

const findAdminByEmail = async (email: string) => {
  try {
    return await AdminModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

const findAdminById = async (id: string) => {
  try {
    return await AdminModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export { findAdminByEmail, findAdminById };
