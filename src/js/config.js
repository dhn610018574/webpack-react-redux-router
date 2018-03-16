const CurrentPath = 'https://financeapp-static-uat.crfchina.com/webp2p_interface_mysql/'
module.exports = {
  basePath: CurrentPath,
  investmentPath:CurrentPath + 'investment',
  smsPath:CurrentPath + 'sms',
  authPath:CurrentPath + 'auth',
  mockPath:"../mock/home.json",
  mocknewProListPath:"../mock/newProList.json",
  isPopShow:false,
  contractPrefix: '',
  headers:{
    "content-Type":"application/json;charset=UTF-8",
    accessToken:"39c6d5195474acf7144edff365dbef337609e10768dedaab5ddcaf1c43b353112afa35d79d0d456dc96930c91f9d2e5e229a6ed77c908b790af479708d59afaf9fe9c12e3db59affc3d64570f704e8c0c658f499420c42e7467f8eb4d4c6ac43a47cf0678ff88ddb9cdf2f6c998122cd31bba26191d22eaa2593843471f5001f5389856ac85bcd341fec29e6ea1dd47dcc75bdb1c95d3884f506ea77fa54f69e953616830ad94d0d65383247a9e3763821699d136a221658c9efb4f524c073110060560b07263536b8d21fb6094e5522efb378391c721cf9d19c948f90ebc6bd8ee6064a1772d8e9879706556e7adf21a5fe480bc2c8df904eabb74412a9551ef290b3531faf15be561b4f5d923569857d9a2c6d7fb92dc82a0f4ec7dd6116eff3a02d0f9b3995b8e640a2a9814b416143b21208bf8f2950269033e2baf21aca39b152235a9dbe4ae02d90b2d55ed70986d7a4965eaf39b1c9bfa1790b7ddf0504629fb2c54b91420d69d79bb42b870e",
    deviceno:"AC1B61A3-F77D-4AA7-BE79-890ABAC41631",
    clientId:"",
    packageName:"com.crfchina.purseTest",
    mobileOs:"IOS",
    mchntNo:"",
    "version-code":44
  }
}