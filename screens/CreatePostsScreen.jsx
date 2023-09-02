import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const CreatePostsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.photoWrapper}>
              <View style={styles.photoContent}>
                <Image source={require('../assets/images/сontent-photo.png')} />
              </View>
              <Image />
            </View>
            <Text style={styles.text}>Завантажте фото</Text>
            <View>
              <TextInput
                style={[
                  styles.input,
                  { height: 50, fontFamily: 'Roboto-Medium' },
                ]}
                placeholder="Назва..."
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
              />

              <View style={styles.location}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <TextInput
                  style={[
                    styles.input,
                    {
                      flex: 1,
                      borderBottomWidth: 0,
                      marginBottom: 0,
                      fontFamily: 'Roboto-Regular',
                    },
                  ]}
                  placeholder="Місцевість..."
                  onFocus={() => setIsOpenKeyboard(true)}
                  onBlur={() => setIsOpenKeyboard(false)}
                />
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                // Alert.alert("Credentials Login", ` ${email} + ${password}`),
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.textBtn}>Опублікувати</Text>
            </Pressable>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 34,
            }}
          >
            <Pressable
              style={styles.buttonDelete}
              onPress={() => {
                Alert.alert('Deleted');
              }}
            >
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  photoWrapper: {
    with: '100%',
    height: 240,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContent: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    marginBottom: 32,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  button: {
    marginTop: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#F6F6F6',
    color: '#BDBDBD',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 19,
    color: '#BDBDBD',
  },
  buttonDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});

export default CreatePostsScreen;
