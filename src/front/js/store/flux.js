const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			mail: [],
			password: []
		},
		actions: {

			login: async (email, password) => {
				try {
					const response = await fetch("https://super-space-lamp-pjg64w6qr94x269rp-3001.app.github.dev/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email: email, password: password }),
					});
			
					if (response.ok) {
						const data = await response.json();
						sessionStorage.setItem("access_token", data.token);
						return true;
					} else {
						const errorData = await response.json();
						console.error(errorData.error);
						return false;
					}
				} catch (error) {
					console.error("Error during login:", error);
					return false;
				}
			},
			

			register: async (email, password) => {
				try {
					const response = await fetch("https://super-space-lamp-pjg64w6qr94x269rp-3001.app.github.dev/api/signup", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email: email, password: password }),
					});

					if (response.ok) {
						const data = await response.json();
						console.log("User registered:", data);
						return true;
					} else {
						const errorData = await response.json();
						console.error("Registration error:", errorData.msg);
						return false;
					}
				} catch (error) {
					console.error("Error during registration:", error);
					return false;
				}
			},


			privacy: async () => {
				try {
					const token = sessionStorage.getItem("access_token");
					if (!token) {
						console.error("No access token found");
						return false;
					}
			
					const response = await fetch("https://super-space-lamp-pjg64w6qr94x269rp-3001.app.github.dev/api/private", {
						method: "GET",
						headers: { 
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
						}
					});
			
					if (response.ok) {
						const data = await response.json();
						console.log("User data retrieved:", data);
						return data;
					} else {
						const errorData = await response.json();
						console.error("Error retrieving user data:", errorData.msg);
						return false;
					}
				} catch (error) {
					console.error("Error during user data retrieval:", error);
					return false;
				}
			}
			



		}
	};
};

export default getState;
