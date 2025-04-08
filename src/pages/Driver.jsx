import React, { useState } from "react";
import PassnagerForm from "../components/PassnagerForm";

import { Popover, Steps, ConfigProvider } from "antd";
import DriverForm from "../components/DriverForm";

const Driver = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <div className=" space-y-10 p-8">
      <ConfigProvider
        theme={{
          components: {
            Steps: {
              colorPrimary: "orange", // changes active icon + title
              colorTextDescription: "white",
              colorText: "orange",
              finishIconColor: "#13c2c2", // custom finish icon color
            },
          },
        }}
      >
        <Steps
          style={{ color: "white" }}
          current={currentStep}
          progressDot={customDot}
          colorBorderBg="white"
          theme={{
            token: {
              colorPrimary: "#fff",
            },
          }}
          items={[
            {
              className: "text-white",
              title: "Destintaion",
              description: "",
            },
            {
              title: "Time",
              description: "",
            },
            {
              title: "Car",
              description: "",
            },
            {
              title: "Price",
              description: "",
            },
          ]}
        ></Steps>
      </ConfigProvider>
      <DriverForm currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  );
};

export default Driver;
