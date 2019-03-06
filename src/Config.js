class Config {
  static get sinopiaDomainName() {
    return process.env.SINOPIA_URI || 'sinopia.io'
  }

  static get sinopiaUrl() {
    return `https://${this.sinopiaDomainName}`
  }

  static get awsClientID() {
    return process.env.AWS_CLIENT_ID || '69u288s9ia8ible8gg1n4k0gou'
  }

  static get awsCognitoDomain() {
    return process.env.AWS_COGNITO_DOMAIN || 'sinopia-development.auth.us-west-2.amazoncognito.com'
  }

  static get awsCognitoLoginUrl() {
    return `https://${this.awsCognitoDomain}/login?response_type=token&client_id=${this.awsClientID}&redirect_uri=${this.sinopiaUrl}`
  }

  static get awsCognitoLogoutUrl() {
    return `https://${this.awsCognitoDomain}/logout?response_type=token&client_id=${this.awsClientID}&logout_uri=${this.sinopiaUrl}&redirect_uri=${this.sinopiaUrl}`
  }

  static get awsCognitoForgotPasswordUrl() {
    return `https://${this.awsCognitoDomain}/forgotPassword?response_type=token&client_id=${this.awsClientID}&redirect_uri=${this.sinopiaUrl}`
  }

  static get awsCognitoResetPasswordUrl() {
    return `https://${this.awsCognitoDomain}/signup?response_type=token&client_id=${this.awsClientID}&redirect_uri=${this.sinopiaUrl}`
  }
}

export default Config