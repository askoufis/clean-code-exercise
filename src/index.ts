type Cntry = "AU" | "NZ" | "FR";
type DepDate = "Today" | "Tomorrow" | "Next Week" | "Next Month";
type Seat = "Economy" | "Business" | "First Class";
export const printTicket = (cntry: Cntry, depDate: DepDate, seat: Seat) => {
  let name: string;
  let price: number;
  switch (cntry) {
    case "AU":
      name = "Australia";
      price = 100;
      break;
    case "NZ":
      name = "New Zealand";
      price = 300;
      break;
    case "FR":
      name = "France";
      price = 1000;
      break;
  }

  switch (depDate) {
    case "Today":
      price *= 1.5;
      break;
    case "Tomorrow":
      price *= 1.2;
      break;
    case "Next Week":
      price *= 1.1;
      break;
    case "Next Month":
      price *= 1.05;
      break;
  }

  let ticketText = `Country: ${name}, Departure Date: ${depDate}, Price: ${price}`;
  if (seat !== "Economy") {
    let sym = "";
    if (seat === "Business") {
      sym = "$";
    } else if (seat === "First Class") {
      sym = "$$$";
    }
    if (sym) {
      ticketText = `${sym} - ${ticketText} - ${sym}`;
    }
  }
  return ticketText;
};
