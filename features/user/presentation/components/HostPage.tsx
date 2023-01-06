import React from "react";
import { Dayjs } from "dayjs";
import {
  Avatar,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Rating,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

export default function HostPage() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

  return (
    <Box
      m="auto"
      sx={{
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        mt: 1,
        border: 3,
        width: 850,
        borderColor: "primary.main",
        borderRadius: "16px",
        "& .MuiBox-root": { m: 1 },
        "& .MuiTypography-root": { m: 1 },
      }}
    >
      <div>
        <Box
          sx={{
            display: "inline-flex",
            border: 3,
            width: 1,
            borderRadius: "16px",
            borderColor: "grey.500",
            "& .MuiAvatar-root": { m: 1 },
          }}
        >
          <Avatar
            sx={{ width: 350, height: 300 }}
            src="https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg"
          />
          <div>
            <Typography>Placeholder for Name</Typography>

            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbOB4-ojFkzhdVH5V3BuaUNR_m3yCGvZEOYu6uL6l4joHI9qVD_qLB06tSNyk7K59UL8&usqp=CAU"
                style={{ width: 200, height: 140, margin: 10 }}
              />
              <img
                src="https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?s=612x612&w=0&k=20&c=oMoz9rUr-rDhMGNmEepCkr7F1g3AXs9416hvVnT_4CI="
                style={{ width: 200, height: 140, margin: 10 }}
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9mUgYqcz8Jsg7LogoIee1g9KRa21nZrh0VbMYr6-nj1jWlJTSPi1haSFAHVK0gwidDA&usqp=CAU"
                style={{ width: 200, height: 140, margin: 10 }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ5Ipdrv0kIcj0-P83bEca3B0ymb7dKQ6M_9M8dFcHA-mr5c0mzdcpnz3fmXHJhDhCCM&usqp=CAU"
                style={{ width: 200, height: 140, margin: 10 }}
              />
            </div>
          </div>
        </Box>
      </div>

      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          border: 3,
          width: 300,
          borderRadius: "16px",
          borderColor: "grey.500",
        }}
      >
        <Typography>Gender: </Typography>
        <Typography>Pet's name: </Typography>
        <Typography>About: </Typography>
      </Box>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          border: 3,
          width: 500,
          borderRadius: "16px",
          borderColor: "grey.500",
          "& .MuiTextField-root": { m: 1 },
          "& .MuiFormControlLabel-root": { m: 1 },
          "& .MuiButton-root": { m: 1 },
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Check-in", end: "Check-out" }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Use your owned food"
        />
        <Typography>Sum: Placeholder for summary</Typography>
        <Button variant="contained">Buch</Button>
      </Box>
      <Box>
        <Typography variant="h4">Review</Typography>
        <Rating
          name="Placeholder"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <Typography>Text</Typography>
      </Box>
    </Box>
  );
}
