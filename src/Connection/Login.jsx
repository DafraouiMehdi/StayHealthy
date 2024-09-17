import axios from 'axios';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for form fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for image sliding in from the right
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 5%;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  color: #4caf50;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;
  animation-delay: 0.5s;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 5px; /* Adjusted to make space for error messages */
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
`;

const SubmitButton = styled(Input)`
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  opacity: 0;
  animation: ${slideIn} 2s ease-out forwards;
  animation-delay: 1.5s;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 7px 7px 5px #525252;
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards;
  animation-delay: 1s;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  & > div {
    flex: 1;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-left: 8px;
`;

const Login = () => {

    const [info, setInfo] = useState({
      name: "",
      date: "",
      email: "",
      phone: "",
      password: "",
      confirmPass: "",
      gender: "" ,
      photo : ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value
      });
      setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
      let formIsValid = true;
      let errors = {};

      if (!info.name) {
        formIsValid = false;
        errors.name = "Name is required";
      }

      if (!info.date) {
        formIsValid = false;
        errors.date = "Date of birth is required";
      }

      if (!info.email) {
        formIsValid = false;
        errors.email = "Email is required";
      }

      if (!info.phone) {
        formIsValid = false;
        errors.phone = "Phone number is required";
      }

      if (!info.password) {
        formIsValid = false;
        errors.password = "Password is required";
      }

      if (!info.confirmPass) {
        formIsValid = false;
        errors.confirmPass = "Confirm Password is required";
      } else if (info.password !== info.confirmPass) {
        formIsValid = false;
        errors.confirmPass = "Passwords do not match";
      }

      if (!info.gender) {
        formIsValid = false;
        errors.gender = "Gender is required";
      }

      if (!info.photo) {
        formIsValid = false;
        errors.photo = "Photo is required";
      }

      if (getYear(current_date()) - getYear(info.date) < 15) {
        formIsValid = false;
        errors.date = "The child must be at least 15 years old";
      }

      setErrors(errors);
      return formIsValid;
    };

    const getYear = (date) => {
      return new Date(date).getFullYear();
    };

    const current_date = () => {
      return new Date();
    };

    const handleClick = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(info);
        axios.post('/api/stayHealthyLoGin', info)
        .then((response) => {
          console.log('Login successful:', response.data);
        })
        .catch((error) => {
          console.error('There was an error logging in:', error);
        });
      } else {
        console.error("Form validation failed");
      }
    };

    return (
      <Flex>
        <div>
          <LoginContainer>
            <Title>Login</Title>
            <LoginForm action="">
              <Div>
                <div>
                  <Label>User Name:</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    onChange={handleInput}
                  />
                  {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </div>
                <div>
                  <Label>Date Naissance:</Label>
                  <Input
                    type="date"
                    name="date"
                    placeholder="Enter your Birthday"
                    required
                    onChange={handleInput}
                  />
                  {errors.date && <ErrorText>{errors.date}</ErrorText>}
                </div>
              </Div>
              <Div>
                <div>
                  <Label>E-mail:</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    onChange={handleInput}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </div>
                <div>
                  <Label>Phone:</Label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone"
                    required
                    onChange={handleInput}
                  />
                  {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                </div>
              </Div>
              <Div>
                <div>
                  <Label>Password:</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    required
                    onChange={handleInput}
                  />
                  {errors.password && <ErrorText>{errors.password}</ErrorText>}
                </div>
                <div>
                  <Label>Confirm Password:</Label>
                  <Input
                    type="password"
                    name="confirmPass"
                    placeholder="Confirm Password"
                    required
                    onChange={handleInput}
                  />
                  {errors.confirmPass && <ErrorText>{errors.confirmPass}</ErrorText>}
                </div>
              </Div>
              <RadioGroup>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    required
                    onChange={handleInput}
                  />
                  <RadioLabel htmlFor="male">Male</RadioLabel>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    required
                    onChange={handleInput}
                  />
                  <RadioLabel htmlFor="female">Female</RadioLabel>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    required
                    onChange={handleInput}
                  />
                  <RadioLabel htmlFor="other">Other</RadioLabel>
                </div>
              </RadioGroup>
              {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
              <Div>
                <div>
                  <Label>Photo :</Label>
                  <Input
                    type="file"
                    name="photo"
                    required
                    onChange={handleInput}
                  />
                  {errors.photo && <ErrorText>{errors.photo}</ErrorText>}
                </div>
              </Div>
              <SubmitButton
                type="submit"
                value="Register"
                onClick={handleClick}
              />
            </LoginForm>
          </LoginContainer>
        </div>
        <ImageContainer>
          <Image src="/jeune-homme-jeune-femme-s-entrainent-ensemble-pour-musculation_1311477-58269-removebg-preview.png" alt="Login Illustration" />
        </ImageContainer>
      </Flex>
    );
  };

export default Login;
