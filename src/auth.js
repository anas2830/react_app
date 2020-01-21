const Auth = {
	isLogin: false,
	login(cb){
		this.isLogin = true
	},
	logout(cb){
		this.isLogin = false
	}
}

export default Auth;