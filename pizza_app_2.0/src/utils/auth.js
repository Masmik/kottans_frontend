class AuthUser {
    constructor() {
    }

    get token() {
        return localStorage.getItem('jwt');
    }

    get claims() {
        return this.parseJwt(this.token);
    }

    set token(token) {
        localStorage.setItem('jwt', token);
    }

    parseJwt(token) {
        if (!token) {
            return { username: '', exp: 0, uuid: '', store_id: 0 };
        }
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    isExpired() {

        let now = (new Date()).getTime();
        let tokenExp = this.claims.exp * 1000;

        if (now >= tokenExp) {
            return true;
        }

        return false;
    }


    get currentUserAccess() {
        if (!this.isExpired()) {
            return ['userAuth'];
        }
        return [];
    }

    logOut() {
        localStorage.removeItem('jwt');
    }
}
export const Auth = new AuthUser();
