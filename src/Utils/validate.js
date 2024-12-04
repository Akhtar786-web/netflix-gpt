const CheckvalidateData=(email,password,name)=>{
    const isEmailValid =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    console.log(isPasswordValid);
    const isNameValid = /^[a-zA-Z\s-]+$/.test(name);
    console.log(isNameValid);
    console.log(name);

    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not valid";
    console.log(name);
    if(!isNameValid) return name="Invalid"?null: "Invalid Name";
    if (!name) return "Full Name Required";

    return null;
};
export default CheckvalidateData; 