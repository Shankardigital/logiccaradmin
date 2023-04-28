import PropTypes from 'prop-types';
import React from "react";

import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes";

// Import all middleware
import Authmiddleware from "./routes/route";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

import fakeBackend from "./helpers/AuthType/fakeBackend"

// Activating fake backend
fakeBackend()

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);



import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


import { ToastContainer, toast } from "react-toastify"

const App = props => {


  // const firebaseConfig = {
  //   apiKey: "AIzaSyApfXA4X_RY15S5Hq-wxYlzOs6-YfFOE80",
  //   authDomain: "react-test-3029f.firebaseapp.com",
  //   databaseURL: "https://react-test-3029f-default-rtdb.firebaseio.com",
  //   projectId: "react-test-3029f",
  //   storageBucket: "react-test-3029f.appspot.com",
  //   messagingSenderId: "547635026359",
  //   appId: "1:547635026359:web:2e0dde577ca138ef643032",
  //   measurementId: "G-3TP3S478Q5"
  // };
  // const fapp = initializeApp(firebaseConfig);
  // const messaging = getMessaging(fapp);

  // getToken(messaging, {
  //   vapidKey:
  //     "BCWe0EYdI17Qcl8G6_ZYD0XsoQcU4vnf_F5IL7ecc8qXFrCxIy2JHkCdSkBxrJeDXrECzNBEaduuIv1kr-YLei8",
  // })
  //   .then((currentToken) => {
  //     if (currentToken) {
  //       console.log("Firebase Token", currentToken);

  //     } else {

  //       console.log(
  //         "No registration token available. Request permission to generate one."
  //       );
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("An error occurred while retrieving token. ", err);
  //   });

  // onMessage(messaging, (payload) => {
  //   console.log("Message received. ", payload);
  //   const data = payload.notification.body
  //   toast(data)
  // });


  function getLayout() {
    let layoutCls = VerticalLayout;
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>


      <ToastContainer />
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
