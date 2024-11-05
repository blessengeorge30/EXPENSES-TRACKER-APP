import { View,Text ,StyleSheet} from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";

function RecentExpences() {
    return (
      <ExpencesOutput expencesPeriod={'Last 7 Days'}/>
    );
}

export default RecentExpences


