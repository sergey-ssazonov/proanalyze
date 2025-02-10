import { TGender } from "@/src/shared/types/form";

interface IPersonalizedFormData {
  gender: TGender;
  age: number;
  doctor: string;
  haveSymptoms?: boolean;
  symptoms?: string;
  isEmailRequire?: boolean;
  email?: string;
}

export enum FormNames {
  gender = "gender",
  age = "age",
  doctor = "doctor",
  haveSymptoms = "haveSymptoms",
  symptoms = "symptoms",
  isEmailRequire = "isEmailRequire",
  email = "email",
}

interface IOrderShemeApi {
  gender?: string;
  age?: number;
  what_doctor?: string;
  symptoms?: string;
  ready_analysis_id?: number;
  email: string;
}

interface IOrderResponse {
  id: number;
  age: number;
  gender: TGender;
  decryption: null;
  what_doctor: null;
  email: null;
  unique_id: string;
  ready_analysis_id: number;
}

interface IConfirmationToken {
  confirmation_token: string;
}

export type { IOrderShemeApi, IConfirmationToken, IOrderResponse, IPersonalizedFormData };
