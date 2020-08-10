import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCuWgtoz0etT04yfV-cpUb908W5Bpv0rLc',
  authDomain: 'fir-push-d86e6.firebaseapp.com',
  databaseURL: 'https://fir-push-d86e6.firebaseio.com',
  projectId: 'fir-push-d86e6',
  storageBucket: 'fir-push-d86e6.appspot.com',
  messagingSenderId: '982233854704',
  appId: '1:982233854704:web:7b23758757ae83cb844835',
};

firebase.initializeApp(config);

export default firebase;
