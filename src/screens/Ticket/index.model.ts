import { useEffect, useState } from "react";
import { TicketViewModel } from "./model";
import * as SecureStore from "expo-secure-store";

const useTicketViewModel = (route: any): TicketViewModel => {
  const [ticketData, setTicketData] = useState<any>(route.params);

  useEffect(() => {
    (async () => {
      try {
        const ticket = await SecureStore.getItemAsync("ticket");
        if (ticket !== undefined && ticket !== null) {
          setTicketData(JSON.parse(ticket));
        }
      } catch (error) {
        console.error("Something went wrong while getting data:", error);
      }
    })();
  }, []);

  if (ticketData !== route.params && route.params != undefined) {
    setTicketData(route.params);
  }

  return {
    ticketData,
  };
};

export default useTicketViewModel;
