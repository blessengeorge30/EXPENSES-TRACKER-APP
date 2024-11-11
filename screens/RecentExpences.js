import { View,Text ,StyleSheet} from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpencesContext } from "../store/expences-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpences } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpences() {
   const  [isFetching,setIsFetching] = useState(true);
  const expencesCtx =  useContext(ExpencesContext);


  useEffect(() => {
    async function getExpences(){
      setIsFetching(true)
      const expences = await fetchExpences();
      setIsFetching(false);
      expencesCtx.setexpences(expences)

    }
    getExpences();
  }, []);


  if (isFetching){
    return <LoadingOverlay/>
  }

  const RecentExpences = expencesCtx.expences.filter((expence) => {
    const today = new Date();
    const date7DaysAgo =getDateMinusDays(today, 7);

    return (expence.date >= date7DaysAgo) && (expence.date <= today );
  });

    return (
      <ExpencesOutput 
      expences={RecentExpences} 
      expencesPeriod={'Last 7 Days'} 
      fallbackText='No Expences Registered for the past 7 days '/>
    );
}

export default RecentExpences;


