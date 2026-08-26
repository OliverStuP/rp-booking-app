import {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import * as ScreenSizes from '../libraries/ScreenSizes.ts';
import {Picker} from '@react-native-picker/picker';
import * as EmailValidator from 'email-validator';
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { verify } from '../libraries/VerificationService.ts';
import { DateType } from 'react-native-ui-datepicker';

type FormProps = {
  date: DateType;
  people: number;
  time: string;
  formHandler: (name:string, email:string, phone:string) => void;
  loadSuccess: () => void;
}


export default function Form({date, people, time, formHandler, loadSuccess}: FormProps) {
  // Initialise state
  const [selectedTitle, setSelectedTitle] = useState<string>("Mr");
  const [firstname, setFirstName] = useState<string>();
  const [lastname, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const prefix = "+33";

  // Check form fields before verification
  const check = () => {
    if (!email || !selectedTitle || !firstname || !lastname || !phone) {
      alert("Mandatory fields have not been filled.");
      return;
    }
    if (!EmailValidator.validate(email)) {
      alert("Email address is invalid.");
      return;
    }
    const submittedNum = prefix + phone;
    if (!isPossiblePhoneNumber(submittedNum)) {
      alert("Phone number is invalid.");
      return;
    }
    verify(date, people, time, email, selectedTitle, firstname, lastname, phone, formHandler, loadSuccess);
  }

  return (
        <View tabIndex={0} role='region' style={styles.aboutCont}>
          <View tabIndex={0} style={styles.headingCont}>
            <Text style={styles.heading}>Details</Text>
          </View>
          <View tabIndex={0} style={styles.aboutSection}>
            <View tabIndex={0}>
              <Picker
                aria-label='Honorific prefix input'
                style={styles.field}
                selectedValue={selectedTitle}
                onValueChange={(itemValue) =>
                  setSelectedTitle(itemValue)
                }>
                <Picker.Item label="Mr" value="Mr" />
                <Picker.Item label="Ms" value="Ms" />
                <Picker.Item label="Mx" value="Mx" />
              </Picker>
            </View>
            <View tabIndex={0} style={styles.field}>
              <TextInput
                aria-label='Given name input'
                value={firstname}
                placeholder="First name*"
                onChangeText={setFirstName}
              />
            </View>
            <View tabIndex={0} style={styles.field}>
              <TextInput
                aria-label='Family name input'
                value={lastname}
                placeholder="Last name*"
                onChangeText={setLastName}
              />
            </View>
            <View tabIndex={0} style={styles.field}>
              <TextInput
                aria-label='Email address input'
                value={email}
                placeholder="Email address*"
                onChangeText={setEmail}
              />
            </View>
            <View tabIndex={0} style={styles.field}>
              <Text>{prefix}</Text>
              <TextInput
                aria-label='Telephone number input'
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone*"
              />
            </View>
          </View>
          <View tabIndex={0}>
            <Button color='#355872' title={"Submit"} onPress={check}/>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  aboutCont: {
    flexDirection: 'column',
  },
  headingCont: {
    padding: 5,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  aboutSection: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  field: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: '1%',
    marginBottom: '1%',
    padding: 5,
    width: 185,
  },
  subHeading: {
    padding: 5,
    alignItems: 'center',
  },
  subHeadText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#355872',
    fontFamily: "Helvetica",
  },
  sectionHeadText: {
    color: '#355872',
    fontWeight: 'bold',
    padding: 10,
    fontFamily: "Helvetica",
    fontSize: 18,
  },
  text: {
    color: '#355872',
    width: ScreenSizes.laptop ? '30%' : (ScreenSizes.tablet ? "50%": (ScreenSizes.mobileM ? "75%" : "100%")),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: "Helvetica",
    marginTop: 5,
  },
  detailsSubsection: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    width: 100,
    margin: 10,
  },
  exampleSection: {
    flexDirection: 'column',
    marginBottom: '2%',
  },
  exampleList: {
    alignItems: 'center',
    flex: 1,
  },
  memberSection: {
    padding: 10,
    borderBottomColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    margin: 0,
    position: 'relative',
  },
  memberList: {
    flexDirection: 'column',
  }
});