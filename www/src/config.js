// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6sg22sgpbe7oki8s8k8c3p1un9",     // CognitoClientID
  "api_base_url": "https://pegtg2t8e8.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-ref-arch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d124qsv3ihylyz.amplifyapp.com"                                      // AmplifyURL
};

export default config;
