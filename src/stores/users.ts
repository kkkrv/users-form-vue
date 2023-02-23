import { defineStore } from "pinia";
import axios from "axios";
import { v4 } from "uuid";
import { USERS_API } from "@/constants/api.constants";
import type { FormStateModel } from "@/models/form.model";
import { formToUserModel } from "@/utils/store.utils";

export type RootState = {
  success: boolean | null;
  isLoading: boolean;
  error: string | null;
};

export const useUserStore = defineStore({
  id: "users",
  state: (): RootState => ({
    success: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async createUser(data: FormStateModel) {
      try {
        this.isLoading = true;
        await axios.post(USERS_API, { id: v4(), ...formToUserModel(data) });
        this.success = true;
        this.error = null;
      } catch (error: unknown) {
        this.success = false;

        if (typeof error === "string") {
          this.error = error;
        } else if (error instanceof Error) {
          this.error = error.message;
        }

        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    resetStatus() {
      this.success = null;
      this.error = null;
    },
  },
});
