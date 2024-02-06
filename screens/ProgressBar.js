import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../firebase/firebaseConfig";
import { statusActions } from "../store/slices/status";
import * as Progress from 'react-native-progress';

function ProgressBar({ navigation }) {
    const images = useSelector(store => store.images)
    const status = useSelector(store => store.status)
    const dispatch = useDispatch();

    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);


    useEffect(() => {
        const uploadImages = async () => {
            const closeUpImages = Object.values(images.closeUp).filter(Boolean);
            const globalImages = Object.values(images.global).filter(Boolean);

            const allImages = [...closeUpImages, ...globalImages];

            await uploadImageSequentially(allImages, 0);
        };

        uploadImages();
    }, []);

    const uploadImageSequentially = async (imagePaths, currentIndex) => {
        if (currentIndex < imagePaths.length) {
            const imagePath = imagePaths[currentIndex];

            try {
                const response = await fetch(`file://${imagePath}`);
                const blob = await response.blob();

                const storageRef = ref(storage, "images/" + new Date().getTime());
                const uploadTask = uploadBytesResumable(storageRef, blob);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgress(progress.toFixed());
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            saveRecord(downloadURL, new Date().toISOString());
                            uploadImageSequentially(imagePaths, currentIndex + 1);
                        });
                    }
                );
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        } else {
            dispatch(statusActions.setUploaded(true));
            navigation.navigate("Done");
        };

        const saveRecord = async (url, createdAt) => {
            try {
                const docRef = await addDoc(collection(db, "files"), {
                    url,
                    createdAt,
                });
                console.log("Document saved correctly:", docRef.id);
            } catch (e) {
                console.error("Error saving document:", e);
            }
        };
    }

    useEffect(() => {
        setProgress1(Math.abs(((progress - 1) / 99).toFixed(1)))
    }, [progress])

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975", gap: 8 }}>
            <Progress.Bar progress={progress1} width={300} unfilledColor="rgba(183, 229, 228, 1)" borderWidth={0} color="rgba(243, 175, 142, 1)" height={10} borderRadius={50} animationType="decay" />
            <View>
                <Text style={styles.text}>{progress}% in progress</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#B7E5E4E5"
    },
});

export default ProgressBar