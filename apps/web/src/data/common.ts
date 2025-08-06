import Carpenter from "@/assets/images/illustration/carpenter.png";
import Delivery from "@/assets/images/illustration/delivery.png";
import Payment from "@/assets/images/illustration/payment.png";
import TruckWithFurniture from "@/assets/images/illustration/truck_with_furniture.png";

import type { StaticImageData } from "next/image";

interface WhyUs {
  id: number;
  label: string;
  image: string | StaticImageData;
  description: string;
}

export const whyUs: WhyUs[] = [
  {
    id: 1,
    label: "Direct Contact with Carpenters",
    image: Carpenter,
    description:
      "Connect directly with skilled local carpenters to customize furniture to your needs without middlemen."
  },
  {
    id: 2,
    label: "Timely Delivery",
    image: TruckWithFurniture,
    description:
      "We ensure on-time delivery, so you can plan your setup without delays or disruptions."
  },
  {
    id: 3,
    label: "Home Delivery Service",
    image: Delivery,
    description:
      "Enjoy doorstep delivery of your furniture with proper handling and care."
  },
  {
    id: 4,
    label: "Easy & Flexible Payment",
    image: Payment,
    description:
      "Pay securely using your preferred method — cash, card, or digital wallets, with installment options available."
  }
];
