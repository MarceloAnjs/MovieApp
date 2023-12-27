export interface SeatBookingViewModel {
  dateArray: any[];
  selectedDateIndex: any;
  price: number;
  twoDSeatArray: any[][];
  selectedSeatArray: any[];
  selectedTimeIndex: any;
  selectSeat: (index: number, subindex: number, num: number) => void;
  BookSeats: () => Promise<void>;
  timeArray: string[];
  setSelectedDateIndex: (index: any) => void;
  setSelectedTimeIndex: (index: any) => void;
}
