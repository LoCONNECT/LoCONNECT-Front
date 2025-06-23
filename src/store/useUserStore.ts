// store/useUserStore.ts
import { create } from "zustand";

type User = {
  id: string;
  name: string;
  role: string;
};

type UserCommon = {
  id: string;
  name: string;
  email: string;
  phone: string;
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
  user: UserState | null;
  setUser: (user: UserState) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
