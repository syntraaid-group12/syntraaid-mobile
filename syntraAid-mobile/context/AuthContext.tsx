import {createContext, useState} from "react";


// pass a default value (optional but recommend for testing)
export const MyContext = createContext({
  user: {name: "", email: "", password: "", confirmPassword: "", accountType: ""},
  setUser: (user: { name: string; email: string; password: string; confirmPassword: string; accountType: string;}) => {},
});

export const MyProvider = ({ children }: {children: React.ReactNode }) => {
  const [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: "", accountType:""});

  const signUp = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store token on success (Save to Encrypted Storage / SecureStore if permanent persistence is needed)
      setUser(data.token); 
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  
  
  
  
  return(
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
    );
};