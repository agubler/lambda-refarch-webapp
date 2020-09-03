// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1tfc06eohsilb8b3h7vn2v4alv",     // CognitoClientID
  "api_base_url": "https://t6zlt8n65d.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-ref-arch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1akbewi5narj4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
