import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';


export default function EmailForm() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [subject, setSubject] = useState<string>();
    const [message, setMessage] = useState<string>();

    const submit = async () => {
        if (!name || !email || !subject || !message) {
            toast.error("Mandatory fields have not been filled.");
            return;
        }
        try {
            await axios.post(`/api/email`, {
                name,
                email,
                subject,
                message,
            });
            toast.success("Email has been received.");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <View role='form' style={styles.formContainer}>
            <View>
                <Text style={styles.sectionHeadText}>Name*</Text>
                <TextInput 
                    aria-label='Name'
                    style={styles.input}
                    value={name}
                    onChangeText={setName}/>
            </View>
            <View>
                <Text style={styles.sectionHeadText}>Email*</Text>
                <TextInput 
                    aria-label='Email'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}/>
            </View>
            <View>
                <Text style={styles.sectionHeadText}>Inquiry type*</Text>
                <TextInput 
                    aria-label='Inquiry type'
                    style={styles.input}
                    value={subject}
                    onChangeText={setSubject}/>
            </View>
            <View>
                <Text style={styles.sectionHeadText}>Message*</Text>
                <TextInput 
                    aria-label='Message'
                    multiline numberOfLines={4} 
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}/>
            </View>
            <View>
                <View style={styles.button}>
                    <Button 
                        color='#355872' 
                        title='Submit'
                        onPress={submit}/>
                    <Toaster />
                </View>
            </View>
            <View>
                <Text style={styles.text}>We respond within 3 working days</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 1,
        padding: 20,
    },
    sectionHeadText: {
        textAlign: 'left',
        color: '#355872',
        fontWeight: 'bold',
        fontFamily: "Helvetica",
    },
    input: {
        backgroundColor: '#9CD5FF',
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        fontFamily: "Helvetica",
    },
    button: {
        width: 100,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#355872',
        fontFamily: "Helvetica",
        marginTop: 10,
        marginBottom: 10,
    },
});