import {clusterName} from '../Hasura';
import {AsyncStorage} from 'react-native';

const authUrl = `https://auth.${clusterName}.hasura-app.io/v1/`;

const trySignup = async (username, password) => {
  const signupUrl = authUrl + 'signup';
  console.log(signupUrl);
  const options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify({
      'provider': 'username',
      'data': {
        'username': username,
        'password': password
      }
    })
  };
  try {
    const response = await fetch(signupUrl, options);
    const respObj = await response.json();
    if (response.status == 200) {
      respObj['success'] = true;
    }
    return respObj;
  } catch (e) {
    console.log(e);
    console.error(e);
    return e;
  }
}

const tryLogin = async (username, password) => {
  const loginUrl = authUrl + 'login';
  const options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify({
      'provider': 'username',
      'data': {
        'username': username,
        'password': password
      }
    })
  };
  try {
    const response = await fetch(loginUrl, options);
    const respObj = await response.json();
    if (response.status == 200) {
      respObj['success'] = true;
    }
    return respObj;
  } catch (e) {
    console.error(e);
    return e;
  }
}

const storeSession = async (sessionObj) => {
  try {
    console.log(AsyncStorage);
    await AsyncStorage.setItem(`@${clusterName}:myapp`, JSON.stringify(sessionObj));
  } catch (e) {
    console.error(e);
  }
}

const fetchSession = async () => {
  try {
    const sessionString = await AsyncStorage.getItem(`@${clusterName}:myapp`);
    const sessionObj = await JSON.parse(sessionString);
    return sessionObj;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export {
  trySignup,
  tryLogin,
  storeSession,
  fetchSession
};