import type { UserModel } from "@/models/user.model";
import type { FormStateModel } from "@/models/form.model";

export function formToUserModel({
  companyName,
  companyCatchPhrase,
  ...userInfo
}: FormStateModel): UserModel {
  return {
    company: {
      name: companyName,
      catchPhrase: companyCatchPhrase,
    },
    ...userInfo,
  };
}
