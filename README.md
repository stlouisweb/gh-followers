1. clone the repo
2. npm install
3. serverless invoke local -f followers
4. serverless offline 
5. configure AWS access key example:
   `serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`  
   [more info about generating AWS access keys](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
6. serverless deploy -v
7. serverless invoke -f followers -l
8. serverless remove
