const flights = [
  {
    "flightId": "VN001",
    "departureAirportCode": "SGN",
    "departureAirportName": "Tan Son Nhat International Airport",
    "departureAirportCity": "Ho Chi Minh City",
    "departureAirportCountry": "Vietnam",
    "arrivalAirportCode": "SYD",
    "arrivalAirportName": "Sydney Kingsford Smith Airport",
    "arrivalAirportCity": "Sydney",
    "arrivalAirportCountry": "Australia",
    "departureTime": "2024-04-01T08:00:00+07:00",
    "departureGate": "A1",
    "airplaneNumber": "VN123",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "1A",
        "seatNumber": "1A",
        "seatType": "Business",
        "status": "Occupied"
      },
      {
        "seatId": "1B",
        "seatNumber": "1B",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "2A",
        "seatNumber": "2A",
        "seatType": "Economy",
        "status": "Occupied"
      }
    ]
  },
  {
    "flightId": "VN002",
    "departureAirportCode": "SGN",
    "departureAirportName": "Tan Son Nhat International Airport",
    "departureAirportCity": "Ho Chi Minh City",
    "departureAirportCountry": "Vietnam",
    "arrivalAirportCode": "HND",
    "arrivalAirportName": "Haneda Airport",
    "arrivalAirportCity": "Tokyo",
    "arrivalAirportCountry": "Japan",
    "departureTime": "2024-04-01T08:00:00+07:00",
    "departureGate": "B2",
    "airplaneNumber": "VN456",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "3A",
        "seatNumber": "3A",
        "seatType": "Business",
        "status": "Occupied"
      },
      {
        "seatId": "3B",
        "seatNumber": "3B",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "4A",
        "seatNumber": "4A",
        "seatType": "Economy",
        "status": "Occupied"
      }
    ]
  },
  {
    "flightId": "VN003",
    "departureAirportCode": "HAN",
    "departureAirportName": "Noi Bai International Airport",
    "departureAirportCity": "Hanoi",
    "departureAirportCountry": "Vietnam",
    "arrivalAirportCode": "SGN",
    "arrivalAirportName": "Tan Son Nhat International Airport",
    "arrivalAirportCity": "Ho Chi Minh City",
    "arrivalAirportCountry": "Vietnam",
    "departureTime": "2024-04-01T06:00:00+07:00",
    "departureGate": "C3",
    "airplaneNumber": "VN789",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "5A",
        "seatNumber": "5A",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "5B",
        "seatNumber": "5B",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "6A",
        "seatNumber": "6A",
        "seatType": "Economy",
        "status": "Available"
      }
    ]
  },
  {
    "flightId": "VN004",
    "departureAirportCode": "HAN",
    "departureAirportName": "Noi Bai International Airport",
    "departureAirportCity": "Hanoi",
    "departureAirportCountry": "Vietnam",
    "arrivalAirportCode": "HND",
    "arrivalAirportName": "Haneda Airport",
    "arrivalAirportCity": "Tokyo",
    "arrivalAirportCountry": "Japan",
    "departureTime": "2024-04-01T08:00:00+07:00",
    "departureGate": "D4",
    "airplaneNumber": "VN234",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "7A",
        "seatNumber": "7A",
        "seatType": "Business",
        "status": "Occupied"
      },
      {
        "seatId": "7B",
        "seatNumber": "7B",
        "seatType": "Business",
        "status": "Occupied"
      },
      {
        "seatId": "8A",
        "seatNumber": "8A",
        "seatType": "Economy",
        "status": "Available"
      }
    ]
  },
  {
    "flightId": "VN005",
    "departureAirportCode": "HAN",
    "departureAirportName": "Noi Bai International Airport",
    "departureAirportCity": "Hanoi",
    "departureAirportCountry": "Vietnam",
    "arrivalAirportCode": "SYD",
    "arrivalAirportName": "Sydney Kingsford Smith Airport",
    "arrivalAirportCity": "Sydney",
    "arrivalAirportCountry": "Australia",
    "departureTime": "2024-04-01T09:00:00+07:00",
    "departureGate": "E5",
    "airplaneNumber": "VN567",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "9A",
        "seatNumber": "9A",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "9B",
        "seatNumber": "9B",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "10A",
        "seatNumber": "10A",
        "seatType": "Economy",
        "status": "Available"
      }
    ]
  },
  {
    "flightId": "JP001",
    "departureAirportCode": "HND",
    "departureAirportName": "Haneda Airport",
    "departureAirportCity": "Tokyo",
    "departureAirportCountry": "Japan",
    "arrivalAirportCode": "SYD",
    "arrivalAirportName": "Sydney Kingsford Smith Airport",
    "arrivalAirportCity": "Sydney",
    "arrivalAirportCountry": "Australia",
    "departureTime": "2024-04-01T11:00:00+09:00",
    "departureGate": "F6",
    "airplaneNumber": "JP789",
    "estimatedTime": "60",
    "seats": [
      {
        "seatId": "11A",
        "seatNumber": "11A",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "11B",
        "seatNumber": "11B",
        "seatType": "Business",
        "status": "Available"
      },
      {
        "seatId": "12A",
        "seatNumber": "12A",
        "seatType": "Economy",
        "status": "Available"
      }
    ]
  }
]

export default flights