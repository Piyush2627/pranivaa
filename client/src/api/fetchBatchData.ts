import axios from "../utils/axios";
import type { ClassBatchType } from "../types/index.types";

export const fetchBatchData = async (): Promise<ClassBatchType[]> => {
  const response = await axios.get("/batches");
  return response.data.data;
};
