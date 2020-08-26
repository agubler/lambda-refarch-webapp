// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "11ufugp33fhg01mt2sps5h8qa1",     // CognitoClientID
  "api_base_url": "https://43eh89pm8e.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-ref-arch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1chfrv83kht48.amplifyapp.com"                                      // AmplifyURL
};

export default config;
