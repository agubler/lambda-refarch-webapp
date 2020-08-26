// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "186v6cqecq1n078rgbbi905mmt",     // CognitoClientID
  "api_base_url": "https://9sfj5bcxoh.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-ref-arch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1odbn4dy8ygbp.amplifyapp.com"                                      // AmplifyURL
};

export default config;
