import TextInput from "@/components/shared/inputs/TextInput";
import { Card } from "@/types/Card";
import { Client } from "@/types/Client";
import { CheckoutErrors } from "@/components/checkout/validations/checkoutSchema";

interface Props {
  totalAmount: number;
  formErrors: CheckoutErrors;
  card: Card;
  client: Client;
  handleChangeCard: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeClient: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CheckoutForms: React.FC<Props> = ({
  formErrors,
  totalAmount,
  client,
  handleChangeClient,
  handleSubmit,
  handleChangeCard,
  card,
}) => {
  const clientErrors = formErrors.client;
  const cardErrors = formErrors.card;
  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center gap-10">
      <div className="flex-1 max-w-3xl space-y-4 bg-white p-8 rounded-4xl">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Customer Information
        </h2>
        <TextInput
          label="Full Name"
          name="name"
          value={client.name}
          onChange={handleChangeClient}
          placeholder="Enter your full name"
          error={clientErrors?.name}
          required
        />

        <div className="flex gap-4">
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={client.email}
            onChange={handleChangeClient}
            placeholder="Enter your email"
            required
            className="w-full"
            error={clientErrors?.email}
          />

          <TextInput
            label="Phone"
            name="phone"
            type="tel"
            value={client.phone}
            onChange={handleChangeClient}
            placeholder="Enter your phone number"
            required
            className="w-full"
            error={clientErrors?.phone}
          />
        </div>
        <div className="flex gap-4">
          <TextInput
            label="Address"
            name="address"
            value={client.address}
            onChange={handleChangeClient}
            placeholder="Enter your address"
            required
            className="w-full"
            error={clientErrors?.address}
          />

          <TextInput
            label="City"
            name="city"
            value={client.city}
            onChange={handleChangeClient}
            placeholder="Enter your city"
            required
            className="w-full"
            error={clientErrors?.city}
          />
        </div>
        <TextInput
          label="Reference (optional)"
          name="reference"
          value={client.reference}
          onChange={handleChangeClient}
          placeholder="E.g. near the park"
          required={false}
          error={clientErrors?.reference}
        />
      </div>
      <div className="flex-1 flex flex-col max-w-xl space-y-4 bg-white rounded-4xl p-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Payment Information
        </h2>
        <TextInput
          label="Card Number"
          name="number"
          value={card.number}
          onChange={handleChangeCard}
          placeholder="1234 5678 9012 3456"
          required
          error={cardErrors?.number}
        />

        <TextInput
          label="Name on Card"
          name="cardName"
          value={card.cardName}
          onChange={handleChangeCard}
          placeholder="John Doe"
          required
          error={cardErrors?.cardName}
        />

        <div className="flex gap-4">
          <TextInput
            label="Expiry Date"
            name="expiry"
            value={card.expiry}
            onChange={handleChangeCard}
            placeholder="MM/YY"
            required
            className="w-full"
            error={cardErrors?.expiry}
          />
          <TextInput
            label="CVV"
            name="cvv"
            value={card.cvv}
            maxLength={3}
            onChange={handleChangeCard}
            placeholder="123"
            required
            className="w-full"
            error={cardErrors?.cvv}
          />
        </div>
        <div className="text-3xl my-5 font-bold text-secondary flex gap-2 items-end justify-end">
          <span className="text-base">Total:</span> ${totalAmount.toFixed(2)}
        </div>

        <button
          type="submit"
          className="w-full mt-3 py-3 bg-accent text-white font-semibold rounded-3xl hover:bg-accent/80 transition"
        >
          Continue to Order Summary
        </button>
      </div>
    </form>
  );
};

export default CheckoutForms;
