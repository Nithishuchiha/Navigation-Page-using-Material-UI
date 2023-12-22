import Button from "@mui/material/Button";
import "../Styles/index.css";
import { Typography } from "@mui/material";
const MainPage = () => {
  const nav1 = ["About", "Contact", "Signup"];
  const nav2 = ["Home", "About", "Contact"];

  return (
    <div style={{ display: "flex", height: "100vh", margin: "0" }}>
      <section
        style={{
          flex: "1",
          borderRight: "1px solid white",
          background: "radial-gradient(at bottom left,white,#e8f6ed 60%)",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            variant="text"
            style={{ color: "gray", fontWeight: "bolder", fontSize: "25px" }}
          >
            Farm
            <span style={{ color: "green" }}>Buddy</span>
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {nav1.map((item, i) => (
              <Button
                style={{
                  color: "black",
                  // fontWeight: "inherit",
                  display: "flex",
                  justifyContent: "space-around",
                  // alignItems: "space-between",
                }}
                key={i}
              >
                {item}
              </Button>
            ))}
          </div>
        </nav>
        <ul style={{ listStyle: "none", lineHeight: "48px" }}>
          <li>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                marginTop: "150px",
              }}
            >
              <Typography
                style={{
                  backgroundColor: "#068932",
                  width: "80px",
                  padding: "7px",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                BUSINESS
              </Typography>
              <Typography
                variant="h2"
                style={{
                  lineHeight: "48px",
                  color: "black",
                  fontSize: "30px",
                  textAlign: "center",
                  margin: "auto",
                  marginTop: "40px",
                }}
              >
                For <span style={{ color: "#098d35" }}>Farmers</span>{" "}
              </Typography>

              <Typography
                style={{
                  color: "black",
                  fontSize: "23px",
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                FarmBuddy is a platform where farmers can sell their products
                directly to the customers without any middlemen.
              </Typography>
            </div>
          </li>
          <li>
            <Button
              variant="text"
              style={{
                backgroundColor: "#098d35",
                color: "white",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                marginTop: "70px",
              }}
            >
              Login
            </Button>
          </li>
          <li>
            <Typography
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              Don&apos;t have an account?
              <br />
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Contact Sales
              </a>{" "}
              &quot;or&quot;
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Get free Trial
              </a>
            </Typography>
          </li>
        </ul>
      </section>
      <section style={{ flex: "1", borderLeft: "1px solid white" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "space-around ",
            marginTop: "5px",
            margin: "auto",
          }}
        >
          {nav2.map((item, i) => (
            <Button
              style={{
                color: "black",
                marginLeft: "20px",
              }}
              key={i}
            >
              {item}
            </Button>
          ))}
          <Button
            variant="text"
            style={{
              color: "white",
              backgroundColor: "#068932",
              marginLeft: "20px",
            }}
          >
            SignUp
          </Button>
        </nav>
        <div style={{ marginTop: "250px" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Typography
                style={{
                  variant: "h2",
                  color: "black",
                  fontSize: "30px",
                  textAlign: "center",
                  margin: "auto",
                  marginTop: "40px",
                }}
              >
                For <span style={{ color: "#098d35" }}>Customers</span>{" "}
              </Typography>
            </li>

            <Typography
              style={{
                color: "black",
                fontSize: "23px",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              FarmBuddy is a platform where customers can buy products directly
              from the farmers without any middlemen.
            </Typography>
          </ul>
        </div>
        <Button
          style={{
            color: "whitesmoke",
            backgroundColor: "#068932",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            marginTop: "70px",
          }}
        >
          Login
        </Button>
        <Typography
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          Don&apos;t have an account?
          <br />
          <a href="" style={{ textDecoration: "none" }}>
            Sign Up{" "}
          </a>
        </Typography>
      </section>
    </div>
  );
};

export default MainPage;
