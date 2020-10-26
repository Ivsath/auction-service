# Serverless Framework

## Getting started

### Deployment order

1. auth-service
2. notification-service
3. auction-service

- Verify email address on SES

```
brew install awscli
yarn global add serverless
aws configure
yarn
sls deploy -v
```

You are ready to go!
