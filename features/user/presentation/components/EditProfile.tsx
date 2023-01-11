import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Alert, AlertTitle } from "@mui/material";
import GenderButton from "./GenderButton";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { UserData } from "../../domain/dto/UserData";
import { PetData } from "../../domain/dto/PetData";
import { UserID } from "../../../../context/UserID";
import PageBar from "./PageBar";

export default function EditProfile() {
  const router = useRouter();
  const userServ = new UserServiceImpl();
  const userRepo = new UserRepositoryImpl();

  const [valid, setValid] = React.useState(true);
  const [warning, setWarning] = React.useState("");

  const { uid, setUID } = React.useContext(UserID);

  const [userData, setUserData] = React.useState<UserData>({
    firstname: "",
    lastname: "",
    addresse: "",
    zipcode: 0,
    city: "",
    country: "",
    telephone: 0,
    gender: "",
    account: "",
    password: "",
    email: "",
    profilepicture: "",
    uid: 0,
    pet: new Array<PetData>(),
  });

  React.useEffect(() => {
    const foundUserData = userRepo.getUserFromID(uid);
    setUserData(foundUserData);
  }, []);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          width: 550,
          border: 3,
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiTextField-root": { m: 2, width: "25ch" },
          "& .MuiButton-root": { mt: 1, ml: 2, mb: 1 },
          "& .MuiFormGroup-root": { mt: 0, ml: 1 },
          "& .MuiFormControlLabel-root": { m: 0 },
        }}
        noValidate
        autoComplete="off"
      >
        {!valid && (
          <div>
            <Alert
              severity="error"
              sx={{
                borderRadius: "16px 16px 0px 0px",
              }}
            >
              <AlertTitle>Error</AlertTitle>
              <strong>{warning}</strong>
            </Alert>
          </div>
        )}
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="First Name"
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="Last Name"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Addresse"
            name="addresse"
            value={userData.addresse}
            onChange={handleChange}
            placeholder="Enter your addresse"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="ZIP Code"
            name="zipcode"
            value={userData.zipcode}
            onChange={handleChange}
            placeholder="12345"
          />
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="City"
            name="city"
            value={userData.city}
            onChange={handleChange}
            placeholder="Hamburg"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="Country"
            name="country"
            value={userData.country}
            onChange={handleChange}
            placeholder="Germany"
          />
        </div>

        <div>
          <GenderButton />
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Telephone"
            name="telephone"
            value={userData.telephone}
            onChange={handleChange}
            placeholder="0123456789"
          />
        </div>
        <div>
          <Button variant="outlined" component="label">
            Profile picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (userServ.editProfile(uid, userData)) {
                router.push("/userprofile");
              } else {
                setValid(false);
                setWarning(userServ.editWarning(userData));
              }
            }}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              router.push("/userprofile");
            }}
          >
            Back to Profile
          </Button>
        </div>
      </Box>
    </Box>
  );
}
