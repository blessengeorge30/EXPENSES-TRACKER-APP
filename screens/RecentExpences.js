import { View,Text ,StyleSheet} from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { useContext } from "react";
import { ExpencesContext } from "../store/expences-context";
import { getDateMinusDays } from "../util/date";

function RecentExpences() {
  const expencesCtx =  useContext(ExpencesContext);
  const RecentExpences = expencesCtx.expences.filter((expence) => {
    const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7);

    return expence.date > date7DaysAgo;
  });

    return (
      <ExpencesOutput expences={RecentExpences} expencesPeriod={'Last 7 Days'}/>
    );
}

export default RecentExpences


