import React from "react";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLable="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLable="Back to login"
    >
      <div className="w-fukk flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
