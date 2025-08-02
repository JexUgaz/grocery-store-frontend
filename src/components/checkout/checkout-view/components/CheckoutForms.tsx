import TextInput from "@/components/shared/inputs/TextInput";
import { Card } from "@/types/Card";
import { Client } from "@/types/Client";

interface Props {
  card: Card;
  client: Client;
  handleChangeCard: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeClient: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CheckoutForms: React.FC<Props> = ({
  client,
  handleChangeClient,
  handleSubmit,
  handleChangeCard,
  card,
}) => {
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
          />

          <TextInput
            label="City"
            name="city"
            value={client.city}
            onChange={handleChangeClient}
            placeholder="Enter your city"
            required
            className="w-full"
          />
        </div>
        <TextInput
          label="Reference (optional)"
          name="reference"
          value={client.reference}
          onChange={handleChangeClient}
          placeholder="E.g. near the park"
          required={false}
        />
      </div>
      <div className="flex-1 max-w-xl space-y-4 bg-white rounded-4xl p-8">
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
        />

        <TextInput
          label="Name on Card"
          name="name"
          value={card.name}
          onChange={handleChangeCard}
          placeholder="John Doe"
          required
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
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-primary transition"
        >
          Continue to Order Summary
        </button>
      </div>
    </form>
  );
};

export default CheckoutForms;
