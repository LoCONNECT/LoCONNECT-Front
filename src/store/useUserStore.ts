import axiosInstance from "@/lib/axios";
import { create } from "zustand";

export type User = {
  id: string;
  name: string;
  role: string;
};

type UserCommon = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  acceptStatus: string;
  agreeRequired: boolean;
  agreeOptional: boolean;
  type: "biz" | "media" | "influ";
};

// 소상공인 유저 정보
type BizUser = UserCommon & {
  bizName: string;
  bizLicense: File | string;
  bizCategory: string;
  bizPostcode: string;
  bizAddress: string;
  bizAddressDetail?: string;
  bizPhone: string;
};

// 방송매체 유저 정보
type MediaUser = UserCommon & {
  companyName: string;
  programName: string;
  proofFile: File | string;
  department: string;
  purpose: string;
};

// 인플루언서 유저 정보
type InfluUser = UserCommon & {
  representativeName: string;
  influLicense: File | string;
  influDepartment: string;
  influType: string;
  influPurpose: string;
  promoUrl: string;
};

type UserState = BizUser | MediaUser | InfluUser;

type UserStore = {
  user: User | null;
  userState: UserState | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  loadUserProfile: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  userState: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  loadUserProfile: async () => {
    try {
      const res = await axiosInstance.get<User>("/users/profile");
      console.log("현재 로그인한 사용자", res.data);
      set({ user: res.data });
    } catch (e: any) {
      // 401에러(로그인 안 된 상태)
      if (e?.response?.status === 401) {
        set({ user: null });
      } else {
        console.error(e);
      }
    }
  },
}));
