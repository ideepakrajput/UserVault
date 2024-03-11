import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth, provider } from '../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/slices/auth';

const LoginSIgnup = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector(store => store.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.email) {
            navigation.navigate("Home");
        }
    }, [])

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // dispatch(authActions.setEmail(user.email));
                ToastAndroid.showWithGravityAndOffset("Successfully logged in.", ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50);
                navigation.navigate("Home");
            })
            .catch((error) => {
                if (error.code === "auth/invalid-credential") {
                    ToastAndroid.showWithGravityAndOffset("Invalid credentials! Please login again.", ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50);
                }
                console.log(error);
                console.log(JSON.stringify(error));
            });
    }
    const handleSignup = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                ToastAndroid.showWithGravityAndOffset("Successfully signed up.", ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50);
                navigation.navigate("Home");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    ToastAndroid.showWithGravityAndOffset('Email already in use! Please sign in.', ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
                }
                console.log(JSON.stringify(error));
            });
    }

    const handleSigninWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user, token);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 30, paddingVertical: 60, gap: 16, backgroundColor: "#3E6975" }}>
            <View>
                {isLogin ?
                    <Text style={[styles.text, styles.header]}>Welcome Back</Text>
                    :
                    <Text style={[styles.text, styles.header]}>Let's Start</Text>
                }
            </View>

            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput value={email} onChangeText={setEmail} style={styles.textinput} />
            </View>
            <View>
                <Text style={styles.text}>Password</Text>
                <TextInput value={password} onChangeText={setPassword} style={styles.textinput} />
            </View>

            {isLogin ?
                <>
                    <TouchableOpacity onPress={handleLogin} style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]} >Login</Text></TouchableOpacity>
                    <Text style={[styles.text, { textAlign: "center" }]}>Not an account yet? <Text onPress={() => setIsLogin(false)}>Signup</Text></Text>
                </>
                :
                <>
                    <TouchableOpacity onPress={handleSignup} style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]} >Signup</Text></TouchableOpacity>
                    <Text style={[styles.text, { textAlign: "center" }]}>Already have an account? <Text onPress={() => setIsLogin(true)}>Login</Text></Text>
                </>
            }
            <TouchableOpacity onPress={handleSigninWithGoogle} style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]}>Signin with Google</Text></TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#515151",
        paddingHorizontal: 30,
        marginTop: 20,
        paddingVertical: 6,
        borderRadius: 10,
        alignSelf: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgba(183, 229, 228, 0.9)"
    },
    textinput: {
        borderColor: "#7698A1",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
        color: "rgba(183, 229, 228, 0.9)"
    },
    header: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Onest"
    }
});

export default LoginSIgnup