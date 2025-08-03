"use client";
import { Card } from "@/types/Card";
import { Client } from "@/types/Client";
import { useState } from "react";
import CheckoutForms from "./components/CheckoutForms";
import {
  CheckoutErrors,
  CheckoutSchema,
  checkoutSchema,
} from "@/components/checkout/validations/checkoutSchema";
import z from "zod";
import { formatZodErrors, formatCardNumber, formatExpiryDate } from "@/utils";
import CheckoutReview from "./components/CheckoutReview";

interface Props {
  totalAmount: number;
}

const CheckoutView: React.FC<Props> = ({ totalAmount }) => {
  const [formErrors, setFormErrors] = useState<CheckoutErrors>({});
  const [showSummary, setShowSummary] = useState(false);
  const [clientData, setClientData] = useState<Client>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    reference: "",
  });

  const [cardData, setCardData] = useState<Card>({
    number: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleChangeClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpiryDate(value);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse({
      client: clientData,
      card: cardData,
    });
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      const formErrors = formatZodErrors<CheckoutSchema>(tree);
      setFormErrors(formErrors);
      return;
    }

    setFormErrors({});
    setShowSummary(true);
  };

  return (
    <>
      {!showSummary ? (
        <CheckoutForms
          totalAmount={totalAmount}
          formErrors={formErrors}
          card={cardData}
          client={clientData}
          handleChangeCard={handleChangeCard}
          handleChangeClient={handleChangeClient}
          handleSubmit={handleSubmit}
        />
      ) : (
        <CheckoutReview
          totalAmount={totalAmount}
          card={cardData}
          client={clientData}
          goBack={() => setShowSummary(false)}
        />
      )}
    </>
  );
};

export default CheckoutView;
