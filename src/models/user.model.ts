import type { CompanyModel } from "@/models/company.model";

export interface UserModel {
  name: string;
  username: string;
  email: string;
  phone: string;
  company: CompanyModel;
}