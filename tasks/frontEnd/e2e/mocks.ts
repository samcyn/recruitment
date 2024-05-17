export const MOCKED_LOGIN_RESPONSE = {
  "kind": "identitytoolkit#VerifyPasswordResponse",
  "localId": "Fbr4AM1MBZePnM5s9GypMfwt0bC2",
  "email": "tester@samsoniyanda.com",
  "displayName": "Samson Iyanda",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUy",
  "registered": true,
  "refreshToken": "AMf-vBxGDVdJ169LjIyirnReKGpO",
  "expiresIn": "3600"
};

export const MOCKED_SIGNUP_RESPONSE = {
  "kind": "identitytoolkit#SignupNewUserResponse",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZT",
  "email": "tester@samsoniyanda.com",
  "refreshToken": "AMf-vBxeYWr2MEAqQiRARM9r_",
  "expiresIn": "3600",
  "localId": "Fbr4AM1MBZePnM5s9GypMfwt0bC2"
};

export const MOCKED_ACCOUNT_LOOK_UP_RESPONSE = {
  "kind": "identitytoolkit#GetAccountInfoResponse",
  "users": [
    {
      "localId": "0RUmyMP4b4PfhJaoxV5cr8ehDNx1",
      "email": "samsoniyanda@outlook.com",
      "displayName": "Samson Iyanda",
      "passwordHash": "UkVEQUNURUQ=",
      "emailVerified": true,
      "passwordUpdatedAt": 1715853708054,
      "providerUserInfo": [
        {
          "providerId": "password",
          "displayName": "Samson Iyanda",
          "federatedId": "samsoniyanda@outlook.com",
          "email": "samsoniyanda@outlook.com",
          "rawId": "samsoniyanda@outlook.com"
        }
      ],
      "validSince": "1715853708",
      "lastLoginAt": "1715986233066",
      "createdAt": "1715603279153",
      "lastRefreshAt": "2024-05-17T22:50:33.066Z"
    }
  ]
};