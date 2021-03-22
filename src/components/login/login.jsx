import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import User from '../../models/user';
import authAction from '../../redux/actions/authAction';
import styles from './styles.module.scss';
import googleLogo from '../../assets/images/sso/google.svg';
import facebookLogo from '../../assets/images/sso/facebook.svg';
import ArrowRightIcon from '../../assets/icons/arrows/arrowRight';
import { signInWithGoogle } from '../../services/firebase';
import EyeOpenIcon from '../../assets/icons/eye/eyeOpenIcon';
import EyeClosedIcon from '../../assets/icons/eye/eyeClosedIcon';

const LogIn = ({ isVisible, onCloseLogin: closeLogin, locale, afterLogin }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const mobileNumberInput = useRef(null);
  const passwordInput = useRef(null);
  const loginInput = useRef(null);
  const rememberCheckboxInput = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isRegistrationScreen, showRegistrationScreen] = useState(false);
  const [passwordVisibility, togglePasswordVisibility] = useState(false);

  const beforeSignIn = () => {
    setIsLoading(true);
  };

  const afterSignIn = (localData) => {
    setIsLoading(false);
    afterLogin(localData.currentUser);
    closeLogin();
  };

  const handleAuthentication = (event) => {
    event.preventDefault();
    const {
      password,
      registerEmail: email,
      registerMobileNumber: phoneNumber,
      registerUsername: name,
    } = Object.fromEntries(new FormData(event.target).entries());
    const formData = {
      email,
      name,
      password,
    };
    const user = new User();

    if (isRegistrationScreen) {
      setIsLoading(true);
      dispatch(authAction.signUp(formData));
      // user.register(formData).then(() => {
      //   setIsLoading(false);
      // });
    } else {
      dispatch(authAction.login(loginUser));
      setIsLoading(true);
    }
  };

  useEffect(() => {
    (usernameInput.current || loginInput.current).focus();
  }, [isRegistrationScreen]);

  // Login Logic
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const handleLoginDetailChange = (e) =>
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });

  useEffect(() => {
    auth.isAuthenticated && closeLogin();
  }, [auth.isAuthenticated]);

  useEffect(() => {
    !auth.isAuthenticated && setIsLoading(false);
  }, [auth.isAuthenticated]);

  // Login Logic ends

  return (
    <div className={`${styles.loginModal} ${isVisible ? styles.open : styles.close}`}>
      <div className={`${styles.loginContainer} ${isLoading ? styles.signInProgress : ''}`}>
        <div className={styles.header}>
          <div className={styles.title} lang={locale}>
            {isRegistrationScreen ? (
              <FormattedMessage id="create_account" />
            ) : (
              <FormattedMessage id="login" />
            )}
          </div>
          <button
            data-test-id="closeModal"
            className={styles.closeLogin}
            onClick={() => {
              closeLogin();
              togglePasswordVisibility(false);
              showRegistrationScreen(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading} lang={locale}>
            {isRegistrationScreen ? (
              <FormattedMessage id="create_an_account" />
            ) : (
              <FormattedMessage id="login_with_your_account" />
            )}
          </h2>
          <h2 className={styles.subHeading} lang={locale}>
            <FormattedMessage id="access_recommendations" />
          </h2>
          <div className={styles.ssoContainer}>
            <button
              className={styles.LoginWithGoogleButton}
              onClick={() => signInWithGoogle(beforeSignIn, afterSignIn)}
            >
              <div className={styles.buttonContent} lang={locale}>
                <img src={googleLogo} alt="Google Inc." />
                <FormattedMessage id="login_with_google" />
              </div>
            </button>
            <button className={styles.LoginWithFacebookButton}>
              <div className={styles.buttonContent} lang={locale}>
                <img src={facebookLogo} alt="Facebook." />
                <FormattedMessage id="login_with_fb" />
              </div>
            </button>
          </div>
          <div className={styles.legend} lang={locale}>
            <span lang={locale}>
              {isRegistrationScreen ? (
                <FormattedMessage id="alternate_register" />
              ) : (
                <FormattedMessage id="alternate_login" />
              )}
            </span>
          </div>
          <form className={styles.form} onSubmit={handleAuthentication}>
            {isRegistrationScreen ? (
              <div className={styles.fieldSet}>
                <label htmlFor="registerUsername" lang={locale}>
                  <FormattedMessage id="username" />
                </label>
                <div className={styles.inputWrap}>
                  <input
                    ref={usernameInput}
                    name="registerUsername"
                    id="registerUsername"
                    type="text"
                    placeholder={intl.formatMessage({ id: 'username_prompt' })}
                  />
                </div>
              </div>
            ) : null}
            {isRegistrationScreen ? (
              <div className={styles.fieldSet}>
                <label htmlFor="registerEmail" lang={locale}>
                  <FormattedMessage id="email" />
                </label>
                <div className={styles.inputWrap}>
                  <input
                    ref={emailInput}
                    name="registerEmail"
                    id="registerEmail"
                    type="text"
                    placeholder={intl.formatMessage({ id: 'email_prompt' })}
                  />
                </div>
              </div>
            ) : null}
            {isRegistrationScreen ? (
              <div className={styles.fieldSet}>
                <label htmlFor="registerMobileNumber" lang={locale}>
                  <FormattedMessage id="phone" />
                </label>
                <div className={styles.inputWrap}>
                  <input
                    ref={mobileNumberInput}
                    name="registerMobileNumber"
                    id="registerMobileNumber"
                    type="text"
                    placeholder={intl.formatMessage({ id: 'phone_prompt' })}
                  />
                </div>
              </div>
            ) : null}
            {isRegistrationScreen ? null : (
              <div className={styles.fieldSet}>
                <label htmlFor="loginUsername" lang={locale}>
                  <FormattedMessage id="email_or_username" />
                </label>
                <div className={styles.inputWrap}>
                  <input
                    ref={loginInput}
                    id="loginUsername"
                    name="loginUsername"
                    data-test-id="loginEmail"
                    type="text"
                    name="email"
                    onChange={handleLoginDetailChange}
                    autoFocus
                    placeholder={intl.formatMessage({ id: 'email_or_username_prompt' })}
                  />
                </div>
              </div>
            )}
            <div className={styles.fieldSet}>
              <label htmlFor="formPassword" lang={locale}>
                <FormattedMessage id="password" />
              </label>
              <div className={styles.inputWrap}>
                <input
                  ref={passwordInput}
                  data-test-id="formPassword"
                  id="formPassword"
                  name="password"
                  onChange={handleLoginDetailChange}
                  type={passwordVisibility ? 'text' : 'password'}
                  placeholder={intl.formatMessage({ id: 'password_prompt' })}
                />

                <button
                  type="button"
                  className={styles.togglePasswordVisibility}
                  onClick={() => togglePasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
            </div>
            <div className={`${styles.fieldSet} ${styles.loginActions}`} lang={locale}>
              <label className={styles.rememberMe}>
                {isRegistrationScreen ? null : (
                  <>
                    <input type="checkbox" name="rememberMe" ref={rememberCheckboxInput} />
                    <FormattedMessage id="remember_me" />
                  </>
                )}
              </label>
              {isRegistrationScreen ? (
                <button
                  type="submit"
                  className={styles.registerButton}
                  data-test-id="registerButton"
                >
                  <FormattedMessage id="register" />
                  <ArrowRightIcon />
                </button>
              ) : (
                <button type="submit" className={styles.logInButton} data-test-id="loginButton">
                  <FormattedMessage id="login" />
                  <ArrowRightIcon />
                </button>
              )}
            </div>
          </form>
        </div>
        <div className={styles.bottomFixed} lang={locale}>
          <a href="/forgot-password">
            <FormattedMessage id="forgot_password" />
          </a>
          {isRegistrationScreen ? (
            <a
              href="/login"
              onClick={(event) => {
                event.preventDefault();
                showRegistrationScreen(false);
              }}
            >
              <FormattedMessage id="login" />
            </a>
          ) : (
            <a
              href="/create-account"
              onClick={(event) => {
                event.preventDefault();
                showRegistrationScreen(true);
              }}
            >
              <FormattedMessage id="create_account" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
