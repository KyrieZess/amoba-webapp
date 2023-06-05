import Vue from 'vue'

export const RequestMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
};

export const ClientApiService = {
    async sendRequestBasicAuth(method, path, params, username, password) {
        // creating URL
        var url = new URL(Vue.prototype.$baseUrl.concat(path));
        // if the params object is not null
        if (params != null) {
            // adding query parameters to the string
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value != null) {
                    url.searchParams.append(key, params[key]);
                }
            });
        }
        try {
            // create fetch object with trimmed body
            const fetchOptions = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }, (key, value) => {
                    if (typeof value === "string" && value == "") {
                        return null;
                    } else if (typeof value == "string") {
                        return value.trim();
                    }
                    return value;
                })
            };
            // starting the request
            const response = await fetch(url, fetchOptions);
            // returning the promise
            return response;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}