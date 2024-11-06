import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed, 
      ]}
    >
      <View style={styles.buttonContainer}>
         <Ionicons name={icon} size={size} color={color}/>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
  },
  iconContainer: {
    borderRadius: 10,
    padding: 6,
   
  },
  pressed: {
    opacity: 0.5, 
  },
});
