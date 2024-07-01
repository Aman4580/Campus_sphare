import { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles';
//import axios from 'axios'; // Import axios
import { adminRegister } from '../service/operations/authAPI';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("email and password are:", email, password);
    try {
      const response = await adminRegister(email, password);
      console.log("Signup successful", response);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <AdminRegisterContainer>
      <h2>Admin Register</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton onClick={(e) => handleRegister(e)}>Register</SubmitButton>
      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminRegister;
