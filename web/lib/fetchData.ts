import axios from "axios";
import { NextApiResponse } from "next";

export const fetchData = async (
  res: NextApiResponse,
  code: string,
  year: string,
  level?: string | string[]
) => {
  await axios
    .get(
      `https://frc-api.firstinspires.org/v3.0/${year}/matches/${code}?tournamentLevel=${
        level ? level : "Qualification"
      }&teamNumber=6070`,
      {
        headers: {
          Authorization: `Basic ${process.env.FIRST_API_KEY}`,
        },
      }
    )
    .then(function (response) {
      res.send(response.data.Matches);
    })
    .catch(function (error) {
      console.log(error);
    });
};
