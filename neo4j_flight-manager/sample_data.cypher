// Create Airports

create (sgn:Airport {
    code: 'SGN',
    name: 'Tan Son Nhat International Airport',
    city: 'Ho Chi Minh City', 
    country: 'Vietnam'
})
create (han:Airport {
    code: 'HAN',
    name: 'Noi Bai International Airport',
    city: 'Hanoi', 
    country: 'Vietnam'
})
create (syd:Airport {
    code: 'SYD',
    name: 'Sydney Kingsford Smith Airport',
    city: 'Sydney', 
    country: 'Australia'
})
create (hnd:Airport {
    code: 'HND',
    name: 'Haneda Airport',
    city: 'Tokyo', 
    country: 'Japan'
})

// Create Flights

create (sgn)-[:Flight {
    flightId: "VN001",
    departureTime: datetime("2024-04-01T08:00:00+07:00")
}]->(syd)
create (sgn)-[:Flight {
    flightId: "VN002",
    departureTime: datetime("2024-04-01T08:00:00+07:00")
}]->(hnd)
create (han)-[:Flight {
    flightId: "VN003",
    departureTime: datetime("2024-04-01T06:00:00+07:00")
}]->(sgn)
create (han)-[:Flight {
    flightId: "VN004",
    departureTime: datetime("2024-04-01T08:00:00+07:00")
}]->(hnd)
create (han)-[:Flight {
    flightId: "VN005",
    departureTime: datetime("2024-04-01T09:00:00+07:00")
}]->(syd)
create (hnd)-[:Flight {
    flightId: "JP001",
    departureTime: datetime("2024-04-01T11:00:00+09:00")
}]->(syd)