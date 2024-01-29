interface matchData {
  map(arg0: (match: matchData, key: number) => JSX.Element): React.ReactNode;
  isReplay: boolean;
  matchVideoLink: string;
  description: string;
  matchNumber: number;
  scoreRedFinal: number;
  scoreRedFoul: number;
  scoreRedAuto: number;
  scoreBlueFinal: number;
  scoreBlueFoul: number;
  scoreBlueAuto: number;
  autoStartTime: Date;
  actualStartTime: Date;
  tournamentLevel: string;
  postResultTime: Date;
  teams: [
    {
      teamNumber: number;
      station: string;
      dq: boolean;
    }
  ];
}
