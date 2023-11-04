// NotFound.jsx
import React from "react";
import { Card, CardHeader, Button, Text, Icon } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const NotFound = () => {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const goBackHandler = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Use 100% of the viewport height
        width: "100vw", // Use 100% of the viewport width
        margin: "0", // Remove default margin
        padding: "0", // Remove default padding
        background: "#29313a",
      }}
    >
      <Card
        header={
          <CardHeader
            avatar={<Icon name="error" className="notFound"/>}
            titleText="404 - Page Not Found"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        }
        style={{
          maxWidth: "500px", // Set a max-width for larger screens
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Text style={{ margin: "16px 0" }}>
          We're sorry, the page you requested could not be found. Please go back
          to the homepage or contact us at tpaflias@deloitte.gr
        </Text>
        <Button onClick={goBackHandler}>Go Back</Button>
      </Card>
    </div>
  );
};

export default NotFound;
