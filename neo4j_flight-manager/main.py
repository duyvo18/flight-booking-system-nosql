import json
from neo4j import GraphDatabase, Result, ResultSummary, RoutingControl


URI = "neo4j+s://9ab84bcb.databases.neo4j.io"
AUTH = ("neo4j", "mV3MeQFeHoJjYN2rbL8SHmLghDdOgK8B4dd7LWppDuQ")


class Driver():
    def __init__(self):
        self.driver = None
        
    def start_connection(self):
        self.driver = GraphDatabase.driver(URI, auth=AUTH)
        self.driver.verify_connectivity()
    
    def end_connection(self):
        self.driver.close()
        
    def query_flights(self, departure_code: str, arrival_code: str) -> tuple[list[list[dict]], ResultSummary]:
        query = self._create_query_flight_via_path(departure_code, arrival_code)
        
        records: list[dict]
        result_summary: ResultSummary
        records, result_summary = self.driver.execute_query(
            query, database_='neo4j',
            routing_=RoutingControl.READ,
            result_transformer_=self._result_transformer_flight_via_path,
        )
          
        return records, result_summary

    @staticmethod
    def _create_query_flight_via_path(start_code: str, end_code: str) -> str:
        query = f"match ps=(:Airport{{code:'{start_code}'}})-[fs:Flight*]->(:Airport{{code:'{end_code}'}}) " \
                r"where all(i in range(0, size(fs)-2) where fs[i].departureTime < fs[i+1].departureTime) " \
                r"unwind ps as p " \
                r"return [r in relationships(p) | "\
                r"{departure: properties(startNode(r)), " \
                r"arrival: properties(endNode(r)), " \
                r"flightId: r.flightId, " \
                r"departureTime: r.departureTime " \
                r"}] as flight"
        return query
        
    @staticmethod
    def _result_transformer_flight_via_path(records: Result) -> tuple[list[dict], ResultSummary]:
        res = []
        for record in records:
            data = record.data().get('flight')
            res.append(
                [
                    {
                        'flightId': flight.get('flightId', None),
                        'departureTime': flight.get('departureTime').to_native().isoformat() or None,
                        'departure': flight.get('departure', None),
                        'arrival': flight.get('arrival', None),
                    } for flight in data
                ]
            )            
        return res, records.consume()

    # # WARNING: Deprecated
    # @staticmethod
    # def _create_query_via_connecting_flight(start_code: str, end_code: str) -> str:
    #     query = f"match (:Airport{{code:'{start_code}'}})-[fs:ConnectingFlight]->(:Airport{{code:'{end_code}'}}) " \
    #             r"unwind fs as f " \
    #             r"return properties(f) as flight"
    #     return query

    # # WARNING: Deprecated
    # @staticmethod
    # def _result_transformer_connecting_flight(records: Result) -> list[dict]:
    #     res = []
    #     for record in records:
    #         data = record.data().get('flight')
    #         res.append(
    #             {
    #                 'flightIds': data.get('flightIds', None),
    #                 'departureTime': data.get('departureTime').to_native().isoformat() or None,
    #             }
    #         )            
    #     return res


if __name__ == '__main__':
    driver = Driver()
    
    driver.start_connection()
    
    flights, result_summary = driver.query_flights('HAN', 'SYD')
    
    print(f'> result_available_after: {result_summary.result_available_after}ms')
    print(f'> result_consumed_after: {result_summary.result_consumed_after}ms')
    print(json.dumps(flights, indent=2))
        
    driver.end_connection()
