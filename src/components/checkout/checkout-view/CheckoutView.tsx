"use client";
import { Card } from "@/types/Card";
import { Client } from "@/types/Client";
import { useState } from "react";
import CheckoutForms from "./components/CheckoutForms";

const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

const formatExpiryDate = (value: string) => {
  const raw = value.replace(/\D/g, "");
  if (raw.length === 0) return "";
  if (raw.length <= 2) return raw;
  return raw.slice(0, 2) + "/" + raw.slice(2, 4);
};

const CheckoutView = () => {
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
    name: "",
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
    setShowSummary(true);
  };

  const finalizeOrder = () => {
    alert("Orden finalizada ✅");
  };

  return (
    <>
      {!showSummary ? (
        <CheckoutForms
          card={cardData}
          client={clientData}
          handleChangeCard={handleChangeCard}
          handleChangeClient={handleChangeClient}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary">
            Review Your Order
          </h2>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-1">
              <h3 className="font-semibold text-base">Customer Info</h3>
              <p>{clientData.name}</p>
              <p>{clientData.email}</p>
              <p>{clientData.phone}</p>
              <p>
                {clientData.address}, {clientData.city}
              </p>
              {clientData.reference && <p>Ref: {clientData.reference}</p>}
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-base">Payment Info</h3>
              <p>Card: **** **** **** {cardData.number.slice(-4)}</p>
              <p>Name: {cardData.name}</p>
              <p>Exp: {cardData.expiry}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setShowSummary(false)}
              className="py-2 px-4 border border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-white transition"
            >
              Edit
            </button>
            <button
              onClick={finalizeOrder}
              className="py-2 px-6 bg-secondary text-white font-semibold rounded-xl hover:bg-primary transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutView;
