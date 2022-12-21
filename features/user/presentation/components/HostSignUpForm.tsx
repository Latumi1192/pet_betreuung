import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import GenderButton from "./GenderButton";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { UserData } from "../../domain/dto/UserData";
import { PetData } from "../../domain/dto/PetData";
import { HostData } from "../../domain/dto/HostData";
import { UserID } from "../../../../context/UserID";
import { useContext } from "react";
import PageBar from "./PageBar";

export default function HostSignUpForm() {
  const router = useRouter();
  const userServ = new UserServiceImpl();
  const userRepo = new UserRepositoryImpl();

  const [valid, setValid] = React.useState(true);
  const [warning, setWarning] = React.useState("");

  const { uid, setUID } = useContext(UserID);

  const [hostData, setHostData] = React.useState<HostData>({
    profilepicture: "",
    hostdocu: "",
    kind: "",
    race: "",
    petgender: "",
    petpicture: "",
    petdocu: "",
    abouthost: "",
    uid: 0,
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setHostData({
      ...hostData,
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
          "& .MuiTypography-root": { ml: 2, mb: 0 },
          "& .MuiFormGroup-root": { mt: 0, ml: 1 },
          "& .MuiFormControlLabel-root": { ml: 1 },
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
          <Button variant="outlined" component="label">
            Photo of Host
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <Typography>OR</Typography>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Use Profile picture"
          />
        </div>
        <div>
          <Button variant="outlined" component="label">
            Document of Host
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <Typography>
          ________________________________________________________
        </Typography>
        <div>
          <Button variant="outlined" component="label">
            Photo of Pet
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <Button variant="outlined" component="label">
            Document of Pet
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Kind"
            name="kind"
            value={hostData.kind}
            onChange={handleChange}
            placeholder="Dog, Cat, Rabbit etc..."
          />
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Race"
            name="race"
            value={hostData.race}
            onChange={handleChange}
            placeholder="Malteser, Poodle etc..."
          />
        </div>
        <div>
          <GenderButton />
        </div>
        <Typography>OR</Typography>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Use your pet's Profile"
          />
        </div>
        <Typography>
          ________________________________________________________
        </Typography>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="About"
            name="abouthost"
            multiline
            rows={4}
            value={hostData.abouthost}
            onChange={handleChange}
            placeholder="Tell us about you"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Datenschutzerklärung "
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Allgemein geschäftsbedingungen "
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              hostData.uid = uid;
              if (userServ.createHostData(hostData)) router.push("/");
              else {
                setValid(false);
                setWarning(userServ.signupHostWarning(hostData));
              }
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => {
              userRepo.printhostDB();
            }}
          >
            Show Host DB
          </Button>
        </div>
      </Box>
    </Box>
  );
}
