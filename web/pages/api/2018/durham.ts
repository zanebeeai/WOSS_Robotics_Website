import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function durhamData2018(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;

  return fetchData(res, "ONOSH", "2018", type);
}
