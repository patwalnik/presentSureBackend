const env = 'dev';
let config;

if(env === 'dev'){
   config = {
	 baseUrl : 'http://localhost:3002',
    mongodb: {
      url: 'mongodb+srv://patwalnik:patwal123@patwalnik-q60a8.mongodb.net/attendanceApp?retryWrites=true&w=majority'
        // url: 'mongodb://localhost:27017/sdm'
    },
    jsonSecret : 'styledotme',
    httpPort: 3002,
    httpsPort: 3003,	
    env: env,
    elasticUrl: '',
    aws_access_key:'AKIA5LN5QZFXDCFIA5VY',
    aws_secret_access_key: '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',
    aws_default_region: 'ap-south-1',
    s3bucketname: 'test-dev-bucket1',
    slackToken: 'xoxp-30920186198-672710775700-675033924311-2fc2523e99dcca2c811ef1f9f8d58c77',
    slackUser: 'saurabh'
  }
    

}

const configHolder = config;
export default configHolder;
