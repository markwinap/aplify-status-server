# Amplify Status Server

## run
```sh
ts-node index.ts
```

## Setup

### Install Dependencies
```sh
npm install
or
yarn install
```

### Configure Enviroment Variables
Create .env file based on .env.example and add your personal information


## Possible Results
```sh
RUNNING Computer Wakeup gtest 2023-01-15T06:51:49.582Z null
BUILD PROVISIONING 2023-01-15T06:51:49.704Z null
DEPLOY PENDING null null
VERIFY PENDING null null

RUNNING Computer Wakeup gtest 2023-01-15T06:51:49.582Z null
BUILD RUNNING 2023-01-15T06:51:49.704Z null
DEPLOY PENDING null null
VERIFY PENDING null null


SUCCEED Computer Wakeup gtest 2023-01-15T06:51:49.582Z 2023-01-15T06:58:10.842Z
BUILD SUCCEED 2023-01-15T06:51:49.704Z 2023-01-15T06:58:03.034Z
DEPLOY SUCCEED 2023-01-15T06:58:03.258Z 2023-01-15T06:58:05.532Z
VERIFY SUCCEED 2023-01-15T06:58:05.635Z 2023-01-15T06:58:10.734Z
```

## Documentation
### AWS JS SDK Amplify
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Amplify.html#listJobs-property