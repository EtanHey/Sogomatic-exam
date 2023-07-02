import {
  DbFormInfo,
  FormInfo,
} from "@/features/formCreator/formCreator.types";

export default function toFormInfo(dbForm: DbFormInfo): { form: FormInfo } {
  return {
    form: {
      ...dbForm,
      id: dbForm._id,
    },
  };
}
