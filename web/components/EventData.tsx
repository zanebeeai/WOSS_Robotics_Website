import { useState, useEffect } from "react";

interface Props {
  data: matchData;
}

interface TeamProps {
  teamNumber: number;
  station: string;
  dq: boolean;
}

export const EventData = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left bg-gray-600 border-2 border-gray-500">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Alliance
                </th>
                <th scope="col" className="px-6 py-3 text-red-400">
                  Red Score
                </th>
                <th scope="col" className="px-6 py-3 text-sky-400">
                  Blue Score
                </th>
              </tr>
            </thead>
            <tbody>
              {props.data?.map((match: matchData, key: number) => {
                const team6070 = match.teams.filter(
                  (team: TeamProps) => team.teamNumber == 6070
                );
                const alliance = team6070[0].station.replace(/[0-9]/g, "");

                const firstAllianceFilter = match.teams.filter(
                  (team: TeamProps) => {
                    return team.station.includes(
                      team6070[0].station.replace(/[0-9]/g, "")
                    );
                  }
                );

                const secondAllianceFilter = firstAllianceFilter.map(
                  (team: TeamProps) => {
                    return team.teamNumber;
                  }
                );

                const didWeWin = () => {
                  if (
                    match.scoreRedFinal > match.scoreBlueFinal &&
                    alliance === "Red"
                  ) {
                    return true;
                  } else if (
                    match.scoreBlueFinal > match.scoreRedFinal &&
                    alliance === "Blue"
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                };

                return (
                  <tr
                    className="text-gray-300 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600"
                    key={key}
                  >
                    <th
                      scope="row"
                      className={`px-6 py-4 font-bold whitespace-nowrap ${
                        didWeWin() ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {match.description}
                    </th>
                    <td className="px-6 py-4">
                      <span
                        className={`${
                          alliance === "Blue" ? "text-sky-300" : "text-red-300"
                        }`}
                      >
                        {alliance}{" "}
                      </span>
                      <span className="text-gray-400 font-medium">
                        ({secondAllianceFilter.toString().replace(/,/g, ", ")})
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.scoreRedFinal}
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.scoreBlueFinal}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
